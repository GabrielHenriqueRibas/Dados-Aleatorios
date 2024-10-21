import { FlatList, StyleSheet, View } from "react-native";
import Footer from "./components/Card/Footer";
import { infos } from "./mocks/info";
import Card from "./components";
import Header from "./components/Card/Header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <FlatList
        data={infos}
        renderItem={({ item }) => (
          <Card>
            <Card.Body name={item.name} email={item.email} cpf={item.cpf} />
          </Card>
        )}
      />
      <Footer></Footer>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  body: {
    flex: 1,
  },
});
