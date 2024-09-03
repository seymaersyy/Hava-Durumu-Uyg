const wrapper = document.querySelector(".wrapper"), /*wrapperi yani ana divi çektik.Bu kısımda dom işlemleri , Bir HTML belgesindeki ilk eşleşen öğeyi (elementi) seçmek için kullanılır. Bu yöntem, CSS seçicilerini kullanarak öğeleri seçmenizi sağlar ve ilk eşleşen öğeyi döner. */
inputPart = wrapper.querySelector(".input-part"), /* Burada inputPart ı wrapper'ın içinden çektim  */
infoTxt = inputPart.querySelector(".info-txt"), /* infoTxt yi inputParttan çektim*/
inputField = inputPart.querySelector("input")

inputField.addEventListener("keyup", e => {  /* eneter a basıldığında bir sonraki aşamaya geçer. Burada bir e fonksiyonu yaptım  */
    if(e.key == "Enter" && inputField.value != ""){  /*eğer klavyede enter tuşuna basıldıysa ve giriş alanındaki değer boş bir değer değilse requestApi fonksiyonunu dönecek*/
        requestApi(inputField.value) /* entera basılıp doğru bilgi girildikten sonra requestApi fonksiyonuna inputField.value değerini gönderince requestApi istenilen şehri getiricek.   */
    }
})

function requestApi(city){ /* Bu fonksiyon ile konsola şehir ismi dönüyor. */
   let api =  `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c827e509ebbf1aced58ca226843c8c5e`; /*Burda openweather dan alacağımız bilgileri api ile bağladım.Burda city name i js nin içinden dinamik olarak çekicem.Bunu ${city} ile yaptım.apikey i de ekledim*/
}