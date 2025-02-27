import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import './src/stylesheets/globals.css';
import { NavigationContainer } from '@react-navigation/native';
import { AppRoutes } from './src/routes/app.routes';


export default function App() {
  return (
      <NavigationContainer>
      <StatusBar hidden/>
        <AppRoutes/>
      </NavigationContainer>
  );
}

