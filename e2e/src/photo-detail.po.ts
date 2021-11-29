import { browser, by, element } from 'protractor';
import { protractor } from 'protractor/built/ptor';

export class PhotoDetail {
  static PAGE_TITLE = 'Photo detail';

  navigateTo(id: number) {
    return browser.get(`${browser.baseUrl}/#/p/${id}`);
  }

  getWindowTitle() {
    return browser.getTitle();
  }

  fillComment(text: string) {
    return element(by.css('textarea.form-control')).sendKeys(text);
  }

  publishComment() {
    return element(by.css('button[type=submit]')).click();
  }

  getCommentListSize() {
    return element.all(by.css('ap-photo-comments li')).count();
  }
}
