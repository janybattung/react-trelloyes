import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import renderer from 'react-test-renderer'; //snapshot test
// import { render } from '@testing-library/react';


// this is the test case
it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
  
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card />, div);
  
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

it('renders the UI as expected', () => {
const tree = renderer
.create(<Card title="title" content="content"/>)
.toJSON();
expect(tree).toMatchSnapshot();  
});
 