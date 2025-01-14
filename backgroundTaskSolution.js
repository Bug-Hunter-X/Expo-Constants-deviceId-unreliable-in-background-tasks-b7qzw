import * as TaskManager from 'expo-task-manager';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Constants } from 'expo-constants';

// ... other imports

const BACKGROUND_TASK_ID = 'myBackgroundTask';

// Function to store the deviceId 
async function storeDeviceIdAsync() {
  try {
    const deviceId = Constants.deviceId;
    if(deviceId){
      await AsyncStorage.setItem('@deviceId', deviceId);
    }
  } catch (e) {
    console.error('Error storing device ID:', e);
  }
}

TaskManager.defineTask(BACKGROUND_TASK_ID, async ({ data, error }) => {
  try{
    const deviceId = await AsyncStorage.getItem('@deviceId');
    // Use the retrieved deviceId here
    console.log('Device ID in background task (retrieved from storage):', deviceId);
  }catch(e){
    console.error('Error getting device ID from storage', e)
  }
});

// Get DeviceID on App Start Up
useEffect(() => {
  storeDeviceIdAsync();
}, []);

//Start the TaskManager
const startBackgroundTask = async () => {
  try{
    await TaskManager.startTaskAsync(BACKGROUND_TASK_ID);
  } catch (e) {
    console.error('Error starting task:', e);
  }
}

//Start Task
startBackgroundTask();