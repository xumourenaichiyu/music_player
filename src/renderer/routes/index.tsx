/*
 * @Author: xumourenaichiyu
 * @Date: 2023-04-11 21:23:42
 * @LastEditTime: 2023-04-11 21:48:53
 */
import {createBrowserRouter, Navigate} from 'react-router-dom';
import Main from '../pages/main';
const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: <Navigate replace to='/main'/>
  },
  {
    path: '/main',
    element: <Main />
  }
])

export default router;