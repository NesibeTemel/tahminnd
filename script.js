
    let girilenSayi=document.querySelector("girilenSayi").value;
    
    let hak=10;

    let rastgeleSayi=Math.floor(Math.random() *100);
    
    let sonuc= document.getElementById("sonuc");

console.log(rastgeleSayi);

function oyna(){
    if (hak==10){
        sonuc.innerHTML= "Tahmin hakkınız bitmiştir";
    }

    else if (girilenSayi.value<rastgeleSayi){
        sonuc.innerHTML= "Daha Büyük sayı giriniz";
    }
     
    else if (girilenSayi.value>rastgeleSayi){
        sonuc.innerHTML= "Daha küçük sayı giriniz";
    }
    else if (girilenSayi.value==rastgeleSayi){
        sonuc.innerHTML= "Tahmininiz doğru!";
    }
}
function sifirla(){
    hak==0;
    girilenSayi.value
}