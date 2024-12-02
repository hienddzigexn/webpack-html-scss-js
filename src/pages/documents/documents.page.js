import Heading from "@shared/hero-heading/hero-heading.module";
import "./documents.page.scss";

class Documents {
  components = [{ module: Heading }];

  init() {
    console.log("Documents page");
    this.initComponents();
  }

  initComponents() {
    this.components.forEach((c) => {
      c.module.init();
    }, this);
  }
}

export default Documents;
