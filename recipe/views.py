from . import models
from rest_framework import generics, permissions, serializers

from .serializers import RecipeSerializer


# Create your views here.
class RecipListView(generics.ListCreateAPIView):
    queryset = models.Recipe.objects.all()
    serializer_class = RecipeSerializer
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)


class RecipeDetailView(generics.RetrieveAPIView):
    lookup_field = 'pk'
    queryset = models.Recipe.objects.all()
    serializer_class = RecipeSerializer


class RecipeUpdateView(generics.RetrieveUpdateDestroyAPIView):
    # permission_classes = (permissions.IsAuthenticatedOrReadOnly,)
    lookup_field = 'pk'
    queryset = models.Recipe.objects.all()
    serializer_class = RecipeSerializer

