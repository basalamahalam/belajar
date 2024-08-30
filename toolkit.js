import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const login = createAction("ADD_SESSION");

const cartLogin = createReducer({ status: false }, (builder) => {
  builder.addCase(login, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: cartLogin,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

store.dispatch(addToCart({ id: 1, qty: 20 }));
store.dispatch(login());
