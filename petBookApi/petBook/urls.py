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
from django.conf import settings
from django.conf.urls.static import static
from petBookApi.views import *
from petBookApi.views import PetImageViewSet
from petBookApi.serializers import *

router = routers.DefaultRouter()
router.register(r'users', owner_view.UserViewSet),
router.register(r'owners', owner_view.OwnerViewSet),
router.register(r'pet-types', pet_type_view.PetTypeViewSet),
router.register(r'breeds', breed_view.BreedViewSet),
router.register(r'pets', pet_view.PetViewSet),
router.register(r'pet-image', PetImageViewSet, base_name='pet-image'),
router.register(r'commands', command_view.CommandViewSet),
router.register(r'notes', note_view.NoteViewSet),
router.register(r'follow', follow_view.FollowViewSet),
router.register(r'allergies', allergy_view.AllergyViewSet),
router.register(r'followed-pets', FollowedViewSet, base_name='followed-pets'),
router.register(r'user-pets', UserPetList, base_name='user-pets'),
router.register(r'get-owner', GetOwnerList, base_name='get-owner'),
router.register(r'user-allergies',UserAllergyViewSet, base_name='user-allergies'),
router.register(r'user-commands',UserCommandViewSet, base_name='user-commands'),
router.register(r'pet-allergies', pet_allergies_view.PetAllergiesViewSet),
router.register(r'pet-commands', pet_commands_view.PetCommandViewSet),
router.register(r'pet-notes', pet_note_view.PetNoteViewSet),
router.register(r'create-pet', CreatePetViewSet, base_name='create-pet'),
router.register(r'create-allergy', CreateAllergyViewSet, base_name='create-allergy'),
router.register(r'create-pet-allergy', CreatePetAllergyViewSet, base_name='create-pet-allergy'),
router.register(r'create-command', CreateCommandViewSet, base_name='create-command'),
router.register(r'create-pet-command', CreatePetCommandViewSet, base_name='create-pet-command'),
router.register(r'create-follow', CreateFollowViewSet, base_name='create-follow'),
router.register(r'edit-note', EditNoteViewSet, base_name='edit-note'),

urlpatterns = [
    path('admin/', admin.site.urls),
    url(r'^', include(router.urls)),
    url(r'^register/', register_view.register_user),
    url(r'^api-token-auth/', obtain_auth_token),
    url(r'^api-auth/', include('rest_framework.urls', namespace='rest_framework'))
]

if settings.DEBUG:
  urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)