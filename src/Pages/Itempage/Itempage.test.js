import { shallow, configure } from 'enzyme';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Itempage from "./Itempage";

configure({ adapter: new Adapter() });


describe("Testing Itempage", () => {
it("matches snapshot", () => {
    const itemObject = [{
        name: "Fan",
        company: "Bajaj",
        id: "100",
        type: "Electronics",
    }];
    const fetchItemsMock = jest.fn();
    const wrapper = shallow(<Itempage
    items={itemObject}
    fetchItems={fetchItemsMock}
    />);
    expect(wrapper).toMatchSnapshot();
});
});
//testconstant
//Use describe
//const tree = component.debug();
//expect(tree).toMatchSnapshot();