export const withdrawMoneyAction = (amount) => ({
  type: "WITHDRAW_MONEY",
  payload: { amount },
});

export const giveAllToCharityAction = () => ({
  type: "GIVE_ALL_TO_CHARITY",
});
