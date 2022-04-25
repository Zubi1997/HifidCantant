import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../assets/colors';
import { Add_cashin_logo, Add_transaction, Arrows69 } from '../../assets/svg_images';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Button_dark({Title1,Title2,onpress,upper_margin,fontsize}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();

    useEffect(()=>{
        // alert(upper_margin)
    },[])

    const check_svg=()=>{
        
        if(Title2=='Add_transaction'){
            return(
            <View style={{marginRight:10}}>
                <Add_transaction />
            </View>
            )
        }
        else if(Title2=='Arrows69'){
          return(
          <View style={{marginRight:10}}>
              <Arrows69 />
          </View>
          )
        }
        else if(Title2=='Add_cashin_logo'){
          return(
          <View style={{marginRight:10}}>
              <Add_cashin_logo />
          </View>
          )
        }
    }
  return (
    <View style={{width:'100%'}}>
    <TouchableOpacity onPress={()=>onpress()} style={[styles.submit,{marginTop:upper_margin}]}>
        {Title2=='none'?null
        :
        <>
        {check_svg()}
        </>
        }
        <Text style={[styles.submit_txt,{fontSize:fontsize}]}>{Title1}</Text>
    </TouchableOpacity>
    </View>


      );
}
const styles = StyleSheet.create({

  container: {
    flex:1
  },
  submit:{
    backgroundColor:colors.nextbtn,
    flexDirection:'row',
    padding:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    
  },
  submit_txt:{
    
    color:'white',
    fontWeight:'600'
  },
});

