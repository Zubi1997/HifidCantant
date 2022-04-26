import React, {Component} from 'react';
import { Image,Dimensions,Modal,View,Text} from 'react-native';
import { SvgXml } from 'react-native-svg';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height
const Modal_add_transaction = ()=>{
return(
    <View style={styles.centeredView}>
        <View style={styles.modalView}>
        <View style={styles.modal_logo_view}>
            <Image style={styles.modal_logo} source={require('../../assets/png/home_modal_logo.png')}/>
            <Text style={[styles.blacktxt20,{marginTop:10}]}>Let{'’'}s get you setup</Text>
            <Text style={styles.greytxt16}>Link your bank account and get financial insights about your business</Text>
        </View>
        <View style={{justifyContent:'space-between',}}>
            {/* <Arrows69 /> */}
            <Button_dark onpress={()=>{set_modal_visible(false),navigation.navigate('Link_acc_desc')}} Title1='Link your bank account' Title2='Arrows69' upper_margin={20} fontsize={15}/>
        </View>
        <TouchableOpacity onPress={()=>set_modal_visible(false)} style={styles.modallater_view}>
            <Text style={styles.modal_later_txt}>Setup later</Text>
        </TouchableOpacity>
        
        </View>
</View>
)}

const Email_logo = ()=>{
  return(
    <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <Path fill-rule="evenodd" clip-rule="evenodd" d="M3.0132 9.15129C3 9.69022 3 10.3021 3 11V13C3 15.8284 3 17.2426 3.87868 18.1213C4.75736 19 6.17157 19 9 19H15C17.8284 19 19.2426 19 20.1213 18.1213C21 17.2426 21 15.8284 21 13V11C21 10.3021 21 9.69022 20.9868 9.15129L12.9713 13.6044C12.3672 13.9399 11.6328 13.9399 11.0287 13.6044L3.0132 9.15129ZM3.24297 7.02971C3.32584 7.05052 3.4074 7.08237 3.48564 7.12584L12 11.856L20.5144 7.12584C20.5926 7.08237 20.6742 7.05052 20.757 7.02971C20.6271 6.55619 20.4276 6.18491 20.1213 5.87868C19.2426 5 17.8284 5 15 5H9C6.17157 5 4.75736 5 3.87868 5.87868C3.57245 6.18491 3.37294 6.55619 3.24297 7.02971Z" fill="white"/>
    </Svg>
  )}


  export  {
    Modal_add_transaction,
   
    
  };