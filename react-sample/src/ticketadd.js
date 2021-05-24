 import {addTicket} from './actions'
 import React, {Component} from "react";
 import {connect} from 'react-redux';//reduxで使う
 import Ticketview from './App';
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from 'react-router-dom';

const Ticket=(props)=>{
    const add=(etitle,ename,edetail,eend,estart)=>{
        console.log("クリックできました");
        const $title=document.getElementById("title")
        console.log($title.value)
        etitle=$title.value//チケット名を取得

       const $detail=document.getElementById("detail")
       console.log($detail.value)
       edetail=$detail.value//詳細情報を取得

        const $name=document.getElementById("name")
        console.log($name.value)
        ename=$name.value//担当者を取得

        const $end=document.getElementById("end")
        console.log($end.value)
        eend=$end.value//担当者を取得

        const $start=document.getElementById("start")
        console.log($start.value)
        estart=$start.value//担当者を取得

        //ここでいｄ
        //配列の情報をすべて取ってくる
        //新しいオブジェクトを作る
        //hairetuno一案最後の要素のid＋１の応訴を
        //const lastTicket=props.tickets[props.tickets.length-1]
        //const newTodo={//ticket.jsにこのオブジェクトを追加
           // ticketid:lastTicket.ticketid+1
        //}


        props.addTicket(etitle,edetail,ename,eend,estart,);
    }

    // const gettitle=(e)=>{//onChangeでチケット名の値を取得
    //     const $gettitle=e.target.value
    //     console.log($gettitle);
    //  }
    //  const getdetail=(e)=>{
    //      const $getdetail=e.target.value
    //      console.log($getdetail)
    //  }
    //  const getname=(e)=>{
    //     const $getname=e.target.value
    //     console.log($getname)
    // }
    // const getend=(e)=>{
    //     const $getend=e.target.value
    //     console.log($getend)
    // }
    // const getstart=(e)=>{
    //     const $getstart=e.target.value
    //     console.log($getstart)
    // }



    return <div>
    <h2>チケット作成(Todo作成)</h2>
    <ul>
        <li>チケット名<input type="text" id="title"/></li>
        <li>詳細<input type="textarea" id="detail"/></li>
        <li>担当者<input type='text' id="name"/></li>
        <li>期日<input type='date' id="end"/></li>
        <li>開始日<input type='date'id="start"/></li>
        <button onClick={add}>追加</button>
    </ul>
    </div>

}

const mapStateToProps=state=>({
    tickets:state.ticket.tickets
})
const mapDispatchToProps=dispatch=>({
    addTicket:(etitle,edetail,ename,eend,estart)=>dispatch(addTicket(etitle,edetail,ename,eend,estart)),
})

export default connect (mapStateToProps,mapDispatchToProps)(Ticket)
