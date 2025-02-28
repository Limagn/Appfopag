import AsyncStorage from "@react-native-async-storage/async-storage";
import { employeeStorageDTO } from "./employeeStorageDTO";
import { EMPLOYEE_COLLECTION } from "../storageConfig";

export async function EmployeeCreate(newEmployee:employeeStorageDTO) {
  try {
    const storage = await AsyncStorage.getItem(EMPLOYEE_COLLECTION);
    const employees: employeeStorageDTO[] = storage ? JSON.parse(storage) : [];

    const updatedEmployees = [...employees, newEmployee];
    
    await AsyncStorage.setItem(EMPLOYEE_COLLECTION, JSON.stringify(updatedEmployees))
    
  } catch (error) {
    throw error;
  }
  
}