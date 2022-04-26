import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView,Modal,FlatList , ScrollView,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Apparel,Makeup,Jewelry,Hair,Food,House,Services,Healthcare,Bike,Retailstore,Electronics,Menu} from '../../../assets/Svgs_business'
import colors from '../../../assets/colors';
import Svg, {Path,Circle, Rect} from 'react-native-svg';
import PhoneInput from "react-native-phone-number-input";
import RBSheet from "react-native-raw-bottom-sheet";
import { Searchbar } from "react-native-paper";
import Button_dark from '../../components/Button_dark';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Profile({title,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const [acc_holder, set_acc_holder] = useState('');
    const [bank_acc, set_bank_acc] = useState('');
    const [acc_number, set_acc_number] = useState('');
    const [expiry_date, set_expiry_date] = useState('');
    const [state, set_state] = useState('Select your state');

    const [modal_business, set_modal_business] = useState(false);
    const [show_pass, set_show_pass] = useState(false);

    
  const expiry_date_change=(value)=>{
    console.log(value)
    console.log(value.length)
    var aa=''
   
    if(value.length==2 && !value.includes('/') ){
      set_expiry_date(value+'/')
    }
    else if((value.length==2 && value.includes('/'))|| value.length>3 ){
      set_expiry_date(value)
    }
    else if(value.length==3){
      aa=value.slice(0,1)
      set_expiry_date(aa)
    }
    else{
      set_expiry_date(value)
    }

  }

  return (
        
      <ScrollView style={styles.container}>
        <View style={styles.head}>
          <TouchableOpacity onPress={()=>navigation.goBack()} >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headtxt}>Bank Account Setup</Text>
        <Text style={styles.headtxt2}>Link your bank account with Cantant</Text>
        <View style={styles.email}>
            <Text style={[styles.emailtxt,{marginTop:20}]}>Account holder</Text>
            <TextInput
                placeholder='Enter Account Holder Name'
                placeholderTextColor="#6F6F6F"
                style={styles.Input}
                value={acc_holder}
                onChangeText={(p)=>set_acc_holder(p)}

              />
        </View>
        <View style={styles.email}>
            <Text style={styles.emailtxt}>Bank account</Text>
            <TextInput
                placeholder='Enter Bank account'
                placeholderTextColor="#6F6F6F"
                style={styles.Input}
                value={bank_acc}
                keyboardType='decimal-pad'
                onChangeText={(p)=>set_bank_acc(p)}
              />
        </View>
        <View style={styles.email}>
            <Text style={styles.emailtxt}>Account number</Text>
            <TextInput keyboardType='decimal-pad' placeholder='0000-000' placeholderTextColor="#6F6F6F" style={styles.Input} value={acc_number} onChangeText={(p)=>set_acc_number(p)} />
        </View>
        <View style={styles.email}>
            <Text style={styles.emailtxt}>Expire on</Text>
            <TextInput
                placeholder='MM/YY'
                placeholderTextColor="#6F6F6F"
                style={styles.Input}
                value={expiry_date}
                keyboardType='decimal-pad'
                maxLength={5}
                onChangeText={(p)=>expiry_date_change(p)}
              />
        </View>
        
        <Button_dark onpress={()=>navigation.navigate('Link_acc_complete')} Title1='Link your bank account' Title2='Arrows69' upper_margin={windowHeight/8} fontsize={18}/>

        
       
      </ScrollView>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingHorizontal:windowWidth/20,
    backgroundColor:colors.bg_color

  },
  head:{
    marginTop:50,
    alignItems:'flex-end'
  },
  headtxt:{
    fontWeight:'700',
    fontSize:24,
    color:'black',
    marginTop:windowHeight/20
  },
  headtxt2:{
    fontWeight:'500',
    fontSize:18,
    color:'#626262',
    marginTop:5
  },
  email:{
    marginTop:10,
  },
  emailtxt:{
    color:'#7B7B7B',
    fontSize:14,
    fontWeight:'400',
    marginLeft:10
  },
  seperator:{
    height:'60%',
    width:1,
    backgroundColor:'#B9B9B9',
    marginLeft:20
  },
  Input:{
    height:40,
    backgroundColor:'#EAE9E9',
    marginTop:5,
    borderRadius:10,
    paddingLeft:10
  },
  eyeicon:{
    color: '#4F4F4F',
    fontSize: 25 ,
    marginRight:20
  },
  business_txt:{
      color:'#7B7B7B',
      fontSize:14,
      fontWeight:'500'
  },
  sheet_head:{
      fontSize:22,
      fontWeight:'500',
      color:'black'
  },
  sheet:{
    flex:1,
      paddingHorizontal:windowWidth/20,
      marginTop:15
  },
  sheet_head_view:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  business_sheet_txt:{
    marginTop:5,
    color:'black',
    fontSize:windowWidth/30,
    fontWeight:'400'
  },
  business_flatlist:{
    // backgroundColor:'red',
    alignItems:'center',
    paddingBottom:30
  },
  state_list_txt:{
    fontSize:14,
    fontWeight:'500',
    color:'black'
  },
  state_list_line:{
    marginVertical:10,
    height:1,
    backgroundColor:'#E7E7E7'
  }

});

