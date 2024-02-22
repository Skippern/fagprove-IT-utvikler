SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE IF NOT EXISTS `users` (
    `ID` int NOT NULL AUTOINCREMENT,
    `user` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Username for login',
    `password` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Password (should not be plaintext)',
    `email` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'Email for newsletter and password recovery',
    `phone` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL COMMENT 'phone number, optional',
    `newsletter` tinyint(1) NOT NULL DEFAULT '0' COMMENT 'Accepted newsletters',
    PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='List of registered users';

CREATE TABLE IF NOT EXISTS `session` (
    `uID` int,
    `expire` TIMESTAMP,
    `token` tinytext CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL COMMENT 'session token',
    UNIQUE KEY `userUnique` (`uID`,`expire`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci COMMENT='Session tokens';

ALTER TABLE `session`
    ADD CONSTRAINT `user_session` FOREIGN KEY (`uid`) REFERENCES `users` (`ID`) ON DELETE RESTRICT ON UPDATE RESTRICT;

COMMIT;
