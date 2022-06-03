import React, { useCallback, useState, useRef } from 'react';
import { Success, Form, Error, Label, Input, LinkContainer, Button, Header } from './styles';
import { Link } from 'react-router-dom';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [missmatchError, setMissmatchError] = useState(false);

  const Inputref = useRef() as React.MutableRefObject<HTMLInputElement>;

  const onChangeEmail = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []); // useCallback을 써야 성능최적화 실현가능

  const onChangeNickname = useCallback((e: any) => {
    setNickname(e.target.value);
  }, []);

  const onChangePassword = useCallback(
    (e: any) => {
      setPassword(e.target.value);
      setMissmatchError(e.target.value !== passwordCheck);
    },
    [passwordCheck], //함수 바깥에서 선언한 친구는 써도됨 (변하지 않는 값은 쓰지않아도됨 ex> setPassword)
  );

  const onChangePasswordCheck = useCallback(
    (e: any) => {
      setPasswordCheck(e.target.value);
      setMissmatchError(e.target.value !== password);
    },
    [password],
  );

  const onSubmit = useCallback(
    (e: any) => {
      if (email.length < 1) {
        e.preventDefault();
        Inputref.current.focus();
        return;
      } else {
        e.preventDefault();
        console.log('------------------로그인 확인', email, nickname, password, passwordCheck);
        if (!missmatchError) {
          console.log('에러따위 없소 ! 서버로 회원가입가기 전송해도 될듯하오');
        }
      }
    },
    [email, nickname, password, passwordCheck, missmatchError],
  );

  return (
    <div id="container">
      <Header>JJAP SLACK</Header>
      <Form onSubmit={onSubmit}>
        <Label id="email-label">
          <span>이메일 주소</span>
          <div>
            <Input type="email" id="email" value={email} onChange={onChangeEmail} ref={Inputref} />
          </div>
        </Label>

        <Label id="nickname-label">
          <span>별명</span>
          <div>
            <Input type="text" id="nickname" value={nickname} onChange={onChangeNickname} />
          </div>
        </Label>

        <Label id="password-label">
          <span>비밀번호</span>
          <div>
            <Input type="password" id="password" value={password} onChange={onChangePassword} />
          </div>
        </Label>

        <Label id="password-check-label">
          <span>비밀번호 확인</span>
          <div>
            <Input type="password" id="password-check" value={passwordCheck} onChange={onChangePasswordCheck} />
          </div>

          {missmatchError && <Error>비밀번호가 일치하지 않습니다</Error>}
          {!nickname && <Error>닉네임을 입력해주세요</Error>}
          {/* {signUpError && <Error>{signUpError}</Error>}
          {signUpSuccess && <Success>환영합니다 ! 로그인 해주세요</Success>} */}
        </Label>
        <Button type="submit">회원가입</Button>
      </Form>
      <LinkContainer>
        이미 저희 식구인가요 ? 🐘
        <Link to="/login">로그인 하러가기</Link>
      </LinkContainer>
    </div>
  );
};

export default SignUp;
