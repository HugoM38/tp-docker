CREATE DATABASE IF NOT EXISTS mydatabase;
USE mydatabase;

CREATE TABLE articles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    titre VARCHAR(255) NOT NULL,
    contenu TEXT,
    date_publication DATE
);

INSERT INTO articles (titre, contenu, date_publication) VALUES 
('Mon Premier Article', 'Ceci est le contenu de mon premier article.', '2024-02-08'),
('Mon Deuxième Article', 'Un peu plus de contenu pour un deuxième article.', '2024-02-09'),
('Mon Troisième Article', 'Le contenu continue avec un troisième article.', '2024-02-10');

