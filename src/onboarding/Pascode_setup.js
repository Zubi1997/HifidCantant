import React, {Component,useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import { Passcode_head } from '../../assets/svg_images';
// import CodeInput from 'react-native-confirmation-code-input';
// import OtpInputs from 'react-native-otp-inputs';
import OTPTextInput from 'react-native-otp-textinput'
import colors from '../../assets/colors';
import Button_dark from '../components/Button_dark';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Pre_orders({route,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();

  return (
        
      <ScrollView contentContainerStyle={{alignItems:'center'}} style={styles.container}>
          <View style={styles.logo}>
            <Passcode_head />
          </View>
          <View style={styles.logotxt_view}>
            <Text style={styles.logotxt}>Set up your passcode</Text>
            <Text style={styles.logotxt2}>Set up a four-digit passcode for your future security</Text>
          </View>
        
          <OTPTextInput
            secureTextEntry
            containerStyle={{marginTop:30}}
            tintColor='transparent'
            offTintColor='transparent'
            textInputStyle={styles.otp}
            
          />
            <Button_dark onpress={()=>navigation.navigate('Pascode_confirm')} Title1='Next' Title2='none' upper_margin={windowHeight/10}  fontsize={18}/> 


      </ScrollView>



      );
}
const styles = StyleSheet.create({

    container: {
        flex:1,
        backgroundColor:colors.bg_color,
        paddingHorizontal:20
    },
    logo:{
        marginTop:windowHeight/10
    },
    logotxt_view:{
        width:'100%',
        alignItems:'center',
    },
    logotxt:{
        marginTop:10,
        color:'black',
        fontSize:24,
        fontWeight:'700'
    },
    logotxt2:{
        color:'#626262',
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        marginTop:5
        },
    otp:{
      backgroundColor:colors.field_bg_color,
      borderRadius:10,
      height:60,
      width:45,
      color:colors.nextbtn,
      
    },

});

