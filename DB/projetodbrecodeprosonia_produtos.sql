-- MySQL dump 10.13  Distrib 8.0.22, for Win64 (x86_64)
--
-- Host: localhost    Database: projetodbrecodeprosonia
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
-- Table structure for table `produtos`
--

DROP TABLE IF EXISTS `produtos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `produtos` (
  `idproduto` int(11) NOT NULL AUTO_INCREMENT,
  `categoria` varchar(30) NOT NULL,
  `descricao` varchar(150) NOT NULL,
  `preco` decimal(5,2) DEFAULT NULL,
  `preco_final` decimal(5,2) DEFAULT NULL,
  `imagem` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`idproduto`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `produtos`
--

LOCK TABLES `produtos` WRITE;
/*!40000 ALTER TABLE `produtos` DISABLE KEYS */;
INSERT INTO `produtos` VALUES (1,'buquet','Rosas Vermelhas com 24 Flores',224.00,201.00,'buquet/amarelas.JPG'),(2,'buquet','Rosas Coloridas com 18 Flores',154.00,132.00,'buquet/colorido1.JPG'),(3,'buquet','Rosas Amarelas com 18 Flores',224.00,201.60,'buquet/vermelhas.JPG'),(4,'buquet','Buquet Elegante com 18 Flores',138.00,135.00,'buquet/elegante.JPG'),(5,'buquet','Buquet Rosas 18 FLores',194.20,155.35,'buquet/rosas.JPG'),(6,'vaso','Vaso com Flores de diversas',187.00,187.00,'vaso/colorido.JPG'),(7,'vaso','Vaso com flores de Girassol muito lindo',187.00,159.60,'vaso/girassol.JPG'),(8,'orquidea','Phalaenophisis Branca',154.00,154.00,'orquidea/branca.JPG'),(9,'orquidea','Orquidea Cattleya Amarela',86.00,86.00,'orquidea/cattleya.JPG'),(10,'orquidea','Orquidea Vanda Roxa',224.00,224.00,'orquidea/vanda1.JPG'),(11,'orquidea','Mini Orquidea Roxa',105.00,105.00,'orquidea/mini.JPG'),(12,'cesta','Cesta Cafe Azul',154.00,138.00,'cesta/azul.JPG'),(13,'cesta','Cesta Cafe Delicinha',154.00,154.00,'cesta/delicia.JPG'),(14,'cesta','Cesta Cafe Docinho',187.00,187.00,'cesta/docinho.JPG');
/*!40000 ALTER TABLE `produtos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-01-31 17:01:50
