import { Linking, TouchableOpacity, View, Text } from "react-native";
import styles from "./style";

export default function FooterFooter() {
  const handleLinkedin = () => {
    const url = "https://www.linkedin.com/in/mateus-vieira-da-silva/";
    Linking.openURL(url).catch((err) =>
      console.error("Couldn't load page", err)
    );
  };

  return (
    <View style={styles.footer}>
      <TouchableOpacity onPress={handleLinkedin}>
        <Text style={styles.footerText}>Developed by Mateus Vieira</Text>
      </TouchableOpacity>
    </View>
  );
}
