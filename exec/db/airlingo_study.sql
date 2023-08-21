-- MySQL dump 10.13  Distrib 8.0.33, for Win64 (x86_64)
--
-- Host: localhost    Database: airlingo
-- ------------------------------------------------------
-- Server version	8.0.33-0ubuntu0.20.04.2

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
-- Table structure for table `study`
--

DROP TABLE IF EXISTS `study`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `study` (
  `study_time` int NOT NULL,
  `study_created_date` datetime(6) DEFAULT NULL,
  `study_id` bigint NOT NULL AUTO_INCREMENT,
  `study_modified_date` datetime(6) DEFAULT NULL,
  PRIMARY KEY (`study_id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `study`
--

LOCK TABLES `study` WRITE;
/*!40000 ALTER TABLE `study` DISABLE KEYS */;
INSERT INTO `study` VALUES (30,'2023-08-03 12:30:00.000000',1,'2023-08-03 13:00:00.000000'),(55,'2023-08-05 14:00:00.000000',2,'2023-08-05 14:55:00.000000'),(28,'2023-08-07 14:00:00.000000',3,'2023-08-07 14:28:00.000000'),(33,'2023-08-08 14:00:00.000000',4,'2023-08-08 14:33:00.000000'),(40,'2023-08-10 14:00:00.000000',5,'2023-08-10 14:40:00.000000'),(45,'2023-08-11 14:00:00.000000',6,'2023-08-11 14:45:00.000000'),(70,'2023-08-12 14:00:00.000000',7,'2023-08-12 15:10:00.000000'),(38,'2023-08-14 14:00:00.000000',8,'2023-08-14 14:38:00.000000'),(20,'2023-08-15 14:00:00.000000',9,'2023-08-15 14:20:00.000000'),(40,'2023-08-18 14:00:00.000000',10,'2023-08-18 14:40:00.000000'),(26,'2023-08-22 14:00:00.000000',11,'2023-08-22 14:26:00.000000'),(10,'2023-08-26 14:00:00.000000',12,'2023-08-26 14:10:00.000000'),(25,'2023-08-28 14:00:00.000000',13,'2023-08-28 14:25:00.000000'),(30,'2023-08-29 14:00:00.000000',14,'2023-08-29 14:30:00.000000'),(0,'2023-08-16 09:23:42.910578',15,'2023-08-16 09:23:42.910578'),(0,'2023-08-16 09:26:13.474521',16,'2023-08-16 09:26:13.474521'),(0,'2023-08-16 09:28:33.597691',17,'2023-08-16 09:28:33.597691'),(1,'2023-08-16 09:29:23.675692',18,'2023-08-16 09:30:45.377333'),(1,'2023-08-16 09:31:33.751766',19,'2023-08-16 09:32:37.747258'),(0,'2023-08-16 09:34:03.831777',20,'2023-08-16 09:34:03.831777'),(1,'2023-08-16 10:45:09.360082',21,'2023-08-16 10:46:31.737391');
/*!40000 ALTER TABLE `study` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-08-16 11:03:44
