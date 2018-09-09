import { EarthquakeModule } from './earthquake.module';

describe('EarthquakeModule', () => {
  let earthquakeModule: EarthquakeModule;

  beforeEach(() => {
    earthquakeModule = new EarthquakeModule();
  });

  it('should create an instance', () => {
    expect(earthquakeModule).toBeTruthy();
  });
});
