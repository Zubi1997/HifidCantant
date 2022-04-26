import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList,Image, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../../assets/colors';
import { Credit_card_fill, Profile_edit_logo, Profile_lock_logo, Profile_phone_logo } from '../../../assets/svg_images';
import AsyncStorage from '@react-native-async-storage/async-storage'

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Profile({title,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();


const logout=()=>{
  AsyncStorage.clear();
  // navigation.replace('Session_handling')
   navigation.reset({
     index: 0,
     routes: [{ name: 'Signup_main' }],
   });
}

  return (
        
      <View style={styles.container}>

        <View style={styles.head}>
          <View style={styles.head1}>
            <Image style={styles.profile_logo} source={require('../../../assets/png/profile_logo.png')}/>
          </View>
          <View style={styles.head2}>
            <Text style={styles.profile_name}>Tobi Idogho</Text>
            <Text style={[styles.profile_email,{marginTop:3}]}>tobi@contant.com</Text>
            <Text style={styles.profile_email}>+234 984 982</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile_auth')} style={styles.head3}>
            <Profile_edit_logo />
          </TouchableOpacity>
        </View>
        
        <View style={styles.main_view}>
          <View>
            <Text style={{fontSize:14,color:'#5f5f5f'}}>Account</Text>
          </View>
          <TouchableOpacity style={styles.field_view}>
            <View style={{width:40}}>
              <Credit_card_fill />
            </View>
            <View style={{flex:1}}>
              <TouchableOpacity onPress={()=>navigation.navigate('Link_acc_desc')} style={styles.field2}>
                <Text style={styles.field_title}>Add Bank Accounts</Text>
                <Entypo name={'chevron-small-right'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
              </TouchableOpacity>
              <View style={styles.divider}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Change_password')} style={styles.field_view}>
            <View style={{width:40}}>
              <Profile_lock_logo />
            </View>
            <View style={{flex:1}}>
              <View style={styles.field2}>
                <Text style={styles.field_title}>Change Password</Text>
                <Entypo name={'chevron-small-right'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
              </View>
              <View style={{height:1,width:'100%',backgroundColor:colors.field_bg_color,top:10}}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={styles.field_view}>
            <View style={{width:40}}>
              <Profile_phone_logo />
            </View>
            <View style={{flex:1}}>
              <View style={styles.field2}>
                <Text style={styles.field_title}>Contact Us</Text>
                <Text style={{fontSize:12}}>support@mycantant.com</Text>
              </View>
              <View style={{height:1,width:'100%',backgroundColor:colors.field_bg_color,top:10}}></View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>logout()} style={styles.field_view}>
            <View style={{width:40}}>
              {/* <Profile_phone_logo /> */}
            </View>
            <View style={{flex:1}}>
              <View style={styles.field2}>
                <Text style={styles.field_title}>Logout</Text>
              </View>
              <View style={{height:1,width:'100%',backgroundColor:colors.field_bg_color,top:10}}></View>
            </View>
          </TouchableOpacity>

        </View>
       
      </View>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingHorizontal:windowWidth/20
  },
  head:{
    flexDirection:'row',
    marginTop:windowHeight/10
    // alignItems:'center'
    
  },
  head1:{
    marginLeft:2,
  },
  head2:{
    flex:1,
    marginLeft:20,
  },
  head3:{
    marginLeft:10,
    marginRight:20,
    width:30,
    height:30,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'
  },
  profile_logo:{
    width:50,
    height:50
  },
  profile_name:{
    fontSize:16,
    color:'black',
    fontWeight:'600'
  },
  profile_email:{
    color:colors.grey_sub_head,
    fontWeight:'400',
    fontSize:14
  },
  main_view:{
    marginTop:30
  },
  field_view:{
    flexDirection:'row',
    alignItems:'center',
    marginTop:20
  },
  field2:{
    justifyContent:'space-between',
    flexDirection:'row',
    alignItems:'center',
    marginLeft:10
  },
  divider:{
    height:1,
    width:'100%',
    backgroundColor:colors.field_bg_color,
    top:10
  },
  field_title:{
    color:colors.profile_field_txt,
    fontSize:16,

  }

});

