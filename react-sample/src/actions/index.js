export const COUNTPLUS='countPlus'
export const COUNTMINUS='countMinus'
export const ADDTASK='newTask'
export const REMOVETASK='removeTask'
export const ADDTICKET='addTicket'
export const REMOVETICKET='removeTicket'

 export const countPlus =()=>({//Actionクリエーター
     type:COUNTPLUS//Action
 })

 export const countMinus =()=>({//Actionクリエーター
     type:COUNTMINUS//Action
 })


export const newTask =(e)=>({//Actionクリエーター
    type:ADDTASK,//Action
    title:e//入力値
})

export const removeTask =(index)=>({//Actionクリエーター
    type:REMOVETASK,//Action
    index:index//削除する際に削除対象となるタスクをINDEX番号と紐付けて特定
})

let nextid=1
export const addTicket =(etitle,edetail,ename,eend,estart)=>({//Actionクリエーター
    type:ADDTICKET,//Action
    title:etitle,
    detail:edetail,
    name:ename,
    end:eend,
    start:estart,
    id:nextid++
})

export const removeTicket=(index)=>({
    type:REMOVETICKET,
    index:index
})


