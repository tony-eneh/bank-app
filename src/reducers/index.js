import { withdrawActionCreator } from "../actions";

export const reducer = (store, action) => {
  switch (action.type) {
    case "WITHDRAW_MONEY":
      return { ...store, amount: store.amount - action.payload.amount };
    case "GIVE_ALL_TO_CHARITY":
      return { ...store, amount: 0 };
  }
};
