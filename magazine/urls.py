from django.urls import path
from . import views
from .views import UserPostAPIView, LikesAPIView, CommentAPIView, BlogDetailAPIView, BlogListAPIView,BlogCreateAPIView


urlpatterns = [
    path('', BlogListAPIView.as_view(), name='home'),
    path('create/',BlogCreateAPIView.as_view()),
    path('<slug:slug>/', BlogDetailAPIView.as_view()),
    path('users/<str:username>/', UserPostAPIView.as_view()),
    path('<slug:slug>/likes/', LikesAPIView.as_view()),
    path('<slug:slug>/comment/', CommentAPIView.as_view()),
]