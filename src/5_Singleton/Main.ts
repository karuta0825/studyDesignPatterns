import Singleton from "./Singleton";

(function Main() {
  console.log("Start");
  const s1: Singleton = Singleton.getInstance();
  const s2: Singleton = Singleton.getInstance();

  if (s1 === s2) {
    console.log("s1,s2は同じオブジェクトです");
  } else {
    console.log("s1,s2は同じオブジェクトではありません");
  }
  console.log("End");
})();
