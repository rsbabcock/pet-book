

from rest_framework import generics
from rest_framework import viewsets
from rest_framework import request
from rest_framework import mixins
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User

from petBookApi.models import *
from petBookApi.serializers import *

@api_view(['POST'])
def add_pet(request):
    if request.method == 'POST':
        user = self.request.user
        serializer = PetSerializer(user=user, data=request.data)
        if serializer.is_valid():
                serializer.save()
                return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

# class CreatePetViewSet(mixins.CreateModelMixin, generics.GenericAPIView):
#     serializer_class = PetSerializer
#     queryset = Pet.objects.all()

#     def post(self, *args, **kwargs):
#         print(self.request.user)
#         """
#         This view should create a new pet
#         for the currently authenticated user.
#         """
#         user = self.request.user
#         return Pet.objects.create(request, user=user)
