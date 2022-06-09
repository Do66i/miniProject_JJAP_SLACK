import axios from 'axios';
import React, { FC, useCallback, useEffect } from 'react';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';
import { useNavigate } from 'react-router';

const Workspace: FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const { data, error, mutate } = useSWR('http://localhost:3100/api/users', fetcher);
  const navigate = useNavigate();

  const onLogout = useCallback(() => {
    axios
      .post('/api/users/logout', null, {
        withCredentials: true,
      })
      .then(() => {
        console.log('로그아웃 성공 !', data);
        mutate(false, false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (!data) {
      navigate('/login');
    }
  }, [data]);

  return (
    <div>
      <button onClick={onLogout}>로그아웃</button>
      {children}
    </div>
  );
};

export default Workspace;
