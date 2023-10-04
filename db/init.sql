-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: secreto-link
-- ------------------------------------------------------
-- Server version	8.1.0

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
-- Table structure for table `activities`
--

DROP TABLE IF EXISTS `activities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `activities` (
  `id_activity` int NOT NULL AUTO_INCREMENT,
  `id_itinerary` int NOT NULL,
  `activity_name` varchar(50) NOT NULL,
  `activity_description` varchar(200) NOT NULL,
  `activity_price` int DEFAULT (0),
  `activity_status` tinyint NOT NULL,
  PRIMARY KEY (`id_activity`),
  KEY `id_itinerary` (`id_itinerary`),
  CONSTRAINT `activities_ibfk_1` FOREIGN KEY (`id_itinerary`) REFERENCES `itineraries` (`id_itinerary`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `activities`
--

LOCK TABLES `activities` WRITE;
/*!40000 ALTER TABLE `activities` DISABLE KEYS */;
INSERT INTO `activities` VALUES (1,1,'Cartagena\'s Turibus','Toured bus around caragena\'s city',30000,1),(2,1,'Cartagena\'s Toured walk','Toured walk around the city\'s walls',20000,1);
/*!40000 ALTER TABLE `activities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `additional_people`
--

DROP TABLE IF EXISTS `additional_people`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `additional_people` (
  `id_additional_people` int NOT NULL AUTO_INCREMENT,
  `id_client` int NOT NULL,
  `id_document_type` int NOT NULL,
  `document_number_additional_people` varchar(20) NOT NULL,
  `id_health_information` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `name_additional_people` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id_additional_people`),
  KEY `id_client` (`id_client`),
  KEY `id_document_type` (`id_document_type`),
  KEY `id_health_information` (`id_health_information`),
  CONSTRAINT `additional_people_ibfk_1` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`),
  CONSTRAINT `additional_people_ibfk_2` FOREIGN KEY (`id_document_type`) REFERENCES `document_types` (`id_document_type`),
  CONSTRAINT `additional_people_ibfk_3` FOREIGN KEY (`id_health_information`) REFERENCES `health_information` (`id_health_information`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `additional_people`
--

LOCK TABLES `additional_people` WRITE;
/*!40000 ALTER TABLE `additional_people` DISABLE KEYS */;
/*!40000 ALTER TABLE `additional_people` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agencies`
--

DROP TABLE IF EXISTS `agencies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agencies` (
  `id_agencie` int NOT NULL AUTO_INCREMENT,
  `name_agencie` varchar(50) NOT NULL,
  PRIMARY KEY (`id_agencie`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agencies`
--

LOCK TABLES `agencies` WRITE;
/*!40000 ALTER TABLE `agencies` DISABLE KEYS */;
INSERT INTO `agencies` VALUES (1,'Vuelo Secreto');
/*!40000 ALTER TABLE `agencies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agent_types`
--

DROP TABLE IF EXISTS `agent_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agent_types` (
  `id_agent_type` int NOT NULL AUTO_INCREMENT,
  `name_agent_type` varchar(30) NOT NULL,
  PRIMARY KEY (`id_agent_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agent_types`
--

LOCK TABLES `agent_types` WRITE;
/*!40000 ALTER TABLE `agent_types` DISABLE KEYS */;
INSERT INTO `agent_types` VALUES (1,'Administrator'),(2,'Agent'),(3,'SuperAdmin');
/*!40000 ALTER TABLE `agent_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `agents`
--

DROP TABLE IF EXISTS `agents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `agents` (
  `id_agent` int NOT NULL AUTO_INCREMENT,
  `name_agent` varchar(50) NOT NULL,
  `phone_agent` varchar(20) NOT NULL,
  `id_document_type` int NOT NULL,
  `id_agent_type` int NOT NULL,
  `id_headquarter` int NOT NULL,
  `document_number_agent` varchar(20) NOT NULL,
  `user_name_agent` varchar(20) NOT NULL,
  `user_password_agent` varchar(300) NOT NULL,
  `user_mail_agent` varchar(100) NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `modified_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_agent`),
  KEY `id_document_type` (`id_document_type`),
  KEY `id_agent_type` (`id_agent_type`),
  KEY `id_headquarter` (`id_headquarter`),
  CONSTRAINT `agents_ibfk_1` FOREIGN KEY (`id_document_type`) REFERENCES `document_types` (`id_document_type`),
  CONSTRAINT `agents_ibfk_2` FOREIGN KEY (`id_agent_type`) REFERENCES `agent_types` (`id_agent_type`),
  CONSTRAINT `agents_ibfk_3` FOREIGN KEY (`id_headquarter`) REFERENCES `headquarters` (`id_headquarter`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `agents`
--

LOCK TABLES `agents` WRITE;
/*!40000 ALTER TABLE `agents` DISABLE KEYS */;
INSERT INTO `agents` VALUES (1,'Samuel','3043346953',1,2,1,'1000413879','Samuel3879','$2b$10$MG.kuXOtwsgDxggdzoTafOiT/O8GdOmSs7uaszKN6mWAjXmUplZeC','superajke@gmail.com','2023-09-16 19:07:33','2023-09-16 19:07:33'),(2,'Geffrey','3043346952',1,1,1,'1000419999','Geffrey9999','$2b$10$gJNooS5LRo7Wd5aLOYIrSenZEivcZnODlzekpH7fKULbXn/BS9RgK','Geffrey@gmail.com','2023-09-16 19:11:12','2023-09-16 19:11:12'),(3,'Juan','3043346952',1,2,1,'12313123','Juan3123','$2b$10$gqAfJjjCRCw3yOfWUF3YgutfxJVYfefBe6q3Ihb70s6aVs4Qz5B6y','juan@gmail.com','2023-09-21 00:13:41','2023-09-21 00:13:42'),(4,'David','3043346432',1,3,1,'123321','David3321','$2b$10$3USaKKZVsaLjv69RfDtVtuGTgcRoKCXlnysEjVtfdp9FguBqzt.aq','david@gmail.com','2023-09-26 16:51:48','2023-09-26 16:51:49');
/*!40000 ALTER TABLE `agents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auditory_sesion`
--

DROP TABLE IF EXISTS `auditory_sesion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `auditory_sesion` (
  `id_auditory_sesion` int NOT NULL AUTO_INCREMENT,
  `login_time` datetime DEFAULT CURRENT_TIMESTAMP,
  `logout_time` datetime DEFAULT NULL,
  `message_end_session` varchar(255) DEFAULT NULL,
  `id_agent` int NOT NULL,
  PRIMARY KEY (`id_auditory_sesion`),
  KEY `id_agent` (`id_agent`),
  CONSTRAINT `auditory_sesion_ibfk_1` FOREIGN KEY (`id_agent`) REFERENCES `agents` (`id_agent`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auditory_sesion`
--

LOCK TABLES `auditory_sesion` WRITE;
/*!40000 ALTER TABLE `auditory_sesion` DISABLE KEYS */;
/*!40000 ALTER TABLE `auditory_sesion` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `clients`
--

DROP TABLE IF EXISTS `clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `clients` (
  `id_client` int NOT NULL AUTO_INCREMENT,
  `id_document_type` int NOT NULL,
  `client_document_number` varchar(20) NOT NULL,
  `client_name` varchar(30) NOT NULL,
  `client_middle_name` varchar(30) DEFAULT NULL,
  `client_lastname` varchar(30) NOT NULL,
  `client_second_lastname` varchar(30) DEFAULT NULL,
  `client_city` varchar(30) NOT NULL,
  `client_mail` varchar(100) NOT NULL,
  `client_password` varchar(300) NOT NULL,
  `client_address` varchar(100) NOT NULL,
  `id_health_information` int NOT NULL,
  `client_birth_date` datetime NOT NULL,
  `client_phone_number` varchar(20) DEFAULT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id_client`),
  KEY `id_document_type` (`id_document_type`),
  KEY `id_health_information` (`id_health_information`),
  CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`id_document_type`) REFERENCES `document_types` (`id_document_type`),
  CONSTRAINT `clients_ibfk_2` FOREIGN KEY (`id_health_information`) REFERENCES `health_information` (`id_health_information`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `clients`
--

LOCK TABLES `clients` WRITE;
/*!40000 ALTER TABLE `clients` DISABLE KEYS */;
/*!40000 ALTER TABLE `clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `destinations`
--

DROP TABLE IF EXISTS `destinations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `destinations` (
  `id_destination` int NOT NULL AUTO_INCREMENT,
  `destination_name` varchar(30) NOT NULL,
  `destination_status` tinyint NOT NULL,
  `id_agencie` int NOT NULL,
  PRIMARY KEY (`id_destination`),
  KEY `id_agencie` (`id_agencie`),
  CONSTRAINT `destinations_ibfk_1` FOREIGN KEY (`id_agencie`) REFERENCES `agencies` (`id_agencie`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `destinations`
--

LOCK TABLES `destinations` WRITE;
/*!40000 ALTER TABLE `destinations` DISABLE KEYS */;
INSERT INTO `destinations` VALUES (1,'Cartagena',1,1),(2,'Comuna-13',1,1),(3,'Plaza botero',1,1),(4,'Santa Marta',1,1),(5,'Catacumbo',1,1);
/*!40000 ALTER TABLE `destinations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `document_types`
--

DROP TABLE IF EXISTS `document_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `document_types` (
  `id_document_type` int NOT NULL AUTO_INCREMENT,
  `name_document_type` varchar(40) NOT NULL,
  `status_document_type` tinyint NOT NULL,
  PRIMARY KEY (`id_document_type`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `document_types`
--

LOCK TABLES `document_types` WRITE;
/*!40000 ALTER TABLE `document_types` DISABLE KEYS */;
INSERT INTO `document_types` VALUES (1,'Citizenship card',1),(2,'Immigration card',1),(3,'Passport',1),(4,'Identity card',1),(5,' Civil Registry',1),(6,'NIT',1),(7,'RUT',1);
/*!40000 ALTER TABLE `document_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `eps`
--

DROP TABLE IF EXISTS `eps`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `eps` (
  `id_eps` int NOT NULL AUTO_INCREMENT,
  `name_eps` varchar(30) NOT NULL,
  `status_eps` tinyint NOT NULL,
  PRIMARY KEY (`id_eps`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `eps`
--

LOCK TABLES `eps` WRITE;
/*!40000 ALTER TABLE `eps` DISABLE KEYS */;
INSERT INTO `eps` VALUES (1,'Sura',1),(2,'Coomeva',1),(3,'Sanitas',1),(4,'Salud total',1),(5,'Nueva EPS',1),(6,'Compensar',1),(7,'Cafesalud',1),(8,'Famisanar',1),(9,'Medimas',1),(10,'Aliansalud',1),(11,'Saludvida',1),(12,'Cruz blanca',1),(13,'Colmedica',1),(14,'Asmet salud',1);
/*!40000 ALTER TABLE `eps` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `food_types`
--

DROP TABLE IF EXISTS `food_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `food_types` (
  `id_food_type` int NOT NULL AUTO_INCREMENT,
  `food_name` varchar(30) NOT NULL,
  `food_description` varchar(200) NOT NULL,
  `food_price` int NOT NULL,
  `food_status` tinyint NOT NULL,
  PRIMARY KEY (`id_food_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `food_types`
--

LOCK TABLES `food_types` WRITE;
/*!40000 ALTER TABLE `food_types` DISABLE KEYS */;
INSERT INTO `food_types` VALUES (1,'PAM','Breakfast, lunch and dinner',40000,1),(2,'FULL','Unlimited buffet breakfast, lunch and dinner, open bar and snacks',60000,1),(3,'City\'s Restaurants Pass','Pass to eat on any tour\'s city\'s restaurant	',100000,1);
/*!40000 ALTER TABLE `food_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `headquarters`
--

DROP TABLE IF EXISTS `headquarters`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `headquarters` (
  `id_headquarter` int NOT NULL AUTO_INCREMENT,
  `name_headquarter` varchar(45) NOT NULL,
  `address_headquarter` varchar(50) NOT NULL,
  `phone_headquarter` varchar(20) NOT NULL,
  `status_headquarter` tinyint NOT NULL,
  `id_agencie` int NOT NULL,
  PRIMARY KEY (`id_headquarter`),
  KEY `id_agencie` (`id_agencie`),
  CONSTRAINT `headquarters_ibfk_1` FOREIGN KEY (`id_agencie`) REFERENCES `agencies` (`id_agencie`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `headquarters`
--

LOCK TABLES `headquarters` WRITE;
/*!40000 ALTER TABLE `headquarters` DISABLE KEYS */;
INSERT INTO `headquarters` VALUES (1,'VivaHQ','CC VIVA ENVIGADO','1234567890',1,1);
/*!40000 ALTER TABLE `headquarters` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `health_information`
--

DROP TABLE IF EXISTS `health_information`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `health_information` (
  `id_health_information` int NOT NULL AUTO_INCREMENT,
  `id_rh` int DEFAULT NULL,
  `id_eps` int DEFAULT NULL,
  `health_card` varchar(20) DEFAULT NULL,
  `health_diseases` tinyint NOT NULL,
  `health_details` varchar(200) NOT NULL,
  PRIMARY KEY (`id_health_information`),
  KEY `id_rh` (`id_rh`),
  KEY `id_eps` (`id_eps`),
  CONSTRAINT `health_information_ibfk_1` FOREIGN KEY (`id_rh`) REFERENCES `rh_types` (`id_rh`),
  CONSTRAINT `health_information_ibfk_2` FOREIGN KEY (`id_eps`) REFERENCES `eps` (`id_eps`)
) ENGINE=InnoDB AUTO_INCREMENT=34 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `health_information`
--

LOCK TABLES `health_information` WRITE;
/*!40000 ALTER TABLE `health_information` DISABLE KEYS */;
INSERT INTO `health_information` VALUES (1,2,1,NULL,NULL,NULL),(2,1,1,NULL,NULL,NULL),(3,1,1,NULL,NULL,NULL),(4,1,1,NULL,NULL,NULL),(5,1,1,NULL,NULL,NULL),(6,1,1,NULL,NULL,NULL),(7,1,1,NULL,NULL,NULL),(8,5,9,NULL,'Aguevado','Mero gatacho');
/*!40000 ALTER TABLE `health_information` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hotels`
--

DROP TABLE IF EXISTS `hotels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hotels` (
  `id_hotel` int NOT NULL AUTO_INCREMENT,
  `hotel_name` varchar(300) NOT NULL,
  `hotel_status` tinyint NOT NULL,
  `hotel_stars` int NOT NULL,
  `id_destination` int NOT NULL,
  PRIMARY KEY (`id_hotel`),
  KEY `id_destination` (`id_destination`),
  CONSTRAINT `hotels_ibfk_1` FOREIGN KEY (`id_destination`) REFERENCES `destinations` (`id_destination`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hotels`
--

LOCK TABLES `hotels` WRITE;
/*!40000 ALTER TABLE `hotels` DISABLE KEYS */;
INSERT INTO `hotels` VALUES (1,'Sofitel Legend Santa Clara Cartagena',1,5,1),(2,'Hotel Cartagena Plaza',1,4,1),(3,'Hotel Boutique Don Pepe',1,5,4),(4,'Best Western Plus Santa Marta Hotel',1,4,4);
/*!40000 ALTER TABLE `hotels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itineraries`
--

DROP TABLE IF EXISTS `itineraries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itineraries` (
  `id_itinerary` int NOT NULL AUTO_INCREMENT,
  `itinerary_name` varchar(50) NOT NULL,
  `itinerary_status` tinyint NOT NULL,
  PRIMARY KEY (`id_itinerary`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itineraries`
--

LOCK TABLES `itineraries` WRITE;
/*!40000 ALTER TABLE `itineraries` DISABLE KEYS */;
INSERT INTO `itineraries` VALUES (1,'Cartagena Turibus and toured walk',1);
/*!40000 ALTER TABLE `itineraries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operation_status`
--

DROP TABLE IF EXISTS `operation_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation_status` (
  `id_operation_status` int NOT NULL AUTO_INCREMENT,
  `operation_status_name` varchar(50) DEFAULT NULL,
  `operation_status_status` tinyint NOT NULL,
  PRIMARY KEY (`id_operation_status`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation_status`
--

LOCK TABLES `operation_status` WRITE;
/*!40000 ALTER TABLE `operation_status` DISABLE KEYS */;
INSERT INTO `operation_status` VALUES (1,'In progress',1),(2,'Cancelled',1),(3,'Finished',1);
/*!40000 ALTER TABLE `operation_status` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operation_status_audit`
--

DROP TABLE IF EXISTS `operation_status_audit`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operation_status_audit` (
  `id_operation_status_audit` int NOT NULL AUTO_INCREMENT,
  `id_operation_status` int NOT NULL,
  `id_operation` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id_operation_status_audit`),
  KEY `id_operation_status` (`id_operation_status`),
  KEY `id_operation` (`id_operation`),
  CONSTRAINT `operation_status_audit_ibfk_1` FOREIGN KEY (`id_operation_status`) REFERENCES `operation_status` (`id_operation_status`),
  CONSTRAINT `operation_status_audit_ibfk_2` FOREIGN KEY (`id_operation`) REFERENCES `operations` (`id_operation`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operation_status_audit`
--

LOCK TABLES `operation_status_audit` WRITE;
/*!40000 ALTER TABLE `operation_status_audit` DISABLE KEYS */;
/*!40000 ALTER TABLE `operation_status_audit` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `operations`
--

DROP TABLE IF EXISTS `operations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `operations` (
  `id_operation` int NOT NULL AUTO_INCREMENT,
  `id_agent` int NOT NULL,
  `id_client` int NOT NULL,
  `id_travel_pack` int DEFAULT NULL,
  `id_operation_status` int NOT NULL,
  `operation_price` int NOT NULL,
  `operation_travelers_count` int NOT NULL,
  `created_at` datetime DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL,
  `operation_start_date` datetime DEFAULT NULL,
  PRIMARY KEY (`id_operation`),
  KEY `id_agent` (`id_agent`),
  KEY `id_client` (`id_client`),
  KEY `id_travel_pack` (`id_travel_pack`),
  KEY `id_operation_status` (`id_operation_status`),
  CONSTRAINT `operations_ibfk_1` FOREIGN KEY (`id_agent`) REFERENCES `agents` (`id_agent`),
  CONSTRAINT `operations_ibfk_2` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id_client`),
  CONSTRAINT `operations_ibfk_3` FOREIGN KEY (`id_travel_pack`) REFERENCES `travel_packs` (`id_travel_pack`),
  CONSTRAINT `operations_ibfk_4` FOREIGN KEY (`id_operation_status`) REFERENCES `operation_status` (`id_operation_status`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `operations`
--

LOCK TABLES `operations` WRITE;
/*!40000 ALTER TABLE `operations` DISABLE KEYS */;
/*!40000 ALTER TABLE `operations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rh_types`
--

DROP TABLE IF EXISTS `rh_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `rh_types` (
  `id_rh` int NOT NULL AUTO_INCREMENT,
  `name_rh` varchar(10) NOT NULL,
  PRIMARY KEY (`id_rh`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rh_types`
--

LOCK TABLES `rh_types` WRITE;
/*!40000 ALTER TABLE `rh_types` DISABLE KEYS */;
INSERT INTO `rh_types` VALUES (1,'A+'),(2,'A-'),(3,'B+'),(4,'B-'),(5,'AB+'),(6,'AB-'),(7,'O+'),(8,'O-');
/*!40000 ALTER TABLE `rh_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `room_types`
--

DROP TABLE IF EXISTS `room_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `room_types` (
  `id_room_type` int NOT NULL AUTO_INCREMENT,
  `room_name` varchar(30) NOT NULL,
  `room_description` varchar(300) NOT NULL,
  `room_capability` int NOT NULL,
  `room_status` tinyint NOT NULL,
  `id_hotel` int NOT NULL,
  PRIMARY KEY (`id_room_type`),
  KEY `id_hotel` (`id_hotel`),
  CONSTRAINT `room_types_ibfk_1` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id_hotel`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `room_types`
--

LOCK TABLES `room_types` WRITE;
/*!40000 ALTER TABLE `room_types` DISABLE KEYS */;
INSERT INTO `room_types` VALUES (1,'Couple','Room for 2 people',2,1,1),(2,'Family Room','Family room, includes 4 beds, 1 bathroom 2 televisions',4,1,2),(3,'Single Room','Room for one person, comes with one bed one bathroom and a television',1,1,1);
/*!40000 ALTER TABLE `room_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transports`
--

DROP TABLE IF EXISTS `transports`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `transports` (
  `id_transport` int NOT NULL AUTO_INCREMENT,
  `transport_name` varchar(50) NOT NULL,
  `transport_description` varchar(200) NOT NULL,
  `transport_price` int NOT NULL,
  `transport_status` tinyint NOT NULL,
  PRIMARY KEY (`id_transport`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transports`
--

LOCK TABLES `transports` WRITE;
/*!40000 ALTER TABLE `transports` DISABLE KEYS */;
INSERT INTO `transports` VALUES (1,'Airplane','Avianca standard seat',200000,1),(2,'Bus','Coonorte standard seat',100000,1),(3,'Helicopter','Helicopter :)',300000,1),(4,'Private Driver','Private',80000,1);
/*!40000 ALTER TABLE `transports` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `travel_packs`
--

DROP TABLE IF EXISTS `travel_packs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `travel_packs` (
  `id_travel_pack` int NOT NULL AUTO_INCREMENT,
  `id_food_type` int DEFAULT NULL,
  `id_room_type` int DEFAULT NULL,
  `id_transport` int DEFAULT NULL,
  `id_destination` int NOT NULL,
  `id_itinerary` int DEFAULT NULL,
  `id_hotel` int DEFAULT NULL,
  `travelpack_price` int NOT NULL,
  `travelpack_status` tinyint NOT NULL,
  `travelpack_description` varchar(255) NOT NULL,
  `travelpack_days` int NOT NULL,
  PRIMARY KEY (`id_travel_pack`),
  KEY `travel_packs_ibfk_1` (`id_food_type`),
  KEY `travel_packs_ibfk_2` (`id_room_type`),
  KEY `travel_packs_ibfk_3` (`id_transport`),
  KEY `travel_packs_ibfk_5` (`id_itinerary`),
  KEY `travel_packs_ibfk_6` (`id_hotel`),
  KEY `travel_packs_ibfk_4` (`id_destination`),
  CONSTRAINT `travel_packs_ibfk_1` FOREIGN KEY (`id_food_type`) REFERENCES `food_types` (`id_food_type`),
  CONSTRAINT `travel_packs_ibfk_2` FOREIGN KEY (`id_room_type`) REFERENCES `room_types` (`id_room_type`),
  CONSTRAINT `travel_packs_ibfk_3` FOREIGN KEY (`id_transport`) REFERENCES `transports` (`id_transport`),
  CONSTRAINT `travel_packs_ibfk_4` FOREIGN KEY (`id_destination`) REFERENCES `destinations` (`id_destination`),
  CONSTRAINT `travel_packs_ibfk_5` FOREIGN KEY (`id_itinerary`) REFERENCES `itineraries` (`id_itinerary`),
  CONSTRAINT `travel_packs_ibfk_6` FOREIGN KEY (`id_hotel`) REFERENCES `hotels` (`id_hotel`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `travel_packs`
--

LOCK TABLES `travel_packs` WRITE;
/*!40000 ALTER TABLE `travel_packs` DISABLE KEYS */;
INSERT INTO `travel_packs` VALUES (1,1,1,2,1,1,1,1400000,1,'Cartagena\'s travel',5),(2,NULL,NULL,NULL,2,NULL,NULL,80000,1,'Guided tour into Medellin\'s Comuna-13.',1),(3,NULL,NULL,NULL,3,NULL,NULL,45000,1,'Guided visit to Medellin\'s Plaza botero',1),(4,1,1,2,2,1,1,1400000,0,'SISAS',5);
/*!40000 ALTER TABLE `travel_packs` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-03 17:43:18
