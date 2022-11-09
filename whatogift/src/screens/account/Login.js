import React,{useState, useEffect} from "react";
import { View, Text,ActivityIndicator,Alert} from "react-native";
import Style from '../../utilis/AppStyle';
import {TextInput,Button} from 'react-native-paper';
import Colors from '../../utilis/AppColors'

const Login=()=>{

    const [email,setEmail]=useState('');
    const [password, setPassword]= useState('');
    const [isLoading,setIsLoading]=useState(false);
    const [errorMsg, setErrorMsg]=useState(null);

    useEffect(() => {
        if(errorMsg){
            Alert.alert('Login',errorMsg);
        }
    },[errorMsg])

    const login = async() => {
        setIsLoading(true);
        if(email != "" && password != "")
        {
            try{
                const url ='http://192.168.56.1:3001/api/account/login';
                const response = await fetch(url, {
                    method:'post',
                    headers:{'Content-Type':'application/json'},
                    body: JSON.stringify({
                        email:email,
                        password:password
                    })
                })

                const data = await response.json();
                if(data.status)
                {
                    setIsLoading(true);
                    setErrorMsg(data.token);
                }
                else{
                    setIsLoading(false);
                    setErrorMsg(data.message);
                }

            }
            catch (error){
                setIsLoading(false);
                setErrorMsg(error.message);
            }
        }
        else{
            setIsLoading(false);
            setErrorMsg('All input required');
        }
    }

    return(
        <View style={Style.container}>
            <Text style={{fontSize:24, fontWeight:'700',marginBottom:30}}>Login</Text>

            <TextInput
            value={email} onChangeText={text=>{setEmail(text)}}
            label="Email"
            placeholder="Email"
            keyboardType="email-address"
            autoCapitalize="none"
            right={<TextInput.Icon icon = "email" />}
            />
            <TextInput
            value={password} onChangeText={text=>{setPassword(text)}}
            label="Password"
            keyboardType="default"
            autoCapitalize="none"
            secureTextEntry
            right={<TextInput.Icon icon = "eye" />}
            />
           
            {
                isLoading ? (<ActivityIndicator color={Colors.ocean} size="large" />):
                 (<Button icon="send" mode="contained" onPress={login}> Login </Button>)
            }


        </View>
    )
}
export default Login;