
from django.db import models
from rest_framework import fields


class RTFField(models.TextField):
    def from_db_value(self, value, expression, connection):
        # Return the RTF content as is
        return value

    def to_python(self, value):
        # Return the RTF content as is
        return value

    def get_prep_value(self, value):
        if isinstance(value, str):
            # Strip RTF tags using regular expressions
            import re
            pattern = re.compile(r'\\[a-z0-9]+[^\s]*|[{}]|\\\n?')
            return re.sub(pattern, '', value)
        return value
    
class HTMLField(fields.CharField):
    def to_internal_value(self, data):
        if isinstance(data, str):
            # Treat HTML data as is
            return super().to_internal_value(data)
        return super().to_internal_value(data)
