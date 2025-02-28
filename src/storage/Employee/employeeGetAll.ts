import AsyncStorage from "@react-native-async-storage/async-storage";
import { employeeStorageDTO } from "./employeeStorageDTO";
import { EMPLOYEE_COLLECTION } from "../storageConfig";


export async function EmployeeGetAll() {
  try {
    const storage = await AsyncStorage.getItem(EMPLOYEE_COLLECTION);
    const employees: employeeStorageDTO[] = storage ? JSON.parse(storage) : []
    
    return  employees;

  } catch (error) {
    throw error;
  }
}