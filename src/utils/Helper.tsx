export const Investmentvalue = ({
  avgPrice,
  Quantity,
}: {
  avgPrice: number;
  Quantity: number;
}) => {
  return avgPrice * Quantity;
};

export const Profit_loss = ({
  currentVal,
  investVal,
}: {
  currentVal: number;
  investVal: number;
}) => {
  return currentVal - investVal;
};

//total
export const TodayPnL = ({data}: {data: []}) => {
  const todayPNL = data.reduce((totalPNL, holding) => {
    const pnl = (holding?.close - holding?.ltp) * holding.quantity;
    return totalPNL + pnl;
  }, 0);
  return todayPNL;
};

export const TotalInvest = ({data}: {data: []}) => {
  const tempInvest = data?.reduce((totalinvest, holding) => {
    const invest = holding?.avgPrice * holding?.quantity;
    return totalinvest + invest;
  }, 0);

  return tempInvest;
};

export const TotalProfitLoss = ({
  currentVal,
  todalInvest,
}: {
  currentVal: number;
  todalInvest: number;
}) => {
  return currentVal - todalInvest;
};

export const currentVal = ({
  ltp,
  quantity,
}: {
  ltp: number;
  quantity: number;
}) => {
  return ltp * quantity;
};
