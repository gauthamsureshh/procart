from django.urls import path
from . import views

urlpatterns = [
    path('productlist',views.productList,name='productlist'),
    path('productdetails/<int:productid>/',views.productDetails,name='productdetails'),
    path('addtocart/',views.addToCart,name='addtocart'),
    path('cartitems',views.cartItems,name='cartitems'),
    path('cartupdate/<int:productid>/',views.updateCartItem,name='updatecartitem'),
    path('cartremove/<int:productid>/',views.removeCartItem,name='removecartitem')
]