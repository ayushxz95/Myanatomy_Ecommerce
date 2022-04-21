import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Navbar from "./Navbar";

configure({ adapter: new Adapter() });


describe("Testing Navbar Component", () => {
  it("Matching Navbar's snapshot", () => {
    const component = shallow(
      <Navbar />
    );
    expect(component).toMatchSnapshot();
  });
});