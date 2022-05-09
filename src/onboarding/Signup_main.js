import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView , ScrollView,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../assets/colors';
import { Email_logo,Google_logo,Apple_logo } from '../../assets/svg_images';

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
          <Text style={styles.headtxt}>Welcome</Text>
          <Text style={styles.headtxt2}>Sign up to Cantant, your free business accountant.</Text>
          
          <TouchableOpacity  onPress={()=>navigation.navigate('Signup')} style={[styles.submit,{marginTop:50}]}>
            <Email_logo />
            <Text style={styles.submit_txt}>Get started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile_auth')} style={styles.submit}>
            <Google_logo />
            <Text style={styles.submit_txt}>Get started</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>navigation.navigate('Profile_auth')} style={styles.submit}>
            <Apple_logo />
            <Text style={styles.submit_txt}>Get started</Text>
          </TouchableOpacity>
       
      </View>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    marginHorizontal:windowWidth/20,
    backgroundColor:colors.bg_color,
    
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
  submit:{
    backgroundColor:'#1B1B1B',
    flexDirection:'row',
    padding:10,
    width:'100%',
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:15
  },
  submit_txt:{
    fontSize:18,
    color:'white',
    fontWeight:'600',
    marginLeft:10
  }

});

