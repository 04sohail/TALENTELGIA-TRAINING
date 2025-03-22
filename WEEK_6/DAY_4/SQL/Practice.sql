SELECT * FROM movies;
SELECT * FROM financials;
SELECT * FROM languages;
-- SINGLE TABLE RETRIEVAL
--  Print all movie titles and release year for all Marvel Studios movies.
SELECT m.title, m.release_year FROM movies m;
-- Print all movies that have Avenger in their name.
SELECT m.title FROM movies m WHERE title LIKE "%Avenger%";
-- Print the year when the movie "The Godfather" was released.
SELECT m.title, m.release_year FROM movies m WHERE title = "The Godfather";
-- Print all distinct movie studios in the Bollywood industry.
SELECT DISTINCT m.studio FROM movies m WHERE m.industry = "Bollywood";
-- Print all movies in the order of their release year (latest first)
SELECT m.title, m.release_year FROM movies m ORDER BY release_year DESC;
-- All movies released in the year 2022
SELECT m.title, m.release_year FROM movies m WHERE m.release_year = 2022;
-- Now all the movies released after 2020
SELECT m.title, m.release_year FROM movies m WHERE m.release_year > 2020;
-- All movies after the year 2020 that have more than 8 rating
SELECT m.title, m.release_year, m.imdb_rating FROM movies m WHERE m.release_year > 2020 AND m.imdb_rating>8;
-- Select all movies that are by Marvel studios and Hombale Films
SELECT m.title, m.studio FROM movies m WHERE m.studio = "Marvel studios" OR m.studio = "Hombale Films";
-- Select all THOR movies by their release year
SELECT m.title FROM movies m WHERE m.title LIKE "%Thor%";
-- Select all movies that are not from Marvel Studios
SELECT m.title FROM movies m WHERE m.title <> "Marvel Studios";
SELECT m.title FROM movies m WHERE NOT m.title = "Marvel Studios";
SELECT m.title FROM movies m WHERE m.title !=  "Marvel Studios";
-- MAX MIN 
SELECT MIN(imdb_rating) FROM movies;
SELECT MAX(imdb_rating) FROM movies;
-- How many movies were released between 2015 and 2022
SELECT COUNT(*) FROM movies m WHERE m.release_year BETWEEN 2015 AND 2022;
-- Print the max and min movie release year
SELECT MAX(m.release_year), MIN(m.release_year) FROM movies m;
-- Print a year and how many movies were released in that year starting with the latest year
SELECT m.release_year, COUNT(*) FROM movies m GROUP BY m.release_year;
-- Print profit % for all the movies
SELECT m.title, ((f.revenue - f.budget)*100) as "profit %"   FROM movies m INNER JOIN financials f ON m.movie_id = f.movie_id;

-- MULTIPLE TABLE RETRIEVAL
-- Show all the movies with their language names
SELECT m.title, l.name FROM movies m INNER JOIN languages l ON m.language_id = l.language_id;
-- Show all Telugu movie names (assuming you don't know the language id for Telugu)
SELECT m.title, l.name FROM movies m INNER JOIN languages l ON m.language_id = l.langua0ge_id WHERE l.name = "Telugu";
-- Show the language and number of movies released in that language
SELECT l.name, COUNT(l.name) FROM movies m INNER JOIN languages l ON m.language_id = l.language_id GROUP BY l.name;
-- 