import { StyleSheet, Text, View } from 'react-native';

export default function Footer() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Gabriel H. Ribas</Text>
      <Text style={styles.text}>a2409119</Text>
      <Text style={styles.text}>5º Periodo</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
    padding:12
  },
  text:{
    color: 'white',
    marginBottom:2
  }
});
