import { Platform } from "react-native";

let baseURL = '';

if (Platform.OS === 'android') {
  baseURL = 'http://192.168.246.126:8000/api/v1/';  // Physical device (change "192.168.246.126" with your ip address )
} 
 else if(Platform.OS === 'web'){
  baseURL = 'http://localhost:8000/api/v1/';        //localhost
}
else{
  baseURL = 'http://10.0.2.2:8000/api/v1/';         // Android emulator
}
export default baseURL;