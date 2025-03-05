import { Alert, ScrollView, Text, View } from 'react-native';
import { Card, CardContent, CardFooter, CardFooterText, CardTitle } from '../components/ui/Card';
import { useState } from 'react';
import { Header } from '../components/ui/Header';
import { Button } from '../components/ui/Button';
import { Input } from '../components/ui/Input';
import { EmployeeCreate } from '../storage/Employee/employeeCreate';
import { EmployeeGetAll } from '../storage/Employee/employeeGetAll';

export function Create() {
  const [employeeCPF, setEmployeeCPF] = useState('');
  const [employeeFirstName, setEmployeeFirstName] = useState('');
  const [employeeLastName, setEmployeeLastName] = useState('');
  const [employeePosition, setEmployeePosition] = useState('');
  const [employeeDepartment, setEmployeeDepartment] = useState('');
  const [employeeSalary, setEmployeeSalary] = useState('');
  // const [employeePhoneNumber, setEmployeePhoneNumber] = useState('');
  // const [employeeEmail, setEmployeeEmail] = useState('');

  async function handleAddEmployee() {
    const data = {
      employeeCPF,
      employeeFirstName,
      employeeLastName, 
      employeePosition, 
      employeeDepartment,
      employeeSalary,
    }

    if (employeeCPF == "" || employeeFirstName == "" || employeeLastName == "" || employeePosition == "" || employeeDepartment == "" || employeeSalary == "") {
      return Alert.alert('Campos vazios.','Favor preencher todos os campos!')
    }

    await EmployeeCreate(data);
    
    setEmployeeCPF('');
    setEmployeeFirstName('');
    setEmployeeLastName('');
    setEmployeePosition('');
    setEmployeeDepartment('');
    setEmployeeSalary('');
  
    Alert.alert('Cadastro','Funcionário cadastrado com sucesso!')
  }

  const placeholderTextColor = '#71717A'
  return (
    <>
      <View>
        <Header title='Cadastro de Funcionários'/>
      </View>
      <View className='flex-1 bg-bg p-5'>
        <ScrollView>
        <Card>
            <CardTitle>CPF</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: 01234567891'
                placeholderTextColor={placeholderTextColor}
                value={employeeCPF}
                onChangeText={value => setEmployeeCPF(value)}
                keyboardType='number-pad'
              />
            </CardContent>
            <CardFooter>
              <CardFooterText>
                *Apenas números
              </CardFooterText>
            </CardFooter>
          </Card>
          <Card>
            <CardTitle>Nome</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: Gabriel'
                placeholderTextColor={placeholderTextColor}
                value={employeeFirstName}
                onChangeText={value => setEmployeeFirstName(value)}
              />
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Sobrenome</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: Lima'
                placeholderTextColor={placeholderTextColor}
                value={employeeLastName}
                onChangeText={value => setEmployeeLastName(value)}
              />
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Função</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: Dev. Sênior'
                placeholderTextColor={placeholderTextColor}
                value={employeePosition}
                onChangeText={value => setEmployeePosition(value)}
              />
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Setor</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: TI'
                placeholderTextColor={placeholderTextColor}
                value={employeeDepartment}
                onChangeText={value => setEmployeeDepartment(value)}
              />
            </CardContent>
          </Card>
          <Card>
            <CardTitle>Salário (U$)</CardTitle>
            <CardContent>
              <Input
                placeholder='Ex: 12500,00'
                placeholderTextColor={placeholderTextColor}
                value={employeeSalary}
                onChangeText={value => setEmployeeSalary(value)}
                keyboardType='decimal-pad'
              />
            </CardContent>
          </Card>
          <Button 
            title='Cadastrar'
            onPress={handleAddEmployee}
          />
        </ScrollView>
      </View>
    </>
  );
}