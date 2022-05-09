import React,{useState,useRef,useEffect} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView,Image ,Modal, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../../assets/colors';
import {Picker} from '@react-native-picker/picker';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import Button_dark from '../../components/Button_dark';
import { Add_cashout_logo, Arrows69, Categorized_logo, Tab_reports_empty, Tab_reports_fill, UNcategorized_logo, Yellow_bulb } from '../../../assets/svg_images';
import { ProgressBar, Colors } from 'react-native-paper';
import { Email_svg } from '../../../assets/Svgs_business';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Home({title,navigation}) {

  const [selectedValue, setSelectedValue] = useState("Today");
  const [modal_visible, set_modal_visible] = useState(false);
  const [modal_visible_add_trans, set_modal_visible_add_trans] = useState(false);
  const [transaction_setup, set_transaction_setup] = useState(false);


  const toastRef = useRef();

  // React.useEffect=(()=>{
  //   // set_modal_visible()

  // },[])

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      
        const detectLogin = async () => {
          // alert('jkj')
          let link = await AsyncStorage.getItem("link_account");
          let parsedlink = JSON.parse(link); 
          if(parsedlink=='true' || parsedlink==true){
            set_transaction_setup(true)
            set_modal_visible(false)
          }
          else{
            set_modal_visible(true)
          }
      }
      detectLogin(); 

      return () => {
     //  console.log('Screen was unfocused');

      };
    }, [])
  );


  const render_modal_view=()=>{
    return(
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal_logo_view}>
              <Image style={styles.modal_logo} source={require('../../../assets/png/home_modal_logo.png')}/>
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
    )
  }
  
  const render_modal_view_add_trans=()=>{
    return(
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
          <TouchableOpacity onPress={()=>set_modal_visible_add_trans(false)} style={{position:'absolute',top:10,right:10,height:40,width:30}}>
            <Entypo name='cross' style={{fontSize:25,}}/>
          </TouchableOpacity>
            <View style={styles.modal_logo_view}>
              <Text style={styles.blacktxt20}>Choose your transactions</Text>
              
            </View>
            <Button_dark onpress={()=>{
              set_modal_visible_add_trans(false)
              navigation.push('Bottomtabbar', {
                screen: 'Transactions', 
                params: {
                  screen: 'Add_cash_inflow',
                  params: {
                    from:'home'
                    // title: 'Your custom title for Select screen here ...',
                  },
                },
              });
              }}
               Title1='Add cash inflow' Title2='Add_cashin_logo' upper_margin={20} fontsize={15}
            />
            
            <TouchableOpacity onPress={()=>{
                  set_modal_visible_add_trans(false)
                  navigation.push('Bottomtabbar', {
                    screen: 'Transactions', 
                    params: {
                      screen: 'Add_cash_outflow',
                      params: {
                        from:'home'
                        // title: 'Your custom title for Select screen here ...',
                      },
                    },
                  });
                  }} style={styles.submit}>
                <Add_cashout_logo />
                <Text style={[styles.submit_txt,{fontSize:15}]}>Add cash outflow</Text>
            </TouchableOpacity>
            
          </View>
        </View>
    )
  }
  

  return (
      <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{marginHorizontal:20,}}>

        <View style={styles.head}>
          <Text style={styles.headtxt1}>Your Balance</Text>
          <View style={styles.head2}>
          <Menu >
            <MenuTrigger customStyles={{backgroundColor:'grey'}}>
                <View style={{height:40,alignItems:'center',justifyContent:'center',flexDirection:'row'}}>
                  <Text style={{color:'white'}}>{selectedValue} </Text>
                  <Entypo name={'chevron-small-down'} style={{alignSelf:'center'}} size={30} color={'white'} />
                </View>
            </MenuTrigger>
            <MenuOptions  customStyles={optionsStyles }>
              <MenuOption onSelect={() => setSelectedValue(`Today`)} text='Today' />
              <MenuOption onSelect={() => setSelectedValue(`This Week`)} text='This Week' />
              <MenuOption onSelect={() => setSelectedValue(`This Month`)} text='This Month' />
              <MenuOption onSelect={() => setSelectedValue(`This Year`)} text='This Year' />
            </MenuOptions>
          </Menu>
            {/* <Picker
              mode='dropdown'
              selectedValue={selectedValue}
              onValueChange={(itemValue, itemIndex) =>setSelectedValue(itemValue)}
              dropdownIconColor='white'
              style={{color:'white'}}
              itemStyle={{backgroundColor:'red'}}>
              <Picker.Item label="Today" value="Today" />
              <Picker.Item label="This Week" value="This Week" />
              <Picker.Item label="This Month" value="This Month" />
              <Picker.Item label="This Year" value="This Year" />
            </Picker> */}
          </View>
        </View>  
        <Text style={[styles.headtxt1,{color:'#356F70',marginLeft:10}]}>0</Text>

        <View style={styles.cashview}>
          <View style={styles.cashview1}>
            <Text style={styles.cashview1_txt1}>Cash In</Text>
            <Text style={[styles.cashview1_txt2,{color:'#08AD58'}]}>5000</Text>
          </View>
          <View style={styles.cashview_divider}></View>
          <View style={styles.cashview1}>
            <Text style={styles.cashview1_txt1}>Cash Out</Text>
            <Text style={[styles.cashview1_txt2]}>5000</Text>
          </View>
        </View>

        <View style={styles.business_view}>
          <Text style={styles.mange_txt}>Manage your business</Text>
          <Button_dark onpress={()=> set_modal_visible_add_trans(true)}  Title1='Add Cash Transactions' Title2='Add_transaction' upper_margin={20}  fontsize={18}/>
          <View style={styles.buss_tip}>
            <View style={styles.bulb_view}>
              <Yellow_bulb />
            </View>
            <View style={styles.business_txt_view}>
              <Text style={styles.mange_txt}>Business Tip</Text>
              <Text style={styles.bus_tip_txt}>Property label all transactions so cantant can give you insights to run your business</Text>
            </View>
          </View>
        </View>

        <View style={styles.progess_view}>
          <View style={{flexDirection:'row',alignItems:'center'}}>
            <Text style={[styles.mange_txt,{flex:1}]}>Label your bank transactions</Text>
            <Text style={styles.progess_headtxt2}>0 Transaction</Text>
          </View>
          <ProgressBar  progress={0.1} color={colors.nextbtn} style={styles.progess_bar}/>
        </View>
        {transaction_setup==true?

          <View style={{marginBottom:20}}>
            <TouchableOpacity onPress={()=>{
              navigation.push('Bottomtabbar', {
                screen: 'Transactions', 
                params: {
                  screen: 'Transactionss',
                  params: {
                    cat_type:'categorized'
                    // title: 'Your custom title for Select screen here ...',
                  },
                },
              });
            }} style={styles.categorized}>
              <View style={styles.categorized_logo_bg}>
                <Categorized_logo />
              </View>
              <View style={{flex:1}}>
                <Text style={styles.categorized_txt1}>Categorised</Text>
                <Text style={styles.categorized_txt2}>5 Transactions</Text>
              </View>
                <Entypo name={'chevron-small-right'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{
              navigation.push('Bottomtabbar', {
                screen: 'Transactions', 
                params: {
                  screen: 'Transactionss',
                  params: {
                    cat_type:'uncategorized'
                    // title: 'Your custom title for Select screen here ...',
                  },
                },
              });
            }} style={styles.categorized}>
              <View style={[styles.categorized_logo_bg,{backgroundColor:'#fbe9e9'}]}>
                <UNcategorized_logo />
              </View>
              <View style={{flex:1}}>
                <Text style={[styles.categorized_txt1,{color:colors.red_txt}]}>Uncategorised</Text>
                <Text style={[styles.categorized_txt2,{color:colors.red_txt}]}>5 Transactions</Text>
              </View>
                <Entypo name={'chevron-small-right'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
            </TouchableOpacity>
          </View>
          :
          <Button_dark onpress={()=> {set_modal_visible(false),navigation.navigate('Link_acc_desc')}} Title1='Link your bank account' Title2='none' upper_margin={20}  fontsize={18}/>
        }



        <Modal
            animationType="slide"
            transparent={true}
            visible={modal_visible}
            onRequestClose={() => {
              console.log("Modal has been closed.");
              // set_modal_visible(!modal_visible);
            }}
          >
           {render_modal_view()}
          </Modal>

          <Modal
            animationType="slide"
            transparent={true}
            visible={modal_visible_add_trans}
            onRequestClose={() => {
              // console.log("Modal has been closed.");
              set_modal_visible_add_trans(!modal_visible_add_trans);
            }}
          >
           {render_modal_view_add_trans()}
          </Modal>

      </ScrollView>
      </SafeAreaView>
      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    // paddingHorizontal:20,
    // marginHorizontal:20,
    // backgroundColor:'red'
  },
  head:{
    flexDirection:'row',
    paddingHorizontal:10,
    marginTop:20,
    alignItems:'center',
    justifyContent:'space-between'
  },
  headtxt1:{
    fontSize:windowWidth/16,
    fontWeight:'600',
    color:'#292929'
  },
  head2:{
    height:40,
    width:130,
    justifyContent:'center',
    backgroundColor:colors.nextbtn,
    borderRadius:5,
    marginTop:10,
    borderWidth:1,
    borderColor:'#E8E8E8'
  },
  cashview:{
    backgroundColor:'white',
    flexDirection:'row',
    alignItems:'center',
    height:60,
    marginTop:20,
    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.12,
    shadowRadius: 60,
  },
  cashview1:{
    width:'50%',
    paddingLeft:30,
  },
  cashview1_txt1:{
    color:colors.grey_txt,
    fontSize:14,
    fontWeight:'500'
  },
  cashview1_txt2:{
    color:'#DB2427',
    fontSize:16,
    fontWeight:'600'
  },
  cashview_divider:{
    width:1,
    height:'70%',
    backgroundColor:colors.divider_color
  },
  business_view:{
    marginTop:20
  },  
  mange_txt:{
    fontSize:18,
    fontWeight:'600',
    color:colors.dark_txt
  },
  buss_tip:{
    backgroundColor:'white',
    flexDirection:'row',
    // alignItems:'center',
    marginTop:20,
    borderRadius:10,
    paddingVertical:20
  },
  bulb_view:{
    backgroundColor:colors.nextbtn,
    padding:20,
    borderRadius:12,
    marginLeft:30
  },
  business_txt_view:{
    flex:1,
    marginLeft:15,
    marginRight:5
  },
  bus_tip_txt:{
    color:colors.grey_txt,
    fontWeight:'400',
  },
  progess_view:{
    marginTop:30,
  },
  progess_bar:{
    height:10,
    borderRadius:5,
    backgroundColor:'rgba(160, 160, 160, 0.2)',
    marginTop:10
  },
  progess_headtxt2:{
    color:'#535353',
    fontSize:14,
    fontWeight:'500',
    marginLeft:10
  },
  centeredView: {
    flex: 1, 
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:'rgba(0, 0, 0, 0.6) '
  },
  modalView: {

    backgroundColor: "white",
    padding: 30,
    width:windowWidth/1.2,

    borderRadius:10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modal_save_btn:{
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#5AB3A8',
    width:210,
    padding:10,
    borderRadius:5
  },
  modal_logo_view:{
    alignItems:'center'
  },
  modal_logo:{
    width:windowWidth/3,
     height:windowWidth/3,
  },
  blacktxt20:{
    color:'black',
    fontSize:20,
    fontWeight:'600',
    textAlign:'center'
  },
  greytxt16:{
    fontSize:16,
    color:'#727272',
    fontWeight:'400',
    textAlign:'center'
  },
  modal_later_txt:{
    color:'#575757',
    fontSize:15,
    fontWeight:'500',
    textAlign:'center',
  },
  modallater_view:{
    width:100,
    height:25,
    alignSelf:'center',
    marginTop:10
  },
  categorized:{
    backgroundColor:'white',
    flexDirection:'row',
    padding:10,
    borderRadius:10,
    marginTop:10
  },
  categorized_logo_bg:{
    backgroundColor:'#ecf4f3',
    padding:10,
    height:50,
    width:50,
    marginHorizontal:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
  },
  categorized_txt1:{
    fontSize:16,
    color:'#3F3F3F',
    fontWeight:'500'
  },
  categorized_txt2:{
    color:colors.grey_txt,
    fontSize:12,
    fontWeight:'400'
  },
  submit:{
    backgroundColor:colors.red_btn,
    flexDirection:'row',
    padding:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    width:'100%'
  },
  submit_txt:{
    marginLeft:10,
    color:'white',
    fontWeight:'600'
  },



});


const optionsStyles = {
  optionsContainer: {
    // backgroundColor: 'green',
    width:130,
    height:140,
    alignItems:'center',
    marginTop:40,
    borderRadius:5
  },
  optionsWrapper: {
    // backgroundColor: 'purple',
    alignItems:'center',
    width:130
  },
  optionWrapper: {
    // backgroundColor: 'yellow',
    alignItems:'center',
    width:130,
    paddingVertical:7
  },
  optionTouchable: {
    // underlayColor: 'gold',
    // activeOpacity: 70,
  },
  optionText: {
    color: 'black',
  },
};