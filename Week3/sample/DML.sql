INSERT INTO lions.todos values (1,"강의제작","#000000");
INSERT INTO lions.todos values (2,"여행계획작성","#000000");
INSERT INTO lions.todos values (3,"서점가서책사기","#000000");
INSERT INTO lions.todos values (4,"신서유기시청","#000000");
INSERT INTO lions.todos values (5,"친구들과식사","#000000");

-- INSERT 끝 -- 
DELETE FROM lions.todos where todo_id=1;
SELECT * FROM todos where todo_id = 1;
UPDATE lions.todos set color_code="#ffffff" where todo_id = 3

