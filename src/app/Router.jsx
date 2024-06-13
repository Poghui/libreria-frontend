import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableComponent from '../Components/TableComponent.jsx';
import Layout from '../Components/Layout/Layout.jsx';
const Router = () => (
  <BrowserRouter>
    <Layout>
      <Routes>
        <Route index element={<TableComponent />} />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </Layout>
  </BrowserRouter>
);

export default Router;