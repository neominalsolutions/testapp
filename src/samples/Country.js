// country component

import { useState } from "react";

function Country() {

  // Türkiye 
  // İstanbul
  // Beşiktaş
  // Kadıköy
  // Ankara
  // Kızılay
  // Çankaya

  const countries = [
    {
      name: 'Türkiye',
      cities: [
        {
          name: 'istanbul',
          states: [
            { name: 'Beşiktaş' },
            { name: 'Kadıköy' }
          ]
        },
        {
          name: 'ankara',
          states: [
            { name: 'kızılay' },
            { name: 'çankaya' }
          ]
        }
      ]

    },
    {
      name: 'Litvanya',
      cities: [
        {
          name: 'Vilnus',
          states: [
            { name: 'Trakai' },
          ]
        },
        {
          name: 'Kaunas',
          states: [
            { name: 'Dainava' },
          ]
        }
      ]
    }
  ]

  const [selectedCountry, setCountry] = useState('-1');
  // seçim yapılan ülke değeri elimizde
  const countrySelect = (event) => {
    const secilen = event.target.value; // JS deki formatın aynısı
    const secilenObje = countries.find(x => x.name == secilen);
    console.log('secilenObje', secilenObje);
    setCountry(secilenObje); // değer değiştirme işlemi için set function kullanırız.
  }

  const [selectedCity, setCity] = useState('-1');
  const citySelect = (event) => {
    const secilenSehir = event.target.value;
    const secilenObje = selectedCountry.cities.find(x => x.name == secilenSehir); // states şehirin ilçelerini yakaladık

    console.log('secilenObje', secilenObje);

    setCity(secilenObje);
  }

  // react da <> element </> şeklinde boş bir ayraç var tüm componentler bu boş ayraç ile sarılmalıdır. bu ayraç tasımı bozmaz. bu ayraca fragment ismi verilir.
  return (
    <>
      <div>Seçilen Ülke:{selectedCountry.name}</div>
      <select defaultValue={'-1'} onChange={countrySelect}>
        <option value={'-1'} disabled={true} >Ülke Seçiniz</option>
        {/* map arayüze foreach ile veri basmamızı sağlıyor. */}
        {countries.map((item, index) => {
          return <option value={item.name} key={index}>{item.name}</option>
        })}
      </select>
      <br />
      {/* {selectedCountry != "-1" ? <div>adssds</div> : <></>} */}
      {selectedCountry.cities &&
        <select defaultValue={'-1'} onChange={citySelect}>
          <option value={'-1'} disabled={true}>Şehir Seçiniz</option>
          {
            selectedCountry.cities.map((item, index) => {
              return <option key={index} value={item.name}>{item.name}</option>
            })
          }
        </select>
      }
      <br />
      {
        selectedCity.states && <select defaultValue={'-1'} >
          <option value={'-1'} disabled={true}>İlçe Seçiniz</option>
          {
            selectedCity.states.map((item, index) => {
              return <option key={index} value={item.name}>{item.name}</option>
            })
          }
        </select>
      }
    </>
  )

}

export default Country; // default ile dosyayı sadece Country ismi ile export et dedik.
// başka sayfadan bu js dosyasını çağırmak için export ettik bu sayede import edebilir.