### Schema

CREATE DATABASE cats_db;

USE cats_db;

CREATE TABLE cats
(
	id INT NOT NULL AUTO_INCREMENT,
    cat_name VARCHAR(255) NOT NULL,
	pet_or_not BOOLEAN DEFAULT false NOT NULL,
	PRIMARY KEY (id)
);