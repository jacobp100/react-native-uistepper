import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

const LINKING_ERROR =
  `The package 'react-native-uistepper' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type UistepperProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'UistepperView';

export const UistepperView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<UistepperProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
