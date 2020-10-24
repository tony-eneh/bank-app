export const reducer = (store, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return {
        ...store,
        totalAmount: store.totalAmount - action.payload.amount,
      };
    case "GIVE_ALL_TO_CHARITY":
      return { ...store, totalAmount: 0 };
    default:
      // it is important to have a default case and to return the original store in this case.
      // If you leave out a default case you have errors. Redux probably calls the reducers
      // before you even dispatch any events. Hence you need a default case which will
      // just return your store in such circumstances
      return { ...store };
  }
};
