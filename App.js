import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import treeImage from "./tree.jpg";
import AudioVisuals from "./AudioVisuals.json";
import { useState } from 'react';

export default function App() {
  const [index, setIndex] = useState(0);
  const incrementIndex = () => {
    setIndex(prevIndex => (prevIndex + 1));
  };
  const decrementIndex = () => {
    setIndex(prevIndex => (prevIndex - 1));
  };

  return (
    <View style={styles.container}>
      <Text>Stage :  {index}</Text>
      

      <Image source={{uri: AudioVisuals[index].image}}
       style={styles.treeImage} /> 

      <View style={styles.buttons} >
        <TouchableOpacity onPress={incrementIndex}>Next</TouchableOpacity>
        <TouchableOpacity onPress={decrementIndex}>Prev</TouchableOpacity>
      </View>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  treeImage: {
    width: 500,
    height: 800,  
  },
  buttons:{
    backgroundColor: "#a2d2ff",
    flexDirection: "row-reverse",
    width: 500,
    height: 75,
    justifyContent: "space-around",
    borderRadius: 25,
    alignItems: "center"

  }
});
