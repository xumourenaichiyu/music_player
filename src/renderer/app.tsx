import { RouterProvider } from "react-router-dom";
import router from "./routes";
import './assets/styles/style.less';
const App = () => {
  return <RouterProvider router={router}></RouterProvider>
};
export default App;