from django.shortcuts import render
from rest_framework.permissions import AllowAny
from rest_framework.decorators import permission_classes,api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.status import HTTP_200_OK
from .models import Products
from .serializers import ProductSerializer

@api_view(['GET'])
@permission_classes((AllowAny,))
def productList(request):
    product = Products.objects.all()
    serializer = ProductSerializer(product, many=True)
    return Response(serializer.data)