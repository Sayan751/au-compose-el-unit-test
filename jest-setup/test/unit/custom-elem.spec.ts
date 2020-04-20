import { bootstrap } from "aurelia-bootstrapper";
import { ComponentTester, StageComponent } from "aurelia-testing";
import { CustomElem } from "custom-elem";

describe("Custom-Elem", () => {
  let component: ComponentTester<CustomElem>;

  beforeEach(() => {
    component = StageComponent.withResources<CustomElem>("custom-elem")
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
