const { applyMiddleware, createStore } = require("redux");
const reduxThunk = require("redux-thunk");
const axios = require("axios");

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE";

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(reduxThunk));
store.subscribe(() => {
  console.log(store.getState());
});
