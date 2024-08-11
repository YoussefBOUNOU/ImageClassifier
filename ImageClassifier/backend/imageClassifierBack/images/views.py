from django.shortcuts import render
from rest_framework import viewsets

from .serializers import ImageSerializer
from .models import Image


# Create your views here.

class ImageViewSet(viewsets.ModelViewSet):
    queryset = Image.objects.all().order_by('-uploaded')
    serializer_class = ImageSerializer