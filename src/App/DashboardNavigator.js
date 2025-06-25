import {createStackNavigator} from '@react-navigation/stack';
import DashboardScreen from '../Home/DashboardScreen';
import CustomHeader from '../Components/CustomHeader';
import {TouchableOpacity, Text} from 'react-native';

const Stack = createStackNavigator();

const getHeaderTitle = route => {
  switch (route.name) {
    case 'Dashboard':
      return 'Dashboard';
    // Add more cases as you add more screens
    default:
      return 'Default';
  }
};

export default function DashboardNavigator({logout}) {
  return (
    <Stack.Navigator
      screenOptions={({navigation, route}) => ({
        header: props => (
          <CustomHeader
            title={getHeaderTitle(route)}
            onBack={null}
            rightComponent={
              <TouchableOpacity onPress={logout}>
                <Text style={{color: '#fff', fontWeight: 'bold'}}>Logout</Text>
              </TouchableOpacity>
            }
          />
        ),
      })}>
      <Stack.Screen name="Dashboard" component={DashboardScreen} />
    </Stack.Navigator>
  );
}
