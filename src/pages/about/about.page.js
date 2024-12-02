import Heading from "@shared/hero-heading/hero-heading.module";
import "./about.page.scss";
import { requireInput } from "@utils/validate";

class About {
  components = [{ module: Heading }];

  init() {
    console.log("About page");
    this.initComponents();
    this.bindEvents();
  }

  initComponents() {
    this.components.forEach((c) => {
      c.module.init();
    }, this);
  }
  bindEvents() {
    console.log(requireInput());
  }
}

export default About;