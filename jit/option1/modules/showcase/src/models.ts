export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  BigDecimal: { input: any; output: any; }
  Duration: { input: any; output: any; }
  Instant: { input: any; output: any; }
  Json: { input: any; output: any; }
  JsonObject: { input: any; output: any; }
  LocalDate: { input: any; output: any; }
  LocalDateTime: { input: any; output: any; }
  Long: { input: any; output: any; }
  Map_String_ObjectScalar: { input: any; output: any; }
  ObjectScalar: { input: any; output: any; }
  OffsetDateTime: { input: any; output: any; }
  UNREPRESENTABLE: { input: any; output: any; }
};

/** Запрос за данными распознавания актеров */
export type ActorsRecognitionQueryInput = {
  /** Длительность добавленных к видео динамических прероллов (в миллисекундах) */
  prerollsDuration?: InputMaybe<Scalars['Duration']['input']>;
  /** Токен для получения распознавания */
  recognitionToken?: InputMaybe<Scalars['String']['input']>;
  /** Время стоп-кадра */
  timeMs: Scalars['Int']['input'];
  /** Токен для получения распознавания */
  videoToken?: InputMaybe<Scalars['String']['input']>;
};

/** Запрос за статусом распознавания актеров */
export type ActorsRecognitionStatusQueryInput = {
  recognitionToken?: InputMaybe<Scalars['String']['input']>;
  videoToken?: InputMaybe<Scalars['String']['input']>;
};

/** Возрастное ограничение */
export enum AgeRestriction {
  Age0 = 'age0',
  Age6 = 'age6',
  Age12 = 'age12',
  Age16 = 'age16',
  Age18 = 'age18'
}

export type AlertFilterInput = {
  includeTypes: Array<AlertType>;
};

/** Тип коммуникации */
export enum AlertType {
  /** Пользователь находится в грейс-периоде */
  Grace = 'GRACE'
}

/** Отношение пользователя к фильму */
export enum Attitude {
  /** Любимый фильм */
  Fav = 'FAV',
  /** Оценено */
  Vote = 'VOTE',
  /** Ожидаемый фильм */
  Waiting = 'WAITING',
  /** Просмотрено */
  Watched = 'WATCHED'
}

export enum AudienceOrderBy {
  CountAsc = 'COUNT_ASC',
  CountDesc = 'COUNT_DESC'
}

export enum AudioQuality {
  Stereo = 'STEREO',
  Surround_51 = 'SURROUND_51'
}

/** Признак вхождения страны пользователя в список тех, где доступен Плюс */
export enum AvailabilityStatus {
  /** Каталог контента доступен полностью */
  Available = 'AVAILABLE',
  /** Каталог контента ограничен */
  Restricted = 'RESTRICTED'
}

/** Тип сортировки для рецензий кинокритиков */
export enum AwardOrderBy {
  /** Сначала по значимости награды, затем WIN_FIRST_YEAR_DESC_NOMINATION_ASC */
  AwardPositionYearDescWinFirstNominationCountDesc = 'AWARD_POSITION_YEAR_DESC_WIN_FIRST_NOMINATION_COUNT_DESC',
  WinFirstYearDescNominationAsc = 'WIN_FIRST_YEAR_DESC_NOMINATION_ASC',
  YearAsc = 'YEAR_ASC',
  YearDesc = 'YEAR_DESC',
  YearDescNominationAsc = 'YEAR_DESC_NOMINATION_ASC'
}

export type BooleanFilterValueInput = {
  filterId: Scalars['String']['input'];
  value: Scalars['Boolean']['input'];
};

export enum ClearStreamEncoding {
  Aes_128 = 'AES_128'
}

/** Доступ к смотрению контента */
export enum ConcurrencyArbiterWatchAccessStatus {
  /** Доступ разрешен */
  Allow = 'ALLOW',
  /** Доступ запрещен (достигнут hard лимит) */
  HardLimitReached = 'HARD_LIMIT_REACHED',
  /** Доступ запрещен (достигнут soft лимит) */
  SoftLimitReached = 'SOFT_LIMIT_REACHED'
}

export type ContinueWatchingRemoveInput = {
  contentId: Scalars['String']['input'];
};

export enum ContinueWatchingRemoveStatus {
  Fail = 'FAIL',
  Success = 'SUCCESS'
}

export enum CountryOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type CreateMovieFolderInput = {
  name: Scalars['String']['input'];
};

/** Тип сортировки для рецензий кинокритиков */
export enum CriticReviewOrderBy {
  TextDateDesc = 'TEXT_DATE_DESC'
}

/** Тип рецензии */
export enum CriticReviewType {
  Negative = 'NEGATIVE',
  Positive = 'POSITIVE'
}

export type CrmUserEventSendInput = {
  /** Тип события */
  eventType: Scalars['String']['input'];
  /** Тело события */
  payload: Scalars['Json']['input'];
};

/** Точность даты */
export enum DateAccuracy {
  Day = 'DAY',
  Month = 'MONTH',
  MonthDay = 'MONTH_DAY',
  Year = 'YEAR'
}

/** Тип связи устройства с пользователем */
export enum DeviceRelation {
  /** Семейное */
  Family = 'FAMILY',
  /** Собственное */
  Own = 'OWN'
}

export type DeviceUnbindInputInput = {
  deviceId: Scalars['String']['input'];
};

/** Статус лицензии загрузки */
export enum DownloadLicenseStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  New = 'NEW'
}

/** Статус загрузки */
export enum DownloadStatus {
  Cancelled = 'CANCELLED',
  Deleted = 'DELETED',
  Downloaded = 'DOWNLOADED',
  Downloading = 'DOWNLOADING',
  New = 'NEW'
}

/** Обновление статуса загрузки и лицензии загрузки */
export type DownloadStatusUpdateInput = {
  downloadId: Scalars['String']['input'];
  downloadStatus: DownloadStatus;
  licenseId: Scalars['String']['input'];
  licenseStatus: DownloadLicenseStatus;
};

export enum DownloadabilityStatus {
  Downloadable = 'DOWNLOADABLE',
  Undownloadable = 'UNDOWNLOADABLE'
}

/** Набор данных для обновления статусов загрузок */
export type DownloadsStatusUpdateInputInput = {
  downloadUpdates: Array<DownloadStatusUpdateInput>;
};

export enum DrmRequirement {
  DrmNotRequired = 'DRM_NOT_REQUIRED',
  DrmRequired = 'DRM_REQUIRED',
  DrmRequiredWithFallback = 'DRM_REQUIRED_WITH_FALLBACK'
}

export enum DrmType {
  Clear = 'CLEAR',
  Fairplay = 'FAIRPLAY',
  Playready = 'PLAYREADY',
  Widevine = 'WIDEVINE'
}

