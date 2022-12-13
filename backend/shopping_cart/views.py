from django.shortcuts import render
from django.shortcuts import get_object_or_404
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from .models import OrderItem, ShoppingCart
from rest_framework import status
from .serializers import OrderItemSerializer, ShoppingCartSerializer
from products.models import Product

@api_view(['GET'])
@permission_classes([AllowAny])
def cart_list(request, pk):
    products = Product.objects.get(id=pk)
    if request.method == 'GET':
        items = OrderItem.objects.all().filter(products=products)
        serializer = OrderItemSerializer(items, many=True)
        return Response(serializer.data)

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def user_cart(request):
    if request.method == 'POST':
        serializer = ShoppingCartSerializer(data=request.data)
        if serializer.is_valid(raise_exception=True):
            serializer.save(user=request.user)
            return Response(serializer.data, status = status.HTTP_201_CREATED)

@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_cart(request, cart_id):
    cart = get_object_or_404(ShoppingCart, id=cart_id)
    if request.method == 'PUT':
        serializer = ShoppingCartSerializer(cart, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)
