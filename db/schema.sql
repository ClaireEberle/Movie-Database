DROP DATABASE IF EXISTS movieData_db;
CREATE DATABASE movieData_db;

USE movieData_db

CREATE TABLE movies (
    id INT NOT NULL PRIMARY KEY,
    movie_name VARCHAR(100) NOT NULL
);


CREATE TABLE reviews (
    id INT NOT NULL PRIMARY KEY,
    movie_id INT,
    review TEXT,
    FOREIGN KEY (movie_id)
    REFERENCES movies(id)
    ON DELETE SET NULL
);