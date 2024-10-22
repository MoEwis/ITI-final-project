import "./App.css";
import ProductForm from "./components/ProductForm";
import ProductInfo from "./components/ProductInfo";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import SharedLayout from "./Layout/SharedLayout";
import Products from "./components/Products";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:id" element={<ProductInfo />} />
          <Route path="products/:id/edit" element={<ProductForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </>
    )
  );

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
