DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;
\c games_dev

DROP TABLE IF EXISTS games;

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    appid INT,
    name TEXT NOT NULL,
    release_date VARCHAR(15),
    english INT,
    developer TEXT,
    publisher TEXT,
    platforms TEXT,
    required_age INT,
    categories TEXT,
    genres TEXT,
    steamspy_tags TEXT,
    achievements INT,
    positive_ratings INT,
    negative_ratings INT,
    average_playtime INT,
    median_playtime INT,
    owners TEXT,
    price TEXT

);


