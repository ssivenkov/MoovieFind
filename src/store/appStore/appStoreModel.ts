import { types } from 'mobx-state-tree';

export const AppStoreModel = types
  .model('AppStore')
  .props({
    appInitialized: types.boolean,
    contentInitialized: types.boolean,
    language: types.string,
    modalText: types.string,
    searchRequest: types.string,
  })
  .actions((self) => ({
    setAppInitialized(appInitialized: boolean) {
      self.appInitialized = appInitialized;
    },

    setContentInitialized(contentInitialized: boolean) {
      self.contentInitialized = contentInitialized;
    },

    setLanguage(language: string) {
      self.language = language;
    },

    setModalText(modalText: string) {
      self.modalText = modalText;
    },

    setSearchRequest(searchRequest: string) {
      self.searchRequest = searchRequest;
    },
  }));
