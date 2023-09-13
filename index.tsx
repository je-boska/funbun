import { Elysia, t } from 'elysia';
import { html } from '@elysiajs/html';

function page() {
  return (
    <html lang='en'>
      <head>
        <title>Fun with bun!</title>
        <script src='https://unpkg.com/htmx.org@1.9.5'></script>
      </head>
      <body>
        <form>
          <input name='test' id='test'></input>
          <input
            type='submit'
            hx-post='/clicked'
            hx-swap='outerHTML'
            hx-target='#target'
          >
            Submit
          </input>
        </form>
        <div id='target'>Target</div>
      </body>
    </html>
  );
}

const app = new Elysia()
  .use(html())
  .get('/', page)
  .post(
    '/clicked',
    ({ body }) => {
      return <div id='target'>{body.test}</div>;
    },
    {
      body: t.Object({
        test: t.String(),
      }),
    }
  )
  .listen(8080);

console.log(`Elysia is running on port ${app.server?.port}`);
