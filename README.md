# User Story

As a food truck owner and operator, I want a Point of Sale System that allows me to do the following:

1. Take orders
2. View my day's sales
3. View all the menu items (past and present) in one location
4. View sales reports

I also want consumers to be able to find my truck on a map based on my location and view my menu

## Truck facing side

- When an employee gets to the register, they will be asked to enter a four digit numerical pin
- They will then be taken to a screen that will ask if they'd like to pin the truck location
  (if the truck is already pinned to a location, it will not ask if you'd like to pin location)

### POS

- The Employee will then be taken to the POS page, which will display the following:
  - All food categories on the left
  - Food items by category in the middle
  - The total sales on the right and a button to submit order
- By clicking on a category button on the left, the middle of the screen will display each item in that category as a button
- When an item button is pressed, an add to cart screen will appear and prompt the employee to enter the number of items too add to the order and any notes on how the order should be prepared
- The employee will then click add to order
- This will return the employee to the main POS page and the recently added items will appear on the right hand side
- Should the employ want to edit an item added to the order, they can click on the item listed on the right and edit and update
- Once the order is complete, the employee will click the checkout button at the bottom right corner

### Checkout Screen

- Once the checkout button is clicked, the employee will be prompted to add a name to the order
- Then the app will continue to the checkout screen
- The total will be displayed along with the option to pay via card or cash
- If the customer would like to pay via cash, it will show a number pad for the employee to enter how much cash the customer hands them
  - By entering this number, the app will return the exact change the employee should return to the customer
- If the customer pays by card, it will lead them through a card pay screen
  - It will the ask the customer if they'd like to add a tip with 3 preset options: 17%, 20%, 25%
- Once complete, the order will appear as a pop-up window as if it were a ticket for the kitchen

### Inventory

- If an employee wants to view everyitem that has ever been on the menu, they can do so from the inventory page. Like the POS page, it'll be organized by category
- From this page an emoployee can do the following:
  - Add a new item to the menu
  - Take an item off the inactive menu and make it active
  - Take an item off the active menu and make it inactive

### Sales

- This screen will display every sale made that current day
- The sales will be displayed in a table, each row serving as an individual display
- The rows will include the following information:
  - Date of sale
  - Time of sale
  - Name associated with sale
  - Final for of credit card or cash (payment method)
  - total amount

### Reports

- This will allow a more detailed view of sales and sales reports
- This page will have the option to view the following reports:
  - Sales by day over the course of a week as a line graph
    - With the option to choose between different weeks
  - Sales by day of the week (avg) as a line graph
    - This will display data month-by-month,
    - if there is time, this will also have a 6-month and 12-month view option
  - Sales by item by day (line graph) as week
  - Sales by location on a map

## Consumer Facing Side

As a consumer, I want to go to a website that will display excatly where a food truck is on a map.
I then want to be able to click on this map and view the menu for this food truck
