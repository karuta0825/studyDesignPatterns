import IObserver from "./IObserver";
import NumberGenerator from "./NumberGenerator";

export default class GraphObserver implements IObserver {
  public update(generator: NumberGenerator) {
    process.stdout.write("GraphObserver:");
    for (let i = 0; i < generator.getNumber(); i += 1) {
      process.stdout.write("*");
    }
    console.log();
  }
}
