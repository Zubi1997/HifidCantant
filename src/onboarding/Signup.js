import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView , ScrollView,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/colors';
import Svg, {Path,Circle, Rect} from 'react-native-svg';
import Button_dark from '../components/Button_dark';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Signup({title,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const [email, set_email] = useState('');
    const [password, set_password] = useState('');
    const [confirm_pass, set_confirm_pass] = useState('');
    const [show_pass, set_show_pass] = useState(true);

    const toastRef = useRef();

  return (
        
      <View style={styles.container}>
        <View style={styles.head}>

        </View>
          <Text style={styles.headtxt}>Sign Up</Text>
          <Text style={styles.headtxt2}>Sign up now to get free financial insights for your business</Text>
          <View style={styles.email}>
            <Text style={styles.emailtxt}>Email</Text>
            <View style={[styles.seperator,{marginLeft:30}]}></View>
            <TextInput
                placeholder='Enter Email'
                placeholderTextColor="#6F6F6F"
                // paddingHorizontal={32}
                keyboardType='visible-password'
                style={styles.Input}
                value={email}
                onChangeText={(p)=>set_email(p)}

              />
          </View>
          
          <View style={[styles.email,{marginTop:15}]}>
            <Text style={styles.emailtxt}>Password</Text>
            <View style={styles.seperator}></View>
            <TextInput
                placeholder='Enter Password'
                placeholderTextColor="#6F6F6F"
                secureTextEntry={show_pass}
                style={styles.Input}
                value={password}
                onChangeText={(p)=>set_password(p)}

              />
            {show_pass==true?
            <TouchableOpacity onPress={()=>set_show_pass(false)}>
              <Ionicons name="md-eye-off" style={styles.eyeicon} />
            </TouchableOpacity>
              :
            <TouchableOpacity onPress={()=>set_show_pass(true)}>
              <Ionicons name="md-eye" style={styles.eyeicon} />
            </TouchableOpacity>
            }
               
          </View>
          <View style={[styles.email,{marginTop:15}]}>
            <Text style={styles.emailtxt}>Confirm password</Text>
            <View style={styles.seperator}></View>
            <TextInput
                placeholder='Confirm password'
                placeholderTextColor="#6F6F6F"
                secureTextEntry={show_pass}
                style={styles.Input}
                value={confirm_pass}
                onChangeText={(p)=>set_confirm_pass(p)}
              />
               
          </View>
    
            <Button_dark onpress={()=> navigation.navigate('Confirmation_email',{email:email})} Title1='Get started' Title2='none' upper_margin={windowHeight/8}  fontsize={18}/>

       
      </View>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingHorizontal:windowWidth/20,
    backgroundColor:colors.bg_color

  },
  head:{
    marginTop:windowHeight/6
  },
  headtxt:{
    fontWeight:'700',
    fontSize:24,
    color:'black'
  },
  headtxt2:{
    fontWeight:'700',
    fontSize:18,
    color:'#626262',
    marginTop:5
  },
  email:{
    backgroundColor:'#EAE9E9',
    flexDirection:'row',
    alignItems:'center',
    marginTop:30,
    borderRadius:10
  },
  emailtxt:{
    color:'#6F6F6F',
    fontSize:14,
    fontWeight:'500',
    marginLeft:10
  },
  seperator:{
    height:'60%',
    width:1,
    backgroundColor:'#B9B9B9',
    marginLeft:20
  },
  Input:{
    flex:1,
    height:40,
    marginLeft:10
  },
  eyeicon:{
    color: '#4F4F4F',
    fontSize: 25 ,
    marginRight:20
  },

});

