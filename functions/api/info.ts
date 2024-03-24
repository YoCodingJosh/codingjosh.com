export const onRequestPost: PagesFunction = async (context) => {
  return new Response(JSON.stringify(context.request), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
