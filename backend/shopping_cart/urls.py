from django.urls import path, include
from shopping_cart import views


urlpatterns = [
    path('', views.user_cart),
    path('<str:products>/', views.cart_list),
    path('<int:cart_id>/edit/', views.edit_cart),
]