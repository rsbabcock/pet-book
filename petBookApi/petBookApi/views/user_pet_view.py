

from rest_framework import generics
from rest_framework import viewsets
from django.contrib.auth.models import User

from petBookApi.models import *
from petBookApi.serializers import *

class UserPetList(viewsets.ModelViewSet):
    serializer_class = PetSerializer

    def get_queryset(self, *args, **kwargs):
        """
        This view should return a list of all the pets
        for the currently authenticated user.
        """
        user = self.request.user
        queryset = Pet.objects.filter(user=user)
        return queryset