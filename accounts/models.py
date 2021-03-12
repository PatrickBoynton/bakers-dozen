from django.db import models
from django.contrib.auth.models import AbstractUser
from django.conf import settings
from rest_framework import serializers
from rest_auth.models import TokenModel


# Create your models here.
class CustomUser(AbstractUser):
    pass


class Profile(models.Model):
    user = models.OneToOneField(settings.AUTH_USER_MODEL,
                                on_delete=models.CASCADE)
    profile_picture = models.ImageField(upload_to='profiles', null=True)

    def __str__(self):
        return self.user.userame


class TokenSerializers(serializers.ModelSerializer):
    username = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = TokenModel
        fields = ('key', 'username')
