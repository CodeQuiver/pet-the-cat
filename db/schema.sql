### Schema

CREATE DATABASE cats_db;

USE cats_db;

CREATE TABLE cats
(
	id INT AUTO_INCREMENT NOT NULL,
    cat_name VARCHAR(255) NOT NULL,
	pet_or_not BOOLEAN DEFAULT false NOT NULL,
	createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP NOT NULL,
	PRIMARY KEY (id)
);

-- added timestamp field for JawsDB on Heroku