import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../store/user';
import AuthService from './../service/authService';
import { useAppDispatch } from './../store/hooks';

const authService = new AuthService();

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogin = (e: any) => {
    authService.login(e.currentTarget.textContent).then((data) => {
      navigate('/topics');
      dispatch(loginUser(data.user.uid));
    });
  };

  useEffect(() => {
    authService.onAuthChange((user: any) => {
      user && navigate('/topics');
      user && dispatch(loginUser(user.id));
    });
  });

  return (
    <div>
      <button onClick={onLogin}>Google</button>
    </div>
  );
};

export default Login;