/** Тип сущности, на которую ожидается переход с карточки редакторского формата */
export enum EditorialFeatureEntityType {
  Channel = 'CHANNEL',
  ContentGroup = 'CONTENT_GROUP',
  SportCompetition = 'SPORT_COMPETITION',
  SportEvent = 'SPORT_EVENT',
  SportHighlight = 'SPORT_HIGHLIGHT',
  SportMain = 'SPORT_MAIN'
}

/** Тип увеличения размера картинки */
export enum EditorialFeatureImageSizeType {
  SizeType_1X = 'SIZE_TYPE_1X',
  SizeType_2X = 'SIZE_TYPE_2X',
  SizeType_3X = 'SIZE_TYPE_3X'
}

/** Тип элемента подборки редакторского формата */
export enum EditorialFeatureItemType {
  ImageWithTargetEntity = 'IMAGE_WITH_TARGET_ENTITY',
  VideoWithTargetEntity = 'VIDEO_WITH_TARGET_ENTITY'
}

export type EmptyPrefixSuggestHistoryEntityInputInput = {
  id: Scalars['Long']['input'];
};

export type EmptyPrefixSuggestHistoryImportEntityInput = {
  createdAt: Scalars['Instant']['input'];
  id: Scalars['Long']['input'];
  type: EntityType;
};

export type EmptyPrefixSuggestHistoryImportInputInput = {
  entities: Array<EmptyPrefixSuggestHistoryImportEntityInput>;
  keywords: Array<EmptyPrefixSuggestHistoryImportSearchRequestInput>;
};

export type EmptyPrefixSuggestHistoryImportSearchRequestInput = {
  createdAt: Scalars['Instant']['input'];
  keyword: Scalars['String']['input'];
};

export enum EmptyPrefixSuggestHistoryOrderBy {
  CreatedAtDesc = 'CREATED_AT_DESC'
}

export type EmptyPrefixSuggestHistoryTextInputInput = {
  keyword?: InputMaybe<Scalars['String']['input']>;
};

export enum EmptyPrefixSuggestType {
  Cinema = 'CINEMA',
  Movie = 'MOVIE',
  MovieList = 'MOVIE_LIST',
  Person = 'PERSON',
  SearchRequest = 'SEARCH_REQUEST'
}

/** Тип изображения */
export enum EntityImageType {
  /** Концепт */
  Concept = 'CONCEPT',
  /** Обложки */
  Cover = 'COVER',
  /** События */
  Event = 'EVENT',
  /** Фан-арт */
  FanArt = 'FAN_ART',
  /** Фото */
  Photo = 'PHOTO',
  /** Постеры */
  Poster = 'POSTER',
  /** Промо */
  Promo = 'PROMO',
  /** Скриншоты */
  Screenshot = 'SCREENSHOT',
  /** Съемки */
  Shooting = 'SHOOTING',
  /** Кадры */
  Still = 'STILL',
  /** Обои */
  Wallpaper = 'WALLPAPER'
}

export enum EntityType {
  Cinema = 'CINEMA',
  Movie = 'MOVIE',
  MovieList = 'MOVIE_LIST',
  Person = 'PERSON'
}

/** Статус доступности эпизода для просмотра */
export enum EpisodeAvailabilityStatus {
  /** Эпизод заблокирован (требование правообладателя, нарушение законодательства и т.п.) */
  Disabled = 'DISABLED',
  /** Эпизод планируется к публикации */
  Prepublished = 'PREPUBLISHED',
  /** Эпизод опубликован */
  Published = 'PUBLISHED'
}

export enum EpisodeOrderBy {
  SeasonNumberEpisodeNumberAsc = 'SEASON_NUMBER_EPISODE_NUMBER_ASC',
  SeasonNumberEpisodeNumberDesc = 'SEASON_NUMBER_EPISODE_NUMBER_DESC'
}

export type EpisodesInSeasonFilterInput = {
  onlyOnline: Scalars['Boolean']['input'];
};

export type EpisodesInSeriesFilterInput = {
  dateFrom?: InputMaybe<Scalars['LocalDate']['input']>;
  dateTo?: InputMaybe<Scalars['LocalDate']['input']>;
  onlyOnline: Scalars['Boolean']['input'];
  released?: InputMaybe<Scalars['Boolean']['input']>;
};

export type FamilyMemberFilterInput = {
  /** Вернуть ли текущего пользователя в состеве семьи */
  includeCurrentUserProfile?: InputMaybe<Scalars['Boolean']['input']>;
  /** Тип члена семьи */
  types: Array<InputMaybe<UserProfileType>>;
};

export type FavoriteMovieInputInput = {
  movieId: Scalars['Long']['input'];
};

export type FavoriteVisibilityInput = {
  isPublic: Scalars['Boolean']['input'];
};

export enum FeaturingPlatform {
  Android = 'ANDROID',
  Desktop = 'DESKTOP',
  Ios = 'IOS',
  Touch = 'TOUCH'
}

/** Тип фильма */
export enum FilmType {
  Normal = 'NORMAL',
  /** Выпущен только для трансляции на телеканале */
  TvOnly = 'TV_ONLY',
  /** Выпущен только на видеоносителях */
  VideoOnly = 'VIDEO_ONLY'
}

/** Тип сортировки элементов фильмографии персоны */
export enum FilmographyItemOrderBy {
  /** По КП-рейтингу по возрастанию */
  KpRatingAsc = 'KP_RATING_ASC',
  /** По КП-рейтингу по убыванию */
  KpRatingDesc = 'KP_RATING_DESC',
  /** Сортировка по позиции в списке */
  PositionAsc = 'POSITION_ASC',
  /** По названию по возрастанию, названия на русском в начале списка */
  TitleAsc = 'TITLE_ASC',
  /** По названию по убыванию, названия на русском в конце списка */
  TitleDesc = 'TITLE_DESC',
  /** По количеству оценок по возрастанию */
  VotesCountAsc = 'VOTES_COUNT_ASC',
  /** По количеству оценок по убыванию */
  VotesCountDesc = 'VOTES_COUNT_DESC',
  /** По дате выхода по возрастанию, без даты выхода в конце */
  YearAsc = 'YEAR_ASC',
  /** По дате выхода по убыванию, без даты выхода в начале */
  YearDesc = 'YEAR_DESC'
}

export enum FilterType {
  Boolean = 'BOOLEAN',
  IntRange = 'INT_RANGE',
  MultiSelect = 'MULTI_SELECT',
  RealRange = 'REAL_RANGE',
  SingleSelect = 'SINGLE_SELECT'
}

export type FilterValuesInput = {
  booleanFilterValues?: InputMaybe<Array<InputMaybe<BooleanFilterValueInput>>>;
  intRangeFilterValues?: InputMaybe<Array<InputMaybe<IntRangeFilterValueInput>>>;
  multiSelectFilterValues?: InputMaybe<Array<InputMaybe<MultiSelectFilterValueInput>>>;
  realRangeFilterValues?: InputMaybe<Array<InputMaybe<RealRangeFilterValueInput>>>;
  singleSelectFilterValues?: InputMaybe<Array<InputMaybe<SingleSelectFilterValueInput>>>;
};

