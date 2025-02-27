import { StatusBar } from 'expo-status-bar';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';

export function List() {

  function handleList() {
    Alert.alert('Atenção','Esta função não está pronta!')
  }

  return (
    <>
      <View>
        <Header title='Listagem'/>
      </View>
      <View className='flex-1 bg-bg p-5'>
        <ScrollView>
          <Input/>
          <Button 
            title='Listar'
            onPress={handleList}
          />
        </ScrollView>
      </View>
    </>
  );
}