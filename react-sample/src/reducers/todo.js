import { ADDTASK, REMOVETASK } from "../actions";

const initialState = {
  todos: [
    { title: "買い物" },
    { title: "美容院" },
    { title: "ストレッチ" },
    { title: "読書" },
    { title: "勉強" },
  ],
};

export default (state = initialState, action) => {
  //COUNTPLUSとCOUNTMINUSの処理内容をswitch文を用いて記載
  switch (action.type) {
    case ADDTASK:
      console.log(action); //入力した値が取得できている
      console.log(state); //現在のstoreの値が取得できている
      // console.log(action.target.previousElementSibling.value);
      // const addTasks=[...state.todos]
      return { todos: [...state.todos, { title: action.title }] }; ///上記Stateのtodos配列を展開し、titleにはactionで指定した値【inputのvelue】が入る
    case REMOVETASK:
      const removeTask = [...state.todos];
      removeTask.splice(action.index, 1);
      return { todos: removeTask };
    default:
      return state;
  }
};
