import { useMutation } from 'react-query';
import api from './api';
import { ILoginUser } from '../Utils/interfaces';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';
import { useStores } from '../Models/Store/helpers/useStore';

export const useLoginHook = (navigation) => {

    const {
        authenticationStore: { setUserAndToken },
      } = useStores()


    const postData = async (data: ILoginUser) => {
        try {
          const response = await api.post('users/login', data);
      
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
                text2: error.response.data.message || 'Operation failed please try again',
                position: 'top'
              });
        }
      },
      onSuccess: (data) => {
        setUserAndToken(data.user, data.token)
        navigation.navigate("Main")
      },
      retry: 0,
    }
  );

  return { mutate, isLoading, data, isSuccess, isError };
};