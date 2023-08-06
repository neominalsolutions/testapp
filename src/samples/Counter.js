
import { useState } from "react";

function Counter(params) {

  // class component
  // function component

  // state tanımı
  // component içerisinde bir değişiklik olduğu durumda kullandığımız component o anki durumunu ekrana yansıttığımız yapı.

  let c = 0;

  const [counter, setCounter] = useState(0); // initial value
  // property tanımı yaptık.
  // function ve değişkenler return dışında tanımlanır
  const arttir = () => { // function arrow function, daha çok kullanılır
    setCounter(counter + 1); // sayac değişkeni 1 arttır
    // setCounter counter değerini değiştirir.
    c++;
  }
  function azalt() {
    setCounter(counter - 1); // sayacı 1 azalt
    c--;
  }
  return (
    <div className="App">
      <div>Sayac: {counter}</div>
      <div>Sayac 2: {c}</div>
      {/* <button onclick="artir()"></button> */}
      <button onClick={arttir}>Arttır</button>
      <button onClick={azalt}>Azalt</button>
    </div>

  );
}

export default Counter;