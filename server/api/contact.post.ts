export default defineEventHandler(async (event) => {
  // TODO: implement the submit contact form logic

  // step 0: verify csrf token? how to do that with nuxt-security?

  // step 1: check if the contact form is enabled

  // step 2: validate the turnstile token
  const tokenValidationUrl = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';

  // step 3: validate any other form fields

  // step 4: profit?

  return 'Hello Nitro';
});
