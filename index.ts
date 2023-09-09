const server = Bun.serve({
  port: 3000,
  fetch(request) {
    return new Response('Pineapples have enzymes!');
  },
});

console.log(`Server running on port ${server.port}`);
