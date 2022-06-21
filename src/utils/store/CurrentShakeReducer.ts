import { applyMiddleware, createStore, Store } from 'redux';

const CHANGE_CURRENT_SHAKE = "CHANGE_CURRENT_SHAKE"

type typeStore={
    currentShake: object
}
const defualtState:typeStore={
    currentShake: [false,'','','','']
}

export const ChangeCurrentShake = (payload:string[])=>({
    type:"CHANGE_CURRENT_SHAKE",
    payload
} as const)


type Actions = ReturnType<typeof ChangeCurrentShake>


export const CurrentShakeReducer = (state=defualtState, action:Actions)=>{
    switch(action.type){
        case CHANGE_CURRENT_SHAKE:
            return{...state, currentShake: action.payload}
        default:
            return state
    }
}

