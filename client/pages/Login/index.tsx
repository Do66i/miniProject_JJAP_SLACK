import useInput from '@hooks/useInput';
import React, { useCallback, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from '@pages/SignUp/styles';
import useSWR from 'swr';
import fetcher from '@utils/fetcher';

const LogIn = () => {
  const { data, error, mutate } = useSWR('http://localhost:3095/api/users', fetcher, { dedupingInterval: 100000 }); //로그인 후에 데이터를 전해줄 API
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [logInError, setLogInError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      navigate('/workspace/sleact/channel/일반');
      return;
    }
    // 로그인전일때 data=false(api문서 참고)니까 실행안되고 패스됨
    //로그인되면 if문에서 걸림 리턴값나옴
  }, [data]);

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
          mutate(response.data); // OPTIMISTIC UI
          console.log('로그인 성공띠', data);
        })
        .catch((err) => {
          console.log(data);
          console.log('ㅋ 루저', err.response.data);
        })
        .finally(() => {});
    },
    [email, password],
  );

  return (
    <div id="container">
      <Header>JJAP SLACK</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input autoComplete="false" type="email" id="email" value={email} onChange={onChangeEmail} />
          </div>
        </Label>
        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input autoComplete="false" type="password" id="password" value={password} onChange={onChangePassword} />
          </div>
          {logInError && <Error>이메일과 비밀번호 둘 중 하나 틀림 입.구.컷</Error>}
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
