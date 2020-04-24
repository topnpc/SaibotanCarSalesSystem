/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.36 : Database - bigdata
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`bigdata` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci */;

USE `bigdata`;

/*Table structure for table `adressyearamount` */

DROP TABLE IF EXISTS `adressyearamount`;

CREATE TABLE `adressyearamount` (
  `adress` text COLLATE utf8_unicode_ci,
  `totalYearamount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `adressyearamount` */

insert  into `adressyearamount`(`adress`,`totalYearamount`) values ('天津',67749),('上海',116564),('广州',109164),('深圳',109517),('北京',115896),('杭州',81110);

/*Table structure for table `carssale` */

DROP TABLE IF EXISTS `carssale`;

CREATE TABLE `carssale` (
  `carName` text COLLATE utf8_unicode_ci,
  `perMonthAmonunt` text COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `carssale` */

insert  into `carssale`(`carName`,`perMonthAmonunt`) values ('宝马3系','1:5856,2:6332,3:7017,4:7386,5:7889,6:8347,7:8739,8:8977,9:9155,10:9496,11:9953,12:11154'),('奔驰EQC','1:10553,2:9972,3:9544,4:9313,5:8949,6:8453,7:8156,8:7832,9:7469,10:7078,11:6579,12:6054'),('大众朗逸','1:8216,2:8349,3:8278,4:8392,5:8472,6:8414,7:8240,8:8368,9:8379,10:8400,11:8408,12:8452'),('奥迪A6L','1:8338,2:8343,3:8521,4:8261,5:8333,6:8301,7:8273,8:8278,9:8492,10:8276,11:8421,12:8295'),('奥迪Q2L','1:5863,2:6332,3:6730,4:7384,5:7875,6:8252,7:8658,8:8791,9:9254,10:9518,11:9960,12:10971'),('宝马X1','1:10619,2:9890,3:9582,4:9308,5:8561,6:8575,7:8107,8:7830,9:7463,10:7116,11:6458,12:6150');

/*Table structure for table `coloryearamount` */

DROP TABLE IF EXISTS `coloryearamount`;

CREATE TABLE `coloryearamount` (
  `carColor` text COLLATE utf8_unicode_ci,
  `amount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `coloryearamount` */

insert  into `coloryearamount`(`carColor`,`amount`) values ('黑色',141445),('白色',135249),('红色',81963),('蓝色',98223),('灰色',143120);

/*Table structure for table `sexyearamount` */

DROP TABLE IF EXISTS `sexyearamount`;

CREATE TABLE `sexyearamount` (
  `sex` text COLLATE utf8_unicode_ci,
  `totalYearAmount` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `sexyearamount` */

insert  into `sexyearamount`(`sex`,`totalYearAmount`) values ('女',266289),('男',333711);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
