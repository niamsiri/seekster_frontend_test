import Home from './views/Home';
import Request from './views/Request';
import Service from './views/Service';

export const routes = [
  {
    path: "/",
    name: "Home",
    component: <Home />
  },
  {
    path: "/request",
    name: "Request",
    component: <Request />
  },
  {
    path: "/service/:id",
    name: "Service",
    component: <Service />
  },
]