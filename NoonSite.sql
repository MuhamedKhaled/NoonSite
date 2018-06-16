-- MySQL dump 10.13  Distrib 5.7.17, for Win64 (x86_64)
--
-- Host: localhost    Database: heroku_a232b98420ced5b
-- ------------------------------------------------------
-- Server version	5.7.19-log

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(50) NOT NULL,
  `password` varchar(45) NOT NULL,
  `token` varchar(70) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `token_UNIQUE` (`token`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (2,'admin1','afe51abb355b0f7832047a0d080f94eb','096132f7a10c95d227fe5a3f527646c600ead3dbce4f2ddcacc87801731d'),(11,'admin2','4ed372311b75541197fd4795ed24e533',NULL),(12,'admin3','4634d8c661206437260c57140e11a6bd',NULL),(22,'admin4','91091ad2ef4b62be2dc91e34f5a89287',NULL),(31,'admin5','7f74d5d11c63d5eec6db6829152070d3',NULL);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `advertisement`
--

DROP TABLE IF EXISTS `advertisement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advertisement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  `title` text NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advertisement`
--

LOCK TABLES `advertisement` WRITE;
/*!40000 ALTER TABLE `advertisement` DISABLE KEYS */;
INSERT INTO `advertisement` VALUES (1,'jsdnjk','hey'),(12,'url1','title1'),(22,'url1','title1'),(32,'URL2','Advertising Space');
/*!40000 ALTER TABLE `advertisement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` mediumtext NOT NULL,
  `timestamp` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `likes` int(11) NOT NULL DEFAULT '0',
  `post_id` int(11) NOT NULL,
  `replies_to` int(11) DEFAULT NULL,
  `player_id` int(11) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `post_id_idx` (`post_id`),
  KEY `replies_to_idx` (`replies_to`),
  CONSTRAINT `post_id` FOREIGN KEY (`post_id`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `replies_to` FOREIGN KEY (`replies_to`) REFERENCES `comment` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=183 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (31,'first comment','0000-00-00 00:00:00',2,1,NULL,1),(41,'second comment','0000-00-00 00:00:00',2,1,NULL,1),(51,'third comment','0000-00-00 00:00:00',0,1,NULL,1),(72,'first reply to first comment','0000-00-00 00:00:00',2,1,31,1),(82,'second reply to first comment','0000-00-00 00:00:00',5,11,161,1),(91,'Lorem Ipsum is simply dummy text of the printing','0000-00-00 00:00:00',0,1,NULL,1),(101,'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen','0000-00-00 00:00:00',0,1,NULL,1),(131,'haaay','0000-00-00 00:00:00',1,1,NULL,1),(141,'hello guys','0000-00-00 00:00:00',0,1,NULL,1),(151,'hello guys','0000-00-00 00:00:00',2,1,NULL,1),(161,'Comment on second Post !','0000-00-00 00:00:00',4,11,NULL,1),(171,'reply on first comment of the second post','0000-00-00 00:00:00',10,11,161,1),(181,'Second Comment on second Post !','0000-00-00 00:00:00',4,11,NULL,1),(182,'TEEST AGAAAIN','2018-06-17 00:07:49',0,1,NULL,1);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `photo`
--

DROP TABLE IF EXISTS `photo`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `photo` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` text NOT NULL,
  `title` text NOT NULL,
  `description` text NOT NULL,
  `date` date NOT NULL,
  `sport_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sport_id2_idx` (`sport_id`),
  CONSTRAINT `sport_id2` FOREIGN KEY (`sport_id`) REFERENCES `post` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `photo`
--

LOCK TABLES `photo` WRITE;
/*!40000 ALTER TABLE `photo` DISABLE KEYS */;
INSERT INTO `photo` VALUES (1,'https://raw.githubusercontent.com/MuhamedKhaled/NoonSite/UI/NOON/img/Section/little-girl%402x.png','Little Girl','Little Girl playing with a ball.','2018-05-10',1),(2,'https://raw.githubusercontent.com/MuhamedKhaled/NoonSite/UI/NOON/img/Section/basketball%403x.png','Basketball','Girl playing basketball with clothes.','2018-05-10',1),(3,'https://raw.githubusercontent.com/MuhamedKhaled/NoonSite/UI/NOON/img/Section/fashion%403x.png','Fashion','Girl putting nail polish.','2018-05-10',1),(4,'https://raw.githubusercontent.com/MuhamedKhaled/NoonSite/UI/NOON/img/Section/football%403x.png','Football','Girl Standing in Stadium.','2018-05-10',1),(5,'https://raw.githubusercontent.com/MuhamedKhaled/NoonSite/UI/NOON/img/Section/girls%403x.png','Many Girls','A lot of sports summed up in one picture.','2018-05-10',1);
/*!40000 ALTER TABLE `photo` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `player`
--

DROP TABLE IF EXISTS `player`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `player` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `age` int(11) NOT NULL,
  `bio` varchar(500) NOT NULL,
  `image` text NOT NULL,
  `sport_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sport_id_idx` (`sport_id`),
  CONSTRAINT `sport_id` FOREIGN KEY (`sport_id`) REFERENCES `sport` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `player`
--

LOCK TABLES `player` WRITE;
/*!40000 ALTER TABLE `player` DISABLE KEYS */;
INSERT INTO `player` VALUES (1,'Maria Sharapova',30,'Sports is my Life!','../../img/PostDetails/profile1.png',1),(3,'Danica Patrick',36,'Danica Sue Patrick is an American ','../../img/PostDetails/Danica.jpg',1),(4,'Serena Williams',36,'Serena Jameka Williams is an American professional tennis player ','../../img/PostDetails/SerenaWilliams.jpg',1),(5,'Lindsey Vonn',33,'Lindsey Caroline Vonn is an American World Cup alpine ski racer on the United States Ski Team','../../img/PostDetails/LindseyVonn.jpg',1),(6,'Venus Williams',37,'Venus Ebony Starr Williams is an American professional tenn','../../img/PostDetails/VenusWilliams.jpg',1),(7,'Hope Solo',36,'Hope Amelia Solo is an American soccer goalkeeper and a two-time Olympic gold medalist','../../img/PostDetails/HopeSolo.jpg',1);
/*!40000 ALTER TABLE `player` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `post` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `image` text NOT NULL,
  `title` varchar(500) NOT NULL,
  `description` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `sport_id` int(11) NOT NULL,
  `type` enum('post','magazine','feature') NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sport_id_idx` (`sport_id`),
  CONSTRAINT `sport_id1` FOREIGN KEY (`sport_id`) REFERENCES `sport` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=53 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'https://raw.githubusercontent.com/MuhamedKhaled/NoonSite/UI/NOON/img/Section/little-girl%402x.png','This is a dynamic post of a little girls playing with a ball.','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ante nec est vehicula aliquet varius non risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus fringilla lectus ligula, sit amet suscipit lectus condimentum at. Proin eu imperdiet est. Aliquam congue laoreet ipsum quis gravida. Nullam malesuada tempus nulla quis fermentum. Fusce vestibulum sapien at mi tincidunt, id finibus est pulvinar. Donec non lacus in dolor pharetra euismod in congue purus. Quisque mauris velit, congue fermentum augue sed, dignissim sodales lorem. Proin malesuada vel nunc sit amet rutrum. Suspendisse potenti. Proin fermentum ullamcorper molestie. Donec ornare consequat viverra. In hac habitasse platea dictumst. Etiam fringilla lobortis tincidunt. Fusce laoreet rhoncus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ante nec est vehicula aliquet varius non risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus fringilla lectus ligula, sit amet suscipit lectus condimentum at. Proin eu imperdiet est. Aliquam congue laoreet ipsum quis gravida. Nullam malesuada tempus nulla quis fermentum. Fusce vestibulum sapien at mi tincidunt, id finibus est pulvinar. Donec non lacus in dolor pharetra euismod in congue purus. Quisque mauris velit, congue fermentum augue sed, dignissim sodales lorem. Proin malesuada vel nunc sit amet rutrum. Suspendisse potenti. Proin fermentum ullamcorper molestie. Donec ornare consequat viverra. In hac habitasse platea dictumst. Etiam fringilla lobortis tincidunt. Fusce laoreet rhoncus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ante nec est vehicula aliquet varius non risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus fringilla lectus ligula, sit amet suscipit lectus condimentum at. Proin eu imperdiet est. Aliquam congue laoreet ipsum quis gravida. Nullam malesuada tempus nulla quis fermentum. Fusce vestibulum sapien at mi tincidunt, id finibus est pulvinar. Donec non lacus in dolor pharetra euismod in congue purus. Quisque mauris velit, congue fermentum augue sed, dignissim sodales lorem. Proin malesuada vel nunc sit amet rutrum. Suspendisse potenti. Proin fermentum ullamcorper molestie. Donec ornare consequat viverra. In hac habitasse platea dictumst. Etiam fringilla lobortis tincidunt. Fusce laoreet rhoncus urna. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut ante nec est vehicula aliquet varius non risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus fringilla lectus ligula, sit amet suscipit lectus condimentum at. Proin eu imperdiet est. Aliquam congue laoreet ipsum quis gravida. Nullam malesuada tempus nulla quis fermentum. Fusce vestibulum sapien at mi tincidunt, id finibus est pulvinar. Donec non lacus in dolor pharetra euismod in congue purus. Quisque mauris velit, congue fermentum augue sed, dignissim sodales lorem. Proin malesuada vel nunc sit amet rutrum. Suspendisse potenti. Proin fermentum ullamcorper molestie. Donec ornare consequat viverra. In hac habitasse platea dictumst. Etiam fringilla lobortis tincidunt. Fusce laoreet rhoncus urna.','0000-00-00 00:00:00',1,'post'),(11,'http://www.gstatic.com/webp/gallery/1.jpg','Landscape of mountains and a river in between.','ay 7aga blaaaaaaaaa','2018-05-10 10:16:46',1,'post'),(21,'http://www.gstatic.com/webp/gallery/2.jpg','A woman is playing board-surfing in the perfect ocean','ay 7aga blaaaaaaaaa','2018-05-10 10:16:46',1,'post'),(31,'http://www.gstatic.com/webp/gallery/3.jpg','These are palms that are growing around a river','ay 7aga blaaaaaaaaa','2018-05-10 10:17:11',1,'post'),(41,'http://www.gstatic.com/webp/gallery/4.jpg','awl post hna','ay 7aga blaaaaaaaaa','2018-05-10 10:19:20',1,'post'),(42,'http://www.gstatic.com/webp/gallery/5.jpg','awl post hna','ay 7aga blaaaaaaaaa','2018-05-10 10:21:36',1,'post'),(52,'','100 post hna','ay 7aga blaaaaaaaaa','2018-05-10 10:22:17',1,'post');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sport`
--

DROP TABLE IF EXISTS `sport`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sport` (
  `id` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sport`
--

LOCK TABLES `sport` WRITE;
/*!40000 ALTER TABLE `sport` DISABLE KEYS */;
INSERT INTO `sport` VALUES (1,'FootBall');
/*!40000 ALTER TABLE `sport` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `video`
--

DROP TABLE IF EXISTS `video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `video` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `duration` int(11) NOT NULL,
  `thumbnail` text NOT NULL,
  `url` text NOT NULL,
  `description` text NOT NULL,
  `sport_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sport_id3_idx` (`sport_id`),
  CONSTRAINT `sport_id3` FOREIGN KEY (`sport_id`) REFERENCES `sport` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `video`
--

LOCK TABLES `video` WRITE;
/*!40000 ALTER TABLE `video` DISABLE KEYS */;
INSERT INTO `video` VALUES (1,173,'https://raw.githubusercontent.com/MuhamedKhaled/NoonSite/UI/NOON/img/media/little-girl%403x.png','https://raw.githubusercontent.com/MuhamedKhaled/NoonSite/UI/NOON/img/LiveStreaming/Tom%20and%20Jerry%20-%20Episode%2074.mp4','Tom and Jerry Video.',1);
/*!40000 ALTER TABLE `video` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-06-17  0:19:07
