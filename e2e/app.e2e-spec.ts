import { AngularProjectBasePage } from './app.po';

describe('angular-project-base App', () => {
  let page: AngularProjectBasePage;

  beforeEach(() => {
    page = new AngularProjectBasePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
