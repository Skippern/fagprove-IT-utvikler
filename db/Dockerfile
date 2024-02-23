FROM mysql:latest

ENV MYSQL_DATABASE=nfri
ENV MYSQL_ROOT_PASSWORD=fagprove

COPY backend.sql .

# RUN mysql -u root -pfagprove nfri < backend.sql

VOLUME /var/lib/mysql
