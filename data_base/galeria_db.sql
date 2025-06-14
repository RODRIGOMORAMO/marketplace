PGDMP      	                }         
   galeria_db    17.3    17.3 %    �           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            �           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            �           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            �           1262    32960 
   galeria_db    DATABASE     p   CREATE DATABASE galeria_db WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'es-ES';
    DROP DATABASE galeria_db;
                     postgres    false            �            1259    33091 
   categorias    TABLE     g   CREATE TABLE public.categorias (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL
);
    DROP TABLE public.categorias;
       public         heap r       postgres    false            �            1259    33090    categorias_id_seq    SEQUENCE     �   CREATE SEQUENCE public.categorias_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.categorias_id_seq;
       public               postgres    false    220            �           0    0    categorias_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.categorias_id_seq OWNED BY public.categorias.id;
          public               postgres    false    219            �            1259    33158    mensajes    TABLE     �   CREATE TABLE public.mensajes (
    id integer NOT NULL,
    contenido character varying NOT NULL,
    publicacion_id integer,
    usuario_id integer,
    fecha_envio timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.mensajes;
       public         heap r       postgres    false            �            1259    33157    mensajes_id_seq    SEQUENCE     �   CREATE SEQUENCE public.mensajes_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.mensajes_id_seq;
       public               postgres    false    224            �           0    0    mensajes_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.mensajes_id_seq OWNED BY public.mensajes.id;
          public               postgres    false    223            �            1259    33138    publicaciones    TABLE     `  CREATE TABLE public.publicaciones (
    id integer NOT NULL,
    titulo character varying(100) NOT NULL,
    descripcion character varying NOT NULL,
    categoria_id integer,
    imagen_url character varying(255) NOT NULL,
    precio integer NOT NULL,
    usuario_id integer,
    fecha_creacion timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
 !   DROP TABLE public.publicaciones;
       public         heap r       postgres    false            �            1259    33137    publicaciones_id_seq    SEQUENCE     �   CREATE SEQUENCE public.publicaciones_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 +   DROP SEQUENCE public.publicaciones_id_seq;
       public               postgres    false    222            �           0    0    publicaciones_id_seq    SEQUENCE OWNED BY     M   ALTER SEQUENCE public.publicaciones_id_seq OWNED BY public.publicaciones.id;
          public               postgres    false    221            �            1259    33081    usuarios    TABLE       CREATE TABLE public.usuarios (
    id integer NOT NULL,
    nombre character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(100) NOT NULL,
    fecha_registro timestamp without time zone DEFAULT CURRENT_TIMESTAMP
);
    DROP TABLE public.usuarios;
       public         heap r       postgres    false            �            1259    33080    usuarios_id_seq    SEQUENCE     �   CREATE SEQUENCE public.usuarios_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 &   DROP SEQUENCE public.usuarios_id_seq;
       public               postgres    false    218            �           0    0    usuarios_id_seq    SEQUENCE OWNED BY     C   ALTER SEQUENCE public.usuarios_id_seq OWNED BY public.usuarios.id;
          public               postgres    false    217            2           2604    33094    categorias id    DEFAULT     n   ALTER TABLE ONLY public.categorias ALTER COLUMN id SET DEFAULT nextval('public.categorias_id_seq'::regclass);
 <   ALTER TABLE public.categorias ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    220    219    220            5           2604    33161    mensajes id    DEFAULT     j   ALTER TABLE ONLY public.mensajes ALTER COLUMN id SET DEFAULT nextval('public.mensajes_id_seq'::regclass);
 :   ALTER TABLE public.mensajes ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    223    224    224            3           2604    33141    publicaciones id    DEFAULT     t   ALTER TABLE ONLY public.publicaciones ALTER COLUMN id SET DEFAULT nextval('public.publicaciones_id_seq'::regclass);
 ?   ALTER TABLE public.publicaciones ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    222    221    222            0           2604    33084    usuarios id    DEFAULT     j   ALTER TABLE ONLY public.usuarios ALTER COLUMN id SET DEFAULT nextval('public.usuarios_id_seq'::regclass);
 :   ALTER TABLE public.usuarios ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    217    218    218            �          0    33091 
   categorias 
   TABLE DATA           0   COPY public.categorias (id, nombre) FROM stdin;
    public               postgres    false    220   �+       �          0    33158    mensajes 
   TABLE DATA           Z   COPY public.mensajes (id, contenido, publicacion_id, usuario_id, fecha_envio) FROM stdin;
    public               postgres    false    224   �+       �          0    33138    publicaciones 
   TABLE DATA           ~   COPY public.publicaciones (id, titulo, descripcion, categoria_id, imagen_url, precio, usuario_id, fecha_creacion) FROM stdin;
    public               postgres    false    222   .       �          0    33081    usuarios 
   TABLE DATA           O   COPY public.usuarios (id, nombre, email, password, fecha_registro) FROM stdin;
    public               postgres    false    218   .0       �           0    0    categorias_id_seq    SEQUENCE SET     ?   SELECT pg_catalog.setval('public.categorias_id_seq', 3, true);
          public               postgres    false    219            �           0    0    mensajes_id_seq    SEQUENCE SET     >   SELECT pg_catalog.setval('public.mensajes_id_seq', 68, true);
          public               postgres    false    223            �           0    0    publicaciones_id_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public.publicaciones_id_seq', 57, true);
          public               postgres    false    221            �           0    0    usuarios_id_seq    SEQUENCE SET     =   SELECT pg_catalog.setval('public.usuarios_id_seq', 9, true);
          public               postgres    false    217            <           2606    33096    categorias categorias_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public                 postgres    false    220            @           2606    33166    mensajes mensajes_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.mensajes
    ADD CONSTRAINT mensajes_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.mensajes DROP CONSTRAINT mensajes_pkey;
       public                 postgres    false    224            >           2606    33146     publicaciones publicaciones_pkey 
   CONSTRAINT     ^   ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_pkey PRIMARY KEY (id);
 J   ALTER TABLE ONLY public.publicaciones DROP CONSTRAINT publicaciones_pkey;
       public                 postgres    false    222            8           2606    33089    usuarios usuarios_email_key 
   CONSTRAINT     W   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_email_key UNIQUE (email);
 E   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_email_key;
       public                 postgres    false    218            :           2606    33087    usuarios usuarios_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.usuarios
    ADD CONSTRAINT usuarios_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.usuarios DROP CONSTRAINT usuarios_pkey;
       public                 postgres    false    218            C           2606    33177 %   mensajes mensajes_publicacion_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.mensajes
    ADD CONSTRAINT mensajes_publicacion_id_fkey FOREIGN KEY (publicacion_id) REFERENCES public.publicaciones(id) ON DELETE CASCADE;
 O   ALTER TABLE ONLY public.mensajes DROP CONSTRAINT mensajes_publicacion_id_fkey;
       public               postgres    false    224    4670    222            D           2606    33172 !   mensajes mensajes_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.mensajes
    ADD CONSTRAINT mensajes_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);
 K   ALTER TABLE ONLY public.mensajes DROP CONSTRAINT mensajes_usuario_id_fkey;
       public               postgres    false    4666    224    218            A           2606    33147 -   publicaciones publicaciones_categoria_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_categoria_id_fkey FOREIGN KEY (categoria_id) REFERENCES public.categorias(id);
 W   ALTER TABLE ONLY public.publicaciones DROP CONSTRAINT publicaciones_categoria_id_fkey;
       public               postgres    false    222    4668    220            B           2606    33152 +   publicaciones publicaciones_usuario_id_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.publicaciones
    ADD CONSTRAINT publicaciones_usuario_id_fkey FOREIGN KEY (usuario_id) REFERENCES public.usuarios(id);
 U   ALTER TABLE ONLY public.publicaciones DROP CONSTRAINT publicaciones_usuario_id_fkey;
       public               postgres    false    222    4666    218            �   8   x�3�t,*I-V(�,.M�I-�2�
�^X\���X�e��ZT����_����� �&�      �      x���K�1��U��ƪ��ް�,�1��Fb��8g@��QM�ȣ;��]e��-��, $�@���c�擲QF*���	��8�`h
c-@���rG�����~
W.��-z'c8��.��DdJ4��t;�F�z����	�T�|L���(Xp�8�ͣ�X��������������ׯ/_�>=?�[�T��kNC��5���b��i��z��G�a���p^�*/�F�jmU�\i+�&.IV���G6B��Q�B�EO��;M��o�#��-nm��F��R�ۃ�gU
{���<����Q��d����^���O��T����QWV�.ӳ�ǠD9?ޫ�N�ڵ����tĭS�*����U0�[�<��|;h�\NP�E���`7���r0U�y��ν;ʀ[�ׂ��Q	6t ��|5�@�;dym�R�r���S�Q�����{���A�|����ʙ���TR��`�zr`(<.Z�ԦP��M�^pk琺j0�/u\r�ވS����d)ZR2�7� �uӱ�	�E[`��c�$~l��մ`�      �     x�œKn�0E��*8����E�E�&-��NhJ�Ȧ#�u�u�Udc}���n�vT���ù���R(?��F-Sڴ��Z�Eْ���Ծ]�Wg�eLq��FJ*,z,57�
9��;�Mq2��ʧѼJ����h7є��'�"���H#N�S(L�c�QAr�s���L�O_Ţl�����a]�W���qgM��\?D��K�o�'�:��Xd�R�-���Č9���V�<c}�U��J|��<��Z�*���Pm_`_c�|S��G5{˗����ї��s�vN��l{ѧyS>�y?��M�¶�M��د�0����(��{���'0E"!D����9 �v;H�������U�Y��͘BW������4��������3�'Uh��p�L�8���{��N4�Nw��:�3Ds��)��^�W�c' �!0�jb$�:ϔ@�YG�ԢC1.�z�R�Ix��ReJ"}�C�7^���|��N��p�8@�!�����'��)Etn��d��L�<4�K,&�Dh-�ξ�,�~$PY      �   f  x�m�1s�0 ��~�kCB'AѦH�`��� "D�����S��w����R�O6��,I�M"�ȋkR�s���Bh���S9��.�h�)�j��v��C����.� ��!����ŕ�) ���AM���G�1�`dʦd[A��̝�ZLg�6i��qv�ߘh݃�?�7�����Bf�=[��Ǣ�f���/*��J˧jt:M�{��aBu�HON�JȜ��ڮ��-�����%M���ۦ�C�[�2�p7�_K��W��ɱ�ϰƳB�߳t�10uM*�_�+���������٩>�DeǪtf܏��3���k2}#:5+�k�j�y/>�n��ď=T�p��=�:�ɯ@��/0��     