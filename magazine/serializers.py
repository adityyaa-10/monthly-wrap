from rest_framework import serializers
from django.contrib.auth.models import User
from . models import *

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'username']

class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Image
        fields = ('id', 'image',)

class CommentSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.username')
    class Meta:
        model = Comment
        fields = ('id', 'user', 'post', 'content', 'date_posted')


class BlogPostSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source = 'user.username')
    images = ImageSerializer(many=True, read_only=True, required = False)
    comments = CommentSerializer(many=True, read_only=True)
    class Meta:
        model = BlogPost
        fields = ('id','title', 'content', 'date_posted','user', 'likes_count', 'category','cover_image','images','comments')


class LikesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Likes
        fields = ('id', 'user', 'post')




class ContactSerializer(serializers.ModelSerializer):
    user = serializers.CharField(source='user.username')
    class Meta:
        model = Contact
        fields = ('user','subject', 'message', 'date_posted')