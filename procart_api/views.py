from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes,api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.status import HTTP_200_OK
from .models import Products,CartItem
from .serializers import ProductSerializer,CartItemSerializer


#api to return all products
@api_view(['GET'])
@permission_classes((AllowAny,))
def productList(request):
    product = Products.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)

#api to return details of the selected product
@api_view(['GET'])
@permission_classes((AllowAny,))
def productDetails(request,productid):
    product = Products.objects.filter(id = productid)
    serializer = ProductSerializer(product, many =True)
    return Response(serializer.data)

#api to add items to cart
@api_view(['POST'])
@permission_classes((AllowAny,))
def addToCart(request):
    if request.method == 'POST':
        serializer = CartItemSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save()
            return Response('Item Added to Cart',status=status.HTTP_201_CREATED)
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)


#api to view all the items in cart
@api_view(['GET'])
@permission_classes((AllowAny,))
def cartItems(request):
    cart_item = CartItem.objects.all()
    serializer = CartItemSerializer(cart_item, many= True)
    return Response(serializer.data)