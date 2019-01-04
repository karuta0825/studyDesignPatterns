import AbstractDisplay from "./AbstractDisplay";
import CharDisplay from "./CharDisplay";
import StringDisplay from "./StringDisplay";

(function Main() {
  const d1: AbstractDisplay = new CharDisplay("H");
  const d2: AbstractDisplay = new StringDisplay("Hello world");
  d1.display();
  d2.display();
})();
