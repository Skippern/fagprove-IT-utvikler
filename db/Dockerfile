FROM mysql:latest

ENV MYSQL_DATABASE=nfri
ENV MYSQL_ROOT_PASSWORD=fagprove

ADD backend.sql /tmp/backend.sql
ADD install.sh /tmp/install.sh

RUN /tmp/install.sh

VOLUME mysql:/var/lib/mysql
