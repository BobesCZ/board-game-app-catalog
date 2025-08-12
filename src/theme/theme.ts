import {
  MD3LightTheme,
  configureFonts,
  MD3TypescaleKey,
} from "react-native-paper";

// type MD3Type = (typeof MD3LightTheme.fonts)["displayLarge"];
type MD3Type = any;

const fontBase = (
  fontFamily: string,
  fontWeight: string,
  fontSize: number,
  lineHeight: number,
  letterSpacing = 0
): MD3Type => ({
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  letterSpacing,
});

const fontConfig: Record<MD3TypescaleKey, MD3Type> = {
  displayLarge: fontBase("FuzzyBubbles-Regular", "normal", 57, 64, 0),
  displayMedium: fontBase("FuzzyBubbles-Regular", "normal", 45, 52, 0),
  displaySmall: fontBase("FuzzyBubbles-Regular", "normal", 36, 44, 0),
  headlineLarge: fontBase("FuzzyBubbles-Bold", "normal", 32, 40, 0),
  headlineMedium: fontBase("FuzzyBubbles-Bold", "normal", 28, 36, 0),
  headlineSmall: fontBase("FuzzyBubbles-Bold", "normal", 24, 32, 0),
  titleLarge: fontBase("FuzzyBubbles-Bold", "normal", 22, 28, 0),
  titleMedium: fontBase("FuzzyBubbles-Bold", "normal", 16, 24, 0.15),
  titleSmall: fontBase("FuzzyBubbles-Bold", "normal", 14, 20, 0.1),
  labelLarge: fontBase("FuzzyBubbles-Bold", "normal", 14, 20, 0.1),
  labelMedium: fontBase("FuzzyBubbles-Regular", "normal", 12, 16, 0.5),
  labelSmall: fontBase("FuzzyBubbles-Regular", "normal", 11, 16, 0.5),
  bodyLarge: fontBase("FuzzyBubbles-Regular", "normal", 16, 24, 0.15),
  bodyMedium: fontBase("FuzzyBubbles-Regular", "normal", 14, 20, 0.25),
  bodySmall: fontBase("FuzzyBubbles-Regular", "normal", 12, 16, 0.4),
};

export const theme = {
  ...MD3LightTheme,
  fonts: configureFonts({ config: fontConfig }),
};
