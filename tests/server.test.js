const request = require('supertest');
const server = require('../src/index');

describe('Server', () => {
  it('it should start the server', async () => {
    const res = await request(server).get('/api/status');

    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('status');
  });
});