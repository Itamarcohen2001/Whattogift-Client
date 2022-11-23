// IMPORT NAVIGATION LIBS
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Colors from '../utilis/AppColors';

// IMPORT ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// IMPORT SCREENS
import Dashboard, {screenOptions as DashboardScreenOptions} from '../screens/dashboard';
import Test from '../screens/dashboard/Test';
import Gifts from '../screens/gifts';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';

import Login from '../screens/account/Login';
import Signup from '../screens/account/Signup';
import Verify from '../screens/account/Verify';

const defaultOptions = {
    headerStyle: { backgroundColor: Colors.dark_blue },
    headerTintColor: Colors.white,
}

// CREATE DASHBOARD STACK
const DashboardStackNavigator = createNativeStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator screenOptions={defaultOptions}>
            <DashboardStackNavigator.Screen name='dashboard' component={Dashboard} options={DashboardScreenOptions} />
            <DashboardStackNavigator.Screen name='test' component={Test} />
        </DashboardStackNavigator.Navigator>
    )
}

// CREATE GIFTS STACK
const GiftsStackNavigator = createNativeStackNavigator();
export const GiftsStack = () => {
    return(
        <GiftsStackNavigator.Navigator screenOptions={defaultOptions}>
            <GiftsStackNavigator.Screen name='gifts' component={Gifts} />
            <GiftsStackNavigator.Screen name='test' component={Test} />
        </GiftsStackNavigator.Navigator>
    )
}

// CREATE FAVORITES STACK
const FavoritesStackNavigator = createNativeStackNavigator();
export const FavoriteStack = () => {
    return(
        <FavoritesStackNavigator.Navigator screenOptions={defaultOptions}>
            <FavoritesStackNavigator.Screen name='favorite' component={Favorites} />
            <FavoritesStackNavigator.Screen name='test' component={Test} />
        </FavoritesStackNavigator.Navigator>
    )
}

// CREATE PROFILE STACK
const ProfileStackNavigator = createNativeStackNavigator();
export const ProfileStack = () => {
    return(
        <ProfileStackNavigator.Navigator screenOptions={defaultOptions}>
            <ProfileStackNavigator.Screen name='profile' component={Profile} />
            <ProfileStackNavigator.Screen name='test' component={Test} />
        </ProfileStackNavigator.Navigator>
    )
}

// Account Stack
const AccountStackNavigator = createNativeStackNavigator();
export const AccountStack = () => {
    return(
        <GiftsStackNavigator.Navigator>
            <GiftsStackNavigator.Screen name='login' component={Login} />   
            <GiftsStackNavigator.Screen name='signup' component={Signup} />
            <GiftsStackNavigator.Screen name='verify' component={Verify} />
        </GiftsStackNavigator.Navigator>
    )
}



// CREATE TABS
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTab.Navigator activeColor={Colors.white} inactiveColor={Colors.light_blue} barStyle={{backgroundColor:Colors.ocean}}>
            <AppTab.Screen name='dashboardTab' component={DashboardStack} 

            options={{tabBarLabel: 'Dashboard', tabBarIcon: ({color}) => (<MaterialCommunityIcons name='view-grid' color={color} size={28}/>)}}/>

            <AppTab.Screen name='giftsTab' component={GiftsStack} 

            options={{tabBarLabel: 'Gift', tabBarIcon: ({color}) => (<MaterialCommunityIcons name='gift' color={color} size={28}/>)}}/>

            <AppTab.Screen name='favoritesTab' component={FavoriteStack} 

            options={{tabBarLabel: 'Favorite', tabBarIcon: ({color}) => (<MaterialCommunityIcons name='heart' color={color} size={28}/>)}}/>
            <AppTab.Screen name='profileTab' component={ProfileStack} 
            options={{tabBarLabel: 'Profile', tabBarIcon: ({color}) => (<MaterialCommunityIcons name='face-man-profile' color={color} size={28}/>)}}/>
        </AppTab.Navigator>
    )
}

const app = () => {
    
};

export default app;