import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView,Image ,Modal, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import Button_dark from '../../components/Button_dark';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Cashflow_report from './Cashflow_report'
import Cashin_report from './Cashin_report'
import Cashout_report from './Cashout_report'


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Home({title,navigation}) {

  const [selected_tab, set_selected_tab] = useState("cashflow");
  const [modal_visible, set_modal_visible] = useState(false);

  const scrollref=useRef()


  
  const data = [
    {
      id: '1',
      Title: 'Zenith Bank',
      name: 'TRF: Cynthia Obi',
      TotalOrders: "59",
      Sum_of_orders: "+10,000"
    },

    {
      id: '2',
      Title: 'GT Bank',
      name: 'POS: Seun Alli',
      TotalOrders: "59",
      Sum_of_orders: "+5,000"
    },
    {
      id: '3',
      Title: 'GT Bank',
      name: 'ATM: Cash Withdrawal',
      TotalOrders: "59",
      Sum_of_orders: "+15,000"
    },
  ];
  // React.useEffect=(()=>{
  //   // set_modal_visible()

  // },[])

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      
        const detectLogin = async () => {
          // alert('jkj')
          let link = await AsyncStorage.getItem("link_account");
          let parsedlink = JSON.parse(link); 
          if(parsedlink=='true' || parsedlink==true){
            set_modal_visible(false)
          }
          else{
            set_modal_visible(true)
          }
      }
      detectLogin(); 

      return () => {
     //  console.log('Screen was unfocused');

      };
    }, [])
  );


  const render_modal_view=()=>{
    return(
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal_logo_view}>
              <Image style={styles.modal_logo} source={require('../../../assets/png/home_modal_logo.png')}/>
              <Text style={[styles.blacktxt20,{marginTop:10}]}>Let’s get you setup</Text>
              <Text style={styles.greytxt16}>Link your bank account and get financial insights about your business</Text>
            </View>
            <View style={{justifyContent:'space-between',}}>
              {/* <Arrows69 /> */}
              <Button_dark onpress={()=>{set_modal_visible(false),navigation.navigate('Link_acc_desc')}} Title1='Link your bank account' Title2='Arrows69' upper_margin={20} fontsize={15}/>
            </View>
            <TouchableOpacity onPress={()=>set_modal_visible(false)} style={styles.modallater_view}>
              <Text style={styles.modal_later_txt}>Setup later</Text>
            </TouchableOpacity>
            
          </View>
        </View>
    )
  }

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

        <ScrollView
              showsHorizontalScrollIndicator={false}
              ref={scrollref} 
              horizontal
              scrollEnabled={false}
              
              >
              <Cashflow_report />
              <Cashin_report />
              <Cashout_report />

        </ScrollView>

        
        {/* <Button_dark onpress={()=> {set_modal_visible(false),navigation.navigate('Link_acc_desc')}} Title1='Link your bank account' Title2='none' upper_margin={10}  fontsize={18}/> */}

        <Modal
            animationType="slide"
            transparent={true}
            visible={modal_visible}
            onRequestClose={() => {
              console.log("Modal has been closed.");
              // set_modal_visible(!modal_visible);
            }}
          >
           {render_modal_view()}
          </Modal>

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
