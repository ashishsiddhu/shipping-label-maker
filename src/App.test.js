import { render, screen } from '@testing-library/react';
import App from './App';
import {shallow} from 'enzyme';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

it("should contains wizard element",()=>{
  const wrapper = shallow(<App />);
  expect(wrapper.find("Wizard").exists()).toBe(true);    
})
