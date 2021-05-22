import React, {Component} from "react";
import {connect} from 'react-redux';

import {
  //countPlus,
  //countMinus,
  newTask,
  removeTask} 
  from './actions'


class App extends React.Component{

  render(){
    const props = this.props;
    const add =(e)=>{
     console.log(e.target);
     props.newTask(e.target.previousElementSibling.value);
     e.target.previousElementSibling.value="";
    }
    return(
      <React.Fragment>
        {/* <div>
        <p>現在の数字は{props.val}です</p>
        <button onClick={props.countPlus}>+1</button>
        <button onClick={props.countMinus}>-1</button>
        </div> */}
        <div>
        <h1>todoリスト（クラス＆STORE）</h1>
      <input></input>
      <button onClick={add}>追加</button>
      <ul>
         { props.todos.map((todo, index) => (//storeのtodo配列を表示している
          <li key={ index }>{ todo.title } <button onClick={ () => props.removeTask(index) }>削除</button></li>
         ))}
      </ul>
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state =>{
  return {
  // val:state.counter.val,
  todos:state.todo.todos}}//reducerのtodo.jsのstateに指定したtodos配列を取得



const mapDispatchToProps = dispatch =>{
  return {
  // countPlus:()=>dispatch(countPlus()),
  // countMinus:()=>dispatch(countMinus()),
  newTask:(e)=>dispatch(newTask(e)),//DOMイベント
  removeTask:(index)=>dispatch(removeTask(index)),

}}



export default connect (mapStateToProps,mapDispatchToProps)(App);
//App【mapStateToPropsとmapDispatchToPropsがconnectされた状態のもの】をexport
