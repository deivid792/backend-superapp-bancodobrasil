import request from 'supertest';
import server from '../../server';

describe('Testing API Express', () => {
  it('Must respond pong on the /ping route', async () => {
    const res = await request(server).get('/ping');

    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ pong:true });
  });
});
