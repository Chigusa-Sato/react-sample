import React from "react";
import {connect} from 'react-redux';//reduxで使う
import { useParams } from "react-router";

const TicketDetail=(props)=>{

    const {ticketid}=useParams()
    const ticketId=Number(ticketid)
    const ticketfilter=props.tickets.filter(ticket=>{
        return ticket.id===ticketId
    })
    return(
        <React.Fragment>
        <div>
            <h2>チケット詳細</h2>
        </div>
        <div>
        {ticketfilter.map(ticket=>{
            return(
             <ul>
              <li>チケット名  {ticket.title}</li>
              <li>詳細<br/>{ticket.detail}</li>
              <li>担当者  {ticket.name}</li>
              <li>期日{ticket.end}</li>
              <li>開始日{ticket.start}</li>
              </ul>
            )
        })}
        </div>
        </React.Fragment>
    )

    //console.log("インデックス番号は"+index);
    //console.log("チケットIDは"+ticketid);//クリックしたticketIDが取得される
    //.filter//.findIndex
   //const ticket=props.tickets[index]


    // return <div>
    //     <h2>チケット詳細表示（Todo表示）{ticketid}</h2>
    //     <ul>
    //     {props.tickets.map((ticket)=>(
    //         <ul>
    //           <li>チケット名  {ticket.title}</li>
    //           <li>詳細<br/>{ticket.detail}</li>
    //           <li>担当者  {ticket.name}</li>
    //           <li>期日{ticket.end}</li>
    //           <li>開始日{ticket.start}</li>
    //           </ul>
    //     ))}
    //   </ul>
    // </div>
}
const mapStateToProps=state=>({
    tickets:state.ticket.tickets
})

export default connect (mapStateToProps)(TicketDetail)