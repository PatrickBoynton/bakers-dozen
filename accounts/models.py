from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings


# Create your models here.
class CustomUser(AbstractUser):
    pass


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profiles', null=True)
    about_me = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.user.userame
