import * as SplashScreen from 'expo-splash-screen';
import { Text } from 'react-native-paper';
import { AppFooter } from '@/components';
import { data } from '@/data/record 2025-03-24 24.3.2025';
import { AppStoreProvider } from '@/store';
import { ThemeRegistry } from '@/theme';
import './i18n';

SplashScreen.preventAutoHideAsync();

export default function App() {
  return (
    <ThemeRegistry>
      <AppStoreProvider activeGameListRecord={data}>
        <Text variant="displaySmall">BGA bez newarch</Text>

        <AppFooter />
      </AppStoreProvider>
    </ThemeRegistry>
  );
}
