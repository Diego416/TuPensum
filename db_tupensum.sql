-- phpMyAdmin SQL Dump
-- version 4.6.4
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 29-05-2017 a las 03:52:12
-- Versión del servidor: 5.5.45
-- Versión de PHP: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `db_tupensum`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `carrera`
--

CREATE TABLE `carrera` (
  `idCarrera` int(11) NOT NULL,
  `nombreCarrera` varchar(45) NOT NULL,
  `Universidad_idUniversidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `carrera`
--

INSERT INTO `carrera` (`idCarrera`, `nombreCarrera`, `Universidad_idUniversidad`) VALUES
(1, 'Ingeniería de sistemas', 1),
(2, 'Finanzas', 1),
(3, 'Derecho', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cuentausuario`
--

CREATE TABLE `cuentausuario` (
  `userName` varchar(25) NOT NULL,
  `password` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `cuentausuario`
--

INSERT INTO `cuentausuario` (`userName`, `password`) VALUES
('agonzalez', '123gonzales'),
('cgomez', '123gomez'),
('drogriguez', '123rogriguez'),
('jcorrea', 'correa123'),
('jmunozc2', 'diegopass'),
('jposada', '123posada');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `materia`
--

CREATE TABLE `materia` (
  `idMateria` int(11) NOT NULL,
  `nombreMateria` varchar(100) NOT NULL,
  `numCreditos` int(11) NOT NULL,
  `valor` int(11) NOT NULL,
  `Universidad_idUniversidad` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `materia`
--

INSERT INTO `materia` (`idMateria`, `nombreMateria`, `numCreditos`, `valor`, `Universidad_idUniversidad`) VALUES
(1, 'Inducción', 0, 0, 1),
(2, 'Bienestar Universitario', 1, 400000, 1),
(3, 'Cálculo I', 3, 1500000, 1),
(4, 'Lógica', 3, 1500000, 1),
(5, 'Fundamentos de programación', 4, 1700000, 1),
(6, 'Principios de desarrollo de software', 3, 1500000, 1),
(7, 'Seminario ingeniería de sistemas', 1, 400000, 1),
(8, 'Fisica I', 4, 1700000, 1),
(9, 'Lenguajes de programación', 3, 1500000, 1),
(10, 'Estructura datos y algorítmos I', 3, 1500000, 1),
(11, 'Cálculo II', 3, 1500000, 1),
(12, 'Estructuras discretas', 3, 1500000, 1),
(13, 'Cálculo III', 3, 1500000, 1),
(14, 'Física II', 4, 1700000, 1),
(15, 'Base de datos', 3, 1500000, 1),
(16, 'estructura de datos y algorítmos II', 3, 1500000, 1),
(17, 'Electrónica digital', 3, 1500000, 1),
(18, 'Lenguajes formales y compiladores', 4, 1700000, 1),
(19, 'Álgebra lineal', 3, 1500000, 1),
(20, 'Teoría de la organización', 3, 1500000, 1),
(21, 'Teoría de la conmutación', 2, 800000, 1),
(22, 'Ingeniería de software', 4, 1700000, 1),
(23, 'Proyecto integrador I', 3, 1500000, 1),
(24, 'Economía general', 3, 1500000, 1),
(25, 'Sistemas de información', 3, 1500000, 1),
(26, 'Pensamiento sistémico', 3, 1500000, 1),
(27, 'Estadística general', 3, 1500000, 1),
(28, 'Ingeniería económica', 3, 1500000, 1),
(29, 'Organización de computadores', 3, 1500000, 1),
(30, 'Telemática', 3, 1500000, 1),
(31, 'Análisis numérico', 3, 1500000, 1),
(32, 'Métodos cuantitativos', 3, 1500000, 1),
(33, 'Pre-práctica', 0, 0, 1),
(34, 'Sistemas operativos', 4, 1700000, 1),
(35, 'Proyecto integrador II', 3, 1500000, 1),
(36, 'Tópicos especiales en ingeniería de software', 3, 1500000, 1),
(37, 'Tópicos especiales en sistemas de información', 3, 1500000, 1),
(38, 'Tópicos especiales en telemática', 3, 1500000, 1),
(39, 'Período de práctica', 18, 70000000, 1),
(40, 'gestión de proyectos informáticos', 3, 1500000, 1),
(41, 'Inducción', 0, 0, 1),
(42, 'Bienestar Universitario', 1, 400000, 1),
(43, 'Matemáticas I', 3, 1500000, 1),
(44, 'Fundamentos de contabilidad', 3, 1500000, 1),
(45, 'Introducción a la economía colombiana', 3, 1500000, 1),
(46, 'Introducción a las finanzas', 3, 1500000, 1),
(47, 'Fundamentos de programación', 3, 1500000, 1),
(48, 'Matemáticas II', 3, 1500000, 1),
(49, 'Estadística I', 3, 1500000, 1),
(50, 'Microeconocía general', 3, 1500000, 1),
(51, 'Matemáticas financieras', 3, 1500000, 1),
(52, 'Estudios empresariales colombianos', 3, 1500000, 1),
(53, 'Civil parte general y personas', 2, 1200000, 2),
(54, 'Constitucional general: teoría del estado', 1, 700000, 2),
(55, 'Cristología', 2, 1200000, 2),
(56, 'Derecho romano', 2, 1200000, 2),
(57, 'Ética general', 1, 700000, 2),
(58, 'Humanismo y cultura ciudadana', 2, 1200000, 2),
(59, 'Introducción al derecho I', 2, 1200000, 2),
(60, 'Lengua y cultura', 2, 1200000, 2),
(61, 'Metodología de la investigación', 1, 700000, 2),
(62, 'Civil familia', 2, 1200000, 2),
(63, 'Constitucional general II: teoría de la constitución', 1, 700000, 2),
(64, 'Electiva I', 3, 1200000, 2),
(65, 'Emprendimiento y responsabilidad social', 2, 1200000, 2),
(66, 'Introducción al derecho II', 2, 1200000, 2),
(67, 'Lenguaje I', 2, 1200000, 2),
(68, 'Lenguaje II', 2, 1200000, 2),
(69, 'Sistemas juridicos', 1, 700000, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `opinion`
--

CREATE TABLE `opinion` (
  `idOpinion` int(11) NOT NULL,
  `calificacionDificultad` int(11) NOT NULL,
  `calificacionTiempo` int(11) NOT NULL,
  `opinion` longtext,
  `Usuario_idUsuario` int(11) NOT NULL,
  `Materia_id Materia` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `opinion`
--

INSERT INTO `opinion` (`idOpinion`, `calificacionDificultad`, `calificacionTiempo`, `opinion`, `Usuario_idUsuario`, `Materia_id Materia`) VALUES
(1, 6, 3, 'Es facil', 1152217167, 32),
(2, 9, 6, 'Dificil', 1072334446, 14),
(3, 8, 5, 'Al principio facil despues muy dificil', 1324923323, 49),
(4, 5, 2, 'Es facil', 1324923323, 52),
(5, 7, 5, 'Los temas son muy trabajables pero no es facil', 1094242455, 63),
(6, 9, 7, 'Hay que estudiarla mucho', 1212100244, 56),
(7, 4, 5, 'Es muy facil si se le dedica el tiempo necesario a estudiarla', 1152217167, 32),
(8, 3, 2, 'Se me hizo muy fácil, pero puede ser debido a que ya era técnico en desarrollo de software, por lo tanto, tenía buenas bases de programación', 1152217167, 5),
(9, 9, 5, 'Es una de las materias más difíciles en toda la carrera. No dejar la práctica para el final.', 1152217167, 31),
(10, 2, 2, 'Una de las materias más fáciles de la carrera, es para dejar en 5.', 1152217167, 17);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pensum`
--

CREATE TABLE `pensum` (
  `idPensum` int(11) NOT NULL,
  `Carrera_idCarrera` int(11) NOT NULL,
  `Materia_idMateria` int(11) NOT NULL,
  `semestre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `pensum`
--

INSERT INTO `pensum` (`idPensum`, `Carrera_idCarrera`, `Materia_idMateria`, `semestre`) VALUES
(1, 1, 1, 1),
(2, 1, 2, 1),
(3, 1, 3, 1),
(4, 1, 4, 1),
(5, 1, 5, 1),
(6, 1, 6, 1),
(7, 1, 7, 1),
(8, 1, 8, 2),
(9, 1, 9, 2),
(10, 1, 10, 2),
(11, 1, 11, 2),
(12, 1, 12, 2),
(13, 1, 13, 3),
(14, 1, 14, 3),
(15, 1, 15, 3),
(16, 1, 16, 3),
(17, 1, 17, 3),
(18, 1, 18, 3),
(19, 1, 19, 4),
(20, 1, 20, 4),
(21, 1, 21, 4),
(22, 1, 22, 4),
(23, 1, 23, 4),
(24, 1, 24, 5),
(25, 1, 25, 5),
(26, 1, 26, 5),
(27, 1, 27, 6),
(28, 1, 28, 6),
(29, 1, 29, 6),
(30, 1, 30, 6),
(31, 1, 31, 6),
(32, 1, 32, 7),
(33, 1, 33, 7),
(34, 1, 34, 7),
(35, 1, 35, 7),
(36, 1, 36, 7),
(37, 1, 37, 7),
(38, 1, 38, 7),
(39, 1, 39, 8),
(40, 1, 40, 9),
(41, 2, 41, 1),
(42, 2, 42, 1),
(43, 2, 43, 1),
(44, 2, 44, 1),
(45, 2, 45, 1),
(46, 2, 46, 1),
(47, 2, 47, 1),
(48, 2, 48, 2),
(49, 2, 49, 2),
(50, 2, 50, 2),
(51, 2, 51, 2),
(52, 2, 52, 2),
(53, 3, 53, 1),
(54, 3, 54, 1),
(55, 3, 55, 1),
(56, 3, 56, 1),
(57, 3, 57, 1),
(58, 3, 58, 1),
(59, 3, 59, 1),
(60, 3, 60, 1),
(61, 3, 61, 1),
(62, 3, 62, 2),
(63, 3, 63, 2),
(64, 3, 64, 2),
(65, 3, 65, 2),
(66, 3, 66, 2),
(67, 3, 67, 2),
(68, 3, 68, 2),
(69, 3, 69, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seleccion`
--

CREATE TABLE `seleccion` (
  `Usuario_idUsuario` int(11) NOT NULL,
  `Carrera_idCarrera` int(11) NOT NULL,
  `semestre` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `seleccion`
--

INSERT INTO `seleccion` (`Usuario_idUsuario`, `Carrera_idCarrera`, `semestre`) VALUES
(1721623, 1, 6),
(1072334446, 1, 3),
(1094242455, 3, 2),
(1152217167, 1, 7),
(1212100244, 3, 1),
(1324923323, 2, 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `universidad`
--

CREATE TABLE `universidad` (
  `idUniversidad` int(11) NOT NULL,
  `nombreUniversidad` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `universidad`
--

INSERT INTO `universidad` (`idUniversidad`, `nombreUniversidad`) VALUES
(1, 'Universidad EAFIT'),
(2, 'Universidad Pontificia Bolivariana');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `cedulaUsuario` int(20) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `CuentaUsuario_userName` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`cedulaUsuario`, `nombre`, `apellido`, `email`, `CuentaUsuario_userName`) VALUES
(1721623, 'Juan', 'Correa', 'jcorrea@eafit.edu.co', 'jcorrea'),
(1072334446, 'Camilo', 'Gomez', 'cgomez@eafit.edu.co', 'cgomez'),
(1094242455, 'Jose', 'Posada', 'jposada@eafit.edu.co', 'jposada'),
(1152217167, 'Diego', 'Muñoz', 'jmunozc2@eafit.edu.co', 'jmunozc2'),
(1212100244, 'Alberto', 'Gonzales', 'agonzalez@eafit.edu.co', 'agonzalez'),
(1324923323, 'Daniel', 'Rodriguez', 'drogriguez@eafit.edu.co', 'drogriguez');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD PRIMARY KEY (`idCarrera`),
  ADD KEY `fk_Carrera_Universidad1_idx` (`Universidad_idUniversidad`);

--
-- Indices de la tabla `cuentausuario`
--
ALTER TABLE `cuentausuario`
  ADD PRIMARY KEY (`userName`);

--
-- Indices de la tabla `materia`
--
ALTER TABLE `materia`
  ADD PRIMARY KEY (`idMateria`),
  ADD KEY `fk_ Materia_Universidad1_idx` (`Universidad_idUniversidad`);

--
-- Indices de la tabla `opinion`
--
ALTER TABLE `opinion`
  ADD PRIMARY KEY (`idOpinion`),
  ADD KEY `fk_Opinion_Usuario1_idx` (`Usuario_idUsuario`),
  ADD KEY `fk_Opinion_ Materia1_idx` (`Materia_id Materia`);

--
-- Indices de la tabla `pensum`
--
ALTER TABLE `pensum`
  ADD PRIMARY KEY (`idPensum`),
  ADD KEY `fk_Pensum_Materia_Materia1_idx` (`Materia_idMateria`),
  ADD KEY `fk_Pensum_Materia_Carrera1_idx` (`Carrera_idCarrera`);

--
-- Indices de la tabla `seleccion`
--
ALTER TABLE `seleccion`
  ADD PRIMARY KEY (`Usuario_idUsuario`,`Carrera_idCarrera`),
  ADD KEY `fk_Seleccion_Carrera1_idx` (`Carrera_idCarrera`);

--
-- Indices de la tabla `universidad`
--
ALTER TABLE `universidad`
  ADD PRIMARY KEY (`idUniversidad`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`cedulaUsuario`),
  ADD KEY `fk_Usuario_CuentaUsuario1_idx` (`CuentaUsuario_userName`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `carrera`
--
ALTER TABLE `carrera`
  MODIFY `idCarrera` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT de la tabla `materia`
--
ALTER TABLE `materia`
  MODIFY `idMateria` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT de la tabla `opinion`
--
ALTER TABLE `opinion`
  MODIFY `idOpinion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
--
-- AUTO_INCREMENT de la tabla `pensum`
--
ALTER TABLE `pensum`
  MODIFY `idPensum` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=70;
--
-- AUTO_INCREMENT de la tabla `universidad`
--
ALTER TABLE `universidad`
  MODIFY `idUniversidad` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `carrera`
--
ALTER TABLE `carrera`
  ADD CONSTRAINT `fk_Carrera_Universidad1` FOREIGN KEY (`Universidad_idUniversidad`) REFERENCES `universidad` (`idUniversidad`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `opinion`
--
ALTER TABLE `opinion`
  ADD CONSTRAINT `fk_Opinion_ Materia1` FOREIGN KEY (`Materia_id Materia`) REFERENCES `materia` (`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Opinion_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`cedulaUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `pensum`
--
ALTER TABLE `pensum`
  ADD CONSTRAINT `fk_Pensum_Materia_Materia1` FOREIGN KEY (`Materia_idMateria`) REFERENCES `materia` (`idMateria`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Pensum_Materia_Carrera1` FOREIGN KEY (`Carrera_idCarrera`) REFERENCES `carrera` (`idCarrera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `seleccion`
--
ALTER TABLE `seleccion`
  ADD CONSTRAINT `fk_Seleccion_Usuario1` FOREIGN KEY (`Usuario_idUsuario`) REFERENCES `usuario` (`cedulaUsuario`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_Seleccion_Carrera1` FOREIGN KEY (`Carrera_idCarrera`) REFERENCES `carrera` (`idCarrera`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD CONSTRAINT `fk_Usuario_CuentaUsuario1` FOREIGN KEY (`CuentaUsuario_userName`) REFERENCES `cuentausuario` (`userName`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
