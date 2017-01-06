import { RestodoPage } from './app.po';

describe('restodo App', function() {
  let page: RestodoPage;

  beforeEach(() => {
    page = new RestodoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
