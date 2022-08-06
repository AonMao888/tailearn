const abcbtn = document.querySelector(".abcbtn");
const vowel12btn = document.querySelector(".vowel12btn");
const vowel13btn = document.querySelector(".vowel13btn");
const tonebtn = document.querySelector(".tonebtn");
const timebtn = document.querySelector(".timebtn");
const colorbtn = document.querySelector(".colorbtn");
const numbtn = document.querySelector(".numbtn");
const pop = document.querySelector(".pop");
const popbox = document.querySelector(".pop .box");
const popclose = document.querySelector(".popclose");
const maindiv = document.querySelector(".div");
const maindivinner = `<button class="abcbtn"><i class="fa-solid fa-list-ol"></i><p>ဗျည်း ၁၉ လုံး</p></button>
<button class="vowel12btn"><i class="fa-solid fa-v"></i><p>သရ ​၁၂ လုံး</p></button><button class="vowel13btn"><i class="fa-solid fa-v"></i><p>သရ ၁၃ လုံး</p></button>
<button class="tonebtn"><i class="fa-solid fa-6"></i><p>6 tones maker</p></button><button class="timebtn"><i class="fa-solid fa-calendar-day"></i><p>Time & Date</p></button>
<button class="colorbtn"><i class="fa-solid fa-palette"></i><p>Colours</p></button><button class="numbtn"><i class="fa-solid fa-arrow-down-1-9"></i><p>Numbers</p></button>`;
const classdiv = document.querySelector(".class");


abcbtn.addEventListener("click",()=>{
    pop.style.display = "flex";
    popbox.innerHTML = `<h1>Basic Consonants(ဗျည်း ၁၉ လုံး)</h1>
    <p>ၡမ်းဘာသာစကားမှာ အခြေခံအားဖြင့် <b>ဗျည်း ၁၉ လုံး</b> ၡိပါသည်။ လေ့လာရန်အောက်ကခလုဒ်ကို နှိပ်ပါ။</p>
    <button onclick="constart()" class="constart">Start</button>`;
})
popclose.addEventListener("click",()=>{
    pop.style.display = "none";
    popbox.innerHTML = "";
})
function constart(){
    pop.style.display = "none";
    popbox.innerHTML = "";
    maindiv.innerHTML = "";
    classdiv.innerHTML = `lsjl`;
}