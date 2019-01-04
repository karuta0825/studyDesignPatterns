import IPrint from "./IPrint";
import PrintBanner from "./PrintBanner";

(function Main() {
  const pr: IPrint = new PrintBanner("愛が勝つ");
  pr.printStrong();
  pr.printWeak();
})();
