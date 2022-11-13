import AsyncStorage from '@react-native-async-storage/async-storage';
import react from 'react'
import {Button, View, Text} from 'react-native';
import Style from "../../utilis/AppStyle";
import React,{useEffect, useCallback, useState} from 'react';


const Dashboard = (props) => {

    const [token, setToken] = useState('');

    useEffect(() =>{
        getDataFromAsync();
    },[getDataFromAsync])

    const getDataFromAsync = useCallback(async () => {
       const dataFromAsync = await AsyncStorage.getItem('Token');
       if(dataFromAsync != null){
        const data =JSON.parse(dataFromAsync);
        setToken(data.token);
       }
    },[setToken])
    console.log(token);

    return(
        <View style={Style.container}>
            <Text>Dashboard</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/>
        </View>
    )
}

export default Dashboard;