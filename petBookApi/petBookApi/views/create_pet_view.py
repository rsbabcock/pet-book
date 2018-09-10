

from rest_framework import generics
from rest_framework import viewsets
from rest_framework import request
from django.contrib.auth.models import User

from petBookApi.models import *
from petBookApi.serializers import *

class CreatePetView(viewsets.ModelViewSet):
    serializer_class = PetSerializer

    def get_queryset(self, *args, **kwargs):
        """
        This view should create a new pet
        for the currently authenticated user.
        """
        if self.request.method == 'POST':
            user = self.request.user
            pet = Pet.objects.create(user=request.user)
            pet.save()
            return pet