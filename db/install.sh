#!/bin/bash

# ls /usr/bin/my*
# /usr/bin/mysqld_safe --skip-grant-tables &
# sleep 5
# mysql -u root -e "CREATE DATABASE IF NOT EXISTS nfri"
# mysql -u root nfri < /tmp/backend.sql
# # mysql -u root -e "CREATE USER 'nfri'@'%' IDENTIFIED BY 'fagpr0ve'"
# mysql -u root -e "CREATE USER 'nfri'@'%' IDENTIFIED WITH mysql_native_password BY 'fagpr0ve'"
# # mysql -u root -e "GRANT SELECT,INSERT,UPDATE,DELETE on nfri.* TO 'nfri'@'%'"
# mysql -u root -e "FLUSH PRIVILEGES"
# mysql -u root -e "INSERT INTO nfri.users (`user`,`password`,`email`) VALUES('NAIF','AstroiderErKule123&','post@naif.no')"


CREATE DATABASE IF NOT EXISTS nfri;
CREATE USER IF NOT EXISTS 'nfri'@'%' IDENTIFIED WITH mysql_native_password BY 'fagpr0ve';
GRANT SELECT,INSERT,UPDATE,DELETE on nfri.* TO 'nfri'@'%';
FLUSH PRIVILEGES;
use nfri
CREATE TABLE IF NOT EXISTS `users` (
    `ID` int NOT NULL AUTO_INCREMENT,
    `user` varchar(128) NOT NULL COMMENT 'Username for login',
    `password` varchar(128) NOT NULL COMMENT 'Password (should not be plaintext)',
    `email` varchar(128) NOT NULL COMMENT 'Email for newsletter and password recovery',
    `phone` varchar(16) NULL COMMENT 'phone number, optional',
    `newsletter` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Accepted newsletters',
    PRIMARY KEY (`ID`),
    UNIQUE KEY `userName` (`user`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='List of registered users';
INSERT INTO nfri.users (`user`,`password`,`email`) VALUES('NAIF','AstroiderErKule123&','post@naif.no');
SELECT * FROM nfri.users;
SELECT user,plugin FROM mysql.user;

mysql -u root -pfagprove -e "CREATE DATABASE IF NOT EXISTS nfri"
mysql -u root -pfagprove nfri < /tmp/backend.sql
# mysql -u root -pfagprove -e "CREATE USER IF NOT EXISTS 'nfri'@'%' IDENTIFIED BY 'fagpr0ve'"
mysql -u root -pfagprove -e "CREATE USER IF NOT EXISTS 'nfri'@'%' IDENTIFIED WITH mysql_native_password BY 'fagpr0ve'"
mysql -u root -pfagprove -e "GRANT SELECT,INSERT,UPDATE,DELETE on nfri.* TO 'nfri'@'%'"
mysql -u root -pfagprove -e "FLUSH PRIVILEGES"
mysql -u root -pfagprove -e "INSERT INTO nfri.users (`user`,`password`,`email`) VALUES('NAIF','AstroiderErKule123&','post@naif.no')"
