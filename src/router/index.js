import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Note from "../views/Note.vue";
import AddNote from "../views/AddNote.vue";
import EditNote from "../views/EditNote.vue";
// Vue.use(Router)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  // {
  //   path: "/about",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue"),
  // },
  {
    path: "/notes/:id",
    name: "Note",
    component: Note,
  },
  {
    path: "/notes/addNote",
    name: "AddNote",
    component: AddNote,
  },
  {
    path: "/notes/addNote",
    name: "AddNote",
    component: AddNote,
  },
  {
    path: "/notes/edit/:id",
    name: "EditNote",
    component: EditNote,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
