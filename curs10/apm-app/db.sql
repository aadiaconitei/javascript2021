mysql -u root -p
create database universitate;
use universitate;

CREATE TABLE IF NOT EXISTS `studenti` (
  `id` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `nume` varchar(30) NOT NULL,
  `prenume` varchar(30) NOT NULL,
  `data_nastere` date DEFAULT NULL,
  `sex` char(1) DEFAULT NULL,
  `an` tinyint(1) NOT NULL DEFAULT '1',
  `grupa` tinyint(1) NOT NULL DEFAULT '1',
  `bursa` int(4) DEFAULT NULL,
  `status` enum('restantier','bursier','admis') NOT NULL DEFAULT 'admis',
  PRIMARY KEY (`id`),
  UNIQUE KEY `nume_unic` (`nume`,`prenume`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;