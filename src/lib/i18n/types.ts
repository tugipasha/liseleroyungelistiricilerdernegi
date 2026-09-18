export type Locale = "tr" | "en" | "de";

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
  short: string;
}

export const SUPPORTED_LOCALES: LocaleInfo[] = [
  {
    code: "tr",
    name: "Türkçe",
    nativeName: "Türkçe",
    flag: "🇹🇷",
    short: "TR",
  },
  {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇬🇧",
    short: "EN",
  },
  {
    code: "de",
    name: "Deutsch",
    nativeName: "Deutsch",
    flag: "🇩🇪",
    short: "DE",
  },
];

export const DEFAULT_LOCALE: Locale = "tr";

export type TranslationDictionary = {
  nav: {
    home: string;
    about: string;
    team: string;
    events: string;
    showcase: string;
    news: string;
    contact: string;
    volunteer: string;
  };
  header: {
    searchAria: string;
    searchTitle: string;
    searchPlaceholder: string;
    selectLanguage: string;
    menuToggleAria: string;
  };
  footer: {
    subtitle: string;
    explore: string;
    logd: string;
    contact: string;
    rights: string;
    privacyPolicy: string;
    kvkk: string;
    cookies: string;
    cookiePreferences: string;
    country: string;
    topluluk: string;
    projeler: string;
    oyunlar: string;
    etkinlikler: string;
    haberler: string;
    hakkimizda: string;
    ekibimiz: string;
    kariyer: string;
    iletisim: string;
  };
  home: {
    heroEyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroDescription: string;
    heroPrimaryCta: string;
    heroSecondaryCta: string;
    whatWeDoEyebrow: string;
    whatWeDoTitle: string;
    aboutUsLink: string;
    featureCommunityTitle: string;
    featureCommunityText: string;
    featureProjectsTitle: string;
    featureProjectsText: string;
    featureEventsTitle: string;
    featureEventsText: string;
    featureResourcesTitle: string;
    featureResourcesText: string;
    featureOpportunitiesTitle: string;
    featureOpportunitiesText: string;
    featuredProjectsEyebrow: string;
    featuredProjectsTitle: string;
    allProjectsLink: string;
    upcomingEventsEyebrow: string;
    upcomingEventsTitle: string;
    allEventsLink: string;
    noEventsTitle: string;
    noEventsDesc: string;
    joinDiscordBtn: string;
    eventsPageBtn: string;
    communityEyebrow: string;
    communityTitleLine1: string;
    communityTitleLine2: string;
    communityDesc: string;
    communityJoinBtn: string;
    communityMapLoading: string;
    communityMapLocation: string;
    newsletterTitleLine1: string;
    newsletterTitleLine2: string;
    newsletterDesc: string;
    newsletterEmailPlaceholder: string;
    newsletterSubmitBtn: string;
  };
  partners: {
    badge: string;
    title: string;
    desc: string;
    allPartners: string;
    official: string;
    education: string;
    industry: string;
    media: string;
  };
  search: {
    title: string;
    description: string;
    inputPlaceholder: string;
    categoriesAll: string;
    categoryPage: string;
    categoryGame: string;
    categoryEvent: string;
    categoryNews: string;
    categoryTeam: string;
    noResultsTitle: string;
    noResultsDesc: string;
    keyboardNavigate: string;
    keyboardSelect: string;
    keyboardClose: string;
  };
  common: {
    viewAll: string;
    learnMore: string;
    details: string;
    close: string;
    loading: string;
    notFoundTitle: string;
    notFoundDesc: string;
    goHome: string;
  };
  about: {
    pageTitle: string;
    pageDescription: string;
    breadcrumbsHome: string;
    breadcrumbsCurrent: string;
    heroEyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroTitleLine3: string;
    heroDescription: string;
    heroJoinCommunity: string;
    heroExploreEvents: string;
    whoWeAreEyebrow: string;
    whoWeAreTitle: string;
    missionTitle: string;
    missionDesc: string;
    visionTitle: string;
    visionDesc: string;
    valuesTitle: string;
    valueOpenToLearning: string;
    valueCreatingTogether: string;
    valueRespectInclusivity: string;
    valueContinuousGrowth: string;
    valueSharingSupport: string;
    aboutLogdTitle: string;
    aboutLogdDesc: string;
    aboutLogdJourneyLink: string;
    journeyEyebrow: string;
    journeyTitleLine1: string;
    journeyTitleLine2: string;
    journeyDesc: string;
    timeline2025Year: string;
    timeline2025Title: string;
    timeline2025Desc: string;
    timeline2026EarlyYear: string;
    timeline2026EarlyTitle: string;
    timeline2026EarlyDesc: string;
    timeline2026NowYear: string;
    timeline2026NowTitle: string;
    timeline2026NowDesc: string;
    timelineFutureYear: string;
    timelineFutureTitle: string;
    timelineFutureDesc: string;
    producingTogetherEyebrow: string;
    producingTogetherTitleLine1: string;
    producingTogetherTitleLine2: string;
    meetOurTeamLink: string;
    valStudentFocusedTitle: string;
    valStudentFocusedDesc: string;
    valVolunteerBasedTitle: string;
    valVolunteerBasedDesc: string;
    valContinuousSupportTitle: string;
    valContinuousSupportDesc: string;
    valInclusiveCommunityTitle: string;
    valInclusiveCommunityDesc: string;
    partnersEyebrow: string;
    partnersTitle: string;
    teamEyebrow: string;
    teamTitle: string;
    teamDesc: string;
    teamCta: string;
  };
  contact: {
    pageTitle: string;
    pageDescription: string;
    breadcrumbsHome: string;
    breadcrumbsCurrent: string;
    heroEyebrow: string;
    heroTitleLine1: string;
    heroTitleLine2: string;
    heroDescription: string;
    formTitle: string;
    formDesc: string;
    formSuccessTitle: string;
    formSuccessDesc: string;
    formNewMessage: string;
    fieldName: string;
    placeholderName: string;
    fieldEmail: string;
    placeholderEmail: string;
    fieldSubject: string;
    selectSubject: string;
    subjectGeneral: string;
    subjectCollaboration: string;
    subjectCommunity: string;
    subjectEvents: string;
    subjectOther: string;
    fieldMessage: string;
    placeholderMessage: string;
    kvkkLink: string;
    kvkkSuffix: string;
    sendButton: string;
    newsletterTitle: string;
    newsletterDesc: string;
    newsletterPlaceholder: string;
    newsletterButton: string;
    newsletterSuccess: string;
  };
  cookieConsent: {
    bannerAria: string;
    bannerTitle: string;
    bannerText: string;
    privacyLink: string;
    kvkkLink: string;
    cookieLink: string;
    customize: string;
    rejectAll: string;
    acceptAll: string;
    floatingButtonTitle: string;
    dialogTitle: string;
    dialogDesc: string;
    necessaryTitle: string;
    alwaysActive: string;
    necessaryDesc: string;
    functionalTitle: string;
    functionalDesc: string;
    analyticsTitle: string;
    analyticsDesc: string;
    marketingTitle: string;
    marketingDesc: string;
    cancel: string;
    savePreferences: string;
  };
  legal: {
    breadcrumbsHome: string;
    breadcrumbsSection: string;
    lastUpdatedPrefix: string;
    tocTitle: string;
    cookiePrefTitle: string;
    cookiePrefDesc: string;
    customizePref: string;
    printPdf: string;
    legalContactTitle: string;
    legalContactDesc: string;
    tabPrivacy: string;
    tabKvkk: string;
    tabCookie: string;
  };
  [key: string]: unknown;
};
