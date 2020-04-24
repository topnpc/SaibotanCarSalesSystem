/*
SQLyog Ultimate v12.09 (64 bit)
MySQL - 5.5.36 : Database - test
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`test` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `test`;

/*Table structure for table `banner` */

DROP TABLE IF EXISTS `banner`;

CREATE TABLE `banner` (
  `bannerId` int(11) NOT NULL AUTO_INCREMENT,
  `bannerName` varchar(30) DEFAULT NULL,
  `bannerUrl` varchar(100) DEFAULT NULL,
  `bannerHref` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`bannerId`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

/*Data for the table `banner` */

insert  into `banner`(`bannerId`,`bannerName`,`bannerUrl`,`bannerHref`) values (19,'图片1','/img/3f24296b-a1a5-42e2-9d17-aa61c1746b95.jpg','http://baidu.com');

/*Table structure for table `car` */

DROP TABLE IF EXISTS `car`;

CREATE TABLE `car` (
  `id` int(15) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL DEFAULT '车的名字',
  `price` varchar(20) NOT NULL,
  `color` varchar(10) NOT NULL DEFAULT '车身颜色',
  `describe` varchar(500) NOT NULL COMMENT '描述',
  `url` varchar(200) NOT NULL,
  `imgurl` varchar(200) NOT NULL,
  `typeid` int(20) DEFAULT NULL,
  `sales_number` int(20) DEFAULT NULL COMMENT '销售数量',
  `collect_number` int(20) DEFAULT NULL COMMENT '收藏数量',
  `cartype` varchar(10) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=20 DEFAULT CHARSET=utf8;

/*Data for the table `car` */

insert  into `car`(`id`,`name`,`price`,`color`,`describe`,`url`,`imgurl`,`typeid`,`sales_number`,`collect_number`,`cartype`) values (10,'宝马BMWX5','1000000','灰色','宝马3333333333333','car_detail.html','/car_img/5d80b0567ce8e548457045.jpg',0,114,85,'SUV'),(14,'奔驰x2','1200000','蓝色','奔驰6666666666666','car_detail.html','/car_img/layer7_01-1247df026c.jpg',1,116,86,'小型车'),(15,'保时捷b1','500000','红2','保时捷77777777','car_detail.html','/car_img/layer7_02-7e2750aaaa.jpg',5,116,83,'豪华车'),(16,'奥迪A6','1000000','白色','奥迪A688888888888888','car_detail.html','/car_img/layer7_03-bef89d2ee1.jpg',2,155,85,'中型车'),(17,'比亚迪唐','100000','车身颜色','比亚迪唐66666','car_detail.html','/car_img/layer6_01-3aa1c8573f.jpg',3,93,83,'大型车'),(18,'宝马4444444444','1000000','红色','宝马99999999性能好','car_detail.html','/car_img/c601e653-b920-4975-90fe-e8514e65c448SatNov09123115CST2019a.jpg',0,34,588,'SUV'),(19,'宝马555555','1000000','棕色','宝马55555性能好777','car_detail.html','/car_img/63b9fff8-4f80-4a48-9e0f-2ecc34b6f040SatNov09123233CST2019a.jpg',0,368,566,'SUV');

/*Table structure for table `cartype` */

DROP TABLE IF EXISTS `cartype`;

CREATE TABLE `cartype` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `typeid` int(20) DEFAULT NULL,
  `cartype` varchar(10) DEFAULT NULL,
  `typedescribe` varchar(500) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;

/*Data for the table `cartype` */

insert  into `cartype`(`id`,`typeid`,`cartype`,`typedescribe`) values (1,0,'SUV','suv'),(2,1,'小型车','小型车'),(3,2,'中型车','中型车'),(4,3,'大型车','大型车'),(25,5,'豪华车','这是豪华车'),(42,666,'6667','7778');

/*Table structure for table `main_nav` */

DROP TABLE IF EXISTS `main_nav`;

CREATE TABLE `main_nav` (
  `navId` int(5) NOT NULL AUTO_INCREMENT,
  `navName` varchar(10) NOT NULL,
  `navUrl` varchar(500) NOT NULL,
  PRIMARY KEY (`navId`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

/*Data for the table `main_nav` */

insert  into `main_nav`(`navId`,`navName`,`navUrl`) values (1,'SUV','http://localhost:8081/main.html'),(2,'中型车','http://localhost:8081/main.html'),(4,'cc','http://www.baidu.com'),(5,'bb','bbb');

/*Table structure for table `manager` */

DROP TABLE IF EXISTS `manager`;

CREATE TABLE `manager` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL,
  `password` varchar(20) DEFAULT NULL,
  `headimgurl` varchar(200) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

/*Data for the table `manager` */

insert  into `manager`(`id`,`username`,`password`,`headimgurl`) values (1,'xm','123',NULL);

/*Table structure for table `orderitem` */

DROP TABLE IF EXISTS `orderitem`;

CREATE TABLE `orderitem` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '自增长编号',
  `orderuuid` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '订单随机编号',
  `carid` int(11) DEFAULT NULL COMMENT '商品编号',
  `userid` int(11) DEFAULT NULL COMMENT '用户编号',
  `carnum` int(11) DEFAULT NULL COMMENT '购买数量',
  `message` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '留言信息',
  `totalprice` float DEFAULT NULL COMMENT '小计',
  `status` varchar(10) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '订单状态',
  `ordertime` datetime DEFAULT NULL COMMENT '订单创建时间',
  `paytime` datetime DEFAULT NULL COMMENT '付款时间',
  `sendtime` datetime DEFAULT NULL COMMENT '发货时间',
  `finaltime` datetime DEFAULT NULL COMMENT '交易完成时间，买家确认收货时间',
  `closetime` datetime DEFAULT NULL COMMENT '关闭时间，退货退款等',
  `wuliu` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '物流单号',
  `wuliuname` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '物流名称',
  `evaluate` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '买家评价',
  `shouhuoren` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '收货人',
  `shouhuophone` varchar(20) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '收货电话',
  `shouhuodizi` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '收货地址',
  `evaluate2` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL COMMENT '卖家评价',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=107 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `orderitem` */

insert  into `orderitem`(`id`,`orderuuid`,`carid`,`userid`,`carnum`,`message`,`totalprice`,`status`,`ordertime`,`paytime`,`sendtime`,`finaltime`,`closetime`,`wuliu`,`wuliuname`,`evaluate`,`shouhuoren`,`shouhuophone`,`shouhuodizi`,`evaluate2`) values (106,'72a6dd7a',19,38,1,'ddddddddd',1000000,'待发货','2019-11-11 02:06:39','2019-11-11 02:07:57',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `shopcar` */

DROP TABLE IF EXISTS `shopcar`;

CREATE TABLE `shopcar` (
  `id` int(11) NOT NULL AUTO_INCREMENT COMMENT '购物车id',
  `uid` int(11) DEFAULT NULL COMMENT '用户id',
  `carid` int(11) DEFAULT NULL COMMENT '商品id',
  `carnum` int(11) DEFAULT NULL COMMENT '商品数量',
  `addtime` datetime DEFAULT NULL COMMENT '添加日期',
  `totalprice` float DEFAULT NULL COMMENT '小计',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

/*Data for the table `shopcar` */

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `sex` varchar(6) DEFAULT NULL,
  `address` varchar(100) DEFAULT NULL COMMENT '用户地址',
  `paypassword` varchar(6) DEFAULT NULL COMMENT '支付密码',
  `phone` varchar(20) DEFAULT NULL COMMENT '用户手机号码',
  `realname` varchar(20) DEFAULT NULL COMMENT '真实名称',
  `vip` int(11) DEFAULT NULL COMMENT '会员等级，某一类的车型根据等级进行限购',
  `money` float DEFAULT NULL COMMENT '账户余额',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`id`,`name`,`password`,`sex`,`address`,`paypassword`,`phone`,`realname`,`vip`,`money`) values (33,'tt','tt','男','天津市西青区宾水西道399号天津工业大学大学软件园1号公寓','123456','1234556788','李思',1,3000000),(38,'aa','aaa','woman','天津工业大学','12345','12334555','张三',4,10700000),(39,'cc','cc','女','天津市西青区宾水西道399号天津工业大学大学软件园3号公寓','123456','13062391001','王五',2,3000000),(40,'dd','dd',NULL,NULL,NULL,NULL,NULL,NULL,NULL);

/*Table structure for table `video` */

DROP TABLE IF EXISTS `video`;

CREATE TABLE `video` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `videoname` varchar(10) NOT NULL,
  `videourl` varchar(100) NOT NULL,
  `videocoverurl` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

/*Data for the table `video` */

insert  into `video`(`id`,`videoname`,`videourl`,`videocoverurl`) values (4,'v1','/video/8255c840-97d5-424e-8116-dc92b8bd84e8WedOct23192137CST2019video.mp4','/video/06c0fdd9-5bdb-4874-80f8-cffa0e41a0b4WedOct23192137CST2019cover.jpg'),(8,'video03','/video/93e72b9e-85c7-4538-ae39-1901627d53a9SatNov09122424CST2019video.mp4','/video/d8769608-7de3-4e41-b35e-f0667983ad7cSatNov09122424CST2019cover.jpg');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
