import { COUNTPLUS, COUNTMINUS } from "../actions"; //このファイル内にindex.js【action】で定義したActionを寄せ集める。
//この時指定するのはActionクリエーターの名前

const initialState = { val: 0 }; //初期値を指定

export default (state = initialState, action) => {
  //COUNTPLUSとCOUNTMINUSの処理内容をswitch文を用いて記載
  switch (action.type) {
    case COUNTPLUS:
      return { val: state.val + 1 };
    case COUNTMINUS:
      return { val: state.val - 1 };
    default:
      return state;
  }
};
