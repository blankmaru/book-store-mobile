export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  Books: undefined;
  Search: undefined;
  Notification: undefined;
  Account: undefined;
};

export type BooksParamList = {
  BooksScreen: undefined;
};

export type SearchParamList = {
  SearchScreen: undefined;
};

export type NotificationParamList = {
  NotificationScreen: undefined;
};

export type AccountParamList = {
  AccountScreen: undefined;
};

export interface Book {
  id: string,
  name?: string,
  author?: string,
  image: string,
  timeReading?: string,
  prcRead?: string,
  pages?: number,
  category?: Array<string>
}