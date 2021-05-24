import React, {Component} from "react";
import {connect} from 'react-redux';//reduxで使う
import Todolist2 from "./component/todolist2";//todlist2（別ファイルにあるコンポーネント）
import Ticket from './ticketadd';
import TicketDetail from './ticketdetail';
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
  removeTask,
  removeTicket
  } 
  from './actions';//このファイルで使用するacionsをimport
import todo from "./reducers/todo";



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

    const Ticketview=()=>{
      const props=this.props;
      console.log(props.tickets)

      return <div>
      <h1>TODO一覧</h1>
      <button><Link to='/ticket'>新規チケット作成</Link></button>
      <table>
        {/* 以下はチケット一覧が.表示されており、1つ1つのチケットに対し詳細画面へのリンクが指定されている */}
        {props.tickets.map((ticket,index)=>(
            <tr id={index}>
              <Link to={`/ticketdetail/${ticket.id}`}>
              <td>{ticket.id}.</td>
              <td>{ticket.title}</td>
              <td>{ticket.name}</td>
              </Link>
              <td><button onClick={()=>props.removeTicket(index)}> 削除 </button></td>
              </tr>
        ))}
                  </table>
      </div>
    }

    //   const select=(index)=>{
    //   console.log("詳細画面のリンクがクリックされました");
    //   console.log("インデックス番号は"+index)//クリックしたチケットのインデックス番号＋１を表示
    //   let ticketid=props.id
    //   console.log("idは"+ticketid);
    //         //addindex（クリックしたチケットのインデックス番号）とstoreのticketsのidが一致すれば、そのidを持つticketを表示する
    //   //const props=this.props;
    //   //let ticketid=props.id;
    //   //console.log("チケットのIDは"+ticketid);//storeのチケットのidを取得
    //   //console.log(props.tickets[index])//クリックしたチケットの詳細情報を取得
    //   //   if(props.id===addindex){
    //   //    console.log("一致！！！！！！！！！！")//const filter_include_index=props.
    //   //  }
    // }

    return(
      <React.Fragment>
        <Router>
        <div>
          <button><Link to="/count">Countする</Link></button>
          <button><Link to="/todo2">TODOリスト(関数＆redux)を表示する</Link></button>
          <button><Link to="/todo1">TODOリスト(クラス＆redux)を表示する</Link></button>
          <button><Link to="/todoview">TODO一覧（チケット）を表示する</Link></button>
          <p>--------------------------------------------------------------------</p>
        </div>
        <Switch>
          <Route path='/count'>
            <Count/>
          </Route>
          <Route path='/todo1'>
            <Todo1/>
          </Route>
          <Route path='/todo2' component={Todolist2}/>
          <Route path="/todoview">
            <Ticketview/>
          </Route>
          <Route path='/ticket' component={Ticket}/>
          <Route path={'/ticketdetail/:ticketid'} component={TicketDetail}/>
        </Switch>

        </Router>
      </React.Fragment>
    )
  }
}



const mapStateToProps = state =>{
  return {
  val:state.counter.val,
  todos:state.todo.todos,//reducerのtodo.jsのstateに指定したtodos配列を取得
  tickets:state.ticket.tickets,//reducerのticket.jsのstateに指定したtodo配列を取得
  id:state.ticket.id
}}


const mapDispatchToProps = dispatch =>{
  return {
  countPlus:()=>dispatch(countPlus()),
  countMinus:()=>dispatch(countMinus()),
  newTask:(e)=>dispatch(newTask(e)),//DOMイベント
  removeTask:(index)=>dispatch(removeTask(index)),
  removeTicket:(index)=>dispatch(removeTicket(index)),
}}



export default connect (mapStateToProps,mapDispatchToProps)(App);
//App【mapStateToPropsとmapDispatchToPropsがconnectされた状態のもの】をexport
