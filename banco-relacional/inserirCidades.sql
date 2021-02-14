INSERT INTO cidades (nome, area, estado_id)
VALUES ('ALguma cidade', 795, 2);

INSERT INTO cidades (nome, area, estado_id)
VALUES ('Macapá', 795, (select id from estados where sigla = 'AP'));