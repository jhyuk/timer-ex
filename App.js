import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Timer from "./components/Timer"
import reducer from "./reducer";
import { createStore } from "redux";
import { Provider } from "react-redux";


//리듀서와 앱의 state를 복사해야한다.
//그리고 복사한 state를 컴포넌트로 보내준다.


// import한 reducer를 가진 store를 생성한다.
let store = createStore(reducer);

// console.log(store.getState())

export default class App extends React.Component {
  render() {
    return (
      //Provider에 위의 store를 넣어주면 Timer는 복사할수 있는 store가 생긴것이다.
      //Provider의 역할은 스토어를 복사해서 자식컴포넌트에게 주는 것이다.
      <Provider store={store}>
        <Timer />
      </Provider>
    )
  }
}
