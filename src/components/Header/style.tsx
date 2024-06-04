import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  header: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    backgroundColor: "#29A30A",
    padding: 50,
    alignItems: "center",
    // zIndex: 1000, // Para garantir que o cabeçalho esteja acima do conteúdo rolável
  },
  title: {
    color: "#FFF",
    fontSize: 30,
    fontWeight: "bold",
    position: "absolute",
    bottom: 3,
  },
});

export default styles;
