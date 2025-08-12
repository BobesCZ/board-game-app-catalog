import { useTranslation } from 'react-i18next';
import { Linking, View } from 'react-native';
import { Divider, Text, useTheme } from 'react-native-paper';
import { useAppStore } from '@/store';

export const AppFooter = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const { gameList, activeGameListRecord } = useAppStore();
  const gamesCount = gameList?.length;
  const recordCreated = activeGameListRecord?.created;

  return (
    <View style={{ backgroundColor: theme.colors.secondaryContainer }}>
      {!!(gamesCount || recordCreated) && (
        <>
          <Divider />
          <Text variant="bodySmall" style={{ textAlign: 'center', marginVertical: 2 }}>
            {gamesCount && t('footer.gamesCount', { gamesCount })}
            {recordCreated &&
              ' ' +
                t('footer.recordCreated', { recordCreated: new Date(recordCreated ?? 0).toLocaleDateString() })}{' '}
            {t('footer.createdBy')} <Text onPress={() => Linking.openURL('https://github.com/BobesCZ')}>Bobeš</Text>.
          </Text>
        </>
      )}
    </View>
  );
};
