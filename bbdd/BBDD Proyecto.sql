-- phpMyAdmin SQL Dump
-- version 5.1.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 14-06-2021 a las 17:28:02
-- Versión del servidor: 10.4.18-MariaDB
-- Versión de PHP: 8.0.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoweb007`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contacto`
--

CREATE TABLE `contacto` (
  `idPeticiones` int(30) NOT NULL,
  `Nombre` varchar(20) DEFAULT NULL,
  `Apellido` varchar(20) DEFAULT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `motivo` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `contacto`
--

INSERT INTO `contacto` (`idPeticiones`, `Nombre`, `Apellido`, `correo`, `motivo`) VALUES
(1, 'Carlos', 'Ipiens', 'carlosipiens@gmail.com', 'Hola'),
(2, 'pepe', 'Marin', 'jomaraln@upv.es', 'vuestra págin es alucinante, segid asi chiquets!!!!!');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `login`
--

CREATE TABLE `login` (
  `id` int(30) NOT NULL,
  `usuario` varchar(20) NOT NULL,
  `contrasenya` varchar(20) NOT NULL,
  `rol` enum('usuario','admin') NOT NULL,
  `nombre` varchar(20) DEFAULT NULL,
  `telefono` int(15) DEFAULT NULL,
  `correo` varchar(30) DEFAULT NULL,
  `DNI/NIF` varchar(20) DEFAULT NULL,
  `madre` varchar(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `login`
--

INSERT INTO `login` (`id`, `usuario`, `contrasenya`, `rol`, `nombre`, `telefono`, `correo`, `DNI/NIF`, `madre`) VALUES
(1, 'admin', '1234', 'admin', 'Alvaro', 658741295, 'admin@gti.es', '26523485J', 'Garcia'),
(2, 'user1', '1234', 'usuario', 'Paco', 627465234, 'user1@gti.com', '35412654S', 'Reinoso'),
(3, 'user2', '1234', 'usuario', 'Roberto', 613245644, 'user2@gti.com', '64521354D', 'Perez');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mediciones`
--

CREATE TABLE `mediciones` (
  `idSensor` int(30) NOT NULL,
  `idMedicion` int(11) NOT NULL,
  `temperatura` double NOT NULL,
  `humedad` int(10) DEFAULT NULL,
  `salinidad` int(10) DEFAULT NULL,
  `luminosidad` int(10) DEFAULT NULL,
  `hora` time(6) NOT NULL,
  `fecha` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `parcela`
--

CREATE TABLE `parcela` (
  `idParcela` int(30) NOT NULL,
  `idUsuario` int(30) NOT NULL,
  `coordenadaX` double NOT NULL,
  `coordenadaY` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `parcela`
--

INSERT INTO `parcela` (`idParcela`, `idUsuario`, `coordenadaX`, `coordenadaY`) VALUES
(1, 2, 39.576238701019, -0.3364573088961),
(2, 2, 39.503250196592, -0.3870998287232),
(3, 3, 38.03978342833709, -3.8649893322831876);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sensores`
--

CREATE TABLE `sensores` (
  `idParcela` int(30) NOT NULL,
  `idSensor` int(30) NOT NULL,
  `coordenadaX` double NOT NULL,
  `coordenadaY` double NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `sensores`
--

INSERT INTO `sensores` (`idParcela`, `idSensor`, `coordenadaX`, `coordenadaY`) VALUES
(1, 1, 39.577586224283486, -0.3366147531718365),
(1, 2, 39.57673898372259, -0.33502948769497815),
(1, 3, 39.57504279455406, -0.33620944424892635),
(1, 4, 39.57559510615759, -0.33830536676585343),
(2, 5, 39.50413561101254, -0.38781680087104325),
(2, 6, 39.503878251223746, -0.3898806354362547),
(2, 7, 39.50162631241765, -0.3856487322368817),
(2, 8, 39.50299356968079, -0.38489824694044117),
(3, 9, 38.040103263724035, -3.8701436190624703),
(3, 10, 38.042536769333786, -3.8667533070091773),
(3, 11, 38.039951166938245, -3.860723701395409),
(3, 12, 38.03706126798721, -3.8624617727645028);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contacto`
--
ALTER TABLE `contacto`
  ADD PRIMARY KEY (`idPeticiones`);

--
-- Indices de la tabla `login`
--
ALTER TABLE `login`
  ADD PRIMARY KEY (`usuario`),
  ADD UNIQUE KEY `id` (`id`) USING BTREE;

--
-- Indices de la tabla `mediciones`
--
ALTER TABLE `mediciones`
  ADD PRIMARY KEY (`idMedicion`) USING BTREE;

--
-- Indices de la tabla `parcela`
--
ALTER TABLE `parcela`
  ADD PRIMARY KEY (`idParcela`) USING BTREE,
  ADD KEY `parcela_ibfk_2` (`idUsuario`);

--
-- Indices de la tabla `sensores`
--
ALTER TABLE `sensores`
  ADD PRIMARY KEY (`idSensor`) USING BTREE,
  ADD KEY `sensores_ibfk_4` (`idParcela`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contacto`
--
ALTER TABLE `contacto`
  MODIFY `idPeticiones` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `login`
--
ALTER TABLE `login`
  MODIFY `id` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de la tabla `mediciones`
--
ALTER TABLE `mediciones`
  MODIFY `idMedicion` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT de la tabla `parcela`
--
ALTER TABLE `parcela`
  MODIFY `idParcela` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT de la tabla `sensores`
--
ALTER TABLE `sensores`
  MODIFY `idSensor` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `parcela`
--
ALTER TABLE `parcela`
  ADD CONSTRAINT `parcela_ibfk_2` FOREIGN KEY (`idUsuario`) REFERENCES `login` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Filtros para la tabla `sensores`
--
ALTER TABLE `sensores`
  ADD CONSTRAINT `sensores_ibfk_4` FOREIGN KEY (`idParcela`) REFERENCES `parcela` (`idParcela`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
