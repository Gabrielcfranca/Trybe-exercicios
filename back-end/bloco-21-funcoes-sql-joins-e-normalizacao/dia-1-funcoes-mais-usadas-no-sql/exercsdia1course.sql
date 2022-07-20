-- Manipulação de Strings 
SELECT UCASE(title) FROM sakila.film LIMIT 10;
SELECT LCASE(title) FROM sakila.film LIMIT 10;
SELECT REPLACE(title, 'ACADEMY', 'FOO') FROM sakila.film WHERE film_id = 1;
SELECT LEFT(title, 7) FROM sakila.film WHERE film_id = 1;
SELECT RIGHT(title, 8) FROM sakila.film WHERE film_id = 1;
SELECT CHAR_LENGTH(title) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5, 2) FROM sakila.film WHERE film_id = 1;
SELECT SUBSTRING(title, 5) FROM sakila.film WHERE film_id = 1;

SELECT UCASE('trybe');
SELECT REPLACE ('Você já ouviu falar do DuckDuckGo?', 'DuckDuckGo', 'Google');
SELECT LENGTH('Uma frase qualquer');
SELECT SUBSTRING('A linguagem JavaScript está entre as mais usadas', 13, 10);
SELECT LCASE('RUA NORTE 1500, SÃO PAULO, BRASIL');

-- Condicionais

SELECT film_id, title,
IF(title = 'ACE GOLDFINGER', 'Já assisti a esse filme', 'Não conheço o filme')
AS 'conheço o filme?'
FROM sakila.film;

SELECT title, rating,
	CASE
		WHEN rating = 'G' THEN 'Livre para todos'
        WHEN rating = 'PG' THEN 'Não recomendado para menores de 10 anos'
        WHEN rating = 'PG-13' THEN 'Não recomendado para menores de 13 anos'
        WHEN rating = 'R' THEN 'Não recomendado para menores de 17 anos'
		ELSE 'Proibido para menores de idade'
	END AS 'público-alvo' 
FROM sakila.film;

-- Funções matemáticas do MySQL

SELECT 
IF(15 MOD 2 = 0, 'PAR', 'ÍMPAR')
AS 'Par ou Ímpar';

SELECT 220 DIV 12;

SELECT
IF(220 DIV 12 = 0, 'Não existem lugares sobrando', CONCAT('SIM ', 220 MOD 12));

SELECT ROUND(15 + RAND() * 5);

SELECT ROUND(15.7515971, 5);

SELECT FLOOR(39.494);

SELECT CEIL(85.234);

-- TRABALHANDO COM DATAS
SELECT DATEDIFF('2030-01-20', NOW());

SELECT TIMEDIFF('10:25:45', '11:00:00');

-- Utilizando as funções de agregação AVG, MIN, MAX, SUM e COUNT 
SELECT AVG(length) AS 'Média de Duração',
	MIN(length) AS 'Duração Mínima',
	MAX(length) AS 'Duração Máxima',
    SUM(length) AS 'Tempo de Exibição Total',
    COUNT( * ) AS 'Filmes Registrados'
FROM sakila.film;

-- Exibindo e filtrando dados de forma agrupada com GROUP BY e HAVING
SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;

SELECT rating, AVG(length) FROM sakila.film
GROUP BY rating;

SELECT rating, MIN(replacement_cost) FROM sakila.film
GROUP BY rating;

SELECT rating, MAX(replacement_cost) FROM sakila.film
GROUP BY rating;

SELECT rating, SUM(replacement_cost) FROM sakila.film
GROUP BY rating;

SELECT * FROM sakila.customer;

SELECT active, count(*)
FROM sakila.customer
GROUP BY active;

SELECT active, store_id, COUNT(*)
FROM sakila.customer
GROUP BY active, store_id;

SELECT * FROM sakila.film;

SELECT AVG(rental_duration) AS avg_rental_duration, rating
FROM sakila.film
GROUP BY rating
ORDER BY avg_rental_duration DESC;

SELECT * FROM sakila.film;

SELECT district, COUNT(*) AS number_of_address FROM sakila.address
GROUP BY district
ORDER BY number_of_address DESC;

SELECT film_id, title,
	IF (title = 'ace goldfinger', 'já assisti a esse filme', 'não conheço o filme') 
    AS 'conheço_o_filme?'
FROM sakila.film;