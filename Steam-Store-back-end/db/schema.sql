DROP DATABASE IF EXISTS games_dev;
CREATE DATABASE games_dev;
\c games_dev

DROP TABLE IF EXISTS games;


--Test GIt
-- CREATE TABLE games (
--     id SERIAL PRIMARY KEY,
--     appid INT,
--     name TEXT NOT NULL,
--     release_date VARCHAR(10),
--     english INT,
--     developer TEXT,
--     publisher TEXT,
--     platforms TEXT,
--     required_age INT,
--     categories TEXT,
--     genres TEXT,
--     steamspy_tags TEXT,
--     achievements INT,
--     positive_ratings INT,
--     negative_ratings INT,
--     average_playtime INT,
--     median_playtime INT,
--     owners TEXT,
--     price TEXT

-- );

CREATE TABLE games (
    id SERIAL PRIMARY KEY,
    rank INT,
    name TEXT,
    platform TEXT,
    year TEXT,
    genre TEXT,
    publisher TEXT,
    na_sales DECIMAL,
    eu_sales DECIMAL,
    jp_sales DECIMAL,
    other_sales DECIMAL,
    global_sales DECIMAL
);

