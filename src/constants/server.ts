export * from './shared';// export all `constants/shared`
import { isBrowser } from './utils/is-server';
// import { checkIfExistOrThrow } from './utils/check-if-exists-or-thrown';

// Ensure this file is not imported in client/browser code
if (isBrowser()) {
  throw new Error(`
  Code meant to be executed in the browser is importing "constant/server.ts".
  This must not happens.
  Check all import of your code.  Follow the import tree if necessary.
  `);
}

// Example of a constant
// export const OAUTH_CUSTOM_LOGIN_PASSWORD_PLAIN = process.env.OAUTH_CUSTOM_LOGIN_PASSWORD_PLAIN as string;
// checkIfExistOrThrow(OAUTH_CUSTOM_LOGIN_PASSWORD_PLAIN, `Missing or invalid "OAUTH_CUSTOM_LOGIN_PASSWORD_PLAIN"`);