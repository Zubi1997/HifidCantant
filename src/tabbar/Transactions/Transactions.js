import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList,Modal, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer, useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../../assets/colors';
import Button_dark from '../../components/Button_dark';
import { Credit_card_fill, UNcategorized_logo,Add_cashin_logo,Add_cashout_logo } from '../../../assets/svg_images';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Transactions({title,navigation,route}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();
    const [transaction_setup, set_transaction_setup] = useState(false);
    const [modal_visible_add_trans, set_modal_visible_add_trans] = useState(false);

    const catgry_type=route.params.cat_type

    useFocusEffect(
      React.useCallback(() => {
        // Do something when the screen is focused
        
          const detectLogin = async () => {
            console.log(route.params.cat_type)
            let link = await AsyncStorage.getItem("link_account");
            let parsedlink = JSON.parse(link); 
            if(parsedlink=='true' || parsedlink==true){
              set_transaction_setup(true)
            }
            else{
              set_transaction_setup(false)
            }
        }
        detectLogin(); 
  
        return () => {
       //  console.log('Screen was unfocused');
  
        };
      }, [])
    );
  

    const data = [
      {
        id: '1',
        Title: 'Zenith Bank',
        name: 'TRF: Cynthia Obi',
        TotalOrders: "59",
        Sum_of_orders: "+10,000"
      },
  
      {
        id: '2',
        Title: 'GT Bank',
        name: 'POS: Seun Alli',
        TotalOrders: "59",
        Sum_of_orders: "+5,000"
      },
      {
        id: '3',
        Title: 'GT Bank',
        name: 'ATM: Cash Withdrawal',
        TotalOrders: "59",
        Sum_of_orders: "+15,000"
      },
    ];

  const render_cashin=(item,index)=>{
    return(
      <TouchableOpacity key={index} onPress={()=>navigation.navigate('Single_cashin')} style={styles.categorized}>
        <View style={styles.categorized_logo_bg}>
          <Credit_card_fill />
        </View>
        <View style={{flex:1}}>
          <Text style={[styles.categorized_txt1,{color:colors.tip_head}]}>{item.Title}</Text>
          <Text style={[styles.categorized_txt2,{color:colors.tip_head}]}>{item.name}</Text>
        </View>
        <Text style={styles.amount}>{item.Sum_of_orders}</Text>
          <Entypo name={'chevron-small-right'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
      </TouchableOpacity>
    )
  }
  const cashInflow=()=>{
    return(
      <View style={styles.cashin}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={styles.inflow_txt1}>Cash inflows</Text>
          <Text style={styles.inflow_txt2}>3 Transactions</Text>
        </View>

        {data.map((item, index)=> render_cashin(item,index))}

        {/* <FlatList
            showsVerticalScrollIndicator={false} 
            keyExtractor={(item, index) => index.toString()}
            // contentContainerStyle={styles.business_flatlist}
            data={data}
            renderItem={({ item, index, separators }) => (
              render_cashin(item,index)
            )}
        /> */}
      </View>
    )
  }
  const render_cashout=(item,index)=>{
    return(
      <TouchableOpacity key={index} onPress={()=>navigation.navigate('Single_cashout')} style={styles.categorized}>
        <View style={styles.categorized_logo_bg}>
          <Credit_card_fill />
        </View>
        <View style={{flex:1}}>
          <Text style={[styles.categorized_txt1,{color:colors.tip_head}]}>{item.Title}</Text>
          <Text style={[styles.categorized_txt2,{color:colors.tip_head}]}>{item.name}</Text>
        </View>
        <Text style={[styles.amount, {color:colors.red_txt}]}>{item.Sum_of_orders}</Text>
        <Entypo name={'chevron-small-right'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
      </TouchableOpacity>
    )
  }
  const cashoutflow=()=>{
    return(
      <View style={[styles.cashin,{marginTop:20}]}>
        <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <Text style={styles.inflow_txt1}>Cash outflows</Text>
          <Text style={styles.inflow_txt2}>2 Transactions</Text>
        </View>
        {data.map((item, index)=> render_cashout(item,index))}

        {/* <FlatList
            // numColumns={4}
            showsVerticalScrollIndicator={false} 
            keyExtractor={(item, index) => index.toString()}
            // contentContainerStyle={styles.business_flatlist}
            data={data}
            renderItem={({ item, index, separators }) => (
              render_cashout(item,index)
            )}
        />  */}
      </View>
    )
  }

  const render_modal_view_add_trans=()=>{
    return(
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modal_logo_view}>
              <Text style={styles.blacktxt20}>Choose your transactions</Text>
            </View>
            <Button_dark onpress={()=>{
              set_modal_visible_add_trans(false)
              navigation.navigate('Add_cash_inflow',{from:'transaction'});
              }}
               Title1='Add cash inflow' Title2='Add_cashin_logo' upper_margin={20} fontsize={15}/>
            
            <TouchableOpacity onPress={()=>{
                  set_modal_visible_add_trans(false)
                  navigation.navigate('Add_cash_outflow',{from:'transaction'});
                  }} style={styles.submit}>
                <Add_cashout_logo />
                <Text style={[styles.submit_txt,{fontSize:15}]}>Add cash outflow</Text>
            </TouchableOpacity>
            
          </View>
        </View>
    )
  }

  return (
        
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.head_txt1}>Your Transactions</Text>
          {transaction_setup==true?
          <Text style={styles.head_txt2}>Label your {route.params.cat_type=='uncategorized'?'uncategorized':'categorized'} transactions (5)</Text>
            :
          <Text style={styles.head_txt2}>you don't have a transaction yet, please link your bank account with cantant</Text>
          }
          </View>
        {transaction_setup==true?
        <>
        <ScrollView style={{paddingHorizontal:windowWidth/20,marginTop:20 }}>
         
          {cashInflow()}
          {cashoutflow()}
        </ScrollView>
        
        <View  style={{justifyContent:'flex-end',marginBottom:5,paddingHorizontal:windowWidth/20}}>
          <Button_dark onpress={()=>set_modal_visible_add_trans(true)} Title1='Add Cash Transactions' Title2='none' upper_margin={5}  fontsize={18}/>
        </View>
        </>
        :
        <>
        <View style={{flex:1}}></View>
        <View  style={{justifyContent:'flex-end',marginBottom:5,paddingHorizontal:windowWidth/20}}>
          <Button_dark onpress={()=> navigation.navigate('Link_acc_desc')} Title1='Link your bank account' Title2='none' upper_margin={5}  fontsize={18}/>
        </View>
        </>
        }

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
      </View>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1
  },
  head:{
    backgroundColor:colors.nextbtn,
    paddingTop:40,
    padding:20

  },
  head_txt1:{
    color:'white',
    fontSize:22,
    fontWeight:'700'
  },
  head_txt2:{
    color:'white',
    fontSize:18,
    fontWeight:'400',
    marginTop:5
  },
  
  categorized:{
    backgroundColor:'white',
    flexDirection:'row',
    padding:10,
    borderRadius:10,
    marginTop:10,
    
  },
  categorized_logo_bg:{
    backgroundColor:'#ecf4f3',
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
  inflow_txt1:{
    color:colors.dark_txt,
    fontSize:18,
    fontWeight:'600',
  },
  inflow_txt2:{
    color:colors.dark_txt_small,
    fontSize:14
  },
  amount:{
    alignSelf:'center',
    marginHorizontal:5,
    fontSize:16,
    color:colors.green_txt
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
    
    color:'white',
    fontWeight:'600'
  },

});

