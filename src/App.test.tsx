import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App />', () => {

    it('should display correctly', () => {
        let wrapper = shallow(<App />);
    
        expect(wrapper.length).toEqual(1);
        
    });
})
