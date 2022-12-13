from django.db import models
from django.conf import settings
from products.models import Product
from authentication.models import User

# Create your models here.

class OrderItem(models.Model):
    item = models.ForeignKey(Product, on_delete=models.CASCADE)

class ShoppingCart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    ordered = models.BooleanField(default=False)
    items = models.ManyToManyField(OrderItem)
    start_date = models.DateTimeField(auto_now_add=True)
    ordered_date = models.DateTimeField()

    def __str__(self):
        return self.user.username