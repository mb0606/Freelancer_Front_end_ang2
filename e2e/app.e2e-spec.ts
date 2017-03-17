import { Ang2FEPage } from './app.po';

describe('ang2-fe App', () => {
  let page: Ang2FEPage;

  beforeEach(() => {
    page = new Ang2FEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
