import React from "react";
import { Text, View } from "react-native";
import styles from "./style";

interface DetailProps {
    title: string;
    value: string;
}

export default function Value(props: DetailProps) {
  return (
    <View style={styles.page}>
      <View>
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View>
        <Text style={styles.value}>{props.value}</Text>
      </View>
    </View>
  );
}
