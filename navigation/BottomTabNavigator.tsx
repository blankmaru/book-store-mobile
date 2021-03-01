import {Ionicons, MaterialCommunityIcons} from '@expo/vector-icons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import BooksScreen from '../screens/BooksScreen';
import SearchScreen from '../screens/SearchScreen';
import {BooksParamList, BottomTabParamList, NotificationParamList, SearchParamList, AccountParamList} from '../types';
import NotificationScreen from "../screens/NotificationScreen";
import AccountScreen from "../screens/AccountScreen";

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <BottomTab.Navigator
            initialRouteName="Books"
            tabBarOptions={{activeTintColor: Colors[colorScheme].tint, showLabel: false}}>
            <BottomTab.Screen
                name="Books"
                component={BooksNavigator}
                options={{
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="book-open-variant" size={30} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Search"
                component={SearchNavigator}
                options={{
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="magnify" size={30} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Notification"
                component={NotificationNavigator}
                options={{
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="bell" size={30} color={color}/>,
                }}
            />
            <BottomTab.Screen
                name="Account"
                component={AccountNavigator}
                options={{
                    tabBarIcon: ({color}) => <MaterialCommunityIcons name="account" size={30} color={color}/>,
                }}
            />
        </BottomTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{marginBottom: -3}} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const BooksStack = createStackNavigator<BooksParamList>();

function BooksNavigator() {
    return (
        <BooksStack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <BooksStack.Screen
                name="BooksScreen"
                component={BooksScreen}
            />
        </BooksStack.Navigator>
    );
}

const SearchStack = createStackNavigator<SearchParamList>();

function SearchNavigator() {
    return (
        <SearchStack.Navigator>
            <SearchStack.Screen
                name="SearchScreen"
                component={SearchScreen}
                options={{headerTitle: 'Search Book'}}
            />
        </SearchStack.Navigator>
    );
}

const NotificationStack = createStackNavigator<NotificationParamList>();

function NotificationNavigator() {
    return (
        <NotificationStack.Navigator>
            <NotificationStack.Screen
                name="NotificationScreen"
                component={NotificationScreen}
                options={{headerTitle: 'Notifications'}}
            />
        </NotificationStack.Navigator>
    );
}

const AccountStack = createStackNavigator<AccountParamList>();

function AccountNavigator() {
    return (
        <AccountStack.Navigator>
            <AccountStack.Screen
                name="AccountScreen"
                component={AccountScreen}
                options={{headerTitle: 'User Account'}}
            />
        </AccountStack.Navigator>
    );
}
