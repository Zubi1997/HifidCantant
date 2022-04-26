import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../../assets/colors';
import Button_dark from '../../components/Button_dark';
import { Link_account, Tickdark } from '../../../assets/svg_images';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Transactions({title,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();

    const tick_text=(text,size)=>{
        return(
        <View style={{flexDirection:'row',marginTop:size,}}>
            <View style={{marginTop:5}}>
                <Tickdark />
            </View>
            <View>
                <Text style={{marginLeft:10,fontSize:18,color:'#626262',}}>{text}</Text>
            </View>
        </View>
        )
    }
  return (
        
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.head_txt1}>Link your bank accounts to Cantant</Text>
          <View style={{marginTop:20}}>
            <Link_account />
          </View>
        </View>
        {tick_text('Real-time business insights on bank transfers, POS/ATM transactions, etc.',60)}
        {tick_text('Seamlessly and securely connect all your bank accounts in seconds',20)}

        <View style={{justifyContent:'flex-end',marginBottom:windowHeight/10,marginTop:40}}>
          <Button_dark onpress={()=> navigation.navigate('Bank_acc_setup')} Title1='Continue' Title2='none' upper_margin={20}  fontsize={18}/>
        </View>
       
      </ScrollView>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    marginHorizontal:windowWidth/20,
    // backgroundColor:'red'
  },
  head:{
    marginTop:70,
    alignItems:'center'

  },
  head_txt1:{
    color:'black',
    fontSize:24,
    fontWeight:'700',
    textAlign:'center'
  },
  head_txt2:{
    color:'white',
    fontSize:18,
    fontWeight:'400',
    marginTop:5
  }

});

