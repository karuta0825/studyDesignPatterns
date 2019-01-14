import Visitor from './Visitor';

export default interface IElement {
  accept(v: Visitor): void;
}