import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import HomeScreen from "./Screens/Home/HomeScreen";
import FavoritesScreen from "./Screens/FavoritesScreen";
import ProfileScreen from "./Screens/ProfileScreen";
import HomeDetailScreen from "./Screens/Home/HomeDetailScreen";
import NotificationsScreen from "./Screens/Notification/NotificationsScreen";
import HelpScreen from "./Screens/HelpScreen";
import Category1 from "./Screens/Categories/Category1";
import Category2 from "./Screens/Categories/Category2";
import Category3 from "./Screens/Categories/Category3";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import NotiDetailScreen from "./Screens/Notification/NotiDetailScreen";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { TouchableOpacity } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Text } from "react-native";
const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
const TopTab = createMaterialTopTabNavigator();

const CustomBackButton = ({ targetScreen }: { targetScreen: string }) => {
  const navigation = useNavigation<StackNavigationProp<any>>();

  const handleBackPress = () => {
    console.log("Custom back pressed!");
    navigation.goBack();
  };


  return (
    <TouchableOpacity onPress={handleBackPress} style={{ marginLeft: 10, display:"flex", flexDirection:"row", alignItems:"center", gap:10 }}>
      <AntDesign name="arrowleft" size={24} color="black" />
    </TouchableOpacity>
  );
};

export const StackNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        options={{ headerShown: false }}
        name="HomeStack"
        component={BottomTabNavigator}
      />
      <Stack.Screen
        options={{
          headerLeft: () => <CustomBackButton targetScreen="Home" />,
        }}
        name="HomeDetail"
        component={HomeDetailScreen}
      />
      <Stack.Screen
        name="NotificationDetail"
        options={{
          headerLeft: () => <CustomBackButton targetScreen="Notifications" />,
        }}
        component={NotiDetailScreen}
      />
    </Stack.Navigator>
  );
};

const BottomTabNavigator = () => {
  const favoriteCount = 5;

  return (
    <BottomTab.Navigator>
      <BottomTab.Screen
        name="Home"
        component={DrawerNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="Categories"
        component={TopTabNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="th-large" size={size} color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="FavoritesBottom"
        component={FavoritesScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="heart" size={size} color={color} />
          ),
          tabBarBadge: favoriteCount,
          tabBarBadgeStyle: {
            backgroundColor: "tomato",
            color: "white",
            fontSize: 12,
            fontWeight: "bold",
            borderRadius: 10,
            padding: 2,
            minWidth: 20,
            minHeight: 20,
            justifyContent: "center",
            alignItems: "center",
          },
        }}
      />
      <BottomTab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user" size={size} color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={HomeScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="home" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Notifications"
        component={NotificationsScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="bell" size={size} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Help"
        component={HelpScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <FontAwesome name="question-circle" size={size} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};

const TopTabNavigator = () => {
  return (
    <TopTab.Navigator>
      <TopTab.Screen name="Category 1" component={Category1} />
      <TopTab.Screen name="Category 2" component={Category2} />
      <TopTab.Screen name="Category 3" component={Category3} />
    </TopTab.Navigator>
  );
};
