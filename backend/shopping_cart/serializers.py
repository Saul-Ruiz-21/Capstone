from .models import OrderItem, ShoppingCart
from rest_framework import serializers

class OrderItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = OrderItem
        fields = ['item']
        depth = 1

class ShoppingCartSerializer(serializers.ModelSerializer):
    class Meta:
        model = ShoppingCart
        fields = ['user', 'ordered', 'items', 'start_date', 'ordered_date']
        depth = 1