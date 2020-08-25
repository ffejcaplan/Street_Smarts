USE street_smarts;

INSERT INTO Categories (name) VALUE ('burgers');
INSERT INTO Categories (name) VALUE ('sandwiches');
INSERT INTO Categories (name) VALUE ('salads');
INSERT INTO Categories (name) VALUE ('drinks');
INSERT INTO Categories (name) VALUE ('desserts');

INSERT INTO street_smarts.Inventories (itemName, description, price, active, category) VALUE ('Cheeseburger', 'its a Cheeseburger', 10.99, true, 1);
INSERT INTO street_smarts.Inventories (itemName, description, price, active, category) VALUE ('turkey club', 'turkey and bacon on rye', 9.99, true, 2);
INSERT INTO street_smarts.Inventories (itemName, description, price, active, category) VALUE ('Club Salad', 'its a salad', 10.99, true, 3);
INSERT INTO street_smarts.Inventories (itemName, description, price, active, category) VALUE ('Beer', 'Beer here!', 5.99, true, 4);
INSERT INTO street_smarts.Inventories (itemName, description, price, active, category) VALUE ('Cake', 'everybody loves cake', 5.99, true, 5);

