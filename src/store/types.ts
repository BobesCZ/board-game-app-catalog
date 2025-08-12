import { ReactNode } from 'react';
import { Game, GameListRecord } from '@/types';

export type AppStoreValue = {
  gameList: Game[];
  activeGameListRecord: GameListRecord | undefined;
};

export type AppStoreProviderProps = Pick<AppStoreValue, 'activeGameListRecord'> & {
  children: ReactNode;
};
