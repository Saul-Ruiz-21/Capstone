from django.contrib import admin
from .models import OrderItem, ShoppingCart

# Register your models here.

admin.site.register(OrderItem)
admin.site.register(ShoppingCart)