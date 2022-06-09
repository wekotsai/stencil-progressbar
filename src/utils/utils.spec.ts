import { format } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined, undefined, undefined)).toEqual('');
  });
});
