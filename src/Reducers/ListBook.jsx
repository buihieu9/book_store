const initialValue = {
  listBook: [],
  category: null,
};

const listBookReducer = (state = initialValue, action) => {
  switch (action.type) {
    case "GET_LIST": {
      return {
        listBook: action.payload.data,
        category: action.payload.category,
      };
    }
    case "ADD_BOOKS": {
      const newListBook = [...state.listBook];
      newListBook.push(...action.payload.data);
      return {
        ...state,
        listBook: newListBook,
        category: action.payload.category,
      };
    }
    case "FILTER_CATEGORY": {
      return {
        listBook: action.payload.filter,
        category: action.payload.category,
      };
    }
    default:
      return state;
  }
};

export default listBookReducer;
