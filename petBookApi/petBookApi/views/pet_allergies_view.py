from rest_framework import viewsets
from django.core import serializers

from petBookApi.models import *
from petBookApi.serializers import *

class PetAllergiesViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows Pet Types to be viewed or edited
  """
  queryset = PetAllergy.objects.all()
  serializer_class = PetAllergySerializer