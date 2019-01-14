import Directory from './Directory';
import File from './File';

export default abstract class Visitor {
  public abstract visit(directory: Directory): void;
  public abstract visit(file: File): void;
}