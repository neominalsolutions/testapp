import React from 'react'

function Promises() {

  // client bana apidan users getireceğine dair söz ver
  // api sana söz apiden veri gelecek.
  // api kaynaklı ekstrem durumlar oluyor. 
  // api sana sözdü ama bizden kaynaklı olmayan bazı durumlardan ötürü sözü tutamadım.
  // söz tutulamaz ise apiden reject dönüyor
  // söz tutulursa apiden resolve dönüyor.

  // client da sözün tutulup tutulma durumunu anlamak için then cacth ifadeleri kullanıyor.
  // söz tutulduğunda then ile tutulan söze vaade ait bilgileri alıyor
  // söz tutulmaz ise catch sözün neden tutulmadığına dair hatayı kullanıcıya gösteriyor.

  // apide yazılan kod
  // server => hizmet cevap veren
  // sunucu
  // API
  var p = new Promise((resolve, reject) => {
    resolve('söz tutuldu')
  });

  var p1 = new Promise((resolve, reject) => {
    reject('sözü tutamadım')
  });

  // client da yazılan kod.
  // istemci => hizmet talebinde bulunan
  // react
  p.then(response => {
    console.log('response1', response); // bu kod then düşer.
  }).catch(err => {
    console.log('err1', err);
  });

  p1.then(response => { // catch düşecek
    console.log('response2', response);
  }).catch(err => {
    console.log('err3', err);
  });


}

export default Promises;
