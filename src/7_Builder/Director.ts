import Builder from './Builder';
import IBuilder from './IBuilder';

export default class Direcor {
  private builder: IBuilder;
  constructor(builder: IBuilder) {
    this.builder = builder
  }

  public construct(): void {
    this.builder.makeTitle('Greeting');
    this.builder.makeString('朝から昼にかけて');
    this.builder.makeItems(['おはようございます', 'こんにちは']);
    this.builder.makeString('夜に');
    this.builder.makeItems(['こんにちは', 'おやすみなさい', 'さようなら']);
    this.builder.close();
  }
}