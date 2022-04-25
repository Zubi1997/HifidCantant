import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View,Dimensions,Image , ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../../assets/colors';
import Button_dark from '../../components/Button_dark';
import { Link_acc_congrats } from '../../../assets/svg_images';
import AsyncStorage from '@react-native-async-storage/async-storage'

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Profile({title,navigation}) {

    const [show_pass, set_show_pass] = useState(false);

    const link_done=async()=>{
        // AsyncStorage.setItem('link_account',JSON.stringify(false));
        navigation.navigate('Bottomtabbar')
    }

  return (
        
      <View  style={styles.container}>
        <View style={{alignItems:'center',marginTop:50}}>
            <Link_acc_congrats />
            <View style={{alignItems:'center'}}>
                <Text style={styles.congo_txt}>Congratulations!</Text>
                <Text style={styles.congo_txt2}>Your bank account has been setup!</Text>
            </View>
        </View>
        <View style={{flex:1,justifyContent:'flex-end',marginBottom:windowHeight/10,paddingHorizontal:windowWidth/20}}>
            <Button_dark onpress={()=>link_done()} Title1='Back to home' Title2='none' upper_margin={50} fontsize={18}/>
        </View>
      </View>


      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    paddingHorizontal:windowWidth/20,
    backgroundColor:colors.bg_color,

  },
  modal_logo:{
    width:windowWidth/3,
     height:windowWidth/3,
  },
  congo_txt:{
      color:'black',
      fontSize:20,
      fontWeight:'600',
      marginTop:30
  },
  congo_txt2:{
      color:'#727272',
      fontSize:16,
      fontWeight:'400',
      textAlign:'center',
      marginTop:10
  }

});

