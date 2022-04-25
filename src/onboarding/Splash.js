import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,Image, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../assets/colors';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Reports({title,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
         }, 2000);
        }, [])

  return (
        
      <View style={styles.container}>
        <Image
                style={{ width:100, height:100, alignSelf: 'center' }}
                source={require('../../assets/png/Splash_icon.png')}
            />
      </View>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    backgroundColor:colors.nextbtn,
    alignItems:'center',
    justifyContent:'center',
    marginTop:-windowHeight/20
  },

});

