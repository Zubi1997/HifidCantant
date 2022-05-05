
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

//authentication
import Splash from './src/onboarding/Splash';
import Signup_main from './src/onboarding/Signup_main'
import Signup from './src/onboarding/Signup'
import Confirmation_email from './src/onboarding/Confirmation_email'
import Profile_auth from './src/onboarding/Profile'
import Pascode_setup from './src/onboarding/Pascode_setup'
import Pascode_confirm from './src/onboarding/Pascode_confirm'
import Login from './src/onboarding/Login';
//bottom tabbar
import Link_acc_desc from './src/tabbar/Home/Link_acc_desc'
import Bank_acc_setup from './src/tabbar/Home/Bank_acc_setup'
import Link_acc_complete from './src/tabbar/Home/Link_acc_complete'
import { Tab_home_fill,Tab_home_empty,Tab_transaction_fill,Tab_transaction_empty,Tab_reports_fill,Tab_reports_empty } from './assets/svg_images';
//profile
import Change_password from './src/tabbar/Profile/Change_password'
import Pass_change_success from './src/tabbar/Profile/Pass_change_success'
// main tab
import Home from './src/tabbar/Home/Home'
import Transactions from './src/tabbar/Transactions/Transactions'
import Reports from './src/tabbar/Reports/Reports'
import TabProfile from './src/tabbar/Profile/Profile'
//transaction screens from bottom tab
import Add_cash_inflow from './src/tabbar/Transactions/Add_cash_inflow'
import Single_cashin from './src/tabbar/Transactions/Single_cashin'
import Add_cash_outflow from './src/tabbar/Transactions/Add_cash_outflow'
import Single_cashout from './src/tabbar/Transactions/Single_cashout'
//react-native-popup-menu
import { MenuProvider } from 'react-native-popup-menu';
//testing
import Testing_purpose from './src/components/Testing_purpose'
//colors file
import colors from './assets/colors';
//dummy
// import TransactionStackScreen from './src/tabbar/Bottom_tab'

const Stack = createNativeStackNavigator();

function App() {

  React.useEffect=(()=>{
    // alert('vjhb')
    // SplashScreen.hide()
    // SplashScreen.show()
  },[])


  const HomeStack = createNativeStackNavigator();
  
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name="Homee" component={Home} options={{ headerShown: false }} />
        {/* other screens */}
      </HomeStack.Navigator>
    );
  }
  
  const TransactionStack = createNativeStackNavigator();
  
  function TransactionStackScreen() {
    // alert('jhbkbk')
    return (
      <TransactionStack.Navigator >
        <TransactionStack.Screen initialParams={{cat_type:'uncategorized'}} name="Transactionss" component={Transactions} options={{ headerShown: false }}/>
        <TransactionStack.Screen name="Add_cash_inflow" component={Add_cash_inflow} options={{ headerShown: false }}/>
        <TransactionStack.Screen name="Single_cashin" component={Single_cashin} options={{ headerShown: false }}/>
        <TransactionStack.Screen name="Add_cash_outflow" component={Add_cash_outflow} options={{ headerShown: false }}/>
        <TransactionStack.Screen name="Single_cashout" component={Single_cashout} options={{ headerShown: false }}/>

      </TransactionStack.Navigator>
    );
  }
  
  const Tab = createBottomTabNavigator();
  
  function Bottomtabbar() {
    return (
      <Tab.Navigator 
      screenOptions={
        ({ route }) => ({
          tabBarHideOnKeyboard: true,
          tabBarActiveTintColor: colors.nextbtn,
          tabBarInactiveTintColor:colors.inactive_tab,
          tabBarShowLabel: true,
          tabBarStyle: {
            paddingBottom:15,
            height: 65,
            backgroundColor: 'white',
          },
        tabBarIcon: ({ focused, color, size }) => {
          let IconName;
  
         if (route.name === 'Profile') {
            IconName = focused ? 'person-sharp' : 'person-sharp';
          }
          // You can return any component that you like here!
          if (route.name === 'Home') {
            return (
            <>
             {focused?<Tab_home_fill />:<Tab_home_empty />} 
            </>
            )
          }  else if (route.name === 'Transactions') {
            return (
            <>
             {focused?<Tab_transaction_fill />:<Tab_transaction_empty />}
            </>
            )
          }  else if (route.name === 'Reports') {
            return (
            <>
             {focused?<Tab_reports_fill />:<Tab_reports_empty />} 
            </>
            )
          } else if (route.name === 'Profile') {
            return <Ionicons name={IconName} size={20} color={color} />
          }
          
          ;
        },
      })}
   
      >
        <Tab.Screen  name="Home" component={HomeStackScreen}   options={{ headerShown: false }}/>
        <Tab.Screen name="Transactions"  component={TransactionStackScreen}  options={{ headerShown: false }} />
        <Tab.Screen  name="Reports" component={Reports}  options={{ headerShown: false }} />
        <Tab.Screen name="Profile" component={TabProfile}  options={{ headerShown: false }}/>
  
      </Tab.Navigator>
    );
  }

  return (
    <MenuProvider >
    <NavigationContainer>
      <Stack.Navigator>

        {/* testing */}
        {/* <Stack.Screen name="Testing_purpose" component={Testing_purpose}  options={{ headerShown: false }}/> */}

        {/* onboarding */}
        <Stack.Screen name="Splash" component={Splash}  options={{ headerShown: false }}/>
        <Stack.Screen name="Signup_main" component={Signup_main}  options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={Signup}  options={{ headerShown: false }}/>
        <Stack.Screen name="Confirmation_email" component={Confirmation_email}  options={{ headerShown: false }}/>
        <Stack.Screen name="Profile_auth" component={Profile_auth}  options={{ headerShown: false }}/>
        <Stack.Screen name="Pascode_setup" component={Pascode_setup}  options={{ headerShown: false }}/>
        <Stack.Screen name="Pascode_confirm" component={Pascode_confirm}  options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login}  options={{ headerShown: false }}/>

        {/* tabbar screens */}
        <Stack.Screen name="Bottomtabbar" component={Bottomtabbar}  options={{ headerShown: false }}/>
        <Stack.Screen name="Link_acc_desc" component={Link_acc_desc}  options={{ headerShown: false }}/>
        <Stack.Screen name="Bank_acc_setup" component={Bank_acc_setup}  options={{ headerShown: false }}/>
        <Stack.Screen name="Link_acc_complete" component={Link_acc_complete}  options={{ headerShown: false }}/>
        {/* Profile */}
        <Stack.Screen name="Change_password" component={Change_password}  options={{ headerShown: false }}/>
        <Stack.Screen name="Pass_change_success" component={Pass_change_success}  options={{ headerShown: false }}/>



      </Stack.Navigator>
    </NavigationContainer>
  </MenuProvider>
  );
}

export default App;