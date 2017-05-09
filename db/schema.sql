CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers (
id INTEGER(11) AUTO_INCREMENT NOT NULL,
burger_name VARCHAR(50) NOT NULL,
finished TININT(1),
createdAt VARCHAR(50),
updatedAt VARCHAR(50),
PRIMARY KEY (id)
);