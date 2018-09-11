from rest_framework import viewsets
from django.core import serializers

from petBookApi.models import *
from petBookApi.serializers import *

class PetCommandViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows Pet Types to be viewed or edited
  """
  queryset = PetCommand.objects.all()
  serializer_class = PetCommandSerializer