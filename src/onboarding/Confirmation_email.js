import React, {useState,useRef,useEffect,Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import {Email_svg} from '../../assets/Svgs_business';
import colors from '../../assets/colors';
import Button_dark from '../components/Button_dark';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Confirmation_email({route,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const [email, set_email] = useState(route.params.email);

    const toastRef = useRef();

    useEffect(() => {
// console.log(windowWidth/10)=36
console.log(windowWidth/30)

        const detectLogin = async () => {
        //  alert(route.params.email);
    
    
      }
      detectLogin(); 
      }, []);

  return (
        
      <SafeAreaView style={styles.container}>
          <View style={styles.img}>
            <Email_svg />
            <Text style={styles.head}>Email</Text>
            <Text style={[styles.head,{color:'#626262',fontSize:18}]}>We’ve sent confirmation to your email</Text>
          </View>
          <View  style={styles.btn}>
                <Text style={styles.btn_txt}>{email}</Text>
          </View>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={styles.change_email}>
            <Text style={styles.change_email_txt}>Change Email</Text>
          </TouchableOpacity>
          <Button_dark onpress={()=> navigation.navigate('Profile_auth')} Title1='Continue' Title2='none' upper_margin={50}  fontsize={18}/>
       
      </SafeAreaView>

      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingHorizontal:windowWidth/20,
    backgroundColor:colors.bg_color
  },
  img:{
    marginTop:windowHeight/7,
    alignItems:'center'
  },
  head:{
      color:'black',
      fontSize:24,
      fontWeight:'700',
      marginTop:10,
      textAlign:'center'
  },

  btn:{
    backgroundColor:'#EAE9E9',
    width:'100%',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    marginTop:20
  },
  btn_txt:{
      color:colors.btn_color_txt_dark
  },
  change_email:{
      marginRight:20,
     alignSelf:'flex-end',
     marginTop:10
  },
  change_email_txt:{
      color:'#808080',
      fontSize:12
  }


});

