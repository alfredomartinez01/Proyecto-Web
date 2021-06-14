-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 14-06-2021 a las 01:01:11
-- Versión del servidor: 5.7.31
-- Versión de PHP: 7.3.21

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `examen`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `admin`
--

DROP TABLE IF EXISTS `admin`;
CREATE TABLE IF NOT EXISTS `admin` (
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(30) NOT NULL,
  `password` varchar(30) DEFAULT NULL,
  `correoElect` varchar(60) NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `alumno`
--

DROP TABLE IF EXISTS `alumno`;
CREATE TABLE IF NOT EXISTS `alumno` (
  `curp` varchar(30) NOT NULL,
  `noBoleta` varchar(30) DEFAULT NULL,
  `nombre` varchar(30) DEFAULT NULL,
  `apPaterno` varchar(30) DEFAULT NULL,
  `apMaterno` varchar(30) DEFAULT NULL,
  `fechaNacimiento` datetime DEFAULT NULL,
  `genero` varchar(30) DEFAULT NULL,
  `escProcedencia` varchar(30) DEFAULT NULL,
  `entFedProced` varchar(30) DEFAULT NULL,
  `nomEsc` varchar(30) DEFAULT NULL,
  `promedio` float DEFAULT NULL,
  `escom` varchar(30) DEFAULT NULL,
  `calleYNum` varchar(30) DEFAULT NULL,
  `Colonia` varchar(30) DEFAULT NULL,
  `codigoPostal` int(11) DEFAULT NULL,
  `telefono` int(11) DEFAULT NULL,
  `correoElect` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`curp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `examen`
--

DROP TABLE IF EXISTS `examen`;
CREATE TABLE IF NOT EXISTS `examen` (
  `examenID` int(11) NOT NULL AUTO_INCREMENT,
  `grupo` varchar(30) DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `curp` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`examenID`),
  KEY `grupo` (`grupo`),
  KEY `curp` (`curp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `grupo`
--

DROP TABLE IF EXISTS `grupo`;
CREATE TABLE IF NOT EXISTS `grupo` (
  `grupo` varchar(30) NOT NULL,
  `salon` int(11) DEFAULT NULL,
  PRIMARY KEY (`grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `examen`
--
ALTER TABLE `examen`
  ADD CONSTRAINT `examen_ibfk_1` FOREIGN KEY (`grupo`) REFERENCES `grupo` (`grupo`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `examen_ibfk_2` FOREIGN KEY (`curp`) REFERENCES `alumno` (`curp`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
