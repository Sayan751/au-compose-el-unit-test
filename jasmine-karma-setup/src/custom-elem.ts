import { bindable, autoinject } from "aurelia-framework"

@autoinject
export class CustomElem {
  @bindable public stuff: any;
  private divReference: HTMLDivElement;

  constructor(private element: Element) { }

  attached() {
    console.log("dev-server custom-elem ref check", this.divReference)
  }
}
