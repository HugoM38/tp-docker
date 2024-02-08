# tp-docker

# Partie 1

Créer un réseau : docker network create tp-docker 

# Dans le dossier sql :

Build l'image database : docker build -t mydatabase .   

Lancer la database : docker run --name mydatabase -e MYSQL_ROOT_PASSWORD=password --network tp-docker -d mydatabase

# Dans le dossier webapp : 

Build l'image de la web app :  docker build -t mywebapp .   

Lancer l'application web avec : docker run --name mywebapp -p 3000:3000 -e DATABASE_HOST=mydatabase -e DATABASE_USER=root -e DATABASE_PASSWORD=password -e DATABASE_NAME=mydatabase --network tp-docker mywebapp

------------------------------

# Partie 2

Lancer le docker compose : docker-compose up --build

------------------------------

