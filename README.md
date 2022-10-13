# React Native UIStepper

Native bindings to iOS's UIStepper

```
npm install -S react-native-uistepper
```

Or

```
yarn add react-native-uistepper
```

Props:-

- `value` (`number`)
- `isContinuous` (`boolean`)
- `autorepeat` (`boolean`)
- `wraps` (`boolean`)
- `minimumValue` (`number`)
- `maximumValue` (`number`)
- `stepValue` (`number`)
- `onChange` (`(e: ChangeEvent) => void`)
- `onValueChange` (`(value: number) => void`)
- `disabled` (`boolean`)

These props map directly to those as defined in [Apple's documentation](https://developer.apple.com/documentation/uikit/uistepper)
