SELECT * FROM sakila.film;
SELECT title, release_year, rating FROM sakila.film;
SELECT COUNT(*) FROM sakila.film;
SELECT * FROM sakila.actor;
SELECT DISTINCT last_name FROM sakila.actor;
SELECT COUNT(last_name) FROM sakila.actor;
SELECT * FROM sakila.actor
ORDER BY last_name ASC, first_name DESC;
SELECT * FROM sakila.language LIMIT 5 OFFSET 1;
SELECT * FROM sakila.film;
SELECT title, release_year, lenght, rating, replacement_cost FROM sakila.film 
ORDER BY lenght DESC, replacement_cost
LIMIT 20;
