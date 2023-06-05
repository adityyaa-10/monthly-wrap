from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import RegisterSerializer, LoginSerializer, ChangePasswordSerializer, PasswordResetEmailSerializer, PasswordResetSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework_simplejwt.tokens import RefreshToken
from .serializers import MyTokenObtainPairSerializer
from rest_framework import status
from django.contrib.auth import authenticate
from rest_framework import permissions



class RegisterAPIView(APIView):
    permission_classes = [permissions.AllowAny,]
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

                return Response({
                    'tokens': tokens,
                    'message': 'Your account has been created successfully!'
                    }, status=status.HTTP_201_CREATED)

            return Response({
                'data': serializer.errors,
                'message': 'Account not created!'
                }, status=status.HTTP_400_BAD_REQUEST)

        except Exception as e:
            return Response({
                'error': 'Something went wrong'
            }, status=status.HTTP_400_BAD_REQUEST)

        
class LoginAPIView(APIView):
    permission_classes = [permissions.AllowAny,]

    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            username = serializer.data.get('username')
            password = serializer.data.get('password')
            user = authenticate(username=username, password=password)
            if user:
                refresh = RefreshToken.for_user(user)
                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                    'res': 'You are successfully logged in!'
                }, status=status.HTTP_200_OK)
            else:
                return Response({'error': 'Invalid credentials.'}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

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
    serializer.is_valid(raise_exception=True)
    return Response({'msg':'Password Reset Successfully'}, status=status.HTTP_200_OK)


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer





