FROM python:3.11

# Run commands from /app directory inside container
WORKDIR /app

# Copy requirements from local to docker image
COPY requirements.txt /app

# Install the dependencies in the docker image
RUN pip install -r requirements.txt --no-cache-dir

# Copy everything from the current dir to the image
COPY . .