import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Card from "./Card";
import {mockItem} from "./typeConstants"

configure({ adapter: new Adapter() });
// let component;

describe("Testing Card Component", () => {
  it("Matching Card's snapshot", () => {
    const deleteItemmock = jest.fn();
    // console component what shallow will return and mount will return
    // naming of snapshot
    const component = shallow(
      <Card
        deleteItem={deleteItemmock}
        id={mockItem.id}
        name={mockItem.name}
        type={mockItem.type}
        company={mockItem.company}
        key={mockItem.key}
      />
    );
    //console.log(component);
    expect(component).toMatchSnapshot();
  });
  it("Name is present in props", () => {
    const deleteItemmock = jest.fn();
    const component = shallow(
      <Card
        deleteItem={deleteItemmock}
        id={mockItem.id}
        name={mockItem.name}
        type={mockItem.type}
        company={mockItem.company}
        key={mockItem.key}
      
      />
    );
    const name_prop = component.find(".card-title")
    expect(name_prop.text()).toBe("Fan");
  });
  it("Company is present in props", () => {
    const deleteItemmock = jest.fn();
    const component = shallow(
      <Card
        deleteItem={deleteItemmock}
        id={mockItem.id}
        name={mockItem.name}
        type={mockItem.type}
        company={mockItem.company}
        key={mockItem.key}
  
      />
    );
    const Companyname_prop = component.find(".company-name")
    expect(Companyname_prop.text()).toBe("Havells");
  });
  it("Button is Clickable", () => {
    const deleteItemmock = jest.fn();
    const component = shallow(
      <Card
        deleteItem={deleteItemmock}
        id={mockItem.id}
        name={mockItem.name}
        type={mockItem.type}
        company={mockItem.company}
        key={mockItem.key}
      />
    );
    const instance = component.instance();
    console.log(instance); // spyOn and mocking diff
    jest.spyOn(instance, "handleDelete"); 
    // jest.spyOn(object, methodName).mockImplementation(() => customImplementation)
    const deleteButton = component.find("#btn-card33");
    deleteButton.simulate("click");
    expect(deleteItemmock).toHaveBeenCalledTimes(1);
  });
});
