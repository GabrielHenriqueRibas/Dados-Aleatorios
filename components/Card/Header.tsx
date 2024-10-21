import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dados Aleatorios</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 0,
    padding:12,
    flexDirection:'row',
    justifyContent:'space-between',
    backgroundColor: 'blue',
    marginTop:50
  },
  text:{
    color:'white',
  }
});
