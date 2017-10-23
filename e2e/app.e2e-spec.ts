import { TodoappPage } from './app.po';

describe('todoapp App', () => {
  let page: TodoappPage;

  beforeEach(() => {
    page = new TodoappPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
