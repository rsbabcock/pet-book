"""petBook URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from django.conf.urls import url, include
from rest_framework import routers
from rest_framework.authtoken.views import obtain_auth_token
from petBookApi.views import *

router = routers.DefaultRouter()
router.register(r'users', owner_view.UserViewSet),
router.register(r'owners', owner_view.OwnerViewSet),
router.register(r'pet-types', pet_type_view.PetTypeViewSet),
router.register(r'breeds', breed_view.BreedViewSet),
router.register(r'pets', pet_view.PetViewSet),
router.register(r'allergies', allergy_view.AllergyViewSet),
router.register(r'commands', command_view.CommandViewSet),

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^register/', register_view.register_user),
    url(r'^api-token-auth/', obtain_auth_token),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

