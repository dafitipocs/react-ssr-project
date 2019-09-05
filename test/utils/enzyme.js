import enzyme from 'enzyme';
import AdapterReact16 from 'enzyme-adapter-react-16';

enzyme.configure({
  adapter: new AdapterReact16()
});

export default enzyme;
