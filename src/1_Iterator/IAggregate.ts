import IIterator from "./IIterator";

export default interface IAggregate {
  iterator(): IIterator;
}
