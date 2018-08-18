CREATE DATABASE datenight_db;

USE datenight_db;

CREATE TABLE dates
(
	id int NOT NULL AUTO_INCREMENT,
	date_name varchar(255) NOT NULL,
    save_date BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);