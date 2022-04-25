// import React from 'react'
// import { PieChart } from 'react-native-svg-charts'
// import { Text } from 'react-native-svg'

// class PieChartWithCenteredLabels extends React.PureComponent {

//     render() {

//         const data = [
//             {
//                 key: 1,
//                 amount: 50,
//                 svg: { fill: '#600080' },
//             },
//             {
//                 key: 2,
//                 amount: 50,
//                 svg: { fill: '#9900cc' }
//             },
//             {
//                 key: 3,
//                 amount: 40,
//                 svg: { fill: '#c61aff' }
//             },
//             {
//                 key: 4,
//                 amount: 95,
//                 svg: { fill: '#d966ff' }
//             },
//             {
//                 key: 5,
//                 amount: 35,
//                 svg: { fill: '#ecb3ff' }
//             }
//         ]

//         const Labels = ({ slices, height, width }) => {
//             return slices.map((slice, index) => {
//                 const { labelCentroid, pieCentroid, data } = slice;
//                 return (
//                     <Text
//                         key={index}
//                         x={pieCentroid[ 0 ]}
//                         y={pieCentroid[ 1 ]}
//                         fill={'white'}
//                         textAnchor={'middle'}
//                         alignmentBaseline={'middle'}
//                         fontSize={24}
//                         stroke={'black'}
//                         strokeWidth={0.2}
//                     >
//                         {data.amount}
//                     </Text>
//                 )
//             })
//         }

//         return (
//             <PieChart
//                 style={{ height: 200 }}
//                 valueAccessor={({ item }) => item.amount}
//                 data={data}
//                 spacing={10}
//                 outerRadius={'95%'}
//             >
//                 <Labels/>
//             </PieChart>
//         )
//     }

// }

// export default PieChartWithCenteredLabels



import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  processColor
} from 'react-native';

import {BarChart} from 'react-native-charts-wrapper';
import { G } from 'react-native-svg';

const GREEN = processColor('#53B683');
const RED = processColor('#EB4442');

class ZeroLineChartScreen extends React.Component {

  constructor() {
    super();

    this.state = {
      data: {
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

      },
      //  highlights: [{x:2}],
      xAxis: {
        inverted:false,
        enabled: true,
        drawLabels: false,
        drawAxisLine: false,
        drawGridLines: false,
        labelCount:6,

      },
      yAxis: {
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
      }
    };
  }

  // handleSelect(event) {
  //   let entry = event.nativeEvent
  //   if (entry == null) {
  //     this.setState({...this.state, selectedEntry: null})
  //   } else {
  //     this.setState({...this.state, selectedEntry: JSON.stringify(entry)})
  //   }

  //   console.log(event.nativeEvent)
  // }

  render() {
    return (

      <View style={{flex: 1}}>

        <View style={{height:80}}>
          <Text> selected entry</Text>
          <Text> {this.state.selectedEntry}</Text>
        </View>

        <View style={styles.container}>
          <BarChart 
          drawBorders={true}
            style={styles.chart}
            data={this.state.data}
            xAxis={this.state.xAxis}
            yAxis={this.state.yAxis}
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
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    height:400,
    backgroundColor: 'white',
    marginHorizontal:20,
    borderRadius:10
  },
  chart: {
    flex: 1,
    marginTop:30
  }
});

export default ZeroLineChartScreen;

// import React from 'react'
// import {
//   StyleSheet,
//   View,
//   Text,
// } from 'react-native'
// // import Pie from 'react-native-pie'
// import Pie from 'react-native-pie'
 
// export default () => {
//     return (
//       <View style={styles.container}>
//           <View
//             style={{
//               paddingVertical: 15,
//               flexDirection: 'row',
//               width: 350,
//               justifyContent: 'space-between',
//             }}
//           >
           
//             <Pie
//               radius={80}
//               innerRadius={50}
//               sections={[
//                 {
//                   percentage: 40,
//                   color: '#27564f',
//                 },
//                 {
//                   percentage: 20,
//                   color: '#336759',
//                 },
//                 {
//                   percentage: 15,
//                   color: '#448168',
//                 },
//                 {
//                   percentage: 20,
//                   color: '#579a77',
//                 },
//                 {
//                   percentage: 10,
//                   color: '#bbbbbb',
//                 },
//               ]}
//               strokeCap={'butt'}
//               // strokeCap={'round'}
              
//             />
//           </View>
          
//         </View>
//     )
  
// }
 
// const styles = StyleSheet.create({
//   container: { alignItems: 'center', justifyContent: 'center', height: 1050 },
//   gauge: {
//     position: 'absolute',
//     width: 100,
//     height: 160,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   gaugeText: {
//     backgroundColor: 'transparent',
//     color: '#000',
//     fontSize: 24,
//   },
// })