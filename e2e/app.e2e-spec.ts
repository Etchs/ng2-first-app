import { Ng2FirstAppPage } from './app.po';

describe('ng2-first-app App', function() {
  let page: Ng2FirstAppPage;

  beforeEach(() => {
    page = new Ng2FirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
