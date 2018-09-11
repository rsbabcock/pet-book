from rest_framework import viewsets
from rest_framework import mixins
from rest_framework.decorators import api_view
from rest_framework import status
from rest_framework.response import Response
from django.contrib.auth.models import User

from petBookApi.models import *
from petBookApi.serializers import *


class CreateAllergyViewSet(viewsets.ModelViewSet):
    serializer_class = AllergySerializer
    queryset = Allergy.objects.all()    

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)
