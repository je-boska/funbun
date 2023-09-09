const server = Bun.serve({
  port: 3000,
  fetch(req) {
    const url = new URL(req.url);
    const params = new URLSearchParams(url.searchParams);
    if (params.get('message') === 'hello') return new Response('Hi there!');
    return new Response('Pineapples have enzymes!');
  },
});

console.log(`Server running on port ${server.port}`);
