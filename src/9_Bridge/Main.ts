import CountDisplay from "./CountDisplay";
import Display from "./Display";
import StringDisplayImpl from "./StringDisplayImpl";
(function Main() {
  const d1: Display = new Display(new StringDisplayImpl("Hello Japan."));
  const d2: Display = new Display(new StringDisplayImpl("Hello, World."));
  const d3: CountDisplay = new CountDisplay(
    new StringDisplayImpl("hellow Universe"),
  );

  d1.display();
  d2.display();
  d3.display();
  d3.multiDisplay(5);
})();
