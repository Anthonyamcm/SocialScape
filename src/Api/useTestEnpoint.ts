import { useQuery } from 'react-query';
import api from './api';
import { AxiosError } from 'axios';
import Toast from 'react-native-toast-message';
import { useStores } from '../Models/Store/helpers/useStore';

export const useFetchUser = () => {
    const { authenticationStore: { authToken, user } } = useStores();

    // Adjusted fetch function to use a parameter
    const fetchUserById = async () => {
        try {
            const response = await api.get(`users/getById/${user.user_id}`, {
                headers: { Authorization: `Bearer ${authToken}` },
            });

            if (response.status === 200) {
                return response.data;
            } else {
                throw new Error(`Request failed with status ${response.status}`);
            }
        } catch (error) {
            throw error;
        }
    };

    const { isLoading, data, isSuccess, isError, error } = useQuery(
        ['User'], // Pass userId as part of the queryKey
        fetchUserById,
        {
            onError: (error) => {
                if (error instanceof AxiosError && error.response?.data?.message) {
                    Toast.show({
                        type: 'error',
                        text1: 'Error',
                        text2: error.response.data.message || 'Operation failed please try again',
                        position: 'top',
                    });
                }
            },
            onSuccess: (data) => {
                console.log(data);
            },
            retry: 0,
        }
    );

    return { isLoading, data, isSuccess, isError, error };
};