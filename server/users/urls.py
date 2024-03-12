from django.urls import path
from .views import MyTokenObtainPairView, RegisterAPIView, CustomLoginAPIView, ChangePasswordAPIView, PasswordResetEmailAPIView, PasswordResetAPIView, ProfileAPIView, LogoutAPIView, ProjectListCreateView, ProjectRetrieveUpdateDeleteView, UserProjectView
from rest_framework_simplejwt.views import TokenRefreshView

urlpatterns = [
    path('register/',RegisterAPIView.as_view(), name = 'register'),
    path('login/', CustomLoginAPIView.as_view(), name='login'),
    path('logout/', LogoutAPIView.as_view(), name='logout'),
    path('changepassword/',ChangePasswordAPIView.as_view(), name='change-password'),
    path('send-reset-password-email/', PasswordResetEmailAPIView.as_view(), name='reset-password-email'),
    path('reset-password/<str:uid>/<str:token>/', PasswordResetAPIView.as_view(), name='reset-password'),
    path('profiles/<str:username>/', ProfileAPIView.as_view(), name='profile'),
    path('projects/', ProjectListCreateView.as_view(), name='project-list'),
    path('projects/<int:pk>/', ProjectRetrieveUpdateDeleteView.as_view(), name='project-detail'),
    path('profile/projects/<str:username>/', UserProjectView.as_view(), name='project-list'),

    path('token/', MyTokenObtainPairView.as_view()),
    path('token/refresh/', TokenRefreshView.as_view()),
]