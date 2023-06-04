from django.urls import path
from .views import MyTokenObtainPairView, RegisterAPIView, LoginAPIView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/',RegisterAPIView.as_view()),
    path('login/', LoginAPIView.as_view()),
    path('token/', MyTokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]