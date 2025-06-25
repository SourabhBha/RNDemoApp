import {createStackNavigator} from '@react-navigation/stack';
import CustomHeader from '../Components/CustomHeader';
import LoginScreen from '../Auth/LoginScreen';
import RegisterScreen from '../Auth/RegisterScreen';
import ForgotPasswordScreen from '../Auth/ForgotPassword';

const Stack = createStackNavigator();

const getHeaderTitle = route => {
  switch (route.name) {
    case 'Login':
      return 'Login';
    case 'Register':
      return 'Register';
    case 'ForgotPassword':
      return 'Forgot Password';
    default:
      return 'Default';
  }
};

export default function AuthNavigator() {
  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => ({
        header: props => (
          <CustomHeader
            title={getHeaderTitle(route)}
            onBack={
              props.navigation.canGoBack() ? props.navigation.goBack : null
            }
            rightComponent={null}
          />
        ),
      })}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
    </Stack.Navigator>
  );
}
