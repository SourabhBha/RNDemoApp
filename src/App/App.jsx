/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import Toast from 'react-native-toast-message';
import { AuthProvider } from '../Context/AuthContext';
import AppNavigator from './AppNavigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
         <AppNavigator />
         
      </NavigationContainer>
      <Toast />
    </AuthProvider>
  );
}

/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
// import DashboardScreen from './DashboardScreen';
import ForgotPasswordScreen from '../Auth/ForgotPassword';
import CustomHeader from '../Components/CustomHeader';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="Login" 
      screenOptions={{
        header: (props) => (
          <CustomHeader
            title={props.options.title || props.route.name}
            onBack={props.navigation.canGoBack() ? props.navigation.goBack : null}
          />
        ),
      }}
      // screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        { <Stack.Screen name="Dashboard" component={DashboardScreen} /> }
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}*/

// import React from "react";
// import { StyleSheet, Text, View } from "react-native"; 

// const App = () => {
//   return (
//     <View>
//       <Text style={styles.title}>Hello, React Native!</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 20,
//     fontWeight: "bold",
//     color: "blue",
//   },
// });

// export default App;