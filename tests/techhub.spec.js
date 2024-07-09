// Add imports
import { test, expect } from '@playwright/test';
// Use the request context to create a test
test ("API POST Request", async ({request}) => {

// Send a POST request along with request body & store response in a variable
const response = await request.post("https://reqres.in/api/users", {
data: {
"name": "James",
"job": "Tester"
}
});
// Verify response status code is 201
expect(response.status()).toBe(201);
// Check if the response text contains the name "James"
const text = await response.text();
expect(text).toContain('James');
// Print the response in console
console.log(await response.json());
});