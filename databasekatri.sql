-- MySQL dump 10.13  Distrib 5.7.17, for macos10.12 (x86_64)
--
-- Host: 127.0.0.1    Database: datenight_db
-- ------------------------------------------------------
-- Server version	5.6.35

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `dates`
--

DROP TABLE IF EXISTS `dates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `dates` (
  `id` int(50) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `uid` varchar(255) DEFAULT NULL,
  `answer1` varchar(255) DEFAULT NULL,
  `answer2` varchar(255) DEFAULT NULL,
  `answer3` varchar(255) DEFAULT NULL,
  `answer4` varchar(255) DEFAULT NULL,
  `answer5` varchar(255) DEFAULT NULL,
  `answer6` varchar(255) DEFAULT NULL,
  `answer7` varchar(255) DEFAULT NULL,
  `answer8` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `dates`
--

LOCK TABLES `dates` WRITE;
/*!40000 ALTER TABLE `dates` DISABLE KEYS */;
INSERT INTO `dates` VALUES (1,'katriyay@gmail.com','123456',NULL,'Q1A2','Q1A2','Q1A1',NULL,NULL,NULL,NULL,NULL),(2,'hello1@gmail.com','123456',NULL,'Q1A2','Q1A2','Q1A1',NULL,NULL,NULL,NULL,NULL),(3,'hello2@gmail.com','123456',NULL,'Q1A2','Q1A2','Q1A1',NULL,NULL,NULL,NULL,NULL),(4,'hello3@gmail.com','123456',NULL,'Q1A2','Q1A2','Q1A1',NULL,NULL,NULL,NULL,NULL),(5,'katri134@gmail.com','123456',NULL,'Q1A2','Q1A2','Q1A1',NULL,NULL,NULL,NULL,NULL),(6,'TESTERASHLEY@GMAIL.COM','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(7,'SOS@GMAIL.COM','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(8,'SOS1@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(9,'SOS2@GMAIL.COM','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(10,'sostester@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(11,'helpus@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(12,'soshelp@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(13,'weneedhelp@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(14,'whooooooo@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(15,'snkvfkfdjv@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(16,'lknvkjnv@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(17,'knegvkjvb@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(18,'wlrmvvn@gmail.com','123456',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(19,'djkvnkjvn@gmail.com','123456','8z2vS26EbIguM6PYmCwa3PJdTjZ2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(20,'kdjnvkv@gmail.com','123456','IJsB6Y4yuOdYu7nRIYpjQlPGxhf1','Fishing','Kayaking','Build a Fort','Cook Together','Dancing','Restaurant','Italian','Thai'),(21,'jknvkdjv@gmail.com','123456','IDRMD1g2zDWd2J41sXE8LUuf4UO2','Kayaking','Paddle Boarding','Bake Together','Build a Fort','Dancing','Clubbing','Italian','German'),(22,'sckjnvd@gmail.com','123456','UkNJsBvTUjdv6U5t6qJEzFpJkPl2','Miniature Golf','Rock Climbing','Puzzles','Fondue Night','Restaurant','Dancing','Mongolion','Italian'),(23,'sknvk@gmail.com','123456','GVNcgJojr8Srjl7EdRoy25eE7Ah1','Star Gazing','Paddle Boarding','Fondue Night','Cook Together','Botanical Garden','Concert','Italian','German'),(24,'knvdv@gmail.com','123456','zqbnbFDmgdOjUBDIgEcZXanMKho1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(25,'kjsnckjv@gmail.com','123456','g29KGxlTKvMh6UgJH9ERKO3hBRj1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(26,'djfnvjdk@gmail.com','123456','TxSnWO7IHAfiuu39h1WycufJpPo1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(27,'kjunvbd@gmail.com','123456','BbLEZ4NlEMghhXAve1J7ok5bVwf1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(28,'tyler123@gmail.com','123456','51dWGgOxSIS5Z1Mh70wIPxIruH52',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(29,'tyler1@gmail.com','123456','E7A525ebZcbhYbR7ngxeprdU2dP2','Paddle Boarding','Basketball','Build a Fort','Puzzles','Aerial Yoga','Dancing','Bar Food','Thai'),(30,'kdjnvdvk@gmail.com','123456','LkPSWQGAI7OiUmsFlCNmJi8s5gw1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(31,'jdhbvjd@gmail.com','123456','zfHYZkA9PKfSprpaDCn2jtOtAiA2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(32,'hjdbvv@gmail.com','123456','zQwGy598ynfXV1fxsvO87loGxU72',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(33,'jdbvjkb@gmail.com','123456','Dgv51vOhiWVkMzBeTohxP57Lg6i2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(34,'jhbdvdvb@gmail.com','123456','6uSgMqDYJOcJIA4upl25qD95ZU73',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(35,'jhbsvjhbvs@gmail.com','123456','9pT2EcSFlCMlPMfA74hNMe1Jc7q1','Basketball','Kayaking','Puzzles','Fondue Night','Restaurant','Dancing','Bar Food','German'),(36,'jhbvjdrb@gmail.com','123456','d3qYMy5RshOqQS1Nb6WjW5SFFmx2','Star Gazing','Paddle Boarding','Bake Together','Build a Fort','Dancing','Restaurant','German','Bar Food'),(37,'ksjnvk@gmail.com','123456','YaNpYLgMDIOenJC8FGm3xjw80QE3','Star Gazing','Paddle Boarding','Bake Together','Build a Fort','Clubbing','Bar Hopping','Italian','German'),(38,'jhsbv@gmail.com','123456','7RVXJKzxUTcMDjcXArKs8XM9GdX2','Basketball','Fishing','Puzzles','Fondue Night','Aerial Yoga','Bar Hopping','German','Mongolion'),(39,'ubvkdhbv@gmail.com','123456','NpHrBPoZMCe1QddcHsDZRy6MUUB3','Fishing','Kayaking','Fondue Night','Cook Together','Bar Hopping','Clubbing','Italian','German'),(40,'katri@gmail.com','123456','PxzcOabGPJWNPScwNVk4SL3ER012','Basketball','Fishing','Bake Together','Build a Fort','Clubbing','Dancing','Bar Food','German'),(41,'katri@gmail.com','123456','tHOeZAIG8QcTSkvzL2MQ7yl35yx1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(42,'sjkvbnksvbd@gmail.com','123456','tHOeZAIG8QcTSkvzL2MQ7yl35yx1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(43,'sjbvkvd@gmail.com','123456','xwCl3Dfe1dcAiJ9bQn3q9PdnGQ13',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(44,'katri@gmail.com','123456','PxzcOabGPJWNPScwNVk4SL3ER012',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(45,'katri@gmail.com','123456','PxzcOabGPJWNPScwNVk4SL3ER012',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(46,'katri@gmail.com','123456','PxzcOabGPJWNPScwNVk4SL3ER012',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(47,'katri@gmail.com','123456','PxzcOabGPJWNPScwNVk4SL3ER012',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(48,'skjvv@gmail.com','123456','Oq8lzaYvVVOV6y7nYHZrTwxmLPV2','Star Gazing','Paddle Boarding','Puzzles','Fondue Night','Restaurant','Dancing','Thai','Mongolion'),(49,'courtney@gmail.com','123456','2d3q1lrtwDX67E4HUqSJeToDZO22','Basketball','Fishing','Bake Together','Build a Fort','Aerial Yoga','Bar Hopping','Bar Food','German'),(50,'courtney@gmail.com','123456','2d3q1lrtwDX67E4HUqSJeToDZO22',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(51,'tyler1@gmail.com','123456','E7A525ebZcbhYbR7ngxeprdU2dP2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(52,'katri@gmail.com','123456','PxzcOabGPJWNPScwNVk4SL3ER012',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(53,'katri@gmail.com','123456','PxzcOabGPJWNPScwNVk4SL3ER012',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(54,'vdvbjhv@gmail.com','123456','PxzcOabGPJWNPScwNVk4SL3ER012',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(55,'thisistest@gmail.com','123','QUgvbKnE83a1aPs5IRBr1sOTXAw2','Basketball','Fishing','Bake Together','Build a Fort','Aerial Yoga','Bar Hopping','Bar Food','German'),(56,'thisisatest@gmail.com','123456','QUgvbKnE83a1aPs5IRBr1sOTXAw2',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(57,'hereismysecondtest@gmail.com','123456','2ZnxEyPrmXM0HxJ4gagnUQXTv703','Star Gazing','Paddle Boarding','Puzzles','Fondue Night','Restaurant','Dancing','Thai','Mongolion'),(58,'ilovecats@gmail.com','123456','OUF5uYoTEWQDTkMBK1IHh3GVRs12','Basketball','Fishing','Bake Together','Build a Fort','Aerial Yoga','Bar Hopping','Bar Food','German'),(59,'boo@gmail.com','123456','Aste8wFtkFfyNQDpH6RDMXIszMa2','Basketball','Fishing','Movie Night','Drinking Games','Dancing','Botanical Garden','Mongolion','Italian'),(60,'ksjnvkdj@gmail.com','123456','AoBLIcleJqOUEGt6GxLMUzIPZFw1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(61,'kjsnkvb@gmail.com','123456','052wqjuICJVvCiGMjqNKt8pZjH73','Basketball','Fishing','Bake Together','Build a Fort','Aerial Yoga','Bar Hopping','Bar Food','German'),(62,'uybvshjvbs@gmail.com','123456','KyxIgp6HpAY3N1htp1t10z6XXMk1','Basketball','Fishing','Bake Together','Build a Fort','Aerial Yoga','Bar Hopping','Bar Food','German'),(63,'snbvvbnjvd@gmail.com','123456','eYoaq2Un7YhIZI5aXsZjrzhYEsH2','Basketball','Fishing','Bake Together','Build a Fort','Aerial Yoga','Bar Hopping','Bar Food','German'),(64,'jknvjkvn@gmail.com','123456','XJ2m9UP7aggY1WGK5g7nrDgmean2','Basketball','Fishing','Puzzles','Fondue Night','Day Trip','Zoo','Thai Food','Italian Food');
/*!40000 ALTER TABLE `dates` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-25  9:50:37
