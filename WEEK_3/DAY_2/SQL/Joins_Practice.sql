-- Show all the movies with their language names
SELECT 
m.movie_id, m.title,l.name 
FROM 
movies m
LEFT JOIN
languages l
ON
m.language_id = l.language_id;

-- Show all Telugu movie names (assuming you don't know the language
-- id for Telugu)
select m.title from movies m left join languages l on m.language_id = l.language_id where l.name = "Telugu";


-- Show the language and number of movies released in that language
select
l.name, count(m.movie_id)
from 
movies m 
left join
languages l
on m.language_id = l.language_id
group by l.name;

-- GET SECOND HIGHEST SALARY WITHOUT LIMIT AND OFFSET
SELECT 
concat(e.first_name, " ", e.last_name) as Name, s.amount as Amount
FROM
employee e 
left join
salary s
on
e.emp_no = s.emp_no
order by Amount DESC
;

-- CROSS JOIN
SELECT 
	*
FROM
items
CROSS JOIN 
variants;

-- CREATING PROFIT 
SELECT 
	m.movie_id, m.title, f.budget, f.revenue, f.currency, f.unit, (f.revenue - f.budget) as PROFIT
FROM
movies m 
LEFT JOIN financials f ON m.movie_id = f.movie_id
WHERE m.industry = "Hollywood" ORDER BY profit DESC
;

-- MOVIES AND ACTOR NAMES
select 
m.title,group_concat(a.name SEPARATOR " | ") as names
from
movies m
join movie_actor ma on m.movie_id = ma.movie_id
join actors a on ma.actor_id = a.actor_id
group by m.movie_id
;
-- ACTORS NAMES AND MOVIES
SELECT 
a.name, group_concat(m.title) AS movie_name
FROM movies m
JOIN
movie_actor ma ON m.movie_id = ma.movie_id
JOIN
actors a ON ma.actor_id = a.actor_id
GROUP BY a.name
;