import react from "react";
import {View,Text, Button } from "react-native";
import Style from '../../utilis/AppStyle';

const Favorite =(props) => {
    return (
        <View style={Style.container}>
            <Text>Favorites</Text>
            <Button onPress={() => {props.navigation.navigate('test')}} title='Go To Test'/>
        </View>
    )
}
export default Favorite;
