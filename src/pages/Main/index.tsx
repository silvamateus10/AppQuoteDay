import { Text, View, TouchableOpacity } from "react-native";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import styles from "./style";

import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes";

export default function Main() {
  const navigation = useNavigation<propsStack>();

  const navigateToDetail = (selectedCurrency: string) => {
    navigation.navigate("Detail", { currency: selectedCurrency });
  };

  return (
    <View style={styles.page}>
      <Header title="Cotação" />
      <View style={styles.container}>
        <Text style={styles.subTitle}>Para Real (R$)</Text>
        <TouchableOpacity
          onPress={() => navigateToDetail("USD-BRL")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Dólar</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToDetail("EUR-BRL")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Euro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigateToDetail("BTC-BRL")}
          style={styles.button}
        >
          <Text style={styles.buttonText}>Bitcoin</Text>
        </TouchableOpacity>
      </View>
      <Footer />
    </View>
  );
}
