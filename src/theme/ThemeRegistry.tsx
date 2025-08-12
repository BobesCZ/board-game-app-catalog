import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { theme } from './theme';

export function ThemeRegistry({ children }: { children: React.ReactNode }) {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    async function loadFonts() {
      await Font.loadAsync({
        'FuzzyBubbles-Regular': require('../../assets/fonts/FuzzyBubbles-Regular.ttf'),
        'FuzzyBubbles-Bold': require('../../assets/fonts/FuzzyBubbles-Bold.ttf'),
      });
      setFontsLoaded(true);
    }
    loadFonts();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <PaperProvider theme={theme}>
      <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
        {children}
      </View>
    </PaperProvider>
  );
}
