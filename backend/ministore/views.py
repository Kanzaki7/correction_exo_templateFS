from django.shortcuts import render, redirect
from django.http import JsonResponse
from .models import *
from .serializers import *
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

def index(request):
    products = ProductSerializer(Product.objects.all(), many=True)
    return JsonResponse({'data':products.data})
    
@api_view(['POST'])
def createProduct(request):
    if request.method == 'POST':
        products = ProductSerializer(data=request.data)
        if products.is_valid():
            products.save()
            return Response(products.data)
        return Response(products.errors)

def product_details(request, id):
    product = ProductSerializer(Product.objects.get(id = id), many=False)
    context = locals()
    return JsonResponse({'data':product.data})

@api_view(['DELETE'])
def delete_product(request, id):
    product = Product.objects.get(id = id)
    product.delete()
    return Response({'success': 'bien supprimé'})

@api_view(['GET', 'PUT'])
def update_product(request, id):
    try:
        product = Product.objects.get(id=id)
    except Product.DoesNotExist:
        return Response({'message': 'Le produit n\'existe pas'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = ProductSerializer(product)
        return Response(serializer.data)

    if request.method == 'PUT':
        serializer = ProductSerializer(product, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)