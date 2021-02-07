SELECT * FROM estados;

SELECT sigla, nome as 'Nome do Estado' FROM estados WHERE regiao = 'Nordeste';

SELECT sigla, nome FROM estados WHERE populacao >= 2 ORDER BY populacao DESC;