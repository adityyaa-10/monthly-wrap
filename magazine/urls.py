from django.urls import path
from .views import (
    UserPostAPIView, 
    LikesAPIView,
    CommentAPIView, 
    BlogDetailAPIView, 
    BlogListAPIView,
    BlogCreateAPIView,
    CategoryBlogView,
    ContactAPIView
)


urlpatterns = [
    path('', BlogListAPIView.as_view(), name='home'),
    path('create/',BlogCreateAPIView.as_view(), name='create'),
    path('<slug:slug>/', BlogDetailAPIView.as_view()),
    path('users/<str:username>/', UserPostAPIView.as_view()),
    path('<slug:slug>/likes/', LikesAPIView.as_view()),
    path('<slug:slug>/comment/', CommentAPIView.as_view()),
    path('blogs/category/<str:category>/', CategoryBlogView.as_view(), name='category-blogs'),
    path('query/contactus/', ContactAPIView.as_view(), name = 'contactUs'),
]