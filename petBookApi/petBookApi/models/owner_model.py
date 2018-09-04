from django.db import models
from django.contrib.auth.models import User

class Owner(models.Model):
  user = models.OneToOneField(User, on_delete=models.CASCADE)
  created = models.DateTimeField(auto_now_add=True)
  street_address = models.CharField(max_length=100)
  city = models.CharField(max_length=50)
  state = models.CharField(max_length=2)
  zipcode = models.CharField(max_length=10)
  phone = models.CharField(max_length=15)

  def __str__(self):
    return "{} {}".format(self.user.first_name, self.user.last_name)

  class Meta:
    ordering = ('created',)
