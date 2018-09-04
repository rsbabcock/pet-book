from rest_framework import viewsets
from django.core import serializers

from petBookApi.models import *
from petBookApi.serializers import *

class BreedViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows Breeds to be viewed or edited
  """
  queryset = Breed.objects.all()
  serializer_class = BreedSerializer