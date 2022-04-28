
import React, {Component,useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,processColor} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
import colors from '../../../assets/colors';
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

    const [cash_flow_year, set_cash_flow_year] = useState('2022');
    const toastRef = useRef();
    const [data, set_data] = useState({
        dataSets: [{
          // values: [5, -40, 17, 81, 43],
          values: [{y: -224.1}, {y: 238.5}, {y: 1280.1}, {y: -442.3}, {y: 2280.1},{y: -442.3}, {y: -2280.1}],
          label: 'Zero line dataset',
          config: {
            visible: true,
            colors: [RED,GREEN,GREEN,RED, GREEN,RED, RED],
            
            
          }
        }],
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],

      });
    const [xAxis, set_xAxis] = useState( {
        inverted:false,
        enabled: true,
        drawLabels: false,
        drawAxisLine: false,
        drawGridLines: false,
        labelCount:6,

      });
    const [yAxis, set_yAxis] = useState({
        left: {
          drawLabels: true,
          drawAxisLine: false,
          drawGridLines: true,
          gridDashedLine:{
            lineLength: 20,
            spaceLength: 20,
            phase: 25
          },
          labelCount:6,
          zeroLine: {
            enabled: true,
            lineWidth: 1.5
          }
        },
        right: {
          enabled: false
        }
      });
   

  return (
        
      <View style={styles.container}>
        <View style={styles.head}>
            <View >
                <Text style={styles.headtxt_1}>Your Cash Flow</Text>
                <Text style={styles.headtxt_2}>N 100,000<Text style={{fontSize:12,color:colors.cashflow_txt,}}>   Avg</Text></Text>
            </View>
              <Menu >
                <MenuTrigger >
                    <View style={{height:40,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                      <Text style={{color:'black'}}>{cash_flow_year}</Text>
                      <Entypo name={'chevron-small-down'} style={{alignSelf:'center'}} size={30} color={'#4F4F4F'} />
                    </View>
                </MenuTrigger>
                <MenuOptions customStyles={optionsStyles }>
                  <View >
                  <MenuOption onSelect={() => set_cash_flow_year(`2022`)} text='2022' />
                  <MenuOption onSelect={() => set_cash_flow_year(`2023`)} text='2023' />
                  <MenuOption onSelect={() => set_cash_flow_year(`2024`)} text='2024' />
                  <MenuOption onSelect={() => set_cash_flow_year(`2025`)} text='2025' />
                  </View>
                </MenuOptions>
              </Menu>

        </View>
        <View style={styles.container_chart}>
          <BarChart 
            // drawBorders={true}
            style={styles.chart}
            data={data}
            xAxis={xAxis}
            yAxis={yAxis}
            chartDescription={{text: ''}}
            // highlights={this.state.highlights}            // drawValueAboveBar={false}
            touchEnabled={false}
            marker={{
              enabled:false,
              // digits:3,
              // markerColor:GREEN,
              // textSize:14
            }}
            animation={{
              durationX:4000,
              durationY:4000,
              easingX:'EaseInBack',
              easingY:'EaseInBack'
            }}
            legend={{
              enabled: true,
              formSize:12,
              textSize:12,
              custom:{
                colors: [GREEN,RED],
                labels: ['Positive','Negative'],
                },
              form: 'DEFAULT',
              horizontalAlignment: "LEFT",
              verticalAlignment: 'TOP',
              orientation: "HORIZONTAL",
              wordWrapEnabled: true,
              xEntrySpace:20,
              yEntrySpace:100
            }}
            
            // onSelect={this.handleSelect.bind(this)}
            // onChange={(event) => console.log(event.nativeEvent)}
          />
        </View>
       
        </View>



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
    marginTop:20
  },
  chart: {
    flex: 1,
    marginTop:30
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
