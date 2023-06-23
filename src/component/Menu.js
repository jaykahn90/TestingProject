import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Menu = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.menuContainer}>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Course')}
      >
        <Text style={styles.textStyle}>Course</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('User Data')}
      >
        <Text style={styles.textStyle}>Retailers</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('About')}
      >
        <Text style={styles.textStyle}>Contact</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Contact')}
      >
        <Text style={styles.textStyle}>About</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  menuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textStyle: {
    textTransform: 'uppercase',
    // marginBottom: 50,
  },
});

export default Menu;
