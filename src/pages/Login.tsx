import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthService from './../service/authService';

const authService = new AuthService();

const Login = () => {
  const navigate = useNavigate();

  const goToMain = (userId: any) => {
    navigate('/topics', { state: { id: userId } });
  };

  const onLogin = (e: any) => {
    authService
      .login(e.currentTarget.textContent)
      .then((data) => goToMain(data.user.uid));
  };

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      user && goToMain(user.id);
    });
  });

  return (
    <div>
      <button onClick={onLogin}>Google</button>
    </div>
  );
};

export default Login;
