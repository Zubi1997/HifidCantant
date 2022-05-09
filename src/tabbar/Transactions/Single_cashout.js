
import React,{useState,useEffect,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView,FlatList,TextInput,Modal,Image, ScrollView} from 'react-native';
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
import { Credit_card_fill, Credit_card_fill_red } from '../../../assets/svg_images';
import { Computer_phone, Electricity_fuel, Fastfood, Supply,Transport,Rent,Salaries,Saving_personal,Equipment,Marketing,Taxes,Other } from '../../../assets/Cash_outflow_categories';

  var windowWidth = Dimensions.get('window').width
  var windowHeight=Dimensions.get('window').height
  
  export default function Transactions({title,navigation}) {
  
      const [date, set_date] = useState(new Date());
      const [time, set_time] = useState(new Date());
      const [amount, set_amount] = useState('');
      const [category, set_category] = useState('Choose your category');
      const [new_category, set_new_category] = useState('');
      const [modal_visible, set_modal_visible] = useState(false);

      const Sheet_category = useRef();
      const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
      const [mode, set_mode] = useState('date');

      
      const data = [
        {
          id: '1',
          Title: 'Inventory/ Supply',
          name: 'Supply',
        },
    
        {
          id: '2',
          Title: 'Electricity/ Fuel',
          name: 'Electricity_fuel',
        },
        {
          id: '3',
          Title: 'Computer/ Phone',
          name: 'Computer_phone',
        },
        {
          id: '4',
          Title: 'Food & Drinks',
          name: 'Fastfood',
        },
        {
          id: '5',
          Title: 'Transport',
          name: 'Transport',
        },
        {
          id: '6',
          Title: 'Rent',
          name: 'Rent',
        },
        {
          id: '7',
          Title: 'Salaries & Wages',
          name: 'Salaries',
        },
    
        {
          id: '8',
          Title: 'Saving/ Personal',
          name: 'Saving_personal',
        },
        {
          id: '9',
          Title: 'Equipment',
          name: 'Equipment',
        },
        {
          id: '10',
          Title: 'Marketing/ Branding',
          name: 'Marketing',
        },
        {
          id: '11',
          Title: 'Taxes & Government',
          name: 'Taxes',
        },
        {
          id: '12',
          Title: 'Other',
          name: 'Other',
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
      
    useEffect(()=>{
      // console.log('aaaaaaaaaaa',navigation)

    // BackHandler.addEventListener("hardwareBackPress", () => {
    //   // navigation.pop()
    //   console.log('zzzzzzzzz',navigation)
    //   navigation.reset({
    //     index: 0,
    //     routes: [{ name: 'Home' }],
    //   });

    // })

  },[])
  
  const render_modal_view=()=>{
    return(
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal_logo_view}>
              <Image style={styles.modal_logo} source={require('../../../assets/png/home_modal_logo.png')}/>
              <Text style={{fontSize:20,fontWeight:'600',color:'black',marginTop:20}}>Well done</Text>
              <Text style={{fontSize:16,textAlign:'center'}}>Let's label the remaining transactions</Text>
            </View>
            <Button_dark onpress={()=>{set_modal_visible(false),navigation.goBack()}} Title1='Okay' Title2='none' upper_margin={20} fontsize={15}/>
          </View>
        </View>
    )
  }

  const render_categories=(item,index)=>{
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
                <Text style={styles.sheet_head}>Type of Expense</Text>
                <Text></Text>
            </View>
            <FlatList
                numColumns={4}
                showsVerticalScrollIndicator={false} 
                keyExtractor={(item, index) => index.toString()}
                contentContainerStyle={styles.business_flatlist}
                data={data}
                renderItem={({ item, index, separators }) => (
                    render_categories(item,index)
                )}
            />
        </View>
      )}
    
  const Header=()=>{
    return(
      <View style={styles.head}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
          <TouchableOpacity onPress={()=>navigation.goBack()} style={{marginLeft:-10}}>
            <Entypo name={'chevron-small-left'} style={{alignSelf:'center'}} size={30} color={'white'} />
          </TouchableOpacity>
          <Text style={styles.head_txt1}>Your Transactions</Text>
        </View>
        <Text style={styles.head_txt2}>Cash Outflows</Text>

        <TouchableOpacity onPress={()=>navigation.navigate('Single_cashin')} style={styles.categorized}>
            <View style={styles.categorized_logo_bg}>
            <Credit_card_fill_red />
            </View>
            <View style={{flex:1}}>
            <Text style={[styles.categorized_txt1,{color:colors.tip_head}]}>GT Bank</Text>
            <Text style={[styles.categorized_txt2,{color:colors.tip_head}]}>POS Seun Alli</Text>
            </View>
            <Text style={{alignSelf:"center"}}>6:00 PM, 21/2/22</Text>
            {/* <Entypo name={'chevron-small-right'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} /> */}
        </TouchableOpacity>
      </View>
    )
  }

  
    return (
          
        <SafeAreaView style={styles.container}>
          {Header()}
          
          <ScrollView style={styles.main_scroll_view}>
            <Text style={[styles.datetxt,{marginTop:20}]}>Amount:</Text>
            <View style={[styles.email_pass,{marginTop:5,}]}>
                <TextInput
                    placeholder='5,000'
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

            <Text style={[styles.datetxt,{marginTop:10}]}>Category</Text>
            <TouchableOpacity onPress={()=>Sheet_category.current.open()} style={[styles.email_pass,{marginTop:5,height:40,paddingLeft:10,paddingRight:20}]}>
                <Text style={{marginRight:15,fontSize:16,fontWeight:'400',color:colors.dark_txt,flex:1}}>{category}</Text>      
                <AntDesign name="caretdown" size={12} color="#828282" />
            </TouchableOpacity>

          </ScrollView>
  
          <View style={{justifyContent:'flex-end',marginBottom:5,paddingHorizontal:windowWidth/20}}>
            <Button_dark onpress={()=> set_modal_visible(true)} Title1='Save' Title2='none' upper_margin={5}  fontsize={18}/>
          </View>

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

        </SafeAreaView>
  
  
  
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
  categorized_logo_bg:{
    backgroundColor:'#F1D8DC',
    padding:10,
    height:50,
    width:50,
    marginRight:10,
    borderRadius:10,
    alignItems:'center',
    justifyContent:'center',
    alignSelf:'center'
    
  },
  categorized_txt1:{
    fontSize:16,
    color:colors.tip_head,
    fontWeight:'500'
  },
  categorized_txt2:{
    color:colors.grey_txt,
    fontSize:12,
    fontWeight:'400'
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
  
  });
  
  