from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from .serializers import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from .serializers import MyTokenObtainPairSerializer
from rest_framework import status


class RegisterAPIView(APIView):
    def post(self, request):
        try:
            data = request.data
            serializer = RegisterSerializer(data = data)

            if serializer.is_valid():
                serializer.save()
                return Response({
                'res':'Your account has been created successfully!'
                },status=status.HTTP_201_CREATED)

            return Response({
                    'data': serializer.errors,
                    'message': 'Account not created!'
                },
                status=status.HTTP_400_BAD_REQUEST
                )
                
        except Exception as e:
            return Response({
                    'error': 'Something went wrong'
                },
                status=status.HTTP_400_BAD_REQUEST
                ) 


class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer





