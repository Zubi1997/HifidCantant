import React,{useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../../assets/colors';
import Button_dark from '../../components/Button_dark';
import { Credit_card_fill, UNcategorized_logo } from '../../../assets/svg_images';

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Transactions({title,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();
 
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


  return (
        
      <View style={styles.container}>
        <View style={styles.head}>
          <Text style={styles.head_txt1}>Your Transactions</Text>
          <Text style={styles.head_txt2}>you don't have a transaction yet, please link your bank account with cantant</Text>
        </View>
        
        <ScrollView style={{paddingHorizontal:windowWidth/20,marginTop:20 }}>
         
          {cashInflow()}
          {cashoutflow()}
        </ScrollView>

        <View style={{justifyContent:'flex-end',marginBottom:5,paddingHorizontal:windowWidth/20}}>
          <Button_dark onpress={()=> navigation.navigate('Bottomtabbar')} Title1='Link your bank account' Title2='none' upper_margin={5}  fontsize={18}/>
        </View>

       
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
  }

});

