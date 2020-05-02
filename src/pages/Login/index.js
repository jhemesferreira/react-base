import React from 'react';

import { useDispatch } from 'react-redux';

import { Title } from './styled';
import { Container } from '../../styles/GlobalStyles';
import * as exampleActions from '../../store/modules/examples/actions';

// import axios from '../../services/axios';

export default function Login() {
  // React.useEffect(() => {
  //   async function getData() {
  //     const response = await axios.get('/students');
  //     const { data } = response;
  //     console.log(data);
  //   }

  //   getData();
  // }, []);

  const dispatch = useDispatch();
  function handleClick(e) {
    e.preventDefault();
    dispatch(exampleActions.clicaBotaoRequest());
  }

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oiii</small>
      </Title>
      <p>Jhemes Ferreira</p>
      <button type="button" onClick={handleClick}>
        {' '}
      </button>
    </Container>
  );
}
