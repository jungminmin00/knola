import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App';
import Content from './pages/Content';
import ProductList from './pages/ProductList';
import Product from './pages/Product';
import WishList from './pages/WishList';
import NotFound from './pages/NotFound';
import Brand from './pages/Brand';


export default function Main(){
    return(
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path='/' element={<Content />} />
                    <Route path='list'>
                        <Route index element={<ProductList />} />
                        <Route path=':couseSlug' element={<Product />} />
                    </Route>
                    <Route path='wishlist' element={<WishList />} />
                    <Route path='brand' element={<Brand />}/>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </App>
        </BrowserRouter>
    );
}