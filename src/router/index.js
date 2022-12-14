import { createRouter, createWebHistory } from 'vue-router';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const routes = [
  {
    path: '/star-calendar/',
    component: () => import('../views/Home.vue'),
    meta: {
      requiresUnAuth: true,
    },
  },
  {
    path: '/star-calendar/dashboard',
    component: () => import('../views/Dashboard.vue'),
    meta: {
      requiresAuth: true,
    },
  },
];

const router = createRouter({
  history: createWebHistory(''),
  routes,
});

function getCurrentUser() {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
}

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresUnAuth)) {
    if (await getCurrentUser()) {
      next('/star-calendar/dashboard');
    } else {
      next();
    }
  } else if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      next('/star-calendar/');
    }
  } else {
    next();
  }
});

export default router;
