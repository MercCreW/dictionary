import { createBrowserRouter } from 'react-router-dom';
import App from '../../App'
import StarredWord from '../StarredWord/StarredWord'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "starred", element: <StarredWord /> }
    ]
  }
]);

export default router;