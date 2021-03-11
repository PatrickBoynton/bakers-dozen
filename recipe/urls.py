from django.urls import path

from . import views
app_name = 'recipes'

urlpatterns = [
    path('', views.RecipListView.as_view()),
    path('<int:pk>/', views.RecipeDetailView.as_view()),
    path('edit/<int:pk>/', views.RecipeUpdateView.as_view()),
    path('delete/<int:pk>/', views.RecipeDeleteView.asView())
]
