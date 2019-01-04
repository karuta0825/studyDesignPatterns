import { Factory, Product } from "./framework";
import { IDCardFactory } from "./idcard";

(function Main() {
  const factory: Factory = new IDCardFactory();
  const card1: Product = factory.create("あいこ");
  const card2: Product = factory.create("かいこ");
  const card3: Product = factory.create("さしこ");
  card1.use();
  card2.use();
  card3.use();
})();
