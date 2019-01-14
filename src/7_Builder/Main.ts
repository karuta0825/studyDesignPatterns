import TextBuilder from "./TextBuilder";
import Director from "./Director";

(function Main() {
  const textBuilder: TextBuilder = new TextBuilder();
  const director: Director = new Director(textBuilder);
  director.construct();
  const result: string = textBuilder.getResult();
  console.log(result);
}())