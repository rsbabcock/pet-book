from rest_framework import viewsets
from django.core import serializers

from petBookApi.models import *
from petBookApi.serializers import *

class NoteViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows Allergies to be viewed or edited
  """
  queryset = Note.objects.all()
  serializer_class = NoteSerializer