import { SobaBankPage } from './app.po';

describe('soba-bank App', function() {
  let page: SobaBankPage;

  beforeEach(() => {
    page = new SobaBankPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
