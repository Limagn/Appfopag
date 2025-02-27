import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function Total() {

  function handleTotal() {
    Alert.alert('Atenção','Esta função não está pronta!')
  }

  return (
    <>
      <View>
        <Header title='Total'/>
      </View>
      <View className='flex-1 bg-bg p-5'>
        <ScrollView>
          <Input/>
          <Button 
            title='Total'
            onPress={handleTotal}
          />
        </ScrollView>
      </View>
    </>
  );
}