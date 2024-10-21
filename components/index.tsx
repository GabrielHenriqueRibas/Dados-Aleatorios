import { FlatList, StyleSheet, View } from "react-native";
import { ReactNode } from "react";
import Body from "./Card/Body";

interface CardProps{
    children: ReactNode;
}

export default function Card({children} : CardProps) {
  return (
    <View >
      {children}
    </View>
  );
}

Card.Body = Body;

const styles = StyleSheet.create({
});
