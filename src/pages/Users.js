import axios from "axios";
import { useEffect, useState } from "react";

function Users() {

  // let counter = 0;

  // const timing = setInterval(() => {
  //   counter++; // Her 1 saniye 1 arttırdık.
  //   console.log('sayac', counter);
  // }, 1000);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    // sayfa load olduğunda çalışır
    // apidan veri çekme işlemlerini yaparız.
    console.log('users sayfasına ilk giriş');
    // ajax({success:(response) => (resolve, then), error:(err) => (reject,catch)})
    // localhost:3001/api/users
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        console.log('response', response);
        return response.json(); // veriyi json formatında deserialize et.
      }).then((data) => {
        console.log('data', data);
        setUsers(data); // users property ekran için güncelledik.
      }).catch(err => {
        console.log('err', err);
      });

      // api get,post,put,delete istekleri yapmak için kullanılan bir paket.

      axios.get('https://jsonplaceholder.typicode.com/users').then(response => {
        console.log('response-from-axios', response);
      })
      
      axios.post('https://jsonplaceholder.typicode.com/users', {id:1,name:'can'}).then(response => {
        console.log('post', response)
      })

      // react uygulamalarında veri çekerken fetch yerine daha basit olması ve daha çok özelliğe sahip olmasından dolayı axios denilen bir paket kullanıyoruz.



    return () => { // clean up function.
      // bunu yapmazsak uygulamamız performansız olur.
      // sayfa değişmediğinden yaptığımız işlem arka planda hala devam ediyor.
      // domadan çıkış
      // clearInterval(timing); // timing işlemini sonlandır.
      console.log('users sayfasından çıkış');
      alert('sayfadan çıkış yapılıyor');
    }

  }, [])

  // js kodları

  // html kodlarımız
  return <>{
    users.map((item) => {
      return <div key={item.id}>{item.name}</div>
    })
  }</>

}

export default Users;