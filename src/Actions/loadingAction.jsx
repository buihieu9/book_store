export const loadingFiler = (products) => {
  return {
    type: "LOADING_FILTER",
    payload: products,
  };
};
