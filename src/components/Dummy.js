import React, {Component,useState,useRef} from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Dimensions,SafeAreaView ,FlatList, ScrollView} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Entypo from 'react-native-vector-icons/Entypo'

var windowWidth = Dimensions.get('window').width
var windowHeight=Dimensions.get('window').height

export default function Pre_orders({route,navigation}) {

    const [manual_time, set_manual_time] = useState('');
    const toastRef = useRef();

  return (
        
      <View style={styles.container}>
          <Text> m k k</Text>
       
      </View>



      );
}
const styles = StyleSheet.create({

  container: {
    flex:1
  },

});

