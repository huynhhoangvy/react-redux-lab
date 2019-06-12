import React from "react";
import { mount, shallow } from "enzyme";
import Counter from "./Counter";
import configureMockStore from "redux-mock-store";

import { incrementCounter } from '../redux/action';
import { counterReducer } from '../redux/reducer';
import { createStore } from "redux";
import { Provider } from "react-redux";

import App from "../App";



describe('<Counter />', () => {
    describe('render()', () => {
     
        test('renders a <h1>', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.find('h1').exists()).toBe(true);
      });

      test('renders a <button>', () => {
        const wrapper = shallow(<Counter />);
        expect(wrapper.find('button').exists()).toBe(true);
      });
    });

    describe('Counter redux pieces', () => {
        let store;
      
        beforeEach(() => {
          const mockStore = configureMockStore();
          store = mockStore({});
        });
      
        it('store can receive an increment counter as action', () => {
          store.dispatch(incrementCounter());
          expect(store.getActions()).toEqual(
            [
              { type: 'INCREMENT_COUNTER' },
            ]);
        })
      });

      it('applies the counter reducer for increment correctly', () => {
        const initialState = { count: 0 };
        const action = {type: 'INCREMENT_COUNTER'};
        const afterState = counterReducer(initialState, action);
        expect(afterState).toEqual({ count: 1 });
      });

      describe('Counter integration test', () => {
        let store;
      
        beforeEach(() => {
          store = createStore(counterReducer);
        });
      
        it('increments the counter text when the button is clicked', () => {
          const wrapper = mount(<Provider store={store}><App /></Provider>);
          wrapper.find('button').simulate('click');
          wrapper.update();
          expect(wrapper.find('h1').text()).toEqual('1');
          wrapper.find('button').simulate('click');
          wrapper.update();
          expect(wrapper.find('h1').text()).toEqual('2');
        })
      })
  });