import react from "react";
import {View,Text, Button } from "react-native";
import Style from '../../utilis/AppStyle';

const Profile =(props) => {
    return (
        <View style={Style.container}>
            <Text>Profile</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/>
        </View>
    )
}
export default Profile;
