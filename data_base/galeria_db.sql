-- Creación de secuencias
CREATE SEQUENCE public.categorias_id_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE public.usuarios_id_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE public.publicaciones_id_seq START WITH 1 INCREMENT BY 1;
CREATE SEQUENCE public.mensajes_id_seq START WITH 1 INCREMENT BY 1;

-- Tabla: categorias
CREATE TABLE public.categorias (
    id integer NOT NULL DEFAULT nextval('public.categorias_id_seq'),
    nombre character varying(50) NOT NULL,
    PRIMARY KEY (id)
);

-- Tabla: usuarios
CREATE TABLE public.usuarios (
    id integer NOT NULL DEFAULT nextval('public.usuarios_id_seq'),
    nombre character varying(50) NOT NULL,
    email character varying(50) NOT NULL UNIQUE,
    password character varying(100) NOT NULL,
    fecha_registro timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
);

-- Tabla: publicaciones
CREATE TABLE public.publicaciones (
    id integer NOT NULL DEFAULT nextval('public.publicaciones_id_seq'),
    titulo character varying(100) NOT NULL,
    descripcion character varying NOT NULL,
    categoria_id integer,
    imagen_url character varying(255) NOT NULL,
    precio integer NOT NULL,
    usuario_id integer,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (categoria_id) REFERENCES public.categorias(id),
    FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id)
);

-- Tabla: mensajes
CREATE TABLE public.mensajes (
    id integer NOT NULL DEFAULT nextval('public.mensajes_id_seq'),
    contenido character varying NOT NULL,
    publicacion_id integer,
    usuario_id integer,
    fecha_envio timestamp without time zone DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (id),
    FOREIGN KEY (publicacion_id) REFERENCES public.publicaciones(id) ON DELETE CASCADE,
    FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id)
);
