import Heading from "@shared/hero-heading/hero-heading.module";
import "./home.page.scss";

class Home {

  components = [{ module: Heading }];

  init() {
    console.log("Home page");
    this.initComponents();
  }

  initComponents() {
    this.components.forEach((c) => {
      c.module.init();
    }, this);
  }
}

export default Home;