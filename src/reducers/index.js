import { withdrawActionCreator } from "../actions";

export const reducer = (store, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return {
        ...store,
        totalAmount: store.totalAmount - action.payload.amount,
      };
    case "GIVE_ALL_TO_CHARITY":
      return { ...store, totalAmount: 0 };
  }
};
