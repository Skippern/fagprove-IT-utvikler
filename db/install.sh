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

mysql -u root -pfagprove -e "CREATE DATABASE IF NOT EXISTS nfri"
mysql -u root -pfagprove nfri < /tmp/backend.sql
# mysql -u root -pfagprove -e "CREATE USER IF NOT EXISTS 'nfri'@'%' IDENTIFIED BY 'fagpr0ve'"
mysql -u root -pfagprove -e "CREATE USER IF NOT EXISTS 'nfri'@'%' IDENTIFIED WITH mysql_native_password BY 'fagpr0ve'"
mysql -u root -pfagprove -e "GRANT SELECT,INSERT,UPDATE,DELETE on nfri.* TO 'nfri'@'%'"
mysql -u root -pfagprove -e "FLUSH PRIVILEGES"
mysql -u root -pfagprove -e "INSERT INTO nfri.users (`user`,`password`,`email`) VALUES('NAIF','AstroiderErKule123&','post@naif.no')"
