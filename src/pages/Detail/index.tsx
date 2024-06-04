import React, { useState, useEffect } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { consultQuote } from "../../services/quote";
import { formatCurrency, formatDate } from "../../utils/formatters";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../routes";
import Icon from "react-native-vector-icons/Ionicons";
import ResponseApi from "../../interfaces/ResponseApi";
import styles from "./style";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Value from "../../components/Value";


interface DetailProps {
  route: {
    params: {
      currency: string;
    };
  };
}

export default function Detail({ route }: DetailProps) {
  const { currency } = route.params;
  const [titleHeader, setTitleHeader] = useState("");
  const [code, setCode] = useState("");
  const [currencyData, setCurrencyData] = useState<ResponseApi | null>();
  const navigation = useNavigation<propsStack>();

  useEffect(() => {
    switch (currency) {
      case "USD-BRL":
        callApi(currency, "USDBRL");
        setTitleHeader("Dólar / Real");
        setCode("$");

        break;
      case "EUR-BRL":
        callApi(currency, "EURBRL");
        setTitleHeader("Euro / Real");
        setCode("€");
        break;
      case "BTC-BRL":
        callApi(currency, "BTCBRL");
        setTitleHeader("Bitcoin / Real");
        setCode("BTC");
        break;
      default:
        setTitleHeader("Moeda não identificada");
    }
  }, [currency]);

  const callApi = async (endpoint: string, key: string) => {
    let response: ResponseApi | null;
    response = await consultQuote(endpoint, key);
    setCurrencyData(response);
  };
 
  const goBack = () => {
    navigation.navigate("Main");
  };

  return (
    <View style={styles.page}>
      <Header title={titleHeader} />
      <View style={styles.container}>
        <View style={styles.icon}>
          <TouchableOpacity onPress={() => goBack()}>
            <Icon name="arrow-back-outline" size={24} color="#000" />
          </TouchableOpacity>
        </View>
        <View style={styles.body}>
          <Text style={styles.title}>{code} 1,00</Text>
          <Text>{formatDate(currencyData?.create_date)}</Text>

          <View>
            <Value
              title="Alta"
              value={formatCurrency(currencyData?.high ?? "")}
            />
          </View>
          <View>
            <Value
              title="Baixa"
              value={formatCurrency(currencyData?.low ?? "")}
            />
          </View>
          <View>
            <Value
              title="Oferta"
              value={formatCurrency(currencyData?.bid ?? "")}
            />
          </View>
        </View>
      </View>
      <Footer />
    </View>
  );
}
