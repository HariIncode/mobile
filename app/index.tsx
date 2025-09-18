import { Link } from "expo-router";
import { Button, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
// import AboutScreeen


export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Edit app/index.tsx to edit this screen.</Text>
      <TextInput placeholder="email" style={{color:"black", padding:10, borderWidth:1}}/>
      <TouchableOpacity>
        <Text>This is a TouchableOpacity</Text>
      </TouchableOpacity>
      <Link href="/about">Go to about</Link>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color:'red'
  }
});