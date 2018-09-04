from rest_framework import viewsets
from django.core import serializers

from petBookApi.models import *
from petBookApi.serializers import *

class CommandViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows Breeds to be viewed or edited
  """
  queryset = Command.objects.all()
  serializer_class = CommandSerializer