# tp-docker

Structure : 

 - sql : dossier contenant la partie database du projet 

 - webapp : dossier contenant la partie application du projet

 - / : dossier contenant l'ensemble du projet ainsi que les docker-compose.yml pour le docker compose et pour le swarm 


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

# Partie 3

Créer un registry privé puis 

Faire ceci dans le dossier webapp :

    - docker build -t webapp:latest . 
    - docker tag webapp:latest localhost:5001/webapp:latest
    - docker push localhost:5001/webapp:latest

Faire ceci dans le dossier sql :

    - docker build -t mydatabase:latest . 
    - docker tag mydatabase:latest localhost:5001/mydatabase:latest
    - docker push localhost:5001/mydatabase:latest

Ensuite aller dans le dossier initial : 

    - docker swarm init
    - docker stack deploy -c swarm-compose.yml webapp-stack  

On peut vérifier les réplicas en faisant la commande : 

    - docker stack services webapp-stack
