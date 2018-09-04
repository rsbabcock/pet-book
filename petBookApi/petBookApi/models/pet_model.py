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

    # def __str__(self):
    # return "{} {}".format(self.user.first_name, self.user.last_name)
