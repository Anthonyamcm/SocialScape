import { useStores } from "../../Models/Store/helpers/useStore";
import { formatTodayDate } from "../../Utils";

export const useDashboard = () => {
  const {
    authenticationStore: { user },
  } = useStores();

  return { user, formatTodayDate };
};
