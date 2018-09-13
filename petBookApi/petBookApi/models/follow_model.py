from django.db import models
from django.contrib.auth.models import User

class Follow(models.Model):
    """Following
    
    This class represents the Pet that are followed join table resource in the database.

    Each Model in the join table needs to have a reference as a foreign key
    This model is needed to have a join table, but you do not need to reference it anywhere else in this project
    """

    pets = models.ForeignKey('Pet', on_delete=models.CASCADE)
    follower = models.ForeignKey('Owner', on_delete=models.CASCADE)
