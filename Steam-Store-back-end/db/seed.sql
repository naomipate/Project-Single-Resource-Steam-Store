
\c games_dev;

-- COPY NEWTABLE FROM :'localpath' csv HEADER;
--test

-- COPY games (appid,name,release_date,english,developer,publisher,platforms,required_age,categories,genres,steamspy_tags,achievements,positive_ratings,negative_ratings,average_playtime,median_playtime,owners,price)
-- FROM '/Users/akirawatson-brown/Desktop/PursuitGitLessons/Module4/ProjectsM4/SingleResourceProject/Project-Single-Resource-Steam-Store/Steam-Store-back-end/db/steam.csv' 
-- DELIMITER ',' 
-- CSV HEADER;

COPY games (rank,name,platform,year,genre,publisher,na_sales,eu_sales,jp_sales,other_sales,global_sales) FROM '/Users/akirawatson-brown/Desktop/PursuitGitLessons/Module4/ProjectsM4/SingleResourceProject/Project-Single-Resource-Steam-Store/Steam-Store-back-end/db/vgsales.csv'
DELIMITER ',' 
CSV HEADER;


SELECT * FROM games;

/*
SELECT * FROM games WHERE id BETWEEN 10 AND 20;

This is a test query to isolate data according to what id it is.
With pagination we need to only display a certain amount of data, and with this query we need to dynamically pass down the ranges that
the user is query for.
*/