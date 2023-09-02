import {
  createNavigationContainerRef,
  CommonActions,
} from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export function navigate(name: string, params?: any) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name as unknown, params as never);
  }
}
export function navigateReset(name: string) {
  navigationRef.dispatch(
    CommonActions.reset({
      index: 1,
      routes: [{ name }],
    })
  );
}
