/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Events = lazyLoad(
  () => import('./index'),
  module => module.default,
);
