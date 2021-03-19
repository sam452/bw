import { ApiPipePipe } from './api-pipe.pipe';

describe('ApiPipePipe', () => {
  it('create an instance', () => {
    const pipe = new ApiPipePipe();
    expect(pipe).toBeTruthy();
  });
});
