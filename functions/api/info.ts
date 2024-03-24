interface Env {
}

export const onRequestGet: PagesFunction<Env> = async (context) => {
  const cf = context.request.cf;

  return new Response(JSON.stringify(cf), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};
