import NumberGenerator from "./NumberGenerator";

export default interface IObserver {
  update(generator: NumberGenerator): void;
}