export type FolderItemMovieInputInput = {
  folderTypeId: Scalars['Long']['input'];
  movieId: Scalars['Long']['input'];
};

export type FolderMovieInputInput = {
  folderId: Scalars['Long']['input'];
  movieId: Scalars['Long']['input'];
};

export type FolderVisibilityInput = {
  /** Id типа папки */
  folderTypeId: Scalars['Long']['input'];
  /** Видна ли папка всем в интернете */
  isPublic: Scalars['Boolean']['input'];
};

export enum ForcedStreamProtectionType {
  Aes_128 = 'AES_128'
}

/** Тип сортировки для друзей по интересам */
export enum FriendOfInterestsOrderBy {
  /** Сортируем по близости интересов, сначала самые близкие */
  ProximityOfInterestsDesc = 'PROXIMITY_OF_INTERESTS_DESC'
}

/** Тип сортировки для друзей */
export enum FriendOrderBy {
  /** Сортируем по имени друга, алфавитный порядок */
  FriendNameAsc = 'FRIEND_NAME_ASC',
  /** Сортируем по дате оценки, сначала свежие */
  VotedAtDesc = 'VOTED_AT_DESC',
  /** Сортируем по значению оценки, сначала самые высокие */
  VoteValueDesc = 'VOTE_VALUE_DESC'
}

/** Пол */
export enum Gender {
  /** Женский */
  Female = 'FEMALE',
  /** Мужской */
  Male = 'MALE'
}

export enum GenreOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

/** Причины попадания в грейс */
export enum GraceReason {
  /** Банк отклонил транзакцию, за подробностями надо обращаться в банк */
  AuthorizationReject = 'AUTHORIZATION_REJECT',
  /** Карта в черном списке */
  Blacklisted = 'BLACKLISTED',
  /** Карта не найдена */
  CardNotFound = 'CARD_NOT_FOUND',
  /** Карта просрочена */
  ExpiredCard = 'EXPIRED_CARD',
  /** Недостаточно средств на карте */
  NotEnoughFunds = 'NOT_ENOUGH_FUNDS',
  /** Карта утеряна/украдена */
  RestrictedCard = 'RESTRICTED_CARD',
  /** Причина неизвестна */
  Undefined = 'UNDEFINED'
}

export type IntRangeFilterValueInput = {
  /** Конец интервала включительно */
  end: Scalars['Int']['input'];
  filterId: Scalars['String']['input'];
  /** Начало интервала включительно */
  start: Scalars['Int']['input'];
};

export enum KeywordOrderBy {
  NameAsc = 'NAME_ASC',
  NameDesc = 'NAME_DESC'
}

export type KidsPinCodeEnableInput = {
  value: Scalars['String']['input'];
};

export type KidsPinCodeVerifyInput = {
  value: Scalars['String']['input'];
};

/** Фильтр для логотипа правообладателя */
export type LicenseCoverFilterInput = {
  /** Форм-фактор логотипа */
  formFactor?: InputMaybe<LogoFormFactor>;
  /** Цветовая тема логотипа */
  theme?: InputMaybe<LogoTheme>;
};

export enum LicenseStatus {
  Approved = 'APPROVED',
  Rejected = 'REJECTED'
}

export enum LogoFormFactor {
  L = 'L',
  M = 'M',
  S = 'S'
}

/** Цвет темы логотипов */
export enum LogoTheme {
  Dark = 'DARK',
  Light = 'LIGHT'
}

/** Статус брака */
export enum MarriageStatus {
  Annulment = 'ANNULMENT',
  Divorce = 'DIVORCE',
  Ok = 'OK',
  SpouseDeath = 'SPOUSE_DEATH'
}

/** Порядок сортировки членов съемочной команды */
export enum MembersOrderBy {
  /** По приоритету роли */
  ByCrewPriority = 'BY_CREW_PRIORITY',
  /** Сначала по типу роли в порядке, указанном в запросе, затем по приоритету роли */
  ByRolePositionByCrewPriority = 'BY_ROLE_POSITION_BY_CREW_PRIORITY'
}

/** Модель монетизации контента */
export enum MonetizationModel {
  Avod = 'AVOD',
  Est = 'EST',
  Free = 'FREE',
  Svod = 'SVOD',
  Tvod = 'TVOD'
}

export type MonthDayInput = {
  dayOfMonth: Scalars['Int']['input'];
  month: Scalars['Int']['input'];
};

export type MovieAwaitInputInput = {
  movieId: Scalars['Long']['input'];
};

/** Типы сортировки амплуа персоны */
export enum MovieCrewRoleOrderBy {
  /** По убыванию количества фильмов амплуа */
  MoviesCountDesc = 'MOVIES_COUNT_DESC'
}

/** Роль в съемочной команде (актер, режиссер, etc) */
export enum MovieCrewRoleSlug {
  Actor = 'ACTOR',
  Art = 'ART',
  Cameo = 'CAMEO',
  Composer = 'COMPOSER',
  Costumer = 'COSTUMER',
  Decorator = 'DECORATOR',
  Design = 'DESIGN',
  Director = 'DIRECTOR',
  DirectorUssr = 'DIRECTOR_USSR',
  Editor = 'EDITOR',
  GroupCameo = 'GROUP_CAMEO',
  GroupUncredited = 'GROUP_UNCREDITED',
  MakeupArtist = 'MAKEUP_ARTIST',
  Operator = 'OPERATOR',
  Producer = 'PRODUCER',
  ProductionDesigner = 'PRODUCTION_DESIGNER',
  SoundDesigner = 'SOUND_DESIGNER',
  Translator = 'TRANSLATOR',
  Uncredited = 'UNCREDITED',
  Voiceover = 'VOICEOVER',
  VoiceDirector = 'VOICE_DIRECTOR',
  Writer = 'WRITER'
}

export enum MovieFolderOrderBy {
  /** В порядке, заданном на kinopoisk.ru/mykp/movies/ */
  SequenceAsc = 'SEQUENCE_ASC'
}

/** Тип сортировки для изображений */
export enum MovieImageOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC',
  TypeAsc = 'TYPE_ASC',
  TypeDesc = 'TYPE_DESC'
}

export enum MovieImageType {
  /** Концепт */
  Concept = 'CONCEPT',
  /** Обложки */
  Cover = 'COVER',
  /** Фан-арт */
  FanArt = 'FAN_ART',
  /** Постеры */
  Poster = 'POSTER',
  /** Промо */
  Promo = 'PROMO',
  /** Скриншоты */
  Screenshot = 'SCREENSHOT',
  /** Съемки */
  Shooting = 'SHOOTING',
  /** Кадры */
  Still = 'STILL',
  /** Обои */
  Wallpaper = 'WALLPAPER'
}

export enum MovieInTheaterOrderBy {
  RankAsc = 'RANK_ASC'
}

export type MovieListAvailableFiltersFilterInput = {
  filterIds?: InputMaybe<Array<Scalars['String']['input']>>;
};

/** Фильтр по категориям списка фильмов */
export type MovieListCategoryFilterInput = {
  /** Доступность онлайн */
  isAvailableOnline?: InputMaybe<Scalars['Boolean']['input']>;
  /** Тип видео */
  movieType?: InputMaybe<MovieType>;
};

export enum MovieListCategoryOrderBy {
  PositionAsc = 'POSITION_ASC'
}

/** Фильтр для списка фильмов */
export type MovieListFilterInput = {
  countryId?: InputMaybe<Scalars['Int']['input']>;
  excludeViewed?: InputMaybe<Scalars['Boolean']['input']>;
  genreId?: InputMaybe<Scalars['Int']['input']>;
  onlyHighRated?: InputMaybe<Scalars['Boolean']['input']>;
  onlyReleased?: InputMaybe<Scalars['Boolean']['input']>;
  onlyTop?: InputMaybe<Scalars['Boolean']['input']>;
  origin?: InputMaybe<MovieOrigin>;
  type?: InputMaybe<MovieType>;
  viewOption?: InputMaybe<ViewOptionCategory>;
  years?: InputMaybe<YearsRangeInput>;
};

/** Тип сортировки элементов фильмографии персоны */
export enum MovieListItemOrderBy {
  /** По КП-рейтингу по возрастанию */
  KpRatingAsc = 'KP_RATING_ASC',
  /** По КП-рейтингу по убыванию */
  KpRatingDesc = 'KP_RATING_DESC',
  /** Сортировка по позиции в списке */
  PositionAsc = 'POSITION_ASC',
  /** По названию по возрастанию, названия на русском в начале списка */
  TitleAsc = 'TITLE_ASC',
  /** По названию по убыванию, названия на русском в конце списка */
  TitleDesc = 'TITLE_DESC',
  /** По количеству оценок по возрастанию */
  VotesCountAsc = 'VOTES_COUNT_ASC',
  /** По количеству оценок по убыванию */
  VotesCountDesc = 'VOTES_COUNT_DESC',
  /** По дате выхода по возрастанию */
  YearAsc = 'YEAR_ASC',
  /** По дате выхода по убыванию */
  YearDesc = 'YEAR_DESC'
}

export enum MovieListItemType {
  BoxOfficeMovieListItem = 'BOX_OFFICE_MOVIE_LIST_ITEM',
  ComingSoonMovieListItem = 'COMING_SOON_MOVIE_LIST_ITEM',
  MostExpensiveMovieListItem = 'MOST_EXPENSIVE_MOVIE_LIST_ITEM',
  MostProfitableMovieListItem = 'MOST_PROFITABLE_MOVIE_LIST_ITEM',
  MovieListItem = 'MOVIE_LIST_ITEM',
  OfflineAudienceMovieListItem = 'OFFLINE_AUDIENCE_MOVIE_LIST_ITEM',
  PopularMovieListItem = 'POPULAR_MOVIE_LIST_ITEM',
  RecommendationMovieListItem = 'RECOMMENDATION_MOVIE_LIST_ITEM',
  TopMovieListItem = 'TOP_MOVIE_LIST_ITEM'
}

export enum MovieListOrderBy {
  PositionAsc = 'POSITION_ASC'
}

export enum MovieListRelationOrderBy {
  /** По количеству фильмов/сериалов по возрастанию */
  MoviesCountAsc = 'MOVIES_COUNT_ASC',
  /** По количеству фильмов/сериалов по убыванию */
  MoviesCountDesc = 'MOVIES_COUNT_DESC',
  /** По названию списка по возрастанию */
  NameAsc = 'NAME_ASC',
  /** По названию списка по убыванию */
  NameDesc = 'NAME_DESC',
  /** По позиции фильма/сериала в списке по возрастанию */
  PositionAsc = 'POSITION_ASC',
  /** По позиции фильма/сериала в списке по убыванию */
  PositionDesc = 'POSITION_DESC'
}

/** Фильтр по спискам фильмов */
export type MovieListsFilterInput = {
  /** Доступность онлайн */
  isAvailableOnline?: InputMaybe<Scalars['Boolean']['input']>;
  /** Тип видео */
  movieType?: InputMaybe<MovieType>;
};

/** Запрос на мэтчинг фильма */
export type MovieMatchingQueryInput = {
  /** Названия */
  titles: Array<InputMaybe<Scalars['String']['input']>>;
  /** Тип тайтла */
  type?: InputMaybe<MovieMatchingQueryType>;
  /** Год */
  year?: InputMaybe<Scalars['Int']['input']>;
};

/** Тип тайтла для поиска */
export enum MovieMatchingQueryType {
  Any = 'ANY',
  Film = 'FILM'
}

export type MovieNoteCreateInputInput = {
  /** Метаданные */
  metadata: MovieNoteMetadataInput;
  /** Идентификатор фильма/сериала */
  movieId: Scalars['Long']['input'];
  /** Примечание */
  note: Scalars['String']['input'];
};

export type MovieNoteDeleteInputInput = {
  /** Метаданные */
  metadata: MovieNoteMetadataInput;
  /** Идентификатор фильма/сериала */
  movieId: Scalars['Long']['input'];
};

export type MovieNoteMetadataInput = {
  csrfToken: Scalars['String']['input'];
};

/** Фильм снят в России или зарубежом */
export enum MovieOrigin {
  /** Фильм снят зарубежом */
  Foreign = 'FOREIGN',
  /** Отечественный фильм */
  Russian = 'RUSSIAN'
}

export type MovieReleaseFilterInput = {
  /** Минимальная дата релизов */
  date: Scalars['LocalDate']['input'];
  /** Тип релиза */
  releaseType: ReleaseType;
  /** Id страны */
  yandexCountryId?: InputMaybe<Scalars['Long']['input']>;
};

export enum MovieReleaseOrderBy {
  ReleaseDateAscExpectationRatingDesc = 'RELEASE_DATE_ASC_EXPECTATION_RATING_DESC',
  ReleaseDateAscKinopoiskRatingDescExpectationRatingDesc = 'RELEASE_DATE_ASC_KINOPOISK_RATING_DESC_EXPECTATION_RATING_DESC'
}

export type MovieRemoveNotInterestedInputInput = {
  movieId: Scalars['Long']['input'];
};

export type MovieRemovePlannedToWatchByContentIdInput = {
  contentId: Scalars['String']['input'];
};

