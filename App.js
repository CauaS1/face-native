import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider as PaperProvider } from 'react-native-paper';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { Icon } from 'react-native-elements';

import Login from './src/pages/Login';
import Register from './src/pages/Register';

import DrawerComponent from './src/components/DrawerComponent';
import Header from './src/components/Header';
import Home from './src/pages/Home';
import Friends from './src/pages/Friends';
import Store from './src/pages/Store';
import Notifications from './src/pages/Notifications';

//There is a problem with the logic, where the DrawerNavigator is enable on the login page 

//Data

let info = [
  {
    name: "Etty Fidele",
    photo: require('./src/img/etty-fidele.jpg'),
    id: 1,
    friends: "1.5k",
    followers: "820",
    bio: "Be the best person <3"
  },
  {
    name: "Manny Moreno",
    photo: require('./src/img/manny-moreno.jpg'),
    id: 2,
    friends: "1.2k",
    followers: "250",
    bio: "Programming is life "
  },
  {
    name: "Daniel Lincon",
    photo: require('./src/img/daniel-lincon.jpg'),
    id: 3,
    friends: "3.7k",
    followers: "1.3k",
    bio: "Photographer"
  },
  {
    name: "Jane Erhunse",
    photo: require('./src/img/jeffery.jpg'),
    id: 4,
    friends: "1.1k",
    followers: "452",
    bio: "<3 Travelling around the Wolrd"
  },
  {
    name: "Sophia Resly",
    photo: require('./src/img/sophia-resly.jpg'),
    id: 5,
    friends: "5.9k",
    followers: "3.2k",
    bio: "React Native Delevoper"
  }
]

let allNotifications = [
  {
    name: "Nicole Wolf",
    photo: require('./src/img/nicole-dev.jpg'),
    data: "Sep 16 at 08:01",
    id: 1,
    friends: "1.5k",
    type: "Friend"
  },
  {
    name: "React <Devs />",
    photo: require('./src/img/pc.jpg'),
    data: "Sep 16 at 03:05",
    id: 2,
    members: "126k",
    type: "Group"
  },
  {
    name: "Fernando Hernandez",
    photo: require('./src/img/fernando-hernandez.jpg'),
    data: "Sep 15 at 18:37",
    id: 3,
    friends: "5.5k",
    type: "Friend"
  },
  {
    name: "Barbara Dungan",
    photo: require('./src/img/barbara-dungan.jpg'),
    data: "Sep 13 at 02:51",
    id: 4,
    friends: "1k",
    type: "Friend"
  },
  {
    name: "Unsplash",
    photo: require('./src/img/unsplash-logo.png'),
    data: "Sep 10 at 05:52",
    id: 5,
    members: "267k",
    type: "Group"
  }
]

let storeItems = [
  {
    price: 999,
    city: 'Orlando, FL',
    itemPhoto: require('./src/img/jonas-leupe.jpg'),
    about: "Its the new S20 Ultra, I was using to taking photos, but I get a new photograph camera",
    seller: "Jonas Leupe",
    condition: "Perfect"
  },
  {
    price: 50,
    city: 'Miami, FL',
    itemPhoto: require('./src/img/klara-kulikova.jpg'),
    about: "The best wine of Miami now you can boy online.",
    seller: "Klara Kulikova",
    condition: "None"
  },
  {
    price: 1899,
    city: 'New York, NY',
    itemPhoto: require('./src/img/tianyi-ma.jpg'),
    about: "The new Macbook Pro 2020 is here, I have all the papers from it with more 8 months of warranty.",
    seller: "Tianyi Ma",
    condition: "Perfect",
  },
  {
    price: 25,
    city: 'Los Angeles, LA',
    itemPhoto: require('./src/img/md-salman.jpg'),
    about: "I'ts are new clothes with a good quality and beautiful and vibrants colors, we send it to your home.",
    seller: "Md Salman",
    condition: "New"
  },
  {
    price: 1300,
    city: 'Miami, FL',
    itemPhoto: require('./src/img/andy-holmes.jpg'),
    about: "I'm not use my pc so I'm selling it, it has a RTX 2080, I9 9900K, 16 RAM, 450GB SSD and more...",
    seller: "Andy Holmes",
    condition: "Perfect"
  }
]

let topFriends = 'Friends';
let topMarketplace = 'Marketplace';
let topNotifications = 'Notifications';

//TopTabs 

function HomePage() {
  return <Home />
}
function FriendsPage() {
  return <Friends info={info} bar={topFriends} />
}
function StorePage() {
  return <Store bar={topMarketplace} items={storeItems} />
}
function NotificationsPage() {
  return <Notifications notific={allNotifications} bar={topNotifications} />
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  // TO the Header stands under the DrawerNavigator, the Drawer needs to starts render. Drawer >> Stack >> Tabs
  return (
    <PaperProvider>
      <NavigationContainer>
        <Drawer.Navigator drawerStyle={{ width: "80%" }} drawerContent={props => <DrawerComponent {...props} />} >
          <Drawer.Screen name="DrawerPage" component={App} options={{ gestureEnabled: true }} />
        </Drawer.Navigator>
      </NavigationContainer>
    </PaperProvider>

  );
}

const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator tabBarOptions={{
      showIcon: true,
      showLabel: false,
      style: {
        height: 50,
      },
      activeTintColor: "#1877f3",
      inactiveTintColor: "#ccc",
      labelStyle: {
        color: "#000"
      },
    }}

    >
      <Tab.Screen name="Home" component={HomePage}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5 name="home" size={20} color={focused ? '#1877f3' : '#676767'} />
          )
        }} />
      <Tab.Screen name="Friends" component={FriendsPage} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="user-friends" size={20} color={focused ? '#1877f3' : '#676767'} />
        )
      }} />
      <Tab.Screen name="Store" component={StorePage} options={{
        tabBarIcon: ({ focused }) => (
          <FontAwesome5 name="store" size={20} color={focused ? '#1877f3' : '#676767'} />
        )
      }} />
      <Tab.Screen name="Notifications" component={NotificationsPage} options={{
        tabBarIcon: ({ focused }) => (
          <Icon name='bell' type='font-awesome' size={20} color={focused ? '#1877f3' : '#676767'} />
          //   <Badge value="15" status="error" co />
        )
      }} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <Stack.Navigator initialRouteName="home"
      screenOptions={({ route }) => ({
        headerShown: route.name === 'MainContent',
      })}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Register" component={Register} />
      <Drawer.Screen name="MainContent" component={MyTabs} options={{ header: () => <Header /> }} />
    </Stack.Navigator>
  );
}

/*
   
*/

export default MyDrawer;

