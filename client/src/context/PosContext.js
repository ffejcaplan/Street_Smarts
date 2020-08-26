import React from 'react';
import API from '../utils/API';

const PosContext = React.createContext({
  loadCategories: () => {
    API.getCategories()
      .then((res) =>
        res.data.map((datum) => {
          console.log(datum);
        })
      )
      .catch((err) => console.log(err));
  },
  postCategories: (category) => {
    API.postCategories(category)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  },
  loadInventory: () => {
    API.getInventory()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },
  loadOrderItems: () => {
    API.getOrderItems()
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  },

  // Ajax
  // get all from categories
  // get all from inventories
  // get all from orderItems
  // ----/---- from sales page, view orders in each sale

  // post new item to inventory (if new category, to categories)
  // ---- add item option on inventory page

  // post new order to orders and ordersByLocation and orderItems
  // --- when order is paid for from Checkout page
  // ----/---- populate orders
  // ----/---- populate order info to by location
  // ----/---- populate order id and items to orderItems
});

export default PosContext;
