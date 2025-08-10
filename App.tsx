import { StatusBar } from "expo-status-bar";
import { useColorScheme, View } from "react-native";
import {
  MD3DarkTheme,
  MD3LightTheme,
  PaperProvider,
  Text,
} from "react-native-paper";

export default function App() {
  const scheme = useColorScheme();
  const theme = scheme === "dark" ? MD3DarkTheme : MD3LightTheme;

  return (
    <PaperProvider theme={theme}>
      <View style={{ marginTop: 24 }}>
        <Text variant="displaySmall">BGA bez newarch</Text>
        <StatusBar style="auto" />
      </View>
    </PaperProvider>
  );
}
