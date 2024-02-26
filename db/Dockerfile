FROM mysql:latest

VOLUME /var/lib/mysql:mysql

ENV MYSQL_DATABASE=nfri
ENV MYSQL_ROOT_PASSWORD=fagprove

EXPOSE 3306

ADD backend.sql /tmp/backend.sql
ADD install.sh /tmp/install.sh

# RUN echo 'default_authentication_plugin=mysql_native_password' >> /etc/mysql/conf.d/docker.cnf
# RUN /usr/sbin/mysqld
# RUN sleep 10
# RUN /tmp/install.sh
# ENTRYPOINT [ '/tmp/install.sh' ]
