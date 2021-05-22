//export const COUNTPLUS='countPlus'
//export const COUNTMINUS='countMinus'
export const ADDTASK='newTask'
export const REMOVETASK='removeTask'

// export const countPlus =()=>({//Actionクリエーター
//     type:COUNTPLUS//Action
// })

// export const countMinus =()=>({//Actionクリエーター
//     type:COUNTMINUS//Action
// })


export const newTask =(e)=>({//Actionクリエーター
    type:ADDTASK,//Action
    title:e//入力値
})

export const removeTask =(index)=>({//Actionクリエーター
    type:REMOVETASK,//Action
    index:index
})



