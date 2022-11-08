// IMPORT NAVIGATION LIBS
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// IMPORT ICONS
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// IMPORT SCREENS
import Dashboard from '../screens/dashboard';
import Test from '../screens/dashboard/Test';
import Gifts from '../screens/gifts';
import Favorites from '../screens/favorites';
import Profile from '../screens/profile';

// CREATE DASHBOARD STACK
const DashboardStackNavigator = createNativeStackNavigator();
export const DashboardStack = () => {
    return(
        <DashboardStackNavigator.Navigator>
            <DashboardStackNavigator.Screen name='dashboard' component={Dashboard} />
            <DashboardStackNavigator.Screen name='test' component={Test} />
        </DashboardStackNavigator.Navigator>
    )
}

// CREATE GIFTS STACK
const GiftsStackNavigator = createNativeStackNavigator();
export const GiftsStack = () => {
    return(
        <GiftsStackNavigator.Navigator>
            <GiftsStackNavigator.Screen name='gifts' component={Gifts} />
            <GiftsStackNavigator.Screen name='test' component={Test} />
        </GiftsStackNavigator.Navigator>
    )
}

// CREATE FAVORITES STACK
const FavoritesStackNavigator = createNativeStackNavigator();
export const FavoriteStack = () => {
    return(
        <FavoritesStackNavigator.Navigator>
            <FavoritesStackNavigator.Screen name='favorite' component={Favorites} />
            <FavoritesStackNavigator.Screen name='test' component={Test} />
        </FavoritesStackNavigator.Navigator>
    )
}

// CREATE PROFILE STACK
const ProfileStackNavigator = createNativeStackNavigator();
export const ProfileStack = () => {
    return(
        <ProfileStackNavigator.Navigator>
            <ProfileStackNavigator.Screen name='profile' component={Profile} />
            <ProfileStackNavigator.Screen name='test' component={Test} />
        </ProfileStackNavigator.Navigator>
    )
}

// CREATE TABS
const AppTab = createMaterialBottomTabNavigator();
export const TabsNavigator = () => {
    return(
        <AppTab.Navigator>
            <AppTab.Screen name='dashboardTab' component={DashboardStack} options={{tabBarLabel: 'Dashboard', tabBarIcon: () => (<MaterialCommunityIcons name='view-grid' size={28}/>)}}/>
            <AppTab.Screen name='giftsTab' component={GiftsStack} options={{tabBarLabel: 'Gift', tabBarIcon: () => (<MaterialCommunityIcons name='gift' size={28}/>)}}/>
            <AppTab.Screen name='favoritesTab' component={FavoriteStack} options={{tabBarLabel: 'Favorite', tabBarIcon: () => (<MaterialCommunityIcons name='heart' size={28}/>)}}/>
            <AppTab.Screen name='profileTab' component={ProfileStack} options={{tabBarLabel: 'Profile', tabBarIcon: () => (<MaterialCommunityIcons name='face-man-profile' size={28}/>)}}/>
        </AppTab.Navigator>
    )
}

const app = () => {
    
};

export default app;