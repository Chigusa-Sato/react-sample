import {ADDTICKET} from '../actions'
import {REMOVETICKET} from '../actions'

const initialState ={tickets:[
    // { ticketid:0,title: '画面詳細設計',name:'鈴木',detail:"カバレッジ80％を目指す、基本機能は100%"},
    // { ticketid:1,title: '基本設計',name:'鈴木',detail:"カバレッジ80％を目指す、基本機能は100%"},
    // { ticketid:2,title: '詳細設計',name:'金田',detail:"カバレッジ80％を目指す、基本機能は100%"},
    // { ticketid:3,title: 'コーディング',name:'鈴木',detail:"カバレッジ80％を目指す、基本機能は100%"},
    // { ticketid:4,title: '単体テスト',name:'金田',detail:"カバレッジ80％を目指す、基本機能は100%"}
],
   // id:0
}



export default(state=initialState,action)=>{
    switch(action.type){
        case ADDTICKET:
            console.log(state);
            return{
                //...state,
                //id:state.id+1,
                tickets:[...state.tickets,{id:action.id,title:action.title,detail:action.detail,name:action.name,start:action.start,end:action.end}]};
            case REMOVETICKET:
                const removeTicket=[...state.tickets]
                removeTicket.splice(action.index,1)
                return{tickets: removeTicket,}
        default:
            return state;
    }
}

// id:state.id+1,