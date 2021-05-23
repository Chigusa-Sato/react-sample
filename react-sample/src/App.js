import React, {Component} from "react";
import {connect} from 'react-redux';//reduxで使う
import Todolist2 from "./component/todolist2";//todlist2（別ファイルにあるコンポーネント）
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';//react-routerで使う
import {
  countPlus,
  countMinus,
  newTask,
  removeTask} 
  from './actions';//このファイルで使用するacionsをimport



class App extends React.Component{

  render(){
    const props = this.props;
    const add =(e)=>{
     console.log(e.target);
     props.newTask(e.target.previousElementSibling.value);
     e.target.previousElementSibling.value="";
    }
    const Count=()=>{
      const props = this.props;
      return <div>
        <h1>Count【クラス＆STORE】</h1>
      <p>現在の数字は{props.val}です</p>
      <button onClick={props.countPlus}>+1</button>
      <button onClick={props.countMinus}>-1</button>
      </div>
    }
    const Todo1=()=>{
      const props=this.props;
      return <div>
      <h1>todoリスト（クラス＆STORE）</h1>
    <input/>
    <button onClick={add}>追加</button>
    <ul>
       { props.todos.map((todo, index) => (//storeのtodo配列を表示している
        <li key={ index }>{ todo.title } <button onClick={ () => props.removeTask(index) }>削除</button></li>
       ))}
    </ul>
      </div>
    }

    return(
      <React.Fragment>
        <Router>
        <div>
          <p><Link to="/count">Countする</Link></p>
          <p><Link to="/todo1">TODOリスト(クラス＆redux)を表示する</Link></p>
          <p><Link to="/todo2">TODOリスト(関数＆redux)を表示する</Link></p>
        </div>
        <Switch>
          <Route path='/count'>
            <Count/>
          </Route>
          <Route path='/todo1'>
            <Todo1/>
          </Route>
          <Route path='/todo2' component={Todolist2}/>
        </Switch>
        </Router>
      </React.Fragment>
    )
  }
}



const mapStateToProps = state =>{
  return {
  val:state.counter.val,
  todos:state.todo.todos}}//reducerのtodo.jsのstateに指定したtodos配列を取得



const mapDispatchToProps = dispatch =>{
  return {
  countPlus:()=>dispatch(countPlus()),
  countMinus:()=>dispatch(countMinus()),
  newTask:(e)=>dispatch(newTask(e)),//DOMイベント
  removeTask:(index)=>dispatch(removeTask(index)),

}}



export default connect (mapStateToProps,mapDispatchToProps)(App);
//App【mapStateToPropsとmapDispatchToPropsがconnectされた状態のもの】をexport
