import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import Home from '../pages/home';
import SignIn from '../pages/signin';
import NotFound from '../pages/notFound';

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/signin" element={<SignIn />} />
    </>
  )
);
