import { Alert, FlatList, Text, View } from 'react-native';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { useState, useCallback, useEffect } from 'react';
import { employeeStorageDTO } from '../storage/Employee/employeeStorageDTO';
import { Card, CardContent, CardDescription, CardFooter, CardFooterText, CardHeader, CardTitle } from '../components/ui/Card';
import { EmployeeGetAll } from '../storage/Employee/employeeGetAll';
import AsyncStorage from '@react-native-async-storage/async-storage';

export function List() {
  const [employeeList, setEmployeeList] = useState<employeeStorageDTO[]>()
  
  const fetchEmployees = useCallback(async () => {
    const data = await EmployeeGetAll();
    setEmployeeList(data);
  },[]);

  useEffect(() => {
    fetchEmployees();
  },[fetchEmployees])

  function handleListEmployees() {
    fetchEmployees();
  }

  function handleDeleteEmployees() {
    Alert.alert(
      'Atenção','Tem certeza que deseja apagar todos os registros?',
      [
        {
          text: 'Sim',
          onPress: () => {
            AsyncStorage.clear();
            console.log('Deletado')
            Alert.alert('Registros apagados com sucesso!')
          }
        },
        {
          text: 'Não',
          style: 'cancel'
        }
      ]
    )
  }

  return (
    <>
      <View>
        <Header title='Listagem'/>
      </View>
      <View className='flex-1 bg-bg p-5'>
        <View className='flex-1 border border-border rounded-md mb-3 p-5'>
          <FlatList
            data={employeeList}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
              <Card>
                <CardHeader>
                  <CardTitle className='text-3xl'>
                    {item.employeeFirstName} {item.employeeLastName} 
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    CPF: {item.employeeCPF}
                  </CardDescription>
                  <CardDescription>
                    {item.employeePosition}
                  </CardDescription>
                </CardContent>
                <CardFooter>
                  <CardDescription className='text-green-700'>
                    U$ {item.employeeSalary}
                  </CardDescription>
                  <CardDescription>
                    {item.employeeDepartment}
                  </CardDescription>
                </CardFooter>
              </Card>
            )}
            ListEmptyComponent={() => (
              <Text className='text-xl text-white text-center'>
                Não há nenhum registro. Cadastre para visualizar.
              </Text>
            )}
          />
        </View>
          <Button
            style={{marginBottom: 1.5}}
            title='Listar'
            onPress={handleListEmployees}
          />
          <Button
            style={{backgroundColor:'red'}}
            title='Apagar registros'
            onPress={handleDeleteEmployees}
          />
      </View>
    </>
  );
}