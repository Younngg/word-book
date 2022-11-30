import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from './../store/hooks';
import { loginUser, onAuthChange, saveUser } from './../store/user';

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onLogin = (e: any) => {
    dispatch(loginUser(e.currentTarget.textContent));
    navigate('/topics');
  };

  useEffect(() => {
    dispatch(
      onAuthChange((user: any) => {
        user && navigate('/topics');
        user && dispatch(saveUser(user.uid));
      })
    );
  });

  return (
    <div>
      <button onClick={onLogin}>Google</button>
    </div>
  );
};

export default Login;
