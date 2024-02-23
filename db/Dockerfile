FROM mysql:latest

ENV MYSQL_DATABASE=nfri
ENV MYSQL_ROOT_PASSWORD=fagprove

ADD backend.sql /tmp/backend.sql
ADD install.sh /tmp/install.sh

# RUN echo 'default_authentication_plugin=mysql_native_password' >> /etc/mysql/conf.d/docker.cnf
# RUN /tmp/install.sh

VOLUME /var/lib/mysql:mysql
