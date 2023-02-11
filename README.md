# React Native UIStepper

<a href="https://jacobdoescode.com/technicalc"><img alt="Part of the TechniCalc Project" src="https://github.com/jacobp100/technicalc-core/blob/master/banner.png" width="200" height="60"></a>

Native bindings to iOS's UIStepper

```
npm install -S @jacobp100/react-native-uistepper
```

Or

```
yarn add @jacobp100/react-native-uistepper
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
