import { SomePageModule } from './some-page.module';

describe('SomePageModule', () => {
  let somePageModule: SomePageModule;

  beforeEach(() => {
    somePageModule = new SomePageModule();
  });

  it('should create an instance', () => {
    expect(somePageModule).toBeTruthy();
  });
});
