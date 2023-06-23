import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Home = props => {
  const description = 'Dummy App For Learning JEST & DETOX.';
  return (
    <View style={styles.mainContainer}>
      <View style={styles.homeTop}>
        <Image
          style={styles.headerImage}
          resizeMode="contain" //when using this property then in iOS there is no borderRadius.
          source={require('../../assets/images.jpg')}
        />
        <Text style={styles.mainHeader}>Welcome to</Text>
        <Text
          style={[
            styles.mainHeader,
            {fontSize: 33, color: '#4c5dab', marginTop: 0},
          ]}
        >
          {props.mainScreenTitle}
        </Text>
        <Text style={styles.paraStyle}>{description}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  homeTop: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 10,
  },

  headerImage: {
    height: undefined,
    width: '100%',
    aspectRatio: 1,
    display: 'flex',
    alignItems: 'stretch',
    marginTop: 50,
    borderRadius: 20,
  },

  mainHeader: {
    fontSize: 30,
    color: '#344055',
    textTransform: 'uppercase',
  },
  paraStyle: {
    textAlign: 'left',
    fontSize: 19,
    color: '#7d7d7d',
    marginTop: 30,
    paddingBottom: 50,
    lineHeight: 26,
  },
});

export default Home;
