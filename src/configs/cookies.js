/* eslint import/no-mutable-exports: off */

import { FORCE_SSL } from '.';

let config = { httpOnly: true, sameSite: 'strict' };

if (FORCE_SSL === 'true') {
  config = { httpOnly: true, sameSite: 'strict', secure: true };
}

export default config;
