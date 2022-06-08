import useInput from '@hooks/useInput';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from '@pages/SignUp/styles';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const LogIn = () => {
  const { data, error, mutate } = useSWR('http://localhost:3100/api/users', fetcher, { dedupingInterval: 100000 }); //로그인 후에 데이터를 전해줄 API
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [lonInError, setLogInError] = useState(false);

  const navigate = useNavigate();

  const onSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      setLogInError(false);
      axios
        .post(
          '/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          mutate(response.data, false); // OPTIMISTIC UI
          console.log('로그인 성공띠', data);
          console.log('mutate data', response.data);
        })
        .catch((err) => {
          console.log(data);
          console.log('ㅋ 루저', err.response.data);
        })
        .finally(() => {});
    },
    [email, password],
  );

  if (data || data === undefined) {
    navigate('/workspace/channel');
  } // 로그인전일때 data=false(api문서 참고)니까 실행안되고 패스됨
  //로그인되면 if문에서 걸림 리턴값나옴

  return (
    <div id="container">
      <Header>JJAP SLACK</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" value={password} onChange={onChangePassword} />
          </div>
          {lonInError && <Error>이메일과 비밀번호 둘 중 하나 틀림 입.구.컷</Error>}
        </Label>
        <Button type="submit">로그인</Button>
      </Form>
      <LinkContainer>
        아직 식구가 아닌가봐요?
        <Link to="/signup">회원가입 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default LogIn;
