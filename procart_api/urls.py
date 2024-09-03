from django.urls import path
from . import views

urlpatterns = [
    path('productlist',views.productList,name='productlist')
]