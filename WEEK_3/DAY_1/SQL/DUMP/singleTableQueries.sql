select
	*
from
	MOVIESDB.movies;

use moviesdb;
-- Print all movie titles and release year for all Marvel Studios movies.
select
	title,
	release_year
from
	moviesdb.movies m
where
	studio = "Marvel Studios";
-- Print all movies that have Avenger in their name.
select
	*
from
	moviesdb.movies m
where
	title like "%Avenger%"
	-- Print the year when the movie "The Godfather" was released.
select
	title,
	release_year
from
	moviesdb.movies
where
	title = "The Godfather";
-- Print all distinct movie studios in the Bollywood industry.
select
	distinct studio
from
	moviesdb.movies
where
	industry = "Bollywood";
-- Print all movies in the order of their release year (latest first)
select
	*
from
	moviesdb.movies
order by
	release_year desc;
-- All movies released in the year 2022
select
	*
from
	moviesdb.movies
where
	release_year = 2022;
-- Now all the movies released after 2020
select
	*
from
	moviesdb.movies m
where
	m.release_year > 2020;
-- All movies after the year 2020 that have more than 8 rating
select
	*
from
	moviesdb.movies m
where
	m.release_year > 2020
having
	m.imdb_rating > 8;
-- Select all movies that are by Marvel studios and Hombale Films
select
	*
from
	moviesdb.movies m
where
	m.studio in ("Marvel Studios", "Hombale Films");
-- Select all THOR movies by their release year
select
	*
from
	moviesdb.movies m
where
	title like "%Thor%"
order by
	m.release_year;
-- Select all movies that are not from Marvel Studios
select
	*
from
	moviesdb.movies m
where
	studio != "Marvel Studios";
-- How many movies were released between 2015 and 2022
select
	count(*)
from
	moviesdb.movies m
where
	m.release_year between "2015" and "2022";
-- Print the max and min movie release year
select
	min(release_year) as MIN_YEAR,
	max(release_year) as MAX_YEAR
from
	moviesdb.movies;
-- Print a year and how many movies were released in that year starting with the latest year
select
	release_year,
	count(*) as MOVIES_COUNT
from
	moviesdb.movies s
group by
	s.release_year
order by
	s.release_year desc;
-- To get Current Date
select
	curdate();
-- Calculate the AGE of Actors in moviesdb.actor table
select
	name,
	birth_year,
	year(curdate()) - a.birth_year as AGE
from
	moviesdb.actors a;

-- First 5 imdb rating Movie
select title, imdb_rating from moviesdb.movies m order by m.imdb_rating desc limit 5 offset 0;


-- Calculate Profit in financials table
select
	*
from
	moviesdb.financials f ;

select
	BUDGET_INR,
	REVENUE_INR,
	if(f.unit = "Billions",
	BUDGET_INR * 1000,
	BUDGET_INR) FINAL_BUDGET_INR
from
	(
	select
		*,
		if(f.currency = "USD",
		f.budget * 80,
		f.budget ) as BUDGET_INR,
		if(f.currency = "USD",
		f.revenue * 80,
		f.revenue ) as REVENUE_INR
	from
		moviesdb.financials f
) subquery;
