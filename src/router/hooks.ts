import Store from '@/store';
import { Route } from 'vue-router';

export function beforeHook(to: Route, from: Route, next: any): void {
  if (to.matched.some(route => route.meta.requiresAuth)) {
    Store.dispatch('load')
      .then((dest) => {
        // Store actions can also choose to redirect
        if (dest) return next(dest);

        next();
      })
      .catch((err: { code: number, message: string }) => {
        console.error(err);
        next({ name: 'issue-occurred' });
      });
  } else {
    next();
  }
}
