SELECT 
m.title, f.budget, f.revenue
FROM 
movies m
LEFT JOIN 
financials f 
ON
m.movies_id = f.movies_id
;