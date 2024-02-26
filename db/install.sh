#!/bin/bash

# ls /usr/bin/my*
# /usr/bin/mysqld_safe --skip-grant-tables &
# sleep 5
mysql -u root -pfagprove nfri < /tmp/backend.sql
