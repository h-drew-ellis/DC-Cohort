CREATE TABLE shopping_lists (
shoppinglistid SERIAL PRIMARY KEY,
title VARCHAR(32) NOT NULL,
);

CREATE TABLE grocery_items (
groceryitemid SERIAL PRIMARY KEY,
title VARCHAR(50) NOT NULL,
quantity INTEGER,
price DECIMAL,
shoppinglistid INTEGER REFERENCES shopping_lists(shoppinglistid)
)

INSERT INTO shopping_lists(title) VALUES('wal-mart')
INSERT INTO shopping_lists(title) VALUES('h-e-b')
INSERT INTO shopping_lists(title) VALUES('publix')

INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('bread', 1, 2.56, 1)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('eggs', 1, 3.27, 1)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('pillow', 2, 12.27, 1)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('oil', 1, 22.27, 1)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('toilet_paper', 12, 3.86, 1)

INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('pork shoulder', 1, 9.86, 2)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('lb of beef', 4, 3.25, 2)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('Noodles', 2, .89, 2)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('tortillas', 3, 2.57, 2)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('chili', 2, 1.37, 2)

INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('Spinach', 1, 4.37, 3)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('Chipotle Sauce', 1, 4.37, 3)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('Hot Sauce', 1, 2.57, 3)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('Deli Ham', 1, 7.57, 3)
INSERT INTO grocery_items (title, quantity, price, shoppinglistid) VALUES ('Green Peppers', 4, 1.30, 3)

SELECT * FROM shopping_lists
SELECT * FROM grocery_items

ALTER TABLE grocery_items
ADD COLUMN over_ten BOOLEAN

UPDATE grocery_items SET over_ten = TRUE WHERE price>10
UPDATE grocery_items SET over_ten = FALSE WHERE price<10

SELECT MAX(price) FROM grocery_items
SELECT MIN(price)

ALTER TABLE grocery_items
ADD COLUMN total_price DECIMAL

UPDATE grocery_items SET total_price = price*quantity

SELECT SUM(total_price) 
FROM grocery_items

SELECT shopping_lists.title, grocery_items.title,grocery_items.quantity,grocery_items.total_price FROM shopping_lists JOIN grocery_items ON shopping_lists.shoppinglistid = grocery_items.shoppinglistid

SELECT shopping_lists.title, SUM(total_price)
FROM grocery_items
JOIN shopping_lists ON shopping_lists.shoppinglistid = grocery_items.shoppinglistid
GROUP BY shopping_lists.title

SELECT shopping_lists.title, SUM(quantity)
FROM grocery_items
JOIN shopping_lists ON shopping_lists.shoppinglistid = grocery_items.shoppinglistid
GROUP BY shopping_lists.title