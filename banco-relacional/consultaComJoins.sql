select * from cidades;
select * from prefeitos;

select * from cidades as c inner join prefeitos as p on c.id = p.cidade_id;

select * from cidades as c left outer join prefeitos as p on c.id = p.cidade_id;

select * from cidades as c right join prefeitos as p on c.id = p.cidade_id;

select * from cidades as c left outer join prefeitos as p on c.id = p.cidade_id
union 
select * from cidades as c right join prefeitos as p on c.id = p.cidade_id;