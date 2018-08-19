DROP DATABASE IF EXISTS datenight_db;

CREATE DATABASE datenight_db;

USE datenight_db;

CREATE TABLE dates
(
	id int(11) NOT NULL AUTO_INCREMENT,
	question1 varchar(255) NOT NULL,
	question2 varchar(255) NOT NULL,
	question3 varchar(255) NOT NULL,
	question4 varchar(255) NOT NULL,
    date_complete BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);

CREATE TABLE users (
	id int(11) NOT NULL AUTO_INCREMENT,
	username varchar(50) NOT NULL,
	user_password varchar(50) NOT NULL,
	PRIMARY KEY (id)
);