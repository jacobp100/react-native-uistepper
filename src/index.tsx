import React from 'react';
import {
  requireNativeComponent,
  StyleProp,
  StyleSheet,
  ViewStyle,
  NativeSyntheticEvent,
  UIManager,
} from 'react-native';

const Stepper = requireNativeComponent<any>('RCTStepper');
// @ts-expect-error
const { width, height } = UIManager.RCTStepper.Constants;

const styles = StyleSheet.create({
  container: {
    width,
    height,
  } as ViewStyle,
});

type ChangeEvent = NativeSyntheticEvent<{ value: number }>;

type Props = {
  style?: StyleProp<ViewStyle>;
  value?: number;
  isContinuous?: boolean;
  autorepeat?: boolean;
  wraps?: boolean;
  minimumValue?: number;
  maximumValue?: number;
  stepValue?: number;
  onChange?: (e: ChangeEvent) => void;
  onValueChange?: (value: number) => void;
  disabled?: boolean;
};

export default (props: Props) => (
  <Stepper
    {...props}
    style={StyleSheet.compose(styles.container, props.style)}
    onChange={(e: ChangeEvent) => {
      props.onChange?.(e);
      props.onValueChange?.(e.nativeEvent.value);
    }}
  />
);
