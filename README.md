# 📱 Budget App (React Native + Expo)

Jednoduchá React Native aplikace s podporou EAS Build, napsaná v TypeScriptu a navržená s `react-native-paper`.

## Použité technologie

- [Expo SDK](https://docs.expo.dev/)
- [EAS Build](https://docs.expo.dev/build/introduction/)
- `react-native-paper`
- `TypeScript`

---

## Spuštění v Android emulátoru (debug build)

```bash
npm run start
```

## Build pro reálné zařízení (APK)

```bash
npx expo login

npx eas build --platform android --profile development

```

## Production build

```bash
npx expo login

npx eas build --platform android
```

## Testování logů (emulátor nebo zařízení)

```bash
adb logcat *:S ReactNative:V ReactNativeJS:V
```
