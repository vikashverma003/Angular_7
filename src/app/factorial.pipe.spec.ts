import { FactorialPipe } from './factorial.pipe';

describe('FactorialPipe', () => {
  it('create an instance', () => {
    const pipe = new FactorialPipe();
    expect(pipe).toBeTruthy();
  });
});
