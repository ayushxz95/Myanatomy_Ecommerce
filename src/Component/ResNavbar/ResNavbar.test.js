import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import ResNavbar from "./ResNavbar";

configure({ adapter: new Adapter() });


describe("Testing ResNavbar Component", () => {
  it("Matching ResNavbar's snapshot", () => {
    const component = shallow(
      <ResNavbar />
    );
    expect(component).toMatchSnapshot();
  });
});