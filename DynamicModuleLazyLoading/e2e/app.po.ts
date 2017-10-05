import { browser, by, element } from 'protractor';

export class DynamicModuleLazyLoadingPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dml-root h1')).getText();
  }
}
