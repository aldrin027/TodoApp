import React from 'react'
import Todo from './Todo';
import { shallow } from 'enzyme';

let wrapper;

describe('<Todo />', () => {

    it('should display todo', () => {
        wrapper = shallow(<Todo />);

        expect(wrapper.length).toEqual(1);
    });

    
})
