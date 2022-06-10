import React from 'react';
import loadable from '@loadable/component';
import { Routes, Route } from 'react-router-dom';

const LogIn = loadable(() => import('@pages/Login'));
const SignUp = loadable(() => import('@pages/SignUp'));
const Channel = loadable(() => import('@pages/Workspace'));

const App = () => {
  return (
    <Routes>
      <Route path="/*" element={<LogIn />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/workspace/channel" element={<Channel />} />
    </Routes>
  );
};

export default App;
