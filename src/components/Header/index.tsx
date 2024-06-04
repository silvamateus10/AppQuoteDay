import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

interface HeaderProps {
  title: string; 
}

const Header: React.FC<HeaderProps> = (props) => {  
  const { title } = props;

  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};
 

export default Header;
