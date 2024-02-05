import { useMutation } from 'react-query';
import api from './api';
import { IRegisterUser } from '../Config/interfaces';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';


export const useRegisterHook = (navigation: any) => {


    const postData = async (data: IRegisterUser) => {
        try {
          const response = await api.post('users/register', data);
      
          if (response.status === 200) {
            // Return data for successful request
            return response.data;
          } else {
            // If non-200 status, throw an error to trigger the catch block
            throw new Error(`Request failed with status ${response.status}`);
          }
        } catch (error) {
          throw error;
        }
      };

  const { mutate, isLoading, data, isSuccess, isError } = useMutation(
    ['User'],
    postData,
    {
      onError: (error) => {
        if(error instanceof AxiosError){
            Toast.show({
                type: 'error',
                text1: error.response.data.message,
                position: 'top'
              });
        }
      },
      onSuccess: () => {
        navigation.navigate("Main")
      },
      retry: 0,
    }
  );

  return { mutate, isLoading, data, isSuccess, isError };
};