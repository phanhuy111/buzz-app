import { queryClient } from "helpers/queryClient";
import { store } from "store";
import { resetAll } from "store/sagas/resetAll";

export const resetAllCache = () => {
    store.dispatch(resetAll());
    queryClient.clear();
};
