export default function (state=null, action){
    if(action.type==="USER_SELECTED"){
        return action.payload;
    }
    else{
        return state;
    }
}