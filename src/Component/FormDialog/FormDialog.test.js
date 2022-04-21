import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import FormDialog from "./FormDialog";
import {mockItem} from "./typeConstants"

configure({ adapter: new Adapter() });


describe("Testing FormDialog Component", () => {
  it("Matching FormDialog's snapshot", () => {
    const component = shallow(
      <FormDialog
              message={mockItem.message}
              buttonmessage={mockItem.buttonmessage}
              type={mockItem.type}
              company={mockItem.company}
              name={mockItem.name}
              id={mockItem.id}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it("check for name field", () => {
    const component = shallow(
      <FormDialog
              message={mockItem.message}
              buttonmessage={mockItem.buttonmessage}
              type={mockItem.type}
              company={mockItem.company}
              name={mockItem.name}
              id={mockItem.id}
      />
    );
    expect(component.state("name")).toEqual(mockItem.name);
  });
  it("check for company field", () => {
    const component = shallow(
      <FormDialog
              message={mockItem.message}
              buttonmessage={mockItem.buttonmessage}
              type={mockItem.type}
              company={mockItem.company}
              name={mockItem.name}
              id={mockItem.id}
      />
    );
    expect(component.state("company")).toEqual(mockItem.company);
  });
  it("check for type field", () => {
    const component = shallow(
      <FormDialog
              message={mockItem.message}
              buttonmessage={mockItem.buttonmessage}
              type={mockItem.type}
              company={mockItem.company}
              name={mockItem.name}
              id={mockItem.id}
      />
    );
    expect(component.state("type")).toEqual(mockItem.type);
  });
  it("check for name field after changing", () => {
    const component = shallow(
      <FormDialog
              message={mockItem.message}
              buttonmessage={mockItem.buttonmessage}
              type={mockItem.type}
              company={mockItem.company}
              name={mockItem.name}
              id={mockItem.id}
      />
    );
    component.setState({name: "Cooler"})
    expect(component.state("name")).toEqual("Cooler");
  });
  it("check for company field after changing", () => {
    const component = shallow(
      <FormDialog
              message={mockItem.message}
              buttonmessage={mockItem.buttonmessage}
              type={mockItem.type}
              company={mockItem.company}
              name={mockItem.name}
              id={mockItem.id}
      />
    );
    component.setState({company: "Havells"})
    expect(component.state("company")).toEqual("Havells");
  });
  it("check for type field after changing", () => {
    const component = shallow(
      <FormDialog
              message={mockItem.message}
              buttonmessage={mockItem.buttonmessage}
              type={mockItem.type}
              company={mockItem.company}
              name={mockItem.name}
              id={mockItem.id}
      />
    );
    component.setState({type: "Electronics"})
    expect(component.state("type")).toEqual("Electronics");
  });
});