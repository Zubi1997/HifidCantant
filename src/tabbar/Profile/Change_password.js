import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView,Modal,FlatList , ScrollView,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons'
import colors from '../../../assets/colors';
import Button_dark from '../../components/Button_dark';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Profile({title,navigation}) {

    const [curr_pass, set_curr_pass] = useState('');
    const [password, set_password] = useState('');
    const [confirm_pass, set_confirm_pass] = useState('');
    const [show_pass, set_show_pass] = useState(true);
    const [show_newpass, set_show_newpass] = useState(true);

    const Sheet_state = useRef();

  return (
        
      <ScrollView style={styles.container}>
        <View style={styles.head}>

        </View>
        <Text style={styles.headtxt}>Change Password</Text>
        <View style={styles.email}>
            <Text style={[styles.emailtxt,{marginTop:20}]}>Current Password</Text>
            <TextInput
                placeholder='********'
                placeholderTextColor="#6F6F6F"
                secureTextEntry={show_pass}
                style={styles.Input}
                value={curr_pass}
                onChangeText={(p)=>set_curr_pass(p)}
              />
        </View>

        <Text style={[styles.emailtxt,{marginTop:20}]}>New Password</Text>
        <View style={[styles.email_pass,{marginTop:5}]}>
            <TextInput
                placeholder='********'
                placeholderTextColor="#6F6F6F"
                secureTextEntry={show_pass}
                style={styles.Inputpass}
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

        <Text style={[styles.emailtxt,{marginTop:20}]}>Confirm new password</Text>
        <View style={[styles.email_pass,{marginTop:5}]}>
            <TextInput
                placeholder='********'
                placeholderTextColor="#6F6F6F"
                secureTextEntry={show_newpass}
                style={styles.Inputpass}
                value={confirm_pass}
                onChangeText={(p)=>set_confirm_pass(p)}

              />
            {show_newpass==true?
            <TouchableOpacity onPress={()=>set_show_newpass(false)}>
              <Ionicons name="md-eye-off" style={styles.eyeicon} />
            </TouchableOpacity>
              :
            <TouchableOpacity onPress={()=>set_show_newpass(true)}>
              <Ionicons name="md-eye" style={styles.eyeicon} />
            </TouchableOpacity>
            }
               
        </View>
        
        <Button_dark onpress={()=> navigation.navigate('Pass_change_success')}  Title1='Save' Title2='none' upper_margin={windowHeight/5}  fontsize={18}/> 

       
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
    fontWeight:'700',
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
  Inputpass:{
    flex:1,
    height:40,
    marginLeft:10
  },
  eyeicon:{
    color: '#4F4F4F',
    fontSize: 25 ,
    marginRight:20
  },
  
  email_pass:{
    backgroundColor:'#EAE9E9',
    flexDirection:'row',
    alignItems:'center',
    marginTop:30,
    borderRadius:10
  }

});

