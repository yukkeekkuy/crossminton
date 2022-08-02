import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'jpncross',
  apiKey: process.env.API_KEY!,
});
