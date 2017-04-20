import { NickPage } from './app.po';

describe('nick App', () => {
  let page: NickPage;

  beforeEach(() => {
    page = new NickPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
