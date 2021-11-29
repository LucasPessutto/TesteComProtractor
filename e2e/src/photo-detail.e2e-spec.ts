import { PhotoDetail } from './photo-detail.po';
import { browser, logging } from 'protractor';

describe('Photo Detail Page', () => {
  let photoDetailPage: PhotoDetail = null;

  beforeEach(async () => {
    photoDetailPage = new PhotoDetail();
    await photoDetailPage.navigateTo(14);
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });

  it('Should be on photo detail page', async () => {
    const title = await photoDetailPage.getWindowTitle();
    expect(title).toEqual(PhotoDetail.PAGE_TITLE);
  });

  // it('Should publish a comment', async () => {
  //   const initialCommentListSize = await photoDetailPage.getCommentListSize();
  //   await photoDetailPage.fillComment('Some comment');
  //   await photoDetailPage.publishComment();
  //   const currentCommentListSize = await photoDetailPage.getCommentListSize();
  //   expect(currentCommentListSize).toBeGreaterThan(initialCommentListSize);
  // });
});
