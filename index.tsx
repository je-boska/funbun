import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';

const name = 'Bun';

function page() {
  return (
    <html lang='en'>
      <head>
        <title>Fun with bun!</title>
      </head>
      <body>
        <h1>This is a test of {name}</h1>
      </body>
    </html>
  );
}

const app = new Elysia().use(html()).get('/', page).listen(8080);

console.log(`Elysia is running on port ${app.server?.port}`);
