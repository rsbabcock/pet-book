from rest_framework import viewsets
from django.core import serializers

from petBookApi.models import *
from petBookApi.serializers import *
from rest_framework import generics

class PetList(generics.ListAPIView):
  """
  API endpoint that allows Breeds to be viewed or edited
  """
  serializer_class = PetSerializer
    
  def get_queryset(self):
        """
        This view should return a list of all the purchases
        for the currently authenticated user.
        """
        user = self.request.user
        return Pet.objects.filter(owner=user)

    