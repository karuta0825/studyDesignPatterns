import DigitObserver from "./DigitObserver";
import GraphObserver from "./GraphObserver";
import RandomNumberGenerator from "./RandomNumberGenerator";

(function Main() {
  const generator = new RandomNumberGenerator();
  const observer1 = new DigitObserver();
  const observer2 = new GraphObserver();
  generator.addObserver(observer1);
  generator.addObserver(observer2);
  generator.execute();
})();
