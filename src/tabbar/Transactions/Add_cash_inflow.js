
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

  var windowWidth = Dimensions.get('window').width
  var windowHeight=Dimensions.get('window').height
  
  export default function Transactions({title,navigation,route}) {
  
      const [date, set_date] = useState(new Date());
      const [time, set_time] = useState(new Date());
      const [amount, set_amount] = useState('');
      const [category, set_category] = useState('Select from category list');
      const [new_category, set_new_category] = useState('');



      const Sheet_state = useRef();
      const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
      const [mode, set_mode] = useState('date');

      
    const [state_arr, set_state_arr] = useState( 
      [{
        id: '1',
        Title: 'Shoe',
        name: 'Shoe',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
  
      {
        id: '2',
        Title: 'Tshirt',
        name: 'Tshirt',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
      {
        id: '3',
        Title: 'Iphone',
        name: 'Iphone',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
      {
        id: '4',
        Title: 'Macbook',
        name: 'Macbook',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      }]
      );
      
    const [state_arr_filter, set_state_arr_filter] = useState( 
      [{
        id: '1',
        Title: 'Shoe',
        name: 'Shoe',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
  
      {
        id: '2',
        Title: 'Tshirt',
        name: 'Tshirt',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
      {
        id: '3',
        Title: 'Iphone',
        name: 'Iphone',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      },
      {
        id: '4',
        Title: 'Macbook',
        name: 'Macbook',
        TotalOrders: "59",
        Sum_of_orders: "$ 426.67"
      }]
      );

    

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
      console.log('aaaaazzzzzzzzzzaaaaaa',route.params.from)

    BackHandler.addEventListener("hardwareBackPress", () => {
      // 
      // console.log('zzzzzzzzz',navigation)
      if(route.params.from=='transaction'){
        // navigation.navigate('Transactions')
        navigation.goBack()
      }
      else{
        navigation.reset({
          index: 0,
          routes: [{ name: 'Home' }],
        });
      }

    })

  },[])
  
  const sheet_state_data=()=>{
    return(
      <View style={styles.sheet}>
          <View style={styles.sheet_head_view}>
              <TouchableOpacity onPress={()=>Sheet_state.current.close()}>
                  <AntDesign name="closecircle" size={24} color="#dadce2" />
              </TouchableOpacity>
              <Text style={styles.sheet_head}>Category List</Text>
              <Text></Text>
          </View>
          <View style={{marginTop:20}}>
              <Searchbar
                inputStyle={{fontSize:14,}}
                placeholder="Search your category listed"
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
            keyExtractor={(item, index) => index.toString()}
            data={state_arr}
            renderItem={({ item, index, separators }) => (
              <TouchableOpacity onPress={()=>{set_category(item.Title),Sheet_state.current.close()}}>
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

  const Header=()=>{
    return(
      <View style={styles.head}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity onPress={()=> {
            navigation.reset({
              index: 0,
              routes: [{ name: 'Bottomtabbar' }],
            })
          } } style={{marginLeft:-10}}>
            <Entypo name={'chevron-small-left'} style={{alignSelf:'center'}} size={30} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.head_txt1}>Your Transactions</Text>
        </View>
        <Text style={styles.head_txt2}>Add Cash Inflow</Text>
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
            <Text style={[styles.datetxt,{marginTop:10}]}>Add New Product/Service</Text>
            <View style={[styles.email_pass,{marginTop:5,}]}>
                <TextInput
                    placeholder='What did you sell?'
                    placeholderTextColor={colors.dark_txt}
                    style={styles.Inputpass}
                    value={new_category}
                    maxLength={10}
                    onChangeText={(p)=>set_new_category(p)}

                  />
            </View>

            <TouchableOpacity>
                <Text style={{marginTop:5,color:'#3F8182',marginLeft:15}}>Add to Category List</Text>
            </TouchableOpacity>
            <Text style={{marginTop:5   ,color:colors.date_heaading,marginLeft:10,fontSize:16}}>OR</Text>
            <TouchableOpacity onPress={()=>Sheet_state.current.open()} style={[styles.email_pass,{marginTop:5,height:40,paddingLeft:10,paddingRight:20}]}>
                <Text style={{marginRight:15,fontSize:16,fontWeight:'400',color:colors.dark_txt,flex:1}}>{category}</Text>      
                <AntDesign name="caretdown" size={12} color="#828282" />
            </TouchableOpacity>

            <View style={{marginBottom:5,paddingHorizontal:windowWidth/20}}>
              <Button_dark onpress={()=>{
                navigation.reset({
                  index: 0,
                  routes: [{ name: 'Bottomtabbar' }],
                })
              }} Title1='Save' Title2='none' upper_margin={50}  fontsize={18}/>
            </View>
          </ScrollView>
  


          <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode={mode}
              onConfirm={handleConfirm}
              onCancel={hideDatePicker}
          />
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

        </View>
  
  
  
        );
  }
  const styles = StyleSheet.create({
  
    container: {
      flex:1
    },
    head:{
      backgroundColor:colors.nextbtn,
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
  
  