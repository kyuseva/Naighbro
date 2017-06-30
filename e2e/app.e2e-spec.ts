import { NBPage } from './app.po';

describe('nb App', () => {
  let page: NBPage;

  beforeEach(() => {
    page = new NBPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
