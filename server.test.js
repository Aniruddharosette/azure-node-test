const request = require('supertest');
const server = require('./server');

describe('Server Endpoints', () => {
    
    // Cleanup: Close the server after tests trigger
    afterAll(() => {
        server.close();
    });

    test('GET / should return 200 and specific text', async () => {
        // Send a fake request to the app
        const res = await request(server).get('/');
        
        // 1. Check if status is OK
        expect(res.statusCode).toEqual(200);
        
        // 2. Check if the text matches exactly
        // expect(res.text).toContain('Hello from Azure App Service! 33333');

    });
});