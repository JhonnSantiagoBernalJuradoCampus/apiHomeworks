CREATE DATABASE homeworks_db;
USE homeworks_db;
CREATE TABLE user(
    usu_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    usu_nombre VARCHAR(200) NOT NULL,
    usu_email VARCHAR(100) NOT NULL,
    usu_telefono VARCHAR(50) NOT NULL,
    usu_apodo VARCHAR(50) NOT NULL,
    usu_created_at TIMESTAMP,
    usu_updated_at TIMESTAMP
);
CREATE TABLE estado(
    estado_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    estado_nombre VARCHAR(100) NOT NULL
);
CREATE TABLE tipo(
    tipo_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    tipo_nombre VARCHAR(200) NOT NULL,
    tipo_created_at TIMESTAMP
);
CREATE TABLE tarea(
    tarea_id INT(11) PRIMARY KEY AUTO_INCREMENT,
    tarea_titulo VARCHAR(100) NOT NULL,
    tarea_descripcion VARCHAR(255) NOT NULL,
    tarea_fecha DATE NOT NULL,
    tarea_recordatorio DATE NOT NULL,
    tarea_created_at TIMESTAMP,
    tarea_updated_at TIMESTAMP,
    id_user INT,
    id_estado INT DEFAULT 1,
    id_tipo INT,
    FOREIGN KEY (id_user) REFERENCES user(usu_id),
    FOREIGN KEY (id_estado) REFERENCES estado(estado_id),
    FOREIGN KEY (id_tipo) REFERENCES tipo(tipo_id)
);
INSERT INTO user (usu_nombre,usu_email,usu_telefono,usu_apodo, usu_created_at) VALUES 
("Jhon Santiago Bernal Jurado", "jbernalsantiago11@gmail.com", "3123860656", "Bernal", CURDATE()),
("Angie Nathalia Suarez Perez", "angienatalia@gmail.com", "3118128060", "Angie", CURDATE()),
("Angela Esperanza Almeida Amaya", "angela@gmail.com", "3118124232", "Angela", CURDATE()),
("James Ronald Bernal Bermudez", "ronald@gmail.com", "312741832", "James", CURDATE());

INSERT INTO estado (estado_nombre) VALUES
("Pendiente"),
("Realizada");

INSERT INTO tipo (tipo_nombre, tipo_created_at) VALUES
("Ingles", CURDATE()),
("Ser", CURDATE()),
("Skills",CURDATE()),
("Matematicas",CURDATE());

INSERT INTO tarea (tarea_titulo, tarea_descripcion, tarea_fecha, tarea_recordatorio, tarea_created_at, id_user, id_tipo) VALUES
('Backend', 'Realizar un proyecto con node', '2023-07-30', '2023-07-29', CURDATE(), 1, 3),
('Figma', 'Realizar un figma de una pagina web', '2023-07-29', '2023-07-28', CURDATE(), 1, 2),
('Presentacion', 'Hacer un video de presentacion personal en ingles', '2023-07-25', '2023-07-24', CURDATE(), 2, 1),
('Frontend', 'Hacer una pagina de venta de zapatos con bootstrap 5', '2023-07-23', '2023-07-22', CURDATE(), 2, 3),
('Ecuaciones', 'Resolver todo el taller de ecuaciones de la universidad', '2023-07-24', '2023-07-23', CURDATE(), 1, 4);