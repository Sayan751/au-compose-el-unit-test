import { bindable, autoinject } from "aurelia-framework"

@autoinject
export class ComposeElem {
  @bindable public stuff: any;
  public divReference: HTMLDivElement;

  constructor(private element: Element) { }

  activate(model) {
    this.stuff = model
  }

  attached() {
    // console.log("dev-server compose-elem ref check", this.divReference)
  }
}
