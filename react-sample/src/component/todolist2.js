import React from 'react';
import {connect, createDispatchHook} from 'react-redux';
 import {
    newTask,
    removeTask} 
     from '../actions';

const Todolist2=(props)=>{
    const add=(e)=>{
        e=e.target.previousElementSibling.value
        console.log(e)//入力値取得
        console.log(props.todos)//stateのtodolist取得
        props.newTask(e)
        };
    // const remove=(index)=>{
    //     console.log("remove")//イベント呼び出し成功
    //     props.removeTask(index)
    // }
    return(
        <React.Fragment>
        <h1>todoリスト【関数＆Store】todolist.js</h1>
        <div>
            <ul>
            <input/>
            <button onClick={add}>add</button>
                 {props.todos.map((todo,index) => (
                    <li key={index}>{todo.title}<button onClick={()=>props.removeTask(index)}>delete</button></li>
                 ))}
            </ul>
        </div>
        </React.Fragment>
    )
}


const mapStateToProps = state =>({
    todos:state.todo.todos})//reducerのtodo.jsのstateに指定したtodos配列を取得
const mapDispatchToProps=dispatch=>({
        newTask:(e)=>dispatch(newTask(e)),
        removeTask:(index)=>dispatch(removeTask(index))
})
  
export default connect (mapStateToProps,mapDispatchToProps)(Todolist2);