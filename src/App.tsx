import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import DefaultPage from './DefaultPage';
import SocialPage from './social/SocialPage';

// Placeholder components for each route
const Home = () => <DefaultPage />;
const Assets = () => <DefaultPage />;
const Transactions = () => <DefaultPage />;
const Explore = () => <DefaultPage />;
const Derivatives = () => <DefaultPage />;
const Taxes = () => <DefaultPage />;
const Social = () => <SocialPage />;
const More = () => <DefaultPage />;

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="assets" element={<Assets />} />
                    <Route path="transactions" element={<Transactions />} />
                    <Route path="explore" element={<Explore />} />
                    <Route path="explore-future" element={<Derivatives />} />
                    <Route path="taxes" element={<Taxes />} />
                    <Route path="social" element={<Social />} />
                    <Route path="more" element={<More />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
