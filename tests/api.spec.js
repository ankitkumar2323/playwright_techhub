import { test, expect } from '@playwright/test';
import axios from 'axios';
import Ajv from 'ajv';
import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const BASE_URI = "https://reqres.in/";

// Load user-info.json using readFileSync
const userInfoPath = join(__dirname, '../user-info.json');
const userInfo = JSON.parse(readFileSync(userInfoPath, 'utf8'));

test('Validate User Details JSON Schema', async ({}) => {
  try {
    const response = await axios.get(`${BASE_URI}api/users`, {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    });

    expect(response.status).toBe(200);

    const data = response.data.data;
    expect(data).toBeTruthy();
    expect(Array.isArray(data)).toBe(true);

    data.forEach(user => {
      expect(user.id).toBeTruthy();
      expect(user.email).toBeTruthy();
    });

    const ajv = new Ajv({ strict: false }); 
    // Allow unknown keywords
    const validate = ajv.compile(userInfo);
    const valid = validate(response.data);

    expect(valid).toBe(true);

  } catch (error) {
    console.error("Test failed:", error);
    throw error;
  }
});
