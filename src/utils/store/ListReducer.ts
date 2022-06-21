import { applyMiddleware, createStore, Store } from "redux";

const CHANGE_LIST = "CHANGE_LIST";

export type typeStoreList = {
  cream: string[][], milk: string[][], syrup: string[][], tubule: string[][] ;
};
const defualtState: typeStoreList = {
    cream: [
      ["vanilla", "FFF4E8"],
      ["chocolate", "754820"],
    ],
    milk: [
      ["chocolate", "C28858"],
      ["vanilla", "F9F1AD"],
      ["banana", "FAEB65"],
      ["strawberry", "EC9FBF"],
      ["mint", "00A36C"],
      ["pumpkin", "F48B19"],
      ["cherry", "BE2666"],
      ["blackberry", "7B26BE"],
    ],
    syrup: [
      ["chocolate", "754820"],
      ["vanilla", "FDBF76"],
      ["banana", "D3C542"],
      ["strawberry", "F28AAF"],
      ["mint", "088158"],
      ["pumpkin", "C56F11"],
      ["cherry", "A51451"],
      ["blackberry", "6510A8"],
    ],
    tubule: [
      ["blue", "0773BE"],
      ["red", "CE461B"],
      ["green", "088158"],
      ["purple", "6510A8"],
      ["pink", "F28AAF"]
    ]
};

const ChangeList = (payload: Object) =>
  ({
    type: "CHANGE_LIST",
    payload,
  } as const);

type Actions = ReturnType<typeof ChangeList>;

export const ListReducer = (state = defualtState, action: Actions) => {
  switch (action.type) {
    case CHANGE_LIST:
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
