const initialValue = {
  isloading: true,
};

const loading = (state = initialValue, action) => {
  switch (action.type) {
    case "LOADING_FILTER": {
      return action.payload;
    }
    default:
      return state;
  }
};

export default loading;
