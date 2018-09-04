from django.contrib.auth.models import User
from rest_framework import viewsets
from django.core import serializers

from api.models import *
from api.serializers import *

class OwnerViewSet(viewsets.ModelViewSet):
  """
  API endpoint that allows Owners to be viewed or edited
  """
  queryset = Owner.objects.all()
  serializer_class = OwnerSerializer

class UserViewSet(viewsets.ModelViewSet):
  queryset = User.objects.all()
  serializer_class = UserSerializer
