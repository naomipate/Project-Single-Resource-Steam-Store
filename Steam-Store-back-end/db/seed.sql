\c games_dev;


-- COPY games FROM './steam.csv' DELIMITER ',';
-- ERROR:  invalid input syntax for type integer: "appid" 

INSERT INTO games (appid, name, release_date, english, developer, publisher, platforms, required_age, categories, genres, steamspy_tags, achievements, positive_ratings, negative_ratings, average_playtime, median_playtime, owners, price)
VALUES
(10, 'Counter-Strike', '2000-11-01', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Multi-player;Online Multi-Player;Local Multi-Player;Valve Anti-Cheat enabled', 'Action', 'Action;FPS;Multiplayer', 0, 124534, 3339, 17612, 317, '10000000-20000000', 7.19),
(20, 'Team Fortress Classic', '1999-04-01', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Multi-player;Online Multi-Player;Local Multi-Player;Valve Anti-Cheat enabled', 'Action', 'Action;FPS;Multiplayer', 0, 3318, 633, 277, 62, '5000000-10000000', 3.99),
(30, 'Day of Defeat', '2003-05-01', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Multi-player;Valve Anti-Cheat enabled', 'Action', 'FPS;World War II;Multiplayer', 0, 3416, 398, 187, 34, '5000000-10000000', 3.99),
(40, 'Deathmatch Classic', '2001-06-01', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Multi-player;Online Multi-Player;Local Multi-Player;Valve Anti-Cheat enabled', 'Action', 'Action;FPS;Multiplayer', 0, 1273, 267, 258, 184, '5000000-10000000', 3.99),
(50, 'Half-Life: Opposing Force', '1999-11-01', 1, 'Gearbox Software', 'Valve', 'windows;mac;linux', 0, 'Single-player;Multi-player;Valve Anti-Cheat enabled', 'Action', 'FPS;Action;Sci-fi', 0, 5250, 288, 624, 415, '5000000-10000000', 3.99),
(60, 'Ricochet', '2000-11-01', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Multi-player;Online Multi-Player;Valve Anti-Cheat enabled', 'Action', 'Action;FPS;Multiplayer', 0, 2758, 684, 175, 10, '5000000-10000000', 3.99),
(70, 'Half-Life', '1998-11-08', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Single-player;Multi-player;Online Multi-Player;Steam Cloud;Valve Anti-Cheat enabled', 'Action', 'FPS;Classic;Action', 0, 27755, 1100, 1300, 83, '5000000-10000000', 7.19),
(80, 'Counter-Strike: Condition Zero', '2004-03-01', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Single-player;Multi-player;Valve Anti-Cheat enabled', 'Action', 'Action;FPS;Multiplayer', 0, 12120, 1439, 427, 43, '10000000-20000000', 7.19),
(130, 'Half-Life: Blue Shift', '2001-06-01', 1, 'Gearbox Software', 'Valve', 'windows;mac;linux', 0, 'Single-player', 'Action', 'FPS;Action;Sci-fi', 0, 3822, 420, 361, 205, '5000000-10000000', 3.99),
(220, 'Half-Life 2', '2004-11-16', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Single-player;Steam Achievements;Steam Trading Cards;Captions available;Partial Controller Support;Steam Cloud;Includes Source SDK', 'Action', 'FPS;Action;Sci-fi', 33, 67902, 2419, 691, 402, '10000000-20000000', 7.19),
(240, 'Counter-Strike: Source', '2004-11-01', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Multi-player;Cross-Platform Multiplayer;Steam Achievements;Steam Cloud;Valve Anti-Cheat enabled;Stats;Includes Source SDK', 'Action', 'Action;FPS;Multiplayer', 147, 76640, 3497, 6842, 400, '10000000-20000000', 7.19),
(280, 'Half-Life: Source', '2004-06-01', 1, 'Valve', 'Valve', 'windows;mac;linux', 0, 'Single-player', 'Action', 'FPS;Action;Sci-fi', 0, 3767, 1053, 190, 214, '2000000-5000000', 0.0);


SELECT * FROM games;