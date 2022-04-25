// import React, {useEffect,useState,useContext,createContext} from 'react';
// import { AsyncStorage, StyleSheet, Text, View ,Platform,TouchableOpacity,Image} from 'react-native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Ionicons from 'react-native-vector-icons/Ionicons'
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
// import colors from '../../assets/colors';

// // main tab
// import Home from '../tabbar/Home/Home'
// import Transactions from './Transactions/Transactions'
// import Reports from './Reports/Reports'
// import Profile from './Profile/Profile'
// // transaction tab
// import Add_cash_inflow from './Transactions/Add_cash_inflow'
// // import tab icons 
// import { Tab_home_fill,Tab_home_empty,Tab_transaction_fill,Tab_transaction_empty,Tab_reports_fill,Tab_reports_empty } from '../../assets/svg_images';

// const Tab = createBottomTabNavigator();
// const Transaction_Stack = createNativeStackNavigator();

// export default function MyTabs({navigation}) {

//   // const [chat_data,GetCallData]=useState({id:'', user:{name: '', profile: {image: ''}}})
  
  
//   // React.useEffect(() => {
//   //   const unsubscribe = navigation.addListener('tabPress', (e) => {
//   //     // Prevent default behavior
//   //     e.preventDefault();

//   //     alert('Default behavior prevented');
//   //     // Do something manually

//   //     // ...
//   //   });

//   //   return unsubscribe;
//   // }, [navigation]);
 
//   const HomeStack = createNativeStackNavigator();
  
//   function HomeStackScreen() {
//     return (
//       <HomeStack.Navigator>
//         <HomeStack.Screen name="Homee" component={Home} />
//         {/* other screens */}
//       </HomeStack.Navigator>
//     );
//   }
  
//   const TransactionStack = createNativeStackNavigator();
  
//   function TransactionStackScreen() {
//     // alert('jhbkbk')
//     return (
//       <TransactionStack.Navigator initialRouteName='Transactions'>
//         <TransactionStack.Screen name="Transactionss" component={Transactions}
//           options={({ route }) => ({
//             headerTitle: console.log(route),
//          })}
//         />
//         <TransactionStack.Screen name="Add_cash_inflow" component={Add_cash_inflow} />
  
//         {/* other screens */}
//       </TransactionStack.Navigator>
//     );
//   }

    


//     return (
     
//     <Tab.Navigator 
//     screenOptions={
      
//       ({ route }) => ({
//         tabBarActiveTintColor: colors.nextbtn,
//         tabBarInactiveTintColor:colors.inactive_tab,
//         tabBarShowLabel: true,
//         tabBarStyle: {
//           // paddingVertical: Platform.OS === 'ios' ? 20 : 0,
//           paddingBottom:15,
//           height: 65,
//           backgroundColor: 'white',
          
//         },
//       tabBarIcon: ({ focused, color, size }) => {
//         let IconName;

//        if (route.name === 'Profile') {
//           IconName = focused ? 'person-sharp' : 'person-sharp';
//         }
//         // You can return any component that you like here!
//         if (route.name === 'Home') {
//           return (
//           <>
//            {focused?<Tab_home_fill />:<Tab_home_empty />} 
//           </>
//           )
//         }  else if (route.name === 'Transactions') {
//           return (
//           <>
//            {focused?<Tab_transaction_fill />:<Tab_transaction_empty />}
//           </>
//           )
//         }  else if (route.name === 'Reports') {
//           return (
//           <>
//            {focused?<Tab_reports_fill />:<Tab_reports_empty />} 
//           </>
//           )
//         } else if (route.name === 'Profile') {
//           return <Ionicons name={IconName} size={20} color={color} />
//         }
        
//         ;
//       },
//     })}
//     // tabBarOptions={{
//     //   showLabel: true,
//     //   activeTintColor: '#c92b78',
//     //   inactiveTintColor: '#3a3a3a',
//     //   style: {
//     //     backgroundColor: 'white',//color you want to change
//     //   }
//     // }}
 
//     >
//       <Tab.Screen  name="Home" component={HomeStackScreen}   />
//       <Tab.Screen name="Transactions" component={TransactionStackScreen}   />
//       <Tab.Screen  name="Reports" component={Reports}   />
//       <Tab.Screen name="Profile" component={Profile}   />

//     </Tab.Navigator>
//   )
// }


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   centeredView: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 22,
//   },
//   modalView: {
//     margin: 20,
//     backgroundColor: 'white',
//     borderRadius: 20,
//     padding: 20,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: {
//       width: 0,
//       height: 2,
//     },
//     shadowOpacity: 0.25,
//     shadowRadius: 3.84,
//     elevation: 5,
//   },
//   openButton: {
//     backgroundColor: '#F194FF',
//     borderRadius: 20,
//     padding: 10,
//     elevation: 2,
//   },
//   textStyle: {
//     color: 'white',
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   modalText: {
//     marginBottom: 15,
//     textAlign: 'center',
//   },


// });


import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView,Image ,Modal, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/colors';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Add_cash_inflow from '../tabbar/Transactions/Add_cash_inflow'
import Transactions from '../tabbar/Transactions/Transactions'



var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height


const TransactionStack = createNativeStackNavigator();

export default function TransactionStackScreen(props) {

  const [selected_tab, set_selected_tab] = useState("cashflow");
  const [initial_route, set_initial_route] = useState('');

  const scrollref=useRef()

  // React.useEffect=(()=>{
  //   // set_modal_visible()

  // },[])

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
        const detectLogin = async () => {
          // console.log('nhgngh g', props.route.key);
         
          // if(props.route.name=='Transactionss' || props.route.name==undefined){
          //   set_initial_route('Transactions')
          // }
          // else  {
          //   set_initial_route('Add_cash_inflow')
          // }
        }
      detectLogin(); 

      return () => {
     //  console.log('Screen was unfocused');

      };
    }, [initial_route])
  );



  return (
        
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.head_txt1}>Reports</Text>
          <View style={styles.tab_header_main}>
            <TouchableOpacity onPress={()=>{set_selected_tab('cashflow'),scrollref.current.scrollTo({ x: windowWidth*0 })}} style={[styles.tab1,{backgroundColor:selected_tab=='cashflow'?'white':colors.tab_head}]}>
              <Text style={[styles.tab_txt,{color:selected_tab=='cashflow'?'black':'white'}]}>Cash Flow</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>[set_selected_tab('cashin'),scrollref.current.scrollTo({ x: windowWidth*1 })]} style={[styles.tab1,{backgroundColor:selected_tab=='cashin'?'white':colors.tab_head}]}>
              <Text style={[styles.tab_txt,{color:selected_tab=='cashin'?'black':'white'}]}>Cash In</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>[set_selected_tab('cashout'),scrollref.current.scrollTo({ x: windowWidth*2 })]} style={[styles.tab1,{backgroundColor:selected_tab=='cashout'?'white':colors.tab_head}]}>
              <Text style={[styles.tab_txt,{color:selected_tab=='cashout'?'black':'white'}]}>Cash Out</Text>
            </TouchableOpacity>
          </View>
        </View> 

        

      <TransactionStack.Navigator initialRouteName={initial_route}>
        <TransactionStack.Screen name="Transactionss" component={Transactions} 
          options={({ route }) => ({
            headerTitle: console.log(route),
         })}
        />
        <TransactionStack.Screen name="Add_cash_inflow" component={Add_cash_inflow} />
  
        {/* other screens */}
      </TransactionStack.Navigator>


        {/* <Button_dark onpress={()=> {set_modal_visible(false),navigation.navigate('Link_acc_desc')}} Title1='Link your bank account' Title2='none' upper_margin={10}  fontsize={18}/> */}
      </View>
      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
  },
  head:{
    backgroundColor:colors.nextbtn,
    paddingTop:40,
    padding:20

  },
  head_txt1:{
    color:'white',
    fontSize:22,
    fontWeight:'700'
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0, 0, 0, 0.6) '
  },
  modalView: {

    backgroundColor: "white",
    padding: 20,
    width:windowWidth/1.2,

    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modal_save_btn:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#5AB3A8',
    width:210,
    padding:10,
    borderRadius:5
  },
  modal_logo_view:{
    alignItems:'center'
  },
  modal_logo:{
    width:windowWidth/3,
     height:windowWidth/3,
  },
  blacktxt20:{
    color:'black',
    fontSize:20,
    fontWeight:'600',
    textAlign:'center'
  },
  greytxt16:{
    fontSize:16,
    color:'#727272',
    fontWeight:'400',
    textAlign:'center'
  },
  modal_later_txt:{
    color:'#575757',
    fontSize:15,
    fontWeight:'500',
    textAlign:'center',
  },
  modallater_view:{
    width:100,
    height:25,
    alignSelf:'center',
    marginTop:10
  },
  tab_header_main:{
    backgroundColor:colors.tab_head,
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:5,
    borderRadius:10,
    marginTop:10
  },
  tab1:{
    width:'33%',
    height:35,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center'
  },
  tab_txt:{
    fontSize:14,
    fontWeight:'500'
  }


});

