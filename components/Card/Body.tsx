import { StyleSheet, Text, View } from 'react-native';

export interface BodyProps{
  name: string,
  email:string,
  cpf:string
}

export default function Body({name, email, cpf} : BodyProps) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>Nome: {name}</Text>
      <Text style={styles.info}>E-mail: {email}</Text>
      <Text style={styles.info}>CPF: {cpf}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      padding: 20,
      marginVertical: 10,
      marginHorizontal: 20,
      borderRadius: 10,
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    info: {
      fontSize: 16,
      color: '#555',
      marginBottom: 5,
    },
});
