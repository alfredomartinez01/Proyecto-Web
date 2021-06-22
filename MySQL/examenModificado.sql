-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: examen
-- ------------------------------------------------------
-- Server version	5.7.31

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `admin` (
  `idAdmin` int(11) NOT NULL AUTO_INCREMENT,
  `usuario` varchar(30) NOT NULL,
  `password` varchar(30) DEFAULT NULL,
  `correoElect` varchar(60) NOT NULL,
  PRIMARY KEY (`idAdmin`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'Alfredo','Alfredo','Alfredo');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `alumno`
--

DROP TABLE IF EXISTS `alumno`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alumno` (
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
  `telefono` bigint(20) NOT NULL,
  `correoElect` varchar(60) DEFAULT NULL,
  PRIMARY KEY (`curp`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `alumno`
--

LOCK TABLES `alumno` WRITE;
/*!40000 ALTER TABLE `alumno` DISABLE KEYS */;
INSERT INTO `alumno` VALUES ('MARA011116HMCRZLA7','2020630295','Alfredo','Martínez','Ruiz','2021-06-17 00:00:00','M','CECyT3','Durango','',10,'Primera_opcion','Mangolias Av 245353','asdasd',53452,5522588620,'kit_586@hotmail.es'),('MARA011116HMCRZLA8','2020630296','Alfredo','MArtínez','Ruiz','1999-02-09 00:00:00','M','CECyT5','Edo de Mexico','Cetis 95',9.5,'Cuarta_opcion','sdfdsf 254','Gustavo A Madero',54934,5522588620,'alfredomartinezruiz01@gmail.com'),('MARA011116HMCRZLA9','2020630297','Alfredo','Martínez','Ruiz','2021-06-08 00:00:00','M','CECyT11','Guerrero','',10,'Segunda_opcion','DFSDF 45542','Gustavo A Madero',55555,5532983339,'kit_586@hotmail.es');
/*!40000 ALTER TABLE `alumno` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `examen`
--

DROP TABLE IF EXISTS `examen`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `examen` (
  `examenID` int(11) NOT NULL AUTO_INCREMENT,
  `grupo` varchar(30) DEFAULT NULL,
  `hora` time DEFAULT NULL,
  `curp` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`examenID`),
  KEY `grupo` (`grupo`),
  KEY `curp` (`curp`),
  CONSTRAINT `examen_ibfk_1` FOREIGN KEY (`grupo`) REFERENCES `grupo` (`grupo`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `examen_ibfk_2` FOREIGN KEY (`curp`) REFERENCES `alumno` (`curp`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=59 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `examen`
--

LOCK TABLES `examen` WRITE;
/*!40000 ALTER TABLE `examen` DISABLE KEYS */;
INSERT INTO `examen` VALUES (56,'1CM1','08:00:00','MARA011116HMCRZLA7'),(57,'1CM1','08:00:00','MARA011116HMCRZLA8'),(58,'1CM1','08:00:00','MARA011116HMCRZLA9');
/*!40000 ALTER TABLE `examen` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `grupo`
--

DROP TABLE IF EXISTS `grupo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `grupo` (
  `grupo` varchar(30) NOT NULL,
  `salon` int(11) DEFAULT NULL,
  PRIMARY KEY (`grupo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `grupo`
--

LOCK TABLES `grupo` WRITE;
/*!40000 ALTER TABLE `grupo` DISABLE KEYS */;
INSERT INTO `grupo` VALUES ('1CM1',1),('1CM10',4),('1CM11',5),('1CM12',6),('1CM2',2),('1CM3',3),('1CM4',4),('1CM5',5),('1CM6',6),('1CM7',1),('1CM8',2),('1CM9',3),('1CV13',1),('1CV14',2),('1CV15',3),('1CV16',4),('1CV17',5),('1CV18',6),('1CV19',1),('1CV20',2),('1CV21',3),('1CV22',4),('1CV23',5),('1CV24',6);
/*!40000 ALTER TABLE `grupo` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-06-22  2:34:11
