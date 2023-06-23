import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

//Screen imports
import Home from './src/screens/Home';
import About from './src/screens/About';
import Contact from './src/screens/Contact';
import UserData from './src/screens/HookEffect';
import Course from './src/screens/Course';

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        {/* HomeScreen */}
        <Stack.Screen name="Home">
          {props => (
            <Home
              {...props}
              mainScreenWelcome={'Welcome To'}
              mainScreenTitle={'Testing'}
            />
          )}
        </Stack.Screen>

        {/* CourseScreen */}
        <Stack.Screen name="Course" component={Course} />

        {/* UserData */}
        <Stack.Screen name="User Data" component={UserData} />

        {/* AboutScreen */}
        <Stack.Screen name="About" component={About} />

        {/* Contact */}
        <Stack.Screen name="Contact" component={Contact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
