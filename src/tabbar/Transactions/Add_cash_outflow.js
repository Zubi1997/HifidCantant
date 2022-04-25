
import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView,FlatList,TextInput,BackHandler, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import colors from '../../../assets/colors';
import Button_dark from '../../components/Button_dark';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment'
import DateTimePicker from 'react-native-modal-datetime-picker';
import RBSheet from "react-native-raw-bottom-sheet";
import { Searchbar } from "react-native-paper";
import { Computer_phone, Electricity_fuel, Fastfood, Supply,Transport,Rent,Salaries,Saving_personal,Equipment,Marketing,Taxes,Other } from '../../../assets/Cash_outflow_categories';

  var windowWidth = Dimensions.get('window').width
  var windowHeight=Dimensions.get('window').height
  
  export default function Transactions({title,navigation}) {
  
      const [date, set_date] = useState(new Date());
      const [time, set_time] = useState(new Date());
      const [amount, set_amount] = useState('');
      const [category, set_category] = useState('Choose your category');
      const [new_category, set_new_category] = useState('');



      const Sheet_category = useRef();
      const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
      const [mode, set_mode] = useState('date');


      const data = [
        {
          id: '1',
          Title: 'Inventory/ Supply',
          name: 'Supply',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
    
        {
          id: '2',
          Title: 'Electricity/ Fuel',
          name: 'Electricity_fuel',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '3',
          Title: 'Computer/ Phone',
          name: 'Computer_phone',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '4',
          Title: 'Food & Drinks',
          name: 'Fastfood',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '5',
          Title: 'Transport',
          name: 'Transport',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '6',
          Title: 'Rent',
          name: 'Rent',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '7',
          Title: 'Salaries & Wages',
          name: 'Salaries',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
    
        {
          id: '8',
          Title: 'Saving/ Personal',
          name: 'Saving_personal',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '9',
          Title: 'Equipment',
          name: 'Equipment',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '10',
          Title: 'Marketing/ Branding',
          name: 'Marketing',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '11',
          Title: 'Taxes & Government',
          name: 'Taxes',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
        {
          id: '12',
          Title: 'Other',
          name: 'Other',
          TotalOrders: "59",
          Sum_of_orders: "$ 426.67"
        },
      ];
      const svg_image=(svg)=>{
    
        if(svg=='Supply'){
          return(
            <Supply />
          )
        }
        else if(svg=='Electricity_fuel'){
          return(
            <Electricity_fuel />
          )
        }
        else if(svg=='Computer_phone'){
          return(
            <Computer_phone />
          )
        }
        else if(svg=='Fastfood'){
          return(
            <Fastfood />
          )
        }
        else if(svg=='Transport'){
          return(
            <Transport />
          )
        }
        else if(svg=='Rent'){
          return(
            <Rent />
          )
        }
        else if(svg=='Salaries'){
          return(
            <Salaries />
          )
        }
        else if(svg=='Saving_personal'){
          return(
            <Saving_personal />
          )
        }
        else if(svg=='Equipment'){
          return(
            <Equipment />
          )
        }
        else if(svg=='Marketing'){
          return(
            <Marketing />
          )
        }
        else if(svg=='Taxes'){
          return(
            <Taxes />
          )
        }
        else if(svg=='Other'){
          return(
            <Other />
          )
        }
      }

      const showDatePicker = (mod) => {
        // alert('nnnn')
        set_mode(mod)
        setDatePickerVisibility(true)
      };

      const hideDatePicker = () => {
        setDatePickerVisibility(false);
      };

      const handleConfirm = (date) => {
        if(mode=='date'){
        set_date(date)
        }
        else if(mode=='time'){
        set_time(date)
        }
        console.log("A date has been picked: ", date);
        // set_date(date)
        hideDatePicker();
      };
      
    useEffect(()=>{
      console.log('aaaaaaaaaaa',windowWidth/12)
        // 36=w/10  32=w/11
    BackHandler.addEventListener("hardwareBackPress", () => {
      // navigation.pop()
      // console.log('zzzzzzzzz',navigation)
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });

    })

  },[])

  const render_businesses=(item,index)=>{
    return(
      <TouchableOpacity
      // onPress={()=>{set_selected_country(item.name),set_list_view(false),seterror('')}} 
      style={{alignItems:'center',margin:windowWidth/30,width:windowWidth/6}}
      activeOpacity={0.95} >
      <TouchableOpacity onPress={()=>{set_category(item.Title),Sheet_category.current.close()}} style={{padding:10,backgroundColor:colors.business_cat_bg,borderRadius:50,height:windowWidth/6,width:windowWidth/6,alignItems:'center',justifyContent:'center'}}>
        {svg_image(item.name)} 
      </TouchableOpacity>
      <Text style={styles.business_sheet_txt}>{item.Title}</Text>
      </TouchableOpacity>
    )
  }
  
  const Sheet_category_data=()=>{
    return(
        <View style={styles.sheet}>
            <View style={styles.sheet_head_view}>
                <TouchableOpacity onPress={()=>Sheet_category.current.close()}>
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
      )}

  const Header=()=>{
    return(
      <View style={styles.head}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity onPress={()=>
            // navigation.popToTop(3)
            navigation.reset({
                index: 0,
                routes: [{ name: 'Bottomtabbar' }],
              })
            } style={{marginLeft:-10}}>
            <Entypo name={'chevron-small-left'} style={{alignSelf:'center'}} size={30} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.head_txt1}>Your Transactions</Text>
        </View>
        <Text style={styles.head_txt2}>Add Cash Outflow</Text>
      </View>
    )
  }

  const DateTimepicker=()=>{
    return(
      <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <View style={{width:'48%'}}>
          <Text style={styles.datetxt}>Date</Text>
          <TouchableOpacity onPress={()=>showDatePicker('date')} style={styles.picker_view}>
            <Text style={styles.picker_innertxt}>{moment(date).format('DD-MM-YYYY')}</Text>
          </TouchableOpacity>
        </View>
        <View style={{width:'48%'}}>
          <Text style={styles.datetxt}>Time</Text>
          <TouchableOpacity onPress={()=>showDatePicker('time')} style={styles.picker_view}>
            <Text style={styles.picker_innertxt}>{moment(time).format('LT')}</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
  
    return (
          
        <View style={styles.container}>
          {Header()}
          
          <ScrollView style={styles.main_scroll_view}>
            {DateTimepicker()}
            <Text style={[styles.datetxt,{marginTop:20}]}>Amount:</Text>
            <View style={[styles.email_pass,{marginTop:5,}]}>
                <TextInput
                    placeholder='0'
                    placeholderTextColor={colors.dark_txt}
                    
                    // secureTextEntry={true}
                    style={styles.Inputpass}
                    value={amount}
                    keyboardType='decimal-pad'
                    maxLength={10}
                    onChangeText={(p)=>set_amount(p)}

                  />
                <Text style={{marginRight:15,fontSize:16,fontWeight:'500',color:colors.dark_txt}}>NGN</Text>  
            </View>
            <Text style={[styles.datetxt,{marginTop:10}]}>Product/Service</Text>
            <View style={[styles.email_pass,{marginTop:5,}]}>
                <TextInput
                    placeholder='What did you buy?'
                    placeholderTextColor={colors.dark_txt}
                    style={styles.Inputpass}
                    value={new_category}
                    maxLength={10}
                    onChangeText={(p)=>set_new_category(p)}

                  />
            </View>

            <Text style={[styles.datetxt,{marginTop:10}]}>Category</Text>
            <TouchableOpacity onPress={()=>Sheet_category.current.open()} style={[styles.email_pass,{marginTop:5,height:40,paddingLeft:10,paddingRight:20}]}>
                <Text style={{marginRight:15,fontSize:16,fontWeight:'400',color:colors.dark_txt,flex:1}}>{category}</Text>      
                <AntDesign name="caretdown" size={12} color="#828282" />
            </TouchableOpacity>

          </ScrollView>
  
          <View style={{justifyContent:'flex-end',marginBottom:5,paddingHorizontal:windowWidth/20}}>
            <Button_dark onpress={()=> { 
                // navigation.popToTop()     
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Bottomtabbar' }],
                  })
                }} Title1='Save' Title2='none' upper_margin={5}  fontsize={18}/>
          </View>

          <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode={mode}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
          />
        <RBSheet
          ref={Sheet_category}
          animationType='slide'
          closeOnPressMask={true}
          closeOnDragDown={false}
          dragFromTopOnly	
          height={windowWidth*1.3}
          openDuration={250}
          customStyles={{
            container:{
                borderTopLeftRadius:10,
                borderTopRightRadius:10,
                // flex:1,
                // backgroundColor:'red'
                // height:'60%'
              },
          }}
        >
            {Sheet_category_data()}
        </RBSheet>

        </View>
  
  
  
        );
  }
  const styles = StyleSheet.create({
  
    container: {
      flex:1
    },
    head:{
      backgroundColor:colors.red_btn,
      paddingTop:20,
      padding:20
  
    },
    head_txt1:{
      color:'white',
      fontSize:14,
      fontWeight:'500',
      marginLeft:5
    },
    head_txt2:{
      color:'white',
      fontSize:22,
      fontWeight:'700',
      marginTop:10
    },
    
    categorized:{
      
      backgroundColor:'white',
      flexDirection:'row',
      padding:10,
      borderRadius:10,
      marginTop:10,
      
    },
    main_scroll_view:{
      paddingHorizontal:windowWidth/20,
      marginTop:20 
    },
    datetxt:{
        marginLeft:10,
        fontSize:16,
        color:colors.date_heaading
    },
    picker_view:{
      backgroundColor:colors.field_bg_color,
      alignItems:'center',
      justifyContent:'center',
      height:40,
      borderRadius:10,
      marginTop:5
    },
    picker_innertxt:{
      color:colors.dark_txt,
      fontSize:16
    },
    Input:{
      height:40,
      backgroundColor:'#EAE9E9',
      marginTop:5,
      borderRadius:10,
      paddingLeft:10
    },
    email:{
      marginTop:10,
    },
    Inputpass:{
      flex:1,
      height:40,
      marginLeft:10,
      color:colors.dark_txt,
      fontSize:16
    },
    emailtxt:{
      color:'#7B7B7B',
      fontSize:14,
      fontWeight:'400',
      marginLeft:10
    },
    email_pass:{
      backgroundColor:'#EAE9E9',
      flexDirection:'row',
      alignItems:'center',
      marginTop:30,
      borderRadius:10
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
//   paddingBottom:30
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
  
  