import { BrowserRouter, Routes, Route, Navigate, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import DefaultPage from './DefaultPage';
import SocialPage from './social/SocialPage';
import { mockUsers } from './data';
import { UserProvider, useUser } from './contexts/UserContext';

const Home = () => <DefaultPage />;
const Assets = () => <DefaultPage />;
const Transactions = () => <DefaultPage />;
const Explore = () => <DefaultPage />;
const Derivatives = () => <DefaultPage />;
const Social = () => {
    const { profileId } = useParams();
    const { user: currentUser } = useUser();
    
    if (!currentUser) {
        return <Navigate to="/" replace />;
    }

    if (profileId) {
        const profileUser = mockUsers.find(user => user.id === profileId);
        if (profileUser) {
            return <SocialPage key={profileId} user={profileUser} />;
        }
    }

    return <SocialPage key="current-user" user={currentUser} />;
};
const More = () => <DefaultPage />;

function App() {
    return (
        <UserProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="assets" element={<Assets />} />
                        <Route path="transactions" element={<Transactions />} />
                        <Route path="explore" element={<Explore />} />
                        <Route path="explore-future" element={<Derivatives />} />
                        <Route path="social" element={<Social />} />
                        <Route path="social/profile/:profileId" element={<Social />} />
                        <Route path="more" element={<More />} />
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </UserProvider>
    );
}

export default App;
