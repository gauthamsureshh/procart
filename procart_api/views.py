from django.shortcuts import get_object_or_404
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

#api to add items to cart and if item already in cart, increament the qty by one
@api_view(['POST'])
@permission_classes((AllowAny,))
def addToCart(request):
    product_id = request.data.get('product')
    quantity = request.data.get('quantity')
    product = get_object_or_404(Products, id = product_id)
    
    cart_item, created = CartItem.objects.get_or_create(product = product)
    if not created:
        cart_item.quantity += int(quantity)
        cart_item.save()
    else:
        cart_item.quantity = quantity
        cart_item.save()
    
    serializer = CartItemSerializer(cart_item)
    return Response(serializer.data, status=status.HTTP_201_CREATED)

#api to view all the items in cart
@api_view(['GET'])
@permission_classes((AllowAny,))
def cartItems(request):
    cart_item = CartItem.objects.all()
    serializer = CartItemSerializer(cart_item, many= True)
    return Response(serializer.data)

#api to remove an item from the cart
@api_view(['DELETE'])
def removeCartItem(request, productid):
    try:
        cart_item = get_object_or_404(CartItem, id=productid)
        cart_item.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#api to update the quantity of items added to cart
@api_view(['PUT'])
@permission_classes((AllowAny,))
def updateCartItem(request, productid):
    cart_item = get_object_or_404(CartItem, id = productid)
    quantity = request.data.get('quantity')
    cart_item.quantity = quantity
    cart_item.save()
    
    serializer = CartItemSerializer(cart_item)
    return Response(serializer.data)

