from rest_framework import viewsets
from django.core import serializers

from petBookApi.models import *
from petBookApi.serializers import *

class AllergyViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows Allergies to be viewed or edited
  """
  queryset = Allergy.objects.all()
  serializer_class = AllergySerializer