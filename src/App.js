import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { UserProvider } from './components/pages/UserContext';
import UserInitializer from './components/pages/userInitializer';
import NavigationBar from './components/common/navigation';
// import Chatbot from './components/Chatbot';
import OrderedItemPage from './components/pages/OrderedItemPage';
import Menu from './components/pages/menu';
import HomePage from './components/pages/home';
import PartyHall from './components/pages/partyHall';
import PartyHallForm from './components/pages/partyhallForm';
import ContactPage from './components/pages/contact';
import Login from './components/pages/login';

import './App.css';

const App = () => {
  return (
    <UserProvider>
      <BrowserRouter>
        <UserInitializer>
          <NavigationBar />
          {/* <Chatbot /> */}
          <div className="container">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/components/home" element={<HomePage />} />
              <Route path="/components/pages/menu" element={<Menu />} />
              <Route path="/components/pages/OrderedItemPage" element={<OrderedItemPage />} />
              <Route path="/components/pages/partyHall" element={<PartyHall />} />
              <Route path="/components/pages/partyHallForm" element={<PartyHallForm />} />
              <Route path="/components/pages/contact" element={<ContactPage />} />
              <Route path="/components/pages/login" element={<Login />} />
            </Routes>
          </div>
        </UserInitializer>
      </BrowserRouter>
    </UserProvider>
  );
};

export default App;
