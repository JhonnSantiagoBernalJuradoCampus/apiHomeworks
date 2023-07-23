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