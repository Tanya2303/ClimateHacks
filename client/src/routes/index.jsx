import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Market from '../pages/Market';
import Carbon from '../pages/Carbon';
import DailyTips from '../pages/DailyTips';

function Index() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/market" element={<Market />} />
                <Route path="/carbon" element={<Carbon />} />
                <Route path="/dailytips" element={<DailyTips />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Index;