export type MovieRemovePlannedToWatchInputInput = {
  movieId: Scalars['Long']['input'];
};

export type MovieRemoveVoteInputInput = {
  movieId: Scalars['Long']['input'];
};

export type MovieRemoveWatchInputInput = {
  movieId: Scalars['Long']['input'];
};

export type MovieRemoveWatchedInputInput = {
  movieId: Scalars['Long']['input'];
};

export type MovieSetNotInterestedInputInput = {
  movieId: Scalars['Long']['input'];
};

export type MovieSetPlannedToWatchByContentIdInput = {
  contentId: Scalars['String']['input'];
};

export type MovieSetPlannedToWatchInputInput = {
  movieId: Scalars['Long']['input'];
};

export type MovieSetVoteInputInput = {
  /** Идентификатор фильма/сериала */
  movieId: Scalars['Long']['input'];
  /** Оценка фильма */
  rate: Scalars['Int']['input'];
};

export type MovieSetWatchInputInput = {
  movieId: Scalars['Long']['input'];
};

export type MovieSetWatchedInputInput = {
  movieId: Scalars['Long']['input'];
};

/** Тип фильма */
export enum MovieType {
  Film = 'FILM',
  Series = 'SERIES'
}

/** Ожидает ли пользователь выхода фильма */
export enum MovieUserExpectationType {
  No = 'NO',
  Yes = 'YES'
}

export type MoviesInCinemaCriteriaInput = {
  fallbackRegionId?: InputMaybe<Scalars['Int']['input']>;
  regionId: Scalars['Int']['input'];
};

