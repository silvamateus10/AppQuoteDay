import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
 
  },
  title:{
    fontSize: 15,
    fontWeight: "bold"
  },
  container: {
    flex: 1,   
    justifyContent: "center",
  },
  icon:{
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginLeft: 30,    
  },
  body:{
    alignItems: "center",
  },
});

export default styles;
