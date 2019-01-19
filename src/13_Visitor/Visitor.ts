import Directory from "./Directory";
import File from "./File";

export default abstract class Visitor {
  public abstract visit(entry: Directory | File): void;
}
