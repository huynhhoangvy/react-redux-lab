import React from 'react';
import { Provider, connect } from "react-redux";
import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import { counterReducer } from "./redux/reducer";
import { createStore } from "redux";

function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

const ConnectWrappedAppComponent = connect()(App)

const store = createStore(counterReducer)

const ProviderWrappedAppComponent = () => {
  return (
    <Provider store={store}>
      <ConnectWrappedAppComponent />
    </Provider>
  )
}

export default ProviderWrappedAppComponent;
