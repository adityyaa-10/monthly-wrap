from django.contrib.auth.models import User
from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework import permissions
from .serializers import *


class BlogListAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, *args, **kwargs):
        posts = BlogPost.objects.all()
        serializer = BlogPostSerializer(posts, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)
        
class BlogCreateAPIView(APIView):
    def post(self, request):
        serializer = BlogPostSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class BlogDetailAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, slug):
        try:
            return BlogPost.objects.get(slug = slug)
        except BlogPost.DoesNotExist:
            return None

    def get(self, request, slug, *args, **kwargs):
        post = self.get_object(slug)
        if post is None:
            return Response({'error': 'Post not found'}, status = status.HTTP_404_NOT_FOUND)
        serializer = BlogPostSerializer(post)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def put(self, request, slug, *args, **kwargs):
        post = self.get_object(slug)
        if post is None:
            return Response({'error': 'Post not found'}, status = status.HTTP_404_NOT_FOUND)
        data = {
            'user': request.user.id,
            'title': request.data.get('title'),
            'content': request.data.get('content'),
            'likes_count': post.likes_count
        }
        serializer = BlogPostSerializer(post, data = data, partial = True)
        if serializer.is_valid():
            if post.user.id == request.user.id:
                serializer.save()
                return Response(serializer.data, status = status.HTTP_200_OK)
            return Response({"error": "You are not authorized to edit this post"}, status = status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)

    def delete(self, request, slug, *args, **kwargs):
        post = self.get_object(slug)
        if post is None:
            return Response({'error': 'Post not found'}, status = status.HTTP_404_NOT_FOUND)
        if post.user.id == request.user.id:
            post.delete()
            return Response({"res": "Object deleted!"}, status = status.HTTP_200_OK)
        return Response({"error": "You are not authorized to delete this post"}, status = status.HTTP_401_UNAUTHORIZED)

class UserPostAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get(self, request, username, *args, **kwargs):
        user = User.objects.filter(username = username).first()
        if user is None:
            return Response({'error': 'User not found'}, status = status.HTTP_404_NOT_FOUND)
        posts = BlogPost.objects.filter(user = user)
        serializer = BlogPostSerializer(posts, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)
    
class LikesAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    def get_object(self, slug):
        try:
            return BlogPost.objects.get(slug = slug)
        except BlogPost.DoesNotExist:
            return None

    def get(self, request, slug):
        likes = Likes.objects.all()
        serializer = LikesSerializer(likes, many=True)
        return Response(serializer.data)
    
    def post(self, request, slug, *args, **kwargs):
        blog = self.get_object(slug)
        if blog is None:
            return Response({'error': 'Post not found'}, status = status.HTTP_404_NOT_FOUND)
        
        liked_by = blog.likes_count.all().values_list('user', flat = True)
        if request.user.id in liked_by:
            blog.likes_count -= 1
            blog.likes_count.filter(user = request.user).delete()
        else:
            blog.likes_count += 1
            liked_by = Likes(user = request.user, blog = blog)
            liked_by.save()
        blog.save()
        serializer = BlogPostSerializer(blog)
        return Response(serializer.data, status = status.HTTP_200_OK)


class CommentAPIView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self, slug):
        try:
            return BlogPost.objects.get(slug = slug)
        except BlogPost.DoesNotExist:
            return None
    
    def get(self, request, slug, *args, **kwargs):
        post = self.get_object(slug)
        if post is None:
            return Response({'error': 'Post not found'}, status = status.HTTP_404_NOT_FOUND)
        comments = Comment.objects.filter(post = post)
        serializer = CommentSerializer(comments, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def post(self, request, slug, *args, **kwargs):
        post = self.get_object(slug)
        if post is None:
            return Response({'error': 'Post not found'}, status = status.HTTP_404_NOT_FOUND)
        data = {
            'user': request.user.id,
            'post': post.id,
            'content': request.data.get('content')
        }
        serializer = CommentSerializer(data = data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status = status.HTTP_201_CREATED)
        return Response(serializer.errors, status = status.HTTP_400_BAD_REQUEST)