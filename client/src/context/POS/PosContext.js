import React, { createContext, useReducer } from 'react';
import PosReducer from './PosReducer';

import API from '../../utils/API';

const initialState = {
  order: {
    total: 90.0,
    customer: 'ffej',
    payment_method: 'cash',
    locationId: 1,
    latitude: 43.624693,
    longitude: -70.301653,
    orderId: '',
    items: [
      {
        name: 'Cheese burger',
        inventoryId: 1,
        price: 10.99,
        numberOfItem: 3,
        orderId: '',
      },
      {
        name: 'Beer',
        inventoryId: 4,
        price: 5.99,
        numberOfItem: 2,
        orderId: '',
      },
      {
        name: 'Cake',
        inventoryId: 2,
        price: 5.99,
        numberOfItem: 3,
        orderId: '',
      },
    ],
  },
  categories: [],
  items: '',
  error: null,
  // loading: true,
};

// creates context
export const PosGlobalContext = createContext(initialState);
export const PosContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PosReducer, initialState);

  const loadCategories = async () => {
    try {
      const result = await API.getCategories();
      dispatch({
        type: 'LOAD_CATEGORIES',
        payload: result.data,
      });
    } catch (err) {
      console.error(err + 'Category Broke');
    }
  };

  const loadInventory = async () => {
    try {
      const result = await API.getInventory();
      dispatch({
        type: 'LOAD_INVENTORY',
        payload: result.data,
      });
    } catch (err) {
      // dispatch({
      //   type: 'TRANSACTION_ERROR',
      //   payload: err.result.data.error,
      // });
      console.error(err + 'this shit fucked up');
    }
    return state;
    // let allitems = [];
    // API.getInventory()
    //   .then((res) =>
    //     res.data.map((datum) => {
    //       items.push(datum);
    //       console.log(datum);
    //     })
    //   )
    //   .catch((err) => console.log(err));
  };

  // function to add new item in Inventory page

  const postCategories = async (category) => {
    try {
      const result = await API.postCategories(category);
      dispatch({
        type: 'POST_CATEGORY',
        payload: result.data,
      });
    } catch (err) {
      console.error(err);
    }
  };

  //   // on page load get id and set to state
  //   //   const getOrderId = () => {
  //   //     API.getOrderId()
  //   //       .then((res) => {
  //   //         return res.length;
  //   //       })
  //   //       .catch((err) => console.error(err));
  //   //   };

  //   const postOrder = (order) => {
  //     API.postOrder(order)
  //       .then((res) => {
  //         order.orderId = res.data.response.id;
  //         // receive orderId as response and set to state
  //       })
  //       .catch((err) => {
  //         console.error(err);
  //       })
  //       .then(() => {
  //         order.items.map((item) => {
  //           item.orderId = order.orderId;
  //           API.postItemOrder(item)
  //             .then((res) => {
  //               console.log('hello');
  //               return res;
  //             })
  //             .catch((err) => {
  //               console.error(err);
  //             });
  //         });
  //       })
  //       .then(() => {
  //         API.postOrderLocation(order)
  //           .then((res) => {
  //             console.log(res);
  //           })
  //           .catch((err) => {
  //             console.error(err);
  //           });
  //       });

  // map throught items in order and add individually to
  //   };
  return (
    <PosGlobalContext.Provider
      value={{
        order: state.order,
        items: state.items,
        categories: state.categories,
        loadCategories,
        loadInventory,
        postCategories,
      }}
    >
      {children}
    </PosGlobalContext.Provider>
  );
};

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

// by category

//       .then((res) =>
//         res.data.map((category) => {
//           const cat = {
//             name: category.name,
//             id: category.id,
//           };
//           categs.push(cat);
//           return category;
//         })
//       )
//       .catch((err) => console.log(err))
//       .then(() => {
//         categories = categs;
//         console.log(categories);
//       });
//   };
