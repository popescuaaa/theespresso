docker stop $(docker ps -aq)

docker rm mongo redis

docker rmi mongo redis

docker volume prune

docker system prune