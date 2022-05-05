import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView,Modal,FlatList , ScrollView,TextInput} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import {Apparel,Makeup,Jewelry,Hair,Food,House,Services,Healthcare,Bike,Retailstore,Electronics,Menu} from '../../assets/Svgs_business'
import colors from '../../assets/colors';
import Svg, {Path,Circle, Rect} from 'react-native-svg';
import PhoneInput from "react-native-phone-number-input";
import RBSheet from "react-native-raw-bottom-sheet";
import { Searchbar } from "react-native-paper";
import Button_dark from '../components/Button_dark';


var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Profile({title,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const [email, set_email] = useState('');
    const [phone, set_phone] = useState('');
    const [business_name, set_business_name] = useState('');
    const [business_type, set_business_type] = useState('Click to select');
    const [state, set_state] = useState('Select your state');

    const [modal_business, set_modal_business] = useState(false);
    const [show_pass, set_show_pass] = useState(false);

    const Sheet = useRef();
    const Sheet_state = useRef();

    const [state_arr, set_state_arr] = useState( 
      [{
        id: '1',
        Title: 'Apparel',
        name: 'Apparel',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
  
      {
        id: '2',
        Title: 'Cosmetics/ Makeup',
        name: 'Makeup',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
      {
        id: '3',
        Title: 'Jewelry & Accessories',
        name: 'Jewelry',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
      {
        id: '4',
        Title: 'Hair',
        name: 'Hair',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      }]
      );
      
    const [state_arr_filter, set_state_arr_filter] = useState( 
      [{
        id: '1',
        Title: 'Apparel',
        name: 'Apparel',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
  
      {
        id: '2',
        Title: 'Cosmetics/ Makeup',
        name: 'Makeup',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
      {
        id: '3',
        Title: 'Jewelry & Accessories',
        name: 'Jewelry',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
      {
        id: '4',
        Title: 'Hair',
        name: 'Hair',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      }]
      );

    
  const data = [
    {
      id: '1',
      Title: 'Apparel',
      name: 'Apparel',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },

    {
      id: '2',
      Title: 'Cosmetics/ Makeup',
      name: 'Makeup',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '3',
      Title: 'Jewelry & Accessories',
      name: 'Jewelry',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '4',
      Title: 'Hair',
      name: 'Hair',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '5',
      Title: 'Food & Drinks',
      name: 'Food',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '6',
      Title: 'Home Goods/ Interior',
      name: 'House',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '7',
      Title: 'Services',
      name: 'Services',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },

    {
      id: '8',
      Title: 'Healthcare / Pharmacy',
      name: 'Healthcare',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '9',
      Title: 'Logistics/ Delivery',
      name: 'Bike',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '10',
      Title: 'Retail Store',
      name: 'Retailstore',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '11',
      Title: 'Electronics',
      name: 'Electronics',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
    {
      id: '12',
      Title: 'Other',
      name: 'Menu',
      TotalOrders: "59",
      Sum_of_orders: "$ 426.67"
    },
  ];
  const svg_image=(svg)=>{

    if(svg=='Apparel'){
      return(
        <Apparel />
      )
    }
    else if(svg=='Makeup'){
      return(
        <Makeup />
      )
    }
    else if(svg=='Jewelry'){
      return(
        <Jewelry />
      )
    }
    else if(svg=='Hair'){
      return(
        <Hair />
      )
    }
    else if(svg=='Food'){
      return(
        <Food />
      )
    }
    else if(svg=='House'){
      return(
        <House />
      )
    }
    else if(svg=='Services'){
      return(
        <Services />
      )
    }
    else if(svg=='Healthcare'){
      return(
        <Healthcare />
      )
    }
    else if(svg=='Bike'){
      return(
        <Bike />
      )
    }
    else if(svg=='Retailstore'){
      return(
        <Retailstore />
      )
    }
    else if(svg=='Electronics'){
      return(
        <Electronics />
      )
    }
    else if(svg=='Menu'){
      return(
        <Menu />
      )
    }
  }

  const render_businesses=(item,index)=>{
    return(
      <TouchableOpacity
      // onPress={()=>{set_selected_country(item.name),set_list_view(false),seterror('')}} 
      style={{alignItems:'center',margin:windowWidth/30,width:windowWidth/6}}
      activeOpacity={0.95} >
      <TouchableOpacity onPress={()=>{set_business_type(item.Title),Sheet.current.close()}} style={{padding:10,backgroundColor:colors.business_cat_bg,borderRadius:50,height:windowWidth/6,width:windowWidth/6,alignItems:'center',justifyContent:'center'}}>
        {svg_image(item.name)} 
      </TouchableOpacity>
      <Text style={styles.business_sheet_txt}>{item.Title}</Text>
      </TouchableOpacity>
    )
  }
  const sheet_data=()=>{
    return(
      <View style={styles.sheet}>
          <View style={styles.sheet_head_view}>
              <TouchableOpacity onPress={()=>Sheet.current.close()}>
                  <AntDesign name="closecircle" size={24} color="#dadce2" />
              </TouchableOpacity>
              <Text style={styles.sheet_head}>Type of Business</Text>
              <Text></Text>
          </View>
          <FlatList
              numColumns={4}
              showsVerticalScrollIndicator={false} 
              keyExtractor={(item, index) => index.toString()}
              contentContainerStyle={styles.business_flatlist}
              data={data}
              renderItem={({ item, index, separators }) => (
                render_businesses(item,index)
              )}
          />
      </View>
    )
  }
  const sheet_state_data=()=>{
    return(
      <View style={styles.sheet}>
          <View style={styles.sheet_head_view}>
              <TouchableOpacity onPress={()=>Sheet_state.current.close()}>
                  <AntDesign name="closecircle" size={24} color="#dadce2" />
              </TouchableOpacity>
              <Text style={styles.sheet_head}>Select a state</Text>
              <Text></Text>
          </View>
          <View style={{marginTop:20}}>
              <Searchbar
                inputStyle={{fontSize:windowWidth/20}}
                placeholder="Search for your state"
                iconColor="#C1C1C1"
                
                placeholderTextColor='#C1C1C1'
                onChangeText={Filter_chat}
                style={{
                  borderRadius: 15,
                  backgroundColor:'#E9E9E9',
                  marginBottom:20,
                  color:'#C1C1C1',
                  height:40,
                }}
                />
          </View>
          <FlatList
            // refreshing={refreshing}
            // onRefresh={_handleRefresh}
            // ListHeaderComponent={chat_list_header}
            // ListEmptyComponent={chat_list_empty_component}
            keyExtractor={(item, index) => index.toString()}
            data={state_arr}
            renderItem={({ item, index, separators }) => (
              <TouchableOpacity onPress={()=>{set_state(item.Title),Sheet_state.current.close()}}>
                <Text style={styles.state_list_txt}>{item.Title}</Text>
                <View style={styles.state_list_line}></View>
              </TouchableOpacity>
            )}
          />

      </View>
      )}
    
  const Filter_chat = (param) => {
    var Food =state_arr_filter;
    var ara = [];
    for (var i = 0; i < Food.length; i++) {
      var x = Food[i].Title.toUpperCase();
      if (x.match(param.toUpperCase())) {
        ara.push(Food[i]);
      }
    }
    if (param.length == 0) {
      set_state_arr(state_arr_filter)
      // this.setState({ getdata1: this.state.temp1 });
    } else {
      set_state_arr(ara)
      // this.setState({ getdata1: ara });
    }
  };

  return (
        
      <ScrollView style={styles.container}>
        <View style={styles.head}>
          <TouchableOpacity onPress={()=>navigation.goBack()} >
            <Text>Cancel</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.headtxt}>Welcome to Cantant</Text>
        <Text style={styles.headtxt2}>Tell us a bit about yourself and your business</Text>
        <View style={styles.email}>
            <Text style={[styles.emailtxt,{marginTop:20}]}>Your Name</Text>
            <TextInput
                placeholder='Enter Name'
                placeholderTextColor="#6F6F6F"
                style={styles.Input}
                value={email}
                onChangeText={(p)=>set_email(p)}

              />
        </View>
        <View style={styles.email}>
            <Text style={styles.emailtxt}>Phone Number</Text>
            <PhoneInput
                // ref={phoneInput}
                defaultValue={phone}
                placeholder='000 000'
                // defaultCode="DM"
                layout="second"
                // multiline={false}
                disableArrowIcon
                // onChangeText={(text) => {
                //     set_phone(text);
                // }}
                onChangeFormattedText={(text) => {
                    set_phone(text);
                }}
                containerStyle={{height:40,backgroundColor:'#EAE9E9',width:'100%',marginTop:5,borderRadius:10,}}
                codeTextStyle={{color:'#7B7B7B'}}
                textInputStyle={{height:40}}
                flagButtonStyle={{borderRightWidth:1,borderColor:'#CFCFCF',}}
                textContainerStyle={{backgroundColor:'#EAE9E9',borderRadius:10}}
                // withDarkTheme
                // withShadow
                // autoFocus
            />
        </View>
        <View style={styles.email}>
            <Text style={styles.emailtxt}>Business Name</Text>
            <TextInput placeholder='Enter Business Name' placeholderTextColor="#6F6F6F" style={styles.Input} value={business_name} onChangeText={(p)=>set_business_name(p)} />
        </View>
        <View style={styles.email}>
            <Text style={styles.emailtxt}>Type of Business</Text>
            <TouchableOpacity onPress={()=>Sheet.current.open()} style={[styles.Input,{justifyContent:'center'}]}>
                <Text style={styles.business_txt}>{business_type}</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.email}>
            <Text style={styles.emailtxt}>State</Text>
            <TouchableOpacity onPress={()=>Sheet_state.current.open()} style={[styles.Input,{alignItems:'center',justifyContent:'space-between',flexDirection:'row',paddingRight:10}]}>
                <Text style={styles.business_txt}>{state}</Text>
                <AntDesign name="caretdown" size={12} color="#828282" />

            </TouchableOpacity>
        </View>
        
          <Button_dark onpress={()=> navigation.navigate('Pascode_setup')} Title1='Next' Title2='none' upper_margin={windowHeight/10}  fontsize={18}/> 

        
        <RBSheet
          ref={Sheet}
          animationType='slide'
          closeOnPressMask={true}
          closeOnDragDown={false}
          dragFromTopOnly	
          height={windowWidth*1.3}
          openDuration={250}
          customStyles={{
            container: {
                // flex:1,
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
                backgroundColor:'#F8F8F8',
            },
          }}
        >
            {sheet_data()}
        </RBSheet>
        <RBSheet
          ref={Sheet_state}
          animationType='slide'
          closeOnPressMask={true}
          closeOnDragDown={false}
          dragFromTopOnly	
          height={windowWidth/1.1}
          openDuration={250}
          customStyles={{
            container:{
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
              },


          
          }}
        >
            {sheet_state_data()}
        </RBSheet>
       
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
  eyeicon:{
    color: '#4F4F4F',
    fontSize: 25 ,
    marginRight:20
  },
  business_txt:{
      color:'#7B7B7B',
      fontSize:14,
      fontWeight:'500'
  },
  sheet_head:{
      fontSize:22,
      fontWeight:'500',
      color:'black'
  },
  sheet:{
    flex:1,
      paddingHorizontal:windowWidth/20,
      marginTop:15
  },
  sheet_head_view:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  business_sheet_txt:{
    marginTop:5,
    color:'black',
    fontSize:windowWidth/30,
    fontWeight:'400'
  },
  business_flatlist:{
    // backgroundColor:'red',
    alignItems:'center',
    paddingBottom:30
  },
  state_list_txt:{
    fontSize:14,
    fontWeight:'500',
    color:'black'
  },
  state_list_line:{
    marginVertical:10,
    height:1,
    backgroundColor:'#E7E7E7'
  }

});

