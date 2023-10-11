CREATE TABLE usuario (
    id_usuario INT PRIMARY KEY,
    nombre VARCHAR(255),
    nickname VARCHAR(255),
    correo VARCHAR(255),
    rol VARCHAR(255),
    departamento VARCHAR(255)
);

CREATE TABLE bitacora_entrada_salida (
    id_checkin INT PRIMARY KEY,
    id_usuario INT REFERENCES usuario(id_usuario),
    hora_entrada TIMESTAMP,
    hora_salida TIMESTAMP,
    estatus VARCHAR(255)
);

CREATE TABLE horario (
    id_horario INT PRIMARY KEY,
    id_usuario INT REFERENCES usuario(id_usuario),
    dia VARCHAR(255),
    hora_entrada TIME,
    hora_salida TIME
);

CREATE TABLE proyecto (
    id_proyecto INT PRIMARY KEY,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    fecha_registro DATE,
    inicio_proyecto DATE,
    final_proyecto DATE
);

CREATE TABLE actividad (
    id_actividad INT PRIMARY KEY,
    id_usuario INT REFERENCES usuario(id_usuario),
    id_proyecto INT REFERENCES proyecto(id_proyecto),
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    fecha_inicio_actividad DATE,
    fecha_fin_actividad DATE,
    registro_avance DATE,
    estatus_actividad VARCHAR(255)
);

CREATE TABLE solicitudes (
    id_solicitudes INT PRIMARY KEY,
    id_usuario_solicitante INT REFERENCES usuario(id_usuario),
    id_usuario_remitente INT REFERENCES usuario(id_usuario),
    motivo VARCHAR(255),
    descripcion_motivo VARCHAR(255),
    fecha_registro DATE,
    fecha_tiempo_permiso_inicio DATE,
    fecha_tiempo_permiso_fin DATE,
    estatus_solicitud VARCHAR(255),
    observacion VARCHAR(255)
);