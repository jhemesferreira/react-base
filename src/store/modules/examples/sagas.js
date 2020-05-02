import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());
  } catch {
    toast.error('Deu erro.');
    yield put(actions.clicaBotaoFailure);
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);

/*
-fork(), realiza uma operação não bloqueante com a função passada
-take(), pausa as operações até receber uma redux action
-race(), executa Effects simultaneamente, e cancela todos quando um efeito retorna seu resultado
-call(), executa uma função. Se essa função retornar uma Promise, ele irá pausar a Saga até a Promise ser resolvida
-put(), despacha uma redux action
-select(), executa uma função seletora que irá buscar dados do estado global do Redux
-takeLatest(), irá executar as operações recebidas, porém, irá retornar apenas o valor da última. Se a mesma operação for enviada mais de uma vez, elas serão ignoradas,
-takeEvery(), irá retornar os valores de todas as operações recebidas
*/
