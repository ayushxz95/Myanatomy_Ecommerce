import { shallow, configure } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import Alert from "./Alert";
import {mockItem} from "./typeConstants"

configure({ adapter: new Adapter() });


describe("Testing Alert Component", () => {
  it("Matching Alert's snapshot", () => {
    const handleClickmock = jest.fn();
    const onSubmitmock = jest.fn();
    const onAddSubmitmock = jest.fn();
    const component = shallow(
      <Alert
      state={mockItem.state}
      id={mockItem.id}
      type={mockItem.type}
      statetype={mockItem.type}
      Alertmessage={mockItem.Alertmessage}
      handleClick={handleClickmock}
      color={mockItem.color}
      submit={onSubmitmock}
      AddSubmit={onAddSubmitmock}
      />
    );
    expect(component).toMatchSnapshot();
  });
  it("Button is Clickable", () => {
    const handleClickmock = jest.fn();
    const onSubmitmock = jest.fn();
    const onAddSubmitmock = jest.fn();
    const updateItemmock = jest.fn()
    const component = shallow(
      <Alert
      state={mockItem.state}
      id={mockItem.id}
      type={mockItem.type}
      statetype={mockItem.type}
      Alertmessage={mockItem.Alertmessage}
      handleClick={handleClickmock}
      color={mockItem.color}
      submit={onSubmitmock}
      AddSubmit={onAddSubmitmock}
      />
    );
    const instance = component.instance();
    console.log(instance);
    jest.spyOn(instance, "onSubmit"); 
    const updateButton = component.find("#btn-alert");
    updateButton.simulate("click");
    expect(updateItemmock).toHaveBeenCalledTimes(1);
  });
});