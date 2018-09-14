from rest_framework import viewsets
from django.core import serializers
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from petBookApi.models import *
from petBookApi.serializers import *

class GetImageViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Pet Images to be viewed or Uploaded  
    """
    #   parser_classes = (MultiPartParser, FormParser)

    serializer_class = PetImageSerializer
    queryset = PetImage.objects.all()

        