There are currently over 25,000 food trucks in the United States. While apps like Yelp and Google maps have successfully helped customers find brick and mortar restaurants in every city across the country, no app has managed the same coverage of service for food trucks and carts. 

# A New Solution
## Assessing the market gap
Why has no food truck app been successful in cornering the market. A curosry glance at any app-store reveals that there are dozens of active regional food-truck apps. Some cities have multiple. Yet none have cornered the market the way other sites have done so for other kinds of businesses. Why is that?

### Picking The Wrong Point in the Food Chain
There are two major issues in the business models behind most food truck apps:
1. These apps do not integrate smoothly into the day-to-day operations of food truck and carts.
2. Often times, the app builders monetize by charging food trucks to join, disincentivizing food trucks to join in the first place. 

### The Ultimate Question
Why isn't there a successful food truck app? The answer isn't a matter of tech or design. The answer is that no app has been able to achieve critical usership volume to attain widespread viability. Which makes the ultimate question: "How do you get food trucks to use your app?"

### Our Solution
We took a different approach to answering this question. While other apps focused on creating a consumer-facing app, we started by focusing on creating a value-add for food truck operators that would integrate seemlessly into their day-to-day operations. Our solution was to build a POS system with robust reporting that easily pinned truck locations to a consumer-facing site. By focusing on creating an app for food truck operators, we can  cross the threshold needed to create a viable food truck finder app. 

We built a prototype for a Food Truck specific POS system equipped with GPS functionality. In addition to an easy-to-use POS interface, Street Smarts allows food truck operators to track their sales data by location, providing in depth reporting on sales by GPS coordinates. To use this feature, food trucks pin their location through the POS system each time they open for business. We then take that GPS data and display it on a consumer facing landing page. 

### Street Smarts
The link provided brings you to the consumer facing landing page, which provides a bit of information about the app and the team who built it. To checkout the POS system, click the green button in the services section. From there, you test out the functionality of the POS system. 




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
