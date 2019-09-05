/* eslint import/prefer-default-export: "off" */

import { hotjar } from 'react-hotjar';

export function initialize(hjId, hjSv) {
  hotjar.initialize(hjId, hjSv);
}
