BEGIN;


DROP TABLE IF EXISTS articles CASCADE;


CREATE TABLE articles (
  id     SERIAL       PRIMARY KEY,
  title  VARCHAR(64)  NOT NULL
);


INSERT INTO articles (title)
VALUES ('React article title 1'),
       ('React article title 2'),
       ('React article title 3'),
       ('Javascript article title 1'),
       ('Javascript article title 2'),
       ('Javascript article title 3');


COMMIT;
