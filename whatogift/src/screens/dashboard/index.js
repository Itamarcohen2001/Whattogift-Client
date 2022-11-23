import AsyncStorage from '@react-native-async-storage/async-storage';
import react from 'react'
import {Button, View, Text, Alert} from 'react-native';
import Style from "../../utilis/AppStyle";
import React,{useEffect, useCallback, useState} from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Colors from '../../utilis/AppColors';

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

export const screenOptions = (navData) => {
    return {
        headerTitle: 'overView',
        headerShown: true,
        headerRight: () => (
            <MaterialIcons onPress={()=> {navData.navigation.navigate('test')}} name='settings' color={Colors.white} size={28}/>
        )
    }
}

export default Dashboard;