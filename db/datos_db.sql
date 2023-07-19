INSERT INTO user (usu_nombre,usu_email,usu_telefono,usu_apodo, usu_created_at) VALUES 
("Jhon Santiago Bernal Jurado", "jbernalsantiago11@gmail.com", "3123860656", "Bernal", CURDATE()),
("Angie Nathalia Suarez Perez", "angienatalia@gmail.com", "3118128060", "Angie", CURDATE());

INSERT INTO estado (estado_nombre) VALUES
("Pendiente"),
("Realizada");

INSERT INTO tipo (tipo_nombre, tipo_created_at) VALUES
("Ingles", CURDATE()),
("Ser", CURDATE()),
("Skills",CURDATE()),
("Matematicas",CURDATE());

INSERT INTO tarea (tarea_titulo, tarea_descripcion, tarea_fecha, tarea_recordatorio, tarea_created_at, id_user, id_tipo) VALUES
('Backend', 'Realizar un proyecto con node', '2023-07-30', '2023-07-30 09:00:00', CURDATE(), 1, 3),
('Figma', 'Realizar un figma de una pagina web', '2023-07-29', '2023-07-29 12:00:00', CURDATE(), 1, 2),
('Presentacion', 'Hacer un video de presentacion personal en ingles', '2023-07-25', '2023-07-25 15:00:00', CURDATE(), 2, 1),
('Frontend', 'Hacer una pagina de venta de zapatos con bootstrap 5', '2023-07-23', '2023-07-23 18:00:00', CURDATE(), 2, 3),
('Ecuaciones', 'Resolver todo el taller de ecuaciones de la universidad', '2023-07-24', '2023-07-24 21:00:00', CURDATE(), 1, 4);