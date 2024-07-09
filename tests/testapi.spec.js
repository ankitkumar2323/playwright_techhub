// import { test, expect } from '@playwright/test';
// import { rest } from 'playwright';

// const BASE_URI = 'https://reqres.in/';

// test('Validate User Details JSON Schema', async ({ page }) => {
//     // Perform GET request
//     const response = await rest.get(`${BASE_URI}api/users`);

//     // Log response body
//     console.log('GET Response:\n', response.body());

//     // Verify status code
//     expect(response.status()).toBe(200);

//     // Verify response attributes
//     expect(response.body()['data']['id']).not.toBeNull();
//     expect(response.body()['data']['email']).not.toBeNull();

//     // Validate JSON Schema
//     const schema = require('./user-info.json'); // Assuming user-info.json is in the same directory
//     expect(response.body()).toMatchObject(schema);
// });