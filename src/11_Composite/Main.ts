import Directory from "./Directory";
import File from "./File";

(function Main() {
  const file1 = new File("file1", 100);
  const file2 = new File("file2", 200);
  const file3 = new File("file3", 300);
  const file4 = new File("file4", 400);
  const dir1 = new Directory("dir1");
  const dir2 = new Directory("dir2");
  dir1.add(file1);
  dir1.add(file2);
  dir2.add(dir1);
  dir2.add(file4);

  file1.printList();
  dir2.printList();
})();
