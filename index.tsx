import { Elysia } from 'elysia';
import { html } from '@elysiajs/html';

const name = 'Bun';

function page() {
  return (
    <html lang='en'>
      <head>
        <title>Fun with bun!</title>
        <script src='https://unpkg.com/htmx.org@1.9.5'></script>
      </head>
      <body>
        <h1>This is a test of {name}</h1>
        <button hx-post='/clicked' hx-swap='outerHTML'>
          Click this
        </button>
      </body>
    </html>
  );
}

const app = new Elysia()
  .use(html())
  .get('/', page)
  .post('/clicked', () => <div>I'm from the server!</div>)
  .listen(8080);

console.log(`Elysia is running on port ${app.server?.port}`);
