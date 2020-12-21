import AsyncStorage from '@react-native-community/async-storage';




export const savedata = (details, navigation) => {
  AsyncStorage.setItem('user_details', JSON.stringify(details));

  navigation.navigate('Login');
};

export const getData = async () => {
  try {
    let userDetails = await AsyncStorage.getItem('user_details');
    return userDetails;
  } catch (error) {
     return;
  }
};
