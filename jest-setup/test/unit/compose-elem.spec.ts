import { bootstrap } from "aurelia-bootstrapper";
import { ComponentTester, StageComponent } from "aurelia-testing";
import { ComposeElem } from "compose-elem";

describe("Compose-Elem", () => {
  let component: ComponentTester<ComposeElem>;

  beforeEach(() => {
    component = StageComponent
      .withResources("compose-elem")
      .inView(`<compose-elem></compose-elem>`)
      .manuallyHandleLifecycle();
  });

  afterEach(() => {
    component.dispose();
  });

  it("test unit", async () => {
    await component.create(bootstrap);
    await component.bind(undefined);
    component.viewModel.activate("data");
    await component.attached();
    
    const element = component.element;
    console.log(element.outerHTML);
    expect(element.querySelector("div").textContent).toContain("stuff = data");

    await component.detached();
    await component.unbind();
  });
});
