# Use an official Python runtime as a parent image
FROM python:3.8

# Upgade Pip
RUN python install --upgrade pip

# Set environment variables
ENV PYTHONUNBUFFERED 1

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY ./backend/requirements.txt /app/

# Install any needed packages specified in requirements.txt
RUN pip install -r requirements.txt

# Copy the rest of the application code into the container
COPY ./backend/ /app/

# Expose a port for the Django app (adjust as needed)
EXPOSE 8000

# Command to run when the container starts
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
