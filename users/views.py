from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, ChangePasswordSerializer, PasswordResetEmailSerializer, PasswordResetSerializer, ProfileSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import MyTokenObtainPairSerializer
from rest_framework import status
from rest_framework import permissions
from rest_framework_simplejwt.authentication import JWTAuthentication
from .models import Profile
from django.shortcuts import get_object_or_404
from rest_framework.settings import api_settings
from django.contrib.auth import authenticate



class RegisterAPIView(APIView):
    permission_classes = [permissions.AllowAny,]
    authentication_classes = [JWTAuthentication]
    def post(self, request):
        try:
            data = request.data
            serializer = RegisterSerializer(data=data)

            if serializer.is_valid():
                user = serializer.save()

                refresh = RefreshToken.for_user(user)
                tokens = {
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                }
                serialized_user = RegisterSerializer(user)
                return Response({
                    'tokens': tokens,
                    'message': 'Your account has been created successfully!',
                    'user':serialized_user.data
                    }, status=status.HTTP_201_CREATED)

            return Response({
                'data': serializer.errors,
                'message': 'Account not created!'
                }, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({
                'error': str(e)
            }, status=status.HTTP_400_BAD_REQUEST)

class ProfileAPIView(APIView):
    permission_classes = [permissions.AllowAny,]
    authentication_classes = [JWTAuthentication]
    def get(self, request, username):
        profile = get_object_or_404(Profile, user__username=username)
        serializer = ProfileSerializer(profile)
        return Response(serializer.data)

    def put(self, request, username):
        if request.user.username != username:
            return Response({'detail': 'You do not have permission to edit this profile.'}, status=status.HTTP_403_FORBIDDEN)


        profile = get_object_or_404(Profile, user__username=username)
        serializer = ProfileSerializer(profile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
class CustomLoginAPIView(APIView):
    permission_classes = [permissions.AllowAny,]
    authentication_classes = [JWTAuthentication]
    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')

        # Manually check the user's credentials
        user = authenticate(request, username=username, password=password)
        if user:
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)
            user_serializer = RegisterSerializer(user)
            return Response({
                'access_token': access_token,
                'refresh_token': str(refresh),
                'message': 'Login successful',
                'username': user_serializer.data['username'],
            })
        else:
            return Response({'error': 'Invalid credentials'})
        
class LogoutAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    authentication_classes = [JWTAuthentication]

    def post(self, request):
        try:
            refresh_token = request.data['refresh_token']
            token = RefreshToken(refresh_token)
            token.blacklist()

            return Response({'message': 'Logout successful'})
        except Exception as e:
            return Response({'error': str(e)})
        

class ChangePasswordAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def post(self, request):
        data = request.data
        serializer = ChangePasswordSerializer(data=data, context = {
            'user':request.user
        })
        if serializer.is_valid():
            return Response({'res':'Password changed successfully!'}, status= status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PasswordResetEmailAPIView(APIView):
    permission_classes = [permissions.AllowAny]
    def post(self, request):
        data = request.data
        serializer = PasswordResetEmailSerializer(data=data)
        if serializer.is_valid():
            return Response({'res':'Password Reset link has been sent to your Email id'}, status= status.HTTP_200_OK)
        
class PasswordResetAPIView(APIView):
  def post(self, request, uid, token, format=None):
    serializer = PasswordResetSerializer(data=request.data, context={'uid':uid, 'token':token})
    if serializer.is_valid():
        return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer





