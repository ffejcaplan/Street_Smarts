USE street_smarts;

INSERT INTO Categories (name) VALUE ('burgers');
INSERT INTO Categories (name) VALUE ('sandwiches');
INSERT INTO Categories (name) VALUE ('salads');
INSERT INTO Categories (name) VALUE ('drinks');
INSERT INTO Categories (name) VALUE ('desserts');

INSERT INTO Inventories (itemName, description, price, active, category) VALUE ('Cheeseburger', 'its a Cheeseburger', 10.99, true, 1);
INSERT INTO Inventories (itemName, description, price, active, category) VALUE ('turkey club', 'turkey and bacon on rye', 9.99, true, 2);
INSERT INTO Inventories (itemName, description, price, active, category) VALUE ('Club Salad', 'its a salad', 10.99, true, 3);
INSERT INTO Inventories (itemName, description, price, active, category) VALUE ('Beer', 'Beer here!', 5.99, true, 4);
INSERT INTO Inventories (itemName, description, price, active, category) VALUE ('Cake', 'everybody loves cake', 5.99, true, 5);


INSERT INTO Locations (latitude, longitude, nickname, active) VALUE (43.624693, -70.301653, 'Ffejs House', 0);

INSERT INTO Orders (date, time, total, customer, payment_method, locationId) VALUE ("1984-12-22","23:59:59", 55.93, "Ffej", 'cash', 1);
INSERT INTO Orders (date, time, total, customer, payment_method, locationId) VALUE ("1984-12-22","23:59:59", 35.96, "Sam", 'cash', 2);


INSERT INTO OrderItems (orderId, inventoryId, itemName, numberOfItem, price) VALUE (1, 2, 'turkey club', 1, 9.99);
INSERT INTO OrderItems (orderId, inventoryId, itemName, numberOfItem, price) VALUE (1, 1, 'Cheeseburger', 2, 10.99);
INSERT INTO OrderItems (orderId, inventoryId, itemName, numberOfItem, price) VALUE (1, 4, 'Beer', 3, 5.99);
INSERT INTO OrderItems (orderId, inventoryId, itemName, numberOfItem, price) VALUE (1, 5, 'Cake', 1, 5.99);
INSERT INTO OrderItems (orderId, inventoryId, itemName, numberOfItem, price) VALUE (2, 1, 'Cheeseburger', 1, 10.99);
INSERT INTO OrderItems (orderId, inventoryId, itemName, numberOfItem, price) VALUE (2, 3, 'Club salad', 2, 10.99);
INSERT INTO OrderItems (orderId, inventoryId, itemName, numberOfItem, price) VALUE (2, 4, 'Beer', 1, 5.99);

INSERT INTO OrderLocations (orderId, locationId, latitude, longitude, total) VALUE (1, 1, 43.624693, -70.301653, 55.93);
INSERT INTO OrderLocations (orderId, locationId, latitude, longitude, total) VALUE (2, 1, 43.624693, -70.301653, 35.96);