/** Фильтр по фильмам/сериалам в пользовательских папках */
export type MoviesInFolderFilterInput = {
  isOnlyOnline?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Тип сортировки фильмов/сериалов в пользовательских папках */
export enum MoviesInFolderOrderBy {
  /** По убыванию времени добавления в папку */
  DateAddedToFolderDesc = 'DATE_ADDED_TO_FOLDER_DESC',
  /** По КП-рейтингу по возрастанию */
  KpRatingAsc = 'KP_RATING_ASC',
  /** По КП-рейтингу по убыванию */
  KpRatingDesc = 'KP_RATING_DESC',
  /** По названию по возрастанию, названия на русском в начале списка */
  TitleAsc = 'TITLE_ASC',
  /** По названию по убыванию, названия на русском в конце списка */
  TitleDesc = 'TITLE_DESC',
  /** По дате выхода по возрастанию, без даты выхода в конце */
  YearAsc = 'YEAR_ASC',
  /** По дате выхода по убыванию, без даты выхода в начале */
  YearDesc = 'YEAR_DESC'
}

/** Рейтинг MPAA */
export enum MpaaRestriction {
  G = 'g',
  Nc17 = 'nc17',
  Pg = 'pg',
  Pg13 = 'pg13',
  R = 'r'
}

export type MultiSelectFilterValueInput = {
  filterId: Scalars['String']['input'];
  values: Array<InputMaybe<Scalars['String']['input']>>;
};

/** Запрос за данными музыкального распознавания */
export type MusicRecognitionQueryInput = {
  /** Язык выбранной аудиодорожки */
  langCode: Scalars['String']['input'];
  /** Длительность добавленных к видео динамических прероллов (в миллисекундах) */
  prerollsDuration?: InputMaybe<Scalars['Duration']['input']>;
  /** Токен для получения распознавания */
  recognitionToken?: InputMaybe<Scalars['String']['input']>;
  /** Токен для получения распознавания */
  videoToken?: InputMaybe<Scalars['String']['input']>;
};

/** Запрос за статусом распознавания музыки */
export type MusicRecognitionStatusQueryInput = {
  recognitionToken?: InputMaybe<Scalars['String']['input']>;
  videoToken?: InputMaybe<Scalars['String']['input']>;
};

/** Отношение для поиска окрестности */
export enum NeighbourRelation {
  Left = 'LEFT',
  Right = 'RIGHT'
}

export enum NewTrailerOrderBy {
  /** По дате выхода по убыванию */
  DateDesc = 'DATE_DESC',
  /** По просмотрам по убыванию */
  ViewsDesc = 'VIEWS_DESC'
}

export type NoteVisibilityInput = {
  isPublic: Scalars['Boolean']['input'];
};

export type NotificationFeedbackInput = {
  actionId: Scalars['String']['input'];
  notificationPayloadId: Scalars['String']['input'];
  payload?: InputMaybe<Scalars['JsonObject']['input']>;
};

export type NotificationFilterInput = {
  consumer: Scalars['String']['input'];
  domain: Array<NotificationTargetDomainInput>;
  platform: Scalars['String']['input'];
  supportedTemplateIds: Array<Scalars['String']['input']>;
};

export type NotificationTargetDomainInput = {
  key: Scalars['String']['input'];
  value: Array<InputMaybe<Scalars['String']['input']>>;
};

export type NotificationViewInput = {
  notificationPayloadId: Scalars['String']['input'];
};

export type NpsRejectInputInput = {
  id: Scalars['String']['input'];
};

export type NpsSubmitInputInput = {
  id: Scalars['String']['input'];
  score: Scalars['Int']['input'];
};

export type OttContentFeaturesFilterInput = {
  layout: OttContentFeaturesLayout;
  onlyClientSupported?: InputMaybe<Scalars['Boolean']['input']>;
};

export enum OttContentFeaturesLayout {
  /** Выводит все доступные фичи в отсортированном порядке */
  KpTitleCard = 'KP_TITLE_CARD',
  /** Выводит только лучшие по качеству фичи в отсортированном порядке */
  OttTitleCard = 'OTT_TITLE_CARD'
}

export type OttStreamsFilterInput = {
  isSupportedByClient?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Значение параметра */
export type ParameterRawValueInput = {
  /** Название */
  name: Scalars['String']['input'];
  /** Значение */
  value: Scalars['ObjectScalar']['input'];
};

export type ParentalControlUpdateInput = {
  enabled: Scalars['Boolean']['input'];
  videoId?: InputMaybe<Scalars['String']['input']>;
};

export enum PersonBestMovieOrderBy {
  /** Сорировка по позиции */
  PositionAsc = 'POSITION_ASC'
}

/** Тип фильма */
export enum PersonBestMovieType {
  /** Фильмы */
  Film = 'FILM',
  /** Сериалы */
  Series = 'SERIES'
}

/** Запрос на папки персон */
export type PersonFoldersFilterInput = {
  includeSystemFolders: Scalars['Boolean']['input'];
};

export enum PersonImageType {
  /** События */
  Event = 'EVENT',
  /** Фото */
  Photo = 'PHOTO'
}

/** Тип сортировки персон в пользовательских папках */
export enum PersonInFolderOrderBy {
  /** По убыванию времени добавления в папку */
  DateAddedToFolderDesc = 'DATE_ADDED_TO_FOLDER_DESC'
}

export enum PersonOrderBy {
  /** Сортировка по рангу */
  RangAsc = 'RANG_ASC'
}

export enum PersonPopularMovieOrderBy {
  /** Сортировка по позиции в списке популярных фильмов */
  PositionAsc = 'POSITION_ASC'
}

export enum PersonSiteOrderBy {
  UrlAsc = 'URL_ASC'
}

export enum PersonSiteType {
  Facebook = 'FACEBOOK',
  Instagram = 'INSTAGRAM',
  Livejournal = 'LIVEJOURNAL',
  Site = 'SITE',
  Twitter = 'TWITTER',
  Vk = 'VK'
}

export type PlannedToWatchVisibilityInput = {
  isPublic: Scalars['Boolean']['input'];
};

/** Тип структуры композитного оффера */
export enum PlusCompositeOfferStructureType {
  /** Оффер состоит из тарифа с опцией или тарифа с опциями или из опций */
  Composite = 'COMPOSITE',
  /** Оффер состоит только из одной опции */
  Option = 'OPTION',
  /** Оффер состоит только из тарифа */
  Tariff = 'TARIFF'
}

export enum PlusCurrency {
  Amd = 'AMD',
  Azn = 'AZN',
  Byn = 'BYN',
  Gel = 'GEL',
  Ils = 'ILS',
  Kgs = 'KGS',
  Kzt = 'KZT',
  Mdl = 'MDL',
  Rub = 'RUB',
  Uah = 'UAH',
  Usd = 'USD',
  Uzs = 'UZS'
}

/** Тип элемента шаблона условия использования */
export enum PlusLegalItemType {
  /** Текст-ссылка */
  Link = 'LINK',
  /** Текст */
  Text = 'TEXT'
}

/** Фильтр постов */
export type PostFilterCriteriaInput = {
  rubricIds?: InputMaybe<Array<Scalars['Long']['input']>>;
  types?: InputMaybe<Array<PostType>>;
};

export enum PostFormat {
  Legacy = 'LEGACY',
  Setka = 'SETKA'
}

/** Тип поста */
export enum PostType {
  Article = 'ARTICLE',
  Game = 'GAME',
  Interview = 'INTERVIEW',
  News = 'NEWS',
  Podcast = 'PODCAST',
  Special = 'SPECIAL',
  Video = 'VIDEO'
}

/** Порядок сортировки премьер */
export enum PremiereOrderBy {
  /** Сортировка по дате по возрастанию */
  DateAsc = 'DATE_ASC',
  /** Сортировка по дате по возрастанию */
  DateAscCountryIdAsc = 'DATE_ASC_COUNTRY_ID_ASC',
  /** Сортировка по дате по убыванию */
  DateDesc = 'DATE_DESC'
}

/** Валюта */
export enum PriceCurrency {
  Eur = 'eur',
  Kzt = 'kzt',
  Rub = 'rub',
  Usd = 'usd'
}

/** Порядок сортировки студий */
export enum ProductionParticipantOrderBy {
  /** По идентификатору */
  ByIdAsc = 'BY_ID_ASC'
}

export enum ProductionStatus {
  Announced = 'ANNOUNCED',
  Completed = 'COMPLETED',
  Filming = 'FILMING',
  PostProduction = 'POST_PRODUCTION',
  PreProduction = 'PRE_PRODUCTION',
  Unknown = 'UNKNOWN'
}

/** Статус доступности продления */
export enum ProlongationAvailabilityStatus {
  /** Пролонгация доступна */
  Available = 'AVAILABLE',
  /** Пролонгация недоступна */
  NotAvailable = 'NOT_AVAILABLE',
  /** Пролонгация выполняется в данный момент */
  Running = 'RUNNING',
  /** Неизвестный статус */
  Unknown = 'UNKNOWN'
}

/** Коды причин ошибок неуспешных продлений */
export enum ProlongationErrorCode {
  /** Уже было успешное продление в разрешенный период времени */
  AlreadyProlonged = 'ALREADY_PROLONGED',
  /** Выполняется другая пролонгация */
  AlreadyStarted = 'ALREADY_STARTED',
  /** Нет подписок в продляемом состоянии: нет подписок в грейсе, подписки в грейсе ненативные, etc. */
  InvalidSubscriptionState = 'INVALID_SUBSCRIPTION_STATE',
  /** Исчерпан лимит попыток продлений в разрешенный период времени */
  TryLimitExceeded = 'TRY_LIMIT_EXCEEDED',
  /** Неизвестная ошибка */
  UnknownError = 'UNKNOWN_ERROR',
  /** Не удалось провести успешный платеж за подписку */
  UnsuccessfulPayment = 'UNSUCCESSFUL_PAYMENT'
}

/** Статус продления */
export enum ProlongationStatus {
  /** Запрос на пролонгацию создан, пролонгация запланирована */
  Created = 'CREATED',
  /** Пролонгация завершилась неуспешно */
  Failed = 'FAILED',
  /** Пролонгация недоступна и не была запущена */
  Invalid = 'INVALID',
  /** Пролонгация запущена и выполняется */
  InProgress = 'IN_PROGRESS',
  /** Пролонгация завершилась успешно */
  Success = 'SUCCESS',
  /** Неизвестный статус */
  Unknown = 'UNKNOWN'
}

export enum PromotionActionType {
  CashBack = 'CASH_BACK',
  Discount = 'DISCOUNT',
  None = 'NONE'
}

/** Параметры для выбора конфигурации акции из CRM */
export type PromotionConfigFilterInput = {
  /** Версия конфигурации */
  configVersion: Scalars['String']['input'];
  /** Название платформы клиента */
  platform: Scalars['String']['input'];
};

export enum PurchasabilityStatus {
  Purchasable = 'PURCHASABLE',
  Purchased = 'PURCHASED',
  Unpurchasable = 'UNPURCHASABLE'
}

/** Тип сортировки для оцененных пользователем фильмов */
export enum RatedMoviesOrderBy {
  /** Сортируем по дате оценки */
  VotedAtDesc = 'VOTED_AT_DESC'
}

export type RealRangeFilterValueInput = {
  /** Конец интервала включительно */
  end: Scalars['Float']['input'];
  filterId: Scalars['String']['input'];
  /** Начало интервала включительно */
  start: Scalars['Float']['input'];
};

/** Тип сортировки для рекомендуемых пользователями фильмов */
export enum RecommendationOrderBy {
  /** Сортируем сначала по убыванию кол-ва рекомендаций пользователей, а потом по убыванию рейтинга */
  RecommendationsCountDescRatingDesc = 'RECOMMENDATIONS_COUNT_DESC_RATING_DESC'
}

export enum RecommendedByUsersMovieType {
  /** Рекомендован текущим пользователем */
  Personal = 'PERSONAL',
  /** Рекомендован пользователями */
  Users = 'USERS'
}

export type RegularPromotionAcceptInputInput = {
  id: Scalars['String']['input'];
};

export type RegularPromotionRejectInputInput = {
  id: Scalars['String']['input'];
};

/** Связанные фильмы */
export enum RelatedMovieOrderBy {
  /** По возрастанию movie.id */
  MovieIdAsc = 'MOVIE_ID_ASC',
  /** Сначала по возрастанию даты первой премьеры, затем по возрастанию года производства */
  PremiereDateAsc = 'PREMIERE_DATE_ASC',
  /** Сначала по типу связи в порядке, указанном в запросе, затем по возрастанию movie.id */
  TypePositionMovieIdAsc = 'TYPE_POSITION__MOVIE_ID_ASC'
}

/** Тип связи */
export enum RelatedMovieType {
  After = 'AFTER',
  AlternateLanguage = 'ALTERNATE_LANGUAGE',
  Before = 'BEFORE',
  Default = 'DEFAULT',
  EditedFrom = 'EDITED_FROM',
  EditedInto = 'EDITED_INTO',
  References = 'REFERENCES',
  ReferencesIn = 'REFERENCES_IN',
  Remake = 'REMAKE',
  SpinOff = 'SPIN_OFF',
  Spoofed = 'SPOOFED',
  Spoofs = 'SPOOFS',
  SpunOffFrom = 'SPUN_OFF_FROM',
  Version = 'VERSION'
}

/** Порядок сортировки релизов - начала дистрибуции */
export enum ReleaseOrderBy {
  /** Сортировка по типу, затем по стране */
  TypeAscCountryAscDateAsc = 'TYPE_ASC_COUNTRY_ASC_DATE_ASC'
}

/** Тип релиза */
export enum ReleaseType {
  Bluray = 'BLURAY',
  Cinema = 'CINEMA',
  Digital = 'DIGITAL',
  Dvd = 'DVD'
}

export type RemoveMovieFolderInput = {
  folderTypeId: Scalars['Long']['input'];
};

export type RenameMovieFolderInput = {
  /** Id типа папки */
  folderTypeId: Scalars['Long']['input'];
  /** Новое имя для папки */
  name: Scalars['String']['input'];
};

/** Порядок сортировки гонораров */
export enum SalaryOrderBy {
  AmountDesc = 'AMOUNT_DESC'
}

export enum ScannerType {
  None = 'none',
  Other = 'other',
  Smartpass = 'smartpass',
  Unknown = 'unknown'
}

/** Тип сущности для поиска */
export enum SearchItemType {
  Cinema = 'CINEMA',
  Movie = 'MOVIE',
  MovieList = 'MOVIE_LIST',
  Person = 'PERSON'
}

/** Тип фильма для поиска */
export enum SearchMovieType {
  Film = 'FILM',
  Series = 'SERIES'
}

/** Порядок сортировки сезонов */
export enum SeasonOrderBy {
  /** Сортировка по номеру сезона по возрастанию */
  NumberAsc = 'NUMBER_ASC'
}

export type SeasonsInSeriesFilterInput = {
  onlyOnline: Scalars['Boolean']['input'];
};

export enum ShowcaseAccessStatus {
  Allowed = 'ALLOWED',
  Denied = 'DENIED',
  SoftDenied = 'SOFT_DENIED'
}

export type SingleSelectFilterValueInput = {
  filterId: Scalars['String']['input'];
  value: Scalars['String']['input'];
};

export enum SiteOrderBy {
  IdAsc = 'ID_ASC',
  IdDesc = 'ID_DESC'
}

/** Тип пропускаемого фрагмента */
export enum SkippableFragmentType {
  Credits = 'CREDITS',
  Intro = 'INTRO',
  Recap = 'RECAP',
  Unknown = 'UNKNOWN'
}

/** Тип сортировки для саундтреков */
export enum SoundtrackOrderBy {
  WeightAsc = 'WEIGHT_ASC'
}

/** Запрос на добавление/удаление спортивного соревнования в любимые */
export type SportCompetitionLikeMutationInput = {
  competitionId: Scalars['String']['input'];
};

/** Запрос подписки/отписки на пуш-уведомление о начале спортивного события */
export type SportEventNotificationMutationInput = {
  sportEventId: Scalars['String']['input'];
};

/** Запрос на добавление/удаление команды в любимые */
export type SportTeamLikeMutationInput = {
  teamId: Scalars['String']['input'];
};

export enum StandardMutationStatus {
  Fail = 'FAIL',
  Success = 'SUCCESS'
}

export enum StreamType {
  Dash = 'DASH',
  Hls = 'HLS',
  Mss = 'MSS'
}

export enum StudioParticipationType {
  /** Студия дубляжа */
  Dubbing = 'DUBBING',
  /** Производство */
  Production = 'PRODUCTION',
  /** Спецэффекты */
  SpecialEffects = 'SPECIAL_EFFECTS'
}

/** Роль в семейной подписке */
export enum SubscriptionFamilyRole {
  /** Член семейной группы, в которой есть подписка */
  Child = 'CHILD',
  /** Пользователь не в семейной группе или подписка отсутствует в группе */
  None = 'NONE',
  /** Владелец подписки в семейной группе */
  Parent = 'PARENT',
  /** Неизвестная роль в семейной группе, в которой есть подписка */
  Unknown = 'UNKNOWN'
}

/** Тип сортировки для трейлеров */
export enum TrailerOrderBy {
  /** @deprecated Временная сортировка, чтобы перенести в конец списка встроенные трейлеры */
  EmbeddedLastMakeDateDesc = 'EMBEDDED_LAST_MAKE_DATE_DESC',
  IsMainMakeDateDesc = 'IS_MAIN_MAKE_DATE_DESC',
  MakeDateDesc = 'MAKE_DATE_DESC'
}

/** Тип тривии */
export enum TriviaType {
  Blooper = 'BLOOPER',
  Fact = 'FACT'
}

/** Тип тв-программы */
export enum TvProgramType {
  Movie = 'MOVIE',
  Series = 'SERIES',
  Show = 'SHOW',
  Sport = 'SPORT'
}

export enum Type {
  Absolute = 'ABSOLUTE',
  Percent = 'PERCENT'
}

export type UserKidSubProfileModifyInput = {
  avatarUrl: Scalars['String']['input'];
  birthday?: InputMaybe<Scalars['LocalDate']['input']>;
  displayName: Scalars['String']['input'];
  gender?: InputMaybe<Gender>;
  restrictions: UserProfileRestrictionInput;
};

/** Идентификатор профиля пользователя */
export type UserProfileIdInput = {
  /** Идентификатор в КП */
  kpId?: InputMaybe<Scalars['Long']['input']>;
  /** Идентификатор в ОТТ */
  ottId?: InputMaybe<Scalars['Long']['input']>;
  /** Идентификатор в паспорте */
  puid?: InputMaybe<Scalars['Long']['input']>;
};

export type UserProfileRestrictionInput = {
  ageRestriction?: InputMaybe<AgeRestriction>;
  ageRestrictionGroup?: InputMaybe<Scalars['Int']['input']>;
};

/** Тип профиля */
export enum UserProfileType {
  /** Профиль ребенка */
  ChildUserProfile = 'CHILD_USER_PROFILE',
  /** Детский саб профиль */
  UserKidSubProfile = 'USER_KID_SUB_PROFILE',
  /** Профиль взрослго */
  UserProfile = 'USER_PROFILE'
}

export type UserReviewCreateInputInput = {
  metadata: UserReviewCreateMetadataInput;
  movieId: Scalars['Long']['input'];
  text: Scalars['String']['input'];
  title: Scalars['String']['input'];
  type: UserReviewType;
};

export type UserReviewCreateMetadataInput = {
  csrfToken: Scalars['String']['input'];
  userCountryCookie: Scalars['String']['input'];
  voteDataCookie?: InputMaybe<Scalars['String']['input']>;
};

/** Тип сортировки пользовательских рецензий */
export enum UserReviewOrderBy {
  CreatedAtDesc = 'CREATED_AT_DESC',
  TopUsefulnessThenCreatedAtDesc = 'TOP_USEFULNESS_THEN_CREATED_AT_DESC',
  UsefulnessDesc = 'USEFULNESS_DESC'
}

/** Тип рецензии */
export enum UserReviewType {
  Negative = 'NEGATIVE',
  Neutral = 'NEUTRAL',
  Positive = 'POSITIVE'
}

/** Как пользователь оценил чужую пользовательскую рецензию */
export enum UserReviewUserVoting {
  Helpful = 'HELPFUL',
  NoVote = 'NO_VOTE',
  Unhelpful = 'UNHELPFUL'
}

export type UserReviewVoteInputInput = {
  reviewId: Scalars['Int']['input'];
};

export enum VideoCodec {
  Avc = 'AVC',
  Hevc = 'HEVC',
  Unknown = 'UNKNOWN',
  Vp9 = 'VP9'
}

/** Вариант просмотра фильма */
export enum ViewOptionCategory {
  Online = 'ONLINE',
  YandexPlus = 'YANDEX_PLUS',
  YandexPlusBelarus = 'YANDEX_PLUS_BELARUS',
  YandexPlusSuper = 'YANDEX_PLUS_SUPER',
  YandexPlusWithAmediateka = 'YANDEX_PLUS_WITH_AMEDIATEKA'
}

/** Фильтр по оценкам */
export type VoteFilterInput = {
  voteValue?: InputMaybe<Scalars['Int']['input']>;
};

/** Тип сортировки пользовательских оценок */
export enum VoteOrderBy {
  VotedAtDesc = 'VOTED_AT_DESC'
}

export type WatchLaterFilterInput = {
  purchasedType: WatchLaterPurchasedType;
};

export enum WatchLaterPurchasedType {
  /** Все доступные в OTT тайтлы */
  Any = 'ANY',
  /** Только доступные к просмотру пользователем тайтлы */
  Purchased = 'PURCHASED',
  /** Только недоступные к просмотру пользователем тайтлы */
  Unpurchased = 'UNPURCHASED'
}

export enum WatchNextType {
  Announce = 'ANNOUNCE',
  Default = 'DEFAULT',
  Editors = 'EDITORS',
  Franchise = 'FRANCHISE'
}

export type WatchParamsInputInput = {
  audioLanguage: Scalars['String']['input'];
  contentId: Scalars['String']['input'];
  subtitleLanguage?: InputMaybe<Scalars['String']['input']>;
};

/** Статус ограничения времени просмотра */
export enum WatchPeriodStatus {
  /** Время на просмотр истекло */
  Expired = 'EXPIRED',
  /** Платеж не совершен */
  NotPaid = 'NOT_PAID',
  /** Возврат платежа */
  Refunded = 'REFUNDED',
  /** Неограниченный */
  Unlimited = 'UNLIMITED',
  /** Ожидание окончания просмотра */
  WaitingEndWatching = 'WAITING_END_WATCHING',
  /** Ожидание начала просмотра */
  WaitingStartWatching = 'WAITING_START_WATCHING'
}

export enum WatchabilityStatus {
  Unwatchable = 'UNWATCHABLE',
  Watchable = 'WATCHABLE'
}

export type WatchableFilterInput = {
  anyDevice: Scalars['Boolean']['input'];
  anyRegion: Scalars['Boolean']['input'];
};

export enum WatchingOptionType {
  Free = 'FREE',
  Paid = 'PAID',
  PaidMultiple = 'PAID_MULTIPLE',
  Subscription = 'SUBSCRIPTION'
}

export enum WebClientPlatform {
  Desktop = 'DESKTOP',
  Touch = 'TOUCH'
}

export enum WeeklyDvdSalesOrderBy {
  DateAsc = 'DATE_ASC',
  DateDesc = 'DATE_DESC'
}

/** Фильтр на список аккаунтов */
export type YandexMultiAccountsFilterInput = {
  /** Вернуть текущий аккаунт пользователя */
  includeCurrentAccount?: InputMaybe<Scalars['Boolean']['input']>;
  /** Вернуть аккаунты пользователей входящие в семью текущего пользователя */
  includeCurrentFamilyMembers?: InputMaybe<Scalars['Boolean']['input']>;
};

/** Запрос на добавление трека в плейлист */
export type YandexMusicKpPlaylistAddInput = {
  timestamp?: InputMaybe<Scalars['Instant']['input']>;
  trackId: Scalars['String']['input'];
};

/** Запрос на удаление трека из плейлиста */
export type YandexMusicKpPlaylistRemoveInput = {
  timestamp?: InputMaybe<Scalars['Instant']['input']>;
  trackId: Scalars['String']['input'];
};

/** Коды причин отказа */
export enum YandexWalletRejectionReason {
  /** Отказано, т.к. на платформе не поддерживается 3DS */
  DisabledBy_3DsSettings = 'DISABLED_BY_3DS_SETTINGS',
  /** Отказано, т.к. ни одна из фичей кошелька не доступна */
  DisabledByFeatureToggles = 'DISABLED_BY_FEATURE_TOGGLES',
  /** Отказано, т.к. не доступно для региона и сервиса */
  NotAvailableForRegionAndService = 'NOT_AVAILABLE_FOR_REGION_AND_SERVICE',
  /** Не отказано */
  NotRejected = 'NOT_REJECTED'
}

/** Период */
export type YearsRangeInput = {
  /** Конец */
  end?: InputMaybe<Scalars['Int']['input']>;
  /** Начало */
  start?: InputMaybe<Scalars['Int']['input']>;
};
