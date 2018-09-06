from django.db import models
from django.contrib.auth.models import User
from petBookApi.models import *

class Pet(models.Model):
    '''
    Model to represents pets and their information through join tables
    '''
    
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    pet_type = models.ForeignKey('PetType', on_delete=models.CASCADE)
    breed = models.ForeignKey('Breed', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='%m/%d')
    GENDER = (
            ('M', 'Male'),
            ('F', 'Female')
        )
    gender = models.CharField(max_length=1, choices=GENDER)
    nick_name = models.CharField(max_length=100)
    birthday = models.CharField(max_length=100)
    houdini = models.BooleanField(default=True)
    food_quirks = models.CharField(max_length=300)
    crate_trained = models.BooleanField(default=True)
    crate_quirks = models.CharField(max_length=300)
    walking_quirks = models.CharField(max_length=300)
    potty_needs = models.CharField(max_length=300)
    aggression_notes = models.CharField(max_length=300)
    eating_times = models.CharField(max_length=300)
    bed_time = models.CharField(max_length=300)
    fav_toy = models.CharField(max_length=300)
    deceased = models.BooleanField(default=False)
    #The following line of code creates a relationship between pets and allergies
    #Need to specify 'through' kwarg to reference the join table model
    #This line is needed to embed the allergies information in the Orders table
    allergy = models.ManyToManyField('Allergy', through='PetAllergy')
    command = models.ManyToManyField('Command', through='PetCommand')
    note = models.ManyToManyField('Note', through='PetNote')


    def __str__(self):
        return "{} {}".format(self.name, self.image)
