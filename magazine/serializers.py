from rest_framework import serializers
from django.contrib.auth.models import User
from . models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']


class BlogPostSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = BlogPost
        fields = ('id','title', 'content', 'date_posted','user', 'likes_count', 'category',)


class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ('id', 'user', 'post')

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = Comment
        fields = ('id', 'user', 'post', 'content', 'date_posted')