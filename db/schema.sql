CREATE DATABASE datenight_db;

USE datenight_db;

CREATE TABLE dates
(
	id int(11) NOT NULL AUTO_INCREMENT,
	date_name varchar(255) NOT NULL,
    save_date BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE users (
	id int(11) NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	user_password varchar(50) NOT NULL,
	PRIMARY KEY (id)
);