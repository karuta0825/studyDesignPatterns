### Chain of Responsibility(責任のたらい回し)

- 概略

1. Abstract の Support クラス(support, resolve)で共通化
2. support メソッドは template パターンになっていること
3. 具象クラスで resolve を実装する
4. setNext()でたらい回しを実現していること
   それぞれの具象クラスが、次を知っている関係
   全体を一望できる人はいない
