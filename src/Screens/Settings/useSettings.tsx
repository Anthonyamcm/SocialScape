import { useStores } from "../../Models/Store/helpers/useStore";
import { AuthenticationStore } from "../../Models/Store/AuthenticationStore";

export const useSettings = (navigation) => {
  const {
    authenticationStore: { clearUserAndToken },
  } = useStores();

  function logOut() {
    clearUserAndToken();
    navigation.navigate("Landing");
  }
  return { logOut };
};
