import { DynamicModuleLazyLoadingPage } from './app.po';

describe('dynamic-module-lazy-loading App', () => {
  let page: DynamicModuleLazyLoadingPage;

  beforeEach(() => {
    page = new DynamicModuleLazyLoadingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to dml!');
  });
});
