CREATE DATABASE datenight_db;

USE datenight_db;


CREATE TABLE dates
(
    id int(11) NOT NULL AUTO_INCREMENT,
    username varchar(255) NOT NULL,
    password varchar(255) NOT NULL,
    uid varchar (255) NOT NULL, 
    answer1 varchar(255) NULL,
    answer2 varchar(255) NULL,
    answer3 varchar(255)  NULL,
    answer4 varchar(255)  NULL,
    answer5 varchar(255)  NULL,
    answer6 varchar(255)  NULL,
    answer7 varchar(255)  NULL,
    answer8 varchar(255)  NULL,
    PRIMARY KEY (id)
);


-- INSERT INTO dates(username, password) VALUES ('joe', 'jabc123');
-- -- 1, 'joe', 'jabc123', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL


-- SELECT * FROM dates WHERE username='joe'; -- produce a list of rows that match the query

UPDATE dates SET Answer1="Q1A1" WHERE id=" + uid

