// import React from 'react'
// import { BarChart, Grid } from 'react-native-svg-charts'

// class GroupedBarChartExample extends React.PureComponent {

//     render() {

//         const data1 = [ 14, -1, 100, -95, -94, -24, -8, 85, -91, 35, -53, 53, -78, 66, 96, 33, -26, -32, 73, 8 ]
//             .map((value) => ({ value }))
//         const data2 = [ 24, 28, 93, 77, -42, -62, 52, -87, 21, 53, -78, -62, -72, -6, 89, -70, -94, 10, 86, 84 ]
//             .map((value) => ({ value }))

//         const barData = [
//             {
//                 data: data1,
//                 svg: {
//                     fill: 'red',
//                 },
//             },
//             {
//                 data: data2,
//                 svg: {
//                     fill: 'orange',
//                 },
//             },
//         ]

//         return (
//             <BarChart
//                 style={ { height: 200,width:300 } }
//                 data={ barData }
//                 yAccessor={({ item }) => item.value}
//                 contentInset={ { top: 30, bottom: 30 } }
//                 { ...this.props }
//             >
//                 <Grid/>
//             </BarChart>
//         )
//     }

// }

// export default GroupedBarChartExample


import React, {Component,useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView,processColor} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'
// import {
//     LineChart,
//     BarChart,
//     PieChart,
//     ProgressChart,
//     ContributionGraph,
//     StackedBarChart
//   } from "react-native-chart-kit";
import colors from '../../../assets/colors';
import {BarChart} from 'react-native-charts-wrapper';
import { G } from 'react-native-svg';
var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height


const GREEN = processColor('#53B683');
const RED = processColor('#EB4442');
export default function Pre_orders({route,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();
    const [data, set_data] = useState({
        dataSets: [{
          // values: [5, -40, 17, 81, 43],
          values: [{y: -224.1}, {y: 238.5}, {y: 1280.1}, {y: -442.3}, {y: -2280.1},{y: -442.3}, {y: -2280.1}],
          label: 'Zero line dataset',
          config: {
            visible: true,
            colors: [GREEN, GREEN,RED, GREEN, RED],
            
            
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
            <View>
                <Text style={{color:'black'}}>2022</Text>
            </View>

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


