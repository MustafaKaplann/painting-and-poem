
var alintilar = [
    {
        quote: '“Ya farkıma vardığında farkın kalmamış olursa?”',
    },
    {
        quote: '"Sen kocaman çöllerde bir kalabalık gibisin,"',
    },
    {
        quote: '"Duyguluysan işin zor, yaşamda yeniksindir."',
    },
    {
        quote: '"Sakın bir şey bırakma yarına. Yarın yok ki"',
    },
    {
        quote: '"Sevdi mi, sevmedi mi, belli etmedi. Sürdürüp suskunluğunu bekledi..."',
    }
]

var index = 0;
var slideCount = alintilar.length;
var interval;


// var ayarlar = {
//     duration: "10000",
//     random: false
// }



document.querySelector(".sol-buton").addEventListener("click", (e)=>{
    index--;
    if(index < 0){
        index = slideCount -1 ;
    }
    olaylar(index)

})
document.querySelector(".sag-buton").addEventListener("click", (e)=>{
    index++;
    if(index > alintilar.length -1) {
        index=0;
    }
    olaylar(index)
})

function olaylar(x){
    index = x;

    document.querySelector(".quote").textContent = alintilar[index].quote;

}