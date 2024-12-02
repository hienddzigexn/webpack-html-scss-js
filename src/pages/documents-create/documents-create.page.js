import Heading from "@shared/hero-heading/hero-heading.module";
import "./documents-create.page.scss";

class DocumentsCreate {
  components = [{ module: Heading }];

  init() {
    console.log("DocumentsCreate page");
    this.initComponents();
  }

  initComponents() {
    this.components.forEach((c) => {
      c.module.init();
    }, this);
  }
}

export default DocumentsCreate;
