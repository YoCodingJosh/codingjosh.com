interface Env {
  ENVIRONMENT: string;
}

// Set CORS to all /api responses
export const onRequest: PagesFunction<Env> = async (context) => {
  const response = await context.next();

  const origin = context.env.ENVIRONMENT === 'development' ? '*' : 'https://codingjosh.com';

  response.headers.set('Access-Control-Allow-Origin', origin);
  response.headers.set('Access-Control-Max-Age', '600');
  response.headers.set('X-Powered-By', 'The Power of Friendship');

  return response;
};
