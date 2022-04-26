import React, {Component,useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,processColor} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../../assets/colors';
import Pie from 'react-native-pie'
import {BarChart} from 'react-native-charts-wrapper';
import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height


const GREEN = processColor('#53B683');
const RED = processColor('#EB4442');
export default function Pre_orders({route,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();
    const [cashin_monthly, set_cashin_monthly] = useState('2022');
    const [cashin_this_month, set_cashin_this_month] = useState('Feb');

    const data_array = [
      {
        id: '1',
        name: 'Shoes',
        color: "#9c2f3a",
        amount: "20,000",
        percentage: "50"
      },
  
      {
        id: '2',
        name: 'Cash Deposit',
        color: "#ba3e40",
        amount: "20,000",
        percentage: "20"
      },
      {
        id: '3',
        name: 'Investment',
        color: "#d9514a",
        amount: "20,000",
        percentage: "10"
      },
      {
        id: '',
        name: 'Others',
        color: "#e48374",
        amount: "20,000",
        percentage: "10"
      },
      {
        id: '5',
        name: 'Uncategorised',
        color: "#bbbbbb",
        amount: "20,000",
        percentage: "10"
      },
    ];
    const [data, set_data] = useState({
        dataSets: [{
          // values: [5, -40, 17, 81, 43],
          values: [{y: 224.1}, {y: 238.5}, {y: 1280.1}, {y: 442.3}, {y: 2280.1},{y: 442.3}, {y: 2280.1}],
          label: 'Zero line dataset',
          config: {
            visible: true,
            colors: [RED, RED,RED, RED, RED, RED, RED],
          }
        }],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

      });
    const [xAxis, set_xAxis] = useState( {
      drawAxisLine: true,
      drawGridLines: false,
      position: 'BOTTOM',
      labelCount: 7,
      valueFormatter: ['Jul', 'Jun', 'May', 'Apr', 'Mar', 'Feb', 'Jan'],
      axisMinimum: -1,
      axisMaximum: 7,
      avoidFirstLastClipping: true,
      });
    const [yAxis, set_yAxis] = useState({
        left: {
          enabled:false,
        },
        right: {
          enabled: true,
          drawLabels: true,
          drawAxisLine: false,
          drawGridLines: true,
          gridDashedLine:{
            lineLength: 20,
            spaceLength: 20,
            phase: 25
          },
          labelCount:5,
          zeroLine: {
            enabled: false,
            lineWidth: 1.5
          }
        }
      });
   
      
  const render_pie_values=(item,index)=>{
    return(
      <View key={index} style={styles.render_single_pie}>
        <View style={[styles.pie_render_dot,{backgroundColor:item.color,}]}></View>
        <Text style={{marginLeft:10,width:'40%',flex:1}}>{item.name}</Text>
        <Text style={{marginLeft:10,width:'20%',color:'black'}}>{item.amount}</Text>
        <Text style={{marginLeft:10,width:'20%'}}>{item.percentage} %</Text>
      </View>
      // <Text>{item.name}</Text>
    )
  }

  return (
        
      <ScrollView style={styles.container}>
        <View style={styles.head}>
            <View >
                <Text style={styles.headtxt_1}>Monthly Cash In</Text>
                <Text style={styles.headtxt_2}>N 100,000<Text style={{fontSize:12,color:colors.cashflow_txt,}}>   Avg</Text></Text>
            </View>
            <Menu >
                <MenuTrigger >
                    <View style={{height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'black'}}>{cashin_monthly}</Text>
                      <Entypo name={'chevron-small-down'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
                    </View>
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles }>
                  <View >
                  <MenuOption onSelect={() => set_cashin_monthly(`2019`)} text='2019' />
                  <MenuOption onSelect={() => set_cashin_monthly(`2020`)} text='2020' />
                  <MenuOption onSelect={() => set_cashin_monthly(`2021`)} text='2021' />
                  <MenuOption onSelect={() => set_cashin_monthly(`2022`)} text='2022' />
                  </View>
                </MenuOptions>
              </Menu>

        </View>
        <View style={styles.container_chart}>
          <BarChart 
            style={styles.chart}
            data={data}
            xAxis={xAxis}
            yAxis={yAxis}
            chartDescription={{text: ''}}
            touchEnabled={false}
            marker={{
              enabled:false,
            }}
            animation={{
              durationX:4000,
              durationY:4000,
              easingX:'EaseInBack',
              easingY:'EaseInBack'
            }}
            legend={{
              enabled: false,
            }}
          />
        </View>
        <View style={styles.head}>
            <View >
                <Text style={styles.headtxt_1}>This Month</Text>
                <Text style={styles.headtxt_2}>N 100,000</Text>
            </View>
            <Menu >
                <MenuTrigger >
                    <View style={{height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'black'}}>{cashin_this_month}</Text>
                      <Entypo name={'chevron-small-down'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
                    </View>
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles }>
                  <View >
                  <MenuOption onSelect={() => set_cashin_this_month(`Feb`)} text='Feb' />
                  <MenuOption onSelect={() => set_cashin_this_month(`Mar`)} text='Mar' />
                  <MenuOption onSelect={() => set_cashin_this_month(`Apr`)} text='Apr' />
                  <MenuOption onSelect={() => set_cashin_this_month(`May`)} text='May' />
                  </View>
                </MenuOptions>
              </Menu>

        </View>
        <View style={styles.pie_view}>
           <View style={{alignItems:'center'}}>
            <Pie
              radius={80}
              innerRadius={50}
              sections={[
                {
                  percentage: 40,
                  color: '#9c2f3a',
                },
                {
                  percentage: 20,
                  color: '#ba3e40',
                },
                {
                  percentage: 15,
                  color: '#d9514a',
                },
                {
                  percentage: 20,
                  color: '#e48374',
                },
                {
                  percentage: 10,
                  color: '#bbbbbb',
                },
              ]}
              strokeCap={'butt'}
              // strokeCap={'round'}
              
            />
            </View>
            <View style={{paddingHorizontal:20,marginTop:20}}>
              <Text style={styles.pie_heading}>Top 5 Categories</Text>
              {data_array.map((item, index)=> render_pie_values(item,index))}

            </View>
          </View>
       
        </ScrollView>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1,
    width:windowWidth,
    paddingHorizontal:windowWidth/20,
    // alignItems:'center',
    // backgroundColor:'red'
  },
  head:{
      backgroundColor:"white",
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      width:'100%',
      paddingHorizontal:20,
      paddingVertical:10,
      borderRadius:15,
      marginTop:10

  },
  headtxt_1:{
      color:colors.cashflow_txt,
      fontSize:12,
      fontWeight:'500'
  },
  headtxt_2:{
      color:'black',
      fontSize:22,
      fontWeight:'500',
      
  },
  container_chart: {
    // flex: 1,
    height:300,
    width:'100%',
    backgroundColor: 'white',
    borderRadius:10,
    marginTop:10
  },
  chart: {
    flex: 1,
    marginVertical:30
  },
  pie_view:{
      paddingVertical: 15,
      width: '100%',
      backgroundColor:'white',
      marginTop:10,
      borderRadius:10,
      marginBottom:20
      // alignItems:'center',
      // justifyContent:'center'
  },
  pie_heading:{
    color:colors.dark_txt_small,
    fontSize:14,
    fontWeight:'600'
  },
  pie_render_dot:{
    height:20,
    width:20,
    borderRadius:50
  },
  render_single_pie:{
    flexDirection:'row',
    marginTop:15,
    alignItems:'center',

  }

});



const optionsStyles = {
  optionsContainer: {
    // backgroundColor: 'green',
    width:120,
    alignItems:'center',
  },
  optionsWrapper: {
    // backgroundColor: 'purple',
    alignItems:'center',
    width:120
  },
  optionWrapper: {
    // backgroundColor: 'yellow',
    alignItems:'center',
    width:120,
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
