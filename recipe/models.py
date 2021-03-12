from django.db import models


# Create your models here.
class Recipe(models.Model):
    title = models.CharField(max_length=50)
    name = models.CharField(max_length=100)
    recipe_type = models.CharField(max_length=20, null=True, blank=True)
    is_public = models.BooleanField(null=True, blank=True)
    yields = models.IntegerField(null=True, blank=True)

    def __str__(self):
        return self.title
