from django.db import models

class Pet(models.Model):
    '''
    Model to represents pets and their information 
    '''
    user = models.ForeignKey('Owner', on_delete=models.CASCADE)
    pet_type = models.ForeignKey('PetType', on_delete=models.CASCADE)
    breed = models.ForeignKey('Breed', on_delete=models.CASCADE)
    name = models.CharField(max_length=100)
    image = models.ImageField(upload_to='%m/%d')
    nick_name = models.CharField(max_length=100)
    birthday = models.CharField(max_length=100)
    houdini = models.BooleanField(initial=True)
    food_quirks = models.CharField(max_length=300)
    crate_trained = models.BooleanField(initial=True)
    crate_quirks = models.CharField(max_length=300)
    walking_quirks = models.CharField(max_length=300)
    potty_needs = models.CharField(max_length=300)
    aggression_notes = models.CharField(max_length=300)
    eating_times = models.CharField(max_length=300)
    bed_time = models.CharField(max_length=300)
    fav_toy = models.CharField(max_length=300)
    deceased = models.BooleanField(initial=False)


    def __str__(self):
    return "{} {}".format(self.name, self.image)



    # def __str__(self):
    # return "{} {}".format(self.user.first_name, self.user.last_name)
