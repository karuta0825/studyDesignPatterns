### 概要

クラスには 2 つの役割がある

1. 機能クラス
2. 実装クラス

```uml
@startuml

note top of Display: 機能クラス

class Display {
  - DisplayImpl impl
  + void open()
  + void print()
  + void close()
  + void display()
}

note bottom of DisplayImpl: 実装クラス
abstract class DisplayImpl {
  {abstract} void rawOpen()
  {abstract} void rawClose()
  {abstract} void rawPrint()
}

class CountDisplay {
  + void multiDisplay()
}
class StringDisplayImpl {
  + void rawOpen()
  + void rawClose()
  + void rawPrint()
}

Display o--> DisplayImpl
Display <|- CountDisplay
DisplayImpl <|- StringDisplayImpl

@enduml
```

### 機能クラス

継承によってメソッドクラスを追加するクラス。  
Display - CountDisplay クラス  
CountDisplay は、Display を継承してるのでスーパクラスのメソッドを全て利用できるのに加えて、  
自身で定義したメソッドも利用することができる。

### 実装クラス

抽象クラスの継承やインターフェースによって、決めれた役割を保証するクラス  
DisplayImpl - StringDisplayImpl クラス  
StringDisplayImpl は、DisplayImpl クラスで定義された 3 つのメソッドを必ず実装しなければならない。  
この共通化された API を保証するのが実装クラスの役割。

### まとめ

たとえば,Windows, Linux, Mac など OS ごとの共通の API を用意したい場合、実装クラスを利用する(Implementor)。  
Abstarct で共通 API を定義し、各 OS のサブクラスで API 実装する(ConcreteImplementor)。  
それを利用するのが、Abstraction クラスで、それに追加メソッドがあれば RefinedAbstraction クラスがいきる

### 思うところ

今回、Abstraction クラスで、open, close, print クラスを委譲したクラスからそのまま呼び出すことをしている。  
正直再度  これらを実装が面倒だなという気持ちがあるよ。継承で利用したい気持ちもあるが、これでは機能と実装を分ける意味がないということになる。

### 追加問題
