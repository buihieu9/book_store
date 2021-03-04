export const addBooks = (products) => {
  return {
    type: "ADD_BOOKS",
    payload: products,
  };
};

export const filterCategory = (products) => {
  return {
    type: "FILTER_CATEGORY",
    payload: products,
  };
};

export const getList = (products) => {
  return {
    type: "GET_LIST",
    payload: products,
  };
};
