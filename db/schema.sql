DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers(
	id INT AUTO_INCREMENT PRIMARY KEY,
	burger_name VARCHAR(120) NOT NULL,
	devoured BOOL default FALSE,
	date TIMESTAMP DEFAULT  CURRENT_TIMESTAMP
);

drop table burgers;