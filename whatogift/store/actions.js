import { Alert } from "react-native";

export const LOGIN ='LOGIN';

export const loginDispach = (data)=>{
    return dispatch=>{
        dispatch({type: LOGIN, data: data})
    }
}
export const login = (email,password) => {
    return async dispatch => {
        try {
            const url = 'http://192.168.56.1:3001/api/account/login';
            const request = await fetch(url, {
                method:'post',
                headers:{'Content-Type':'application/json'},
                body: JSON.stringify({
                   email:email,
                   password:password
                })
            })
            const data = await request.json();
            if(data.status){
                dispatch(loginDispach(data))
                console.log(JSON.stringify(data));
            }
            else{
                let message = data.message;
                throw new Error(message);           
            }
        } catch (error) {
                throw new Error(error.message);        
        }
    }
}