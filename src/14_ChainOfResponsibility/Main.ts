import LimitSupport from "./LimitSupport";
import NoSupport from "./NoSupport";
import OddSupport from "./OddSupport";
import SpecialSupport from "./SpecialSupport";
import Support from "./Support";
import Trouble from "./Trouble";

(function Main() {
  const alice: Support = new NoSupport("Alice");
  const bob: Support = new LimitSupport("Bob", 100);
  const charlie: Support = new SpecialSupport("Charlie", 429);
  const diana: Support = new LimitSupport("Diana", 200);
  const elmo: Support = new OddSupport("Elmo");
  const fred: Support = new LimitSupport("Fred", 300);

  alice
    .setNext(bob)
    .setNext(charlie)
    .setNext(diana)
    .setNext(elmo)
    .setNext(fred);

  for (let i = 0; i < 500; i += 33) {
    alice.support(new Trouble(i));
  }
})();
