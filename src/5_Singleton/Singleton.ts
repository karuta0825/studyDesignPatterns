export default class Singleton {
  public static getInstance() {
    return this.singleton;
  }
  private static singleton: Singleton = new Singleton();
  private constructor() {
    console.log("シングルトンを生成しました");
  }
}
