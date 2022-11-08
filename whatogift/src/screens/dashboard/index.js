import react from 'react'
import {Button, View, Text} from 'react-native';
import Style from "../../utilis/AppStyle";

const Dashboard = (props) => {
    return(
        <View style={Style.container}>
            <Text>Dashboard</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/>
        </View>
    )
}

export default Dashboard;