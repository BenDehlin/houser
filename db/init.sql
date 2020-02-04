DROP TABLE IF EXISTS houses;
CREATE TABLE houses (id SERIAL PRIMARY KEY, name VARCHAR(120), address VARCHAR(1000), city VARCHAR(120), house_state VARCHAR(120), zip VARCHAR(20), img VARCHAR(1000), mortgage INTEGER, rent INTEGER);

INSERT INTO houses (name, address, city, house_state, zip, img, mortgage, rent)
VALUES ('house', 'address blah blah', 'Orem', 'Utah', 84566, 'an image', 3200, 3100);
SELECT * FROM houses ORDER BY id DESC;