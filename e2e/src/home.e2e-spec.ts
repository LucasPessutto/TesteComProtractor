import { HomePage } from './home.po';
import { browser, by, element, protractor, logging } from 'protractor';
import { PhotoDetail } from './photo-detail.po';

describe('Home Page', () => {
  let homePage: HomePage;
  let photoDetail: PhotoDetail;

  beforeEach(async () => {
    homePage = new HomePage();
    photoDetail = new PhotoDetail();
    await homePage.navigateTo();
  });

  afterEach(async () => {
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(
      jasmine.objectContaining({
        level: logging.Level.SEVERE,
      } as logging.Entry)
    );
  });

  it('Should navigate to user profile', async () => {
    const title = await homePage.getWindowTitle();
    expect(title).toEqual('Timeline');
  });

  it('Should display a list of photos', async () => {
    const photoListSize = await element.all(by.css('.photo')).count();
    expect(photoListSize).toBeGreaterThan(0);
  });

  it('Should navigate to photo detail when photo navigation is triggered', async () => {
    await element.all(by.css('.photo')).first().sendKeys(protractor.Key.ENTER);
    const title = await photoDetail.getWindowTitle();
    expect(title).toEqual('Photo detail');
  });

  it('Should list one item when filtering by word "farol"', async () => {
    await element(by.css('ap-search input[type=search]')).sendKeys('farol');
    const photoListSize = await element.all(by.css('.photo')).count();
    expect(photoListSize).toBe(1);
  });
});
