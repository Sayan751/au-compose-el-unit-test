import { bootstrap } from "aurelia-bootstrapper"
import { StageComponent, ComponentTester } from "aurelia-testing"
import { PLATFORM } from 'aurelia-pal';
import { CustomElem } from "custom-elem";

describe("Custom-Elem", () => {
  let component: ComponentTester<CustomElem>;

  beforeEach(() => {
    component = StageComponent.withResources<CustomElem>(PLATFORM.moduleName("custom-elem"))
      .inView(`<custom-elem stuff.bind="model"></custom-elem>`)
      .boundTo({
        model: "data",
      });
  })

  afterEach(() => {
    component.dispose()
  });

  it("test unit", async () => {
    await component.create(bootstrap)
    const element = component.element;
    console.log(element.outerHTML);
    expect(element.querySelector("div").textContent).toContain("stuff = data");
  });
})
