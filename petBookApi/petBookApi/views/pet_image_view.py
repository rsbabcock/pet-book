from rest_framework import viewsets
from django.core import serializers
from rest_framework.views import APIView
from rest_framework.parsers import MultiPartParser, FormParser
from rest_framework.response import Response
from rest_framework import status

from petBookApi.models import *
from petBookApi.serializers import *

class PetImageViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows Pet Images to be viewed or Uploaded  
  """
#   parser_classes = (MultiPartParser, FormParser)

  def perform_create(self, serializer):
  
    serializer = PetImageSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)
    else:
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)