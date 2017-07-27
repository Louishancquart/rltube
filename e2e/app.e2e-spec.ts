import { RltubePage } from './app.po';

describe('rltube App', () => {
  let page: RltubePage;

  beforeEach(() => {
    page = new RltubePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
