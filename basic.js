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
const basicinner = `<div class="top">
<a href=""><i class="fa-solid fa-arrow-left"></i><p>Back</p></a>
<h1>19 of consonants</h1>
<i class="fa-solid fa-ellipsis-vertical menu"></i>
</div>
<h1>တူဝ်မႄႈလိၵ်ႈတႆး 19 တူဝ် <span>ဗျည်း ၁၉ လုံး</span></h1>
<div class="conlist">
<div class="item" onclick="tospeak(ga)"><p>k[ka]</p><h1>ၵ</h1><span>[ကာ့]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>kh[kha]</p><h1>ၶ</h1><span>[ခါ့]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>ng[nga]</p><h1>င</h1><span>[ငါ့(င်)]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>j[ja]</p><h1>ၸ</h1><span>[ကြ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>s[sa]</p><h1>ၸ</h1><span>[ဆာ့]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>ny[nya]</p><h1>ၺ</h1><span>[ည]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>d[da]</p><h1>တ</h1><span>[တ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>th[tha]</p><h1>ထ</h1><span>[ထ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>n[na]</p><h1>ၼ</h1><span>[န]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>b[ba]</p><h1>ပ</h1><span>[ပ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>ph[pha]</p><h1>ၽ</h1><span>[ဖ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>f[fa]</p><h1>ၾ</h1><span>[ဖာ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>m[ma]</p><h1>မ</h1><span>[မ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>y[ya]</p><h1>ယ</h1><span>[ယ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>r[ra]</p><h1>ရ</h1><span>[ရ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>l[la]</p><h1>လ</h1><span>[လ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>w[wa]</p><h1>ဝ</h1><span>[ဝ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>h[ha]</p><h1>ႁ</h1><span>[ဟ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>a[aa]</p><h1>ဢ</h1><span>[အ]<i class="fa-solid fa-volume-high"></i></span></div>
</div>`;
const vow12inner = `<div class="top">
<a href=""><i class="fa-solid fa-arrow-left"></i><p>Back</p></a>
<h1>12 of vowels</h1>
<i class="fa-solid fa-ellipsis-vertical menu"></i>
</div>
<h1>မႄႈၵပ်းငဝ်ႈ 12 တူဝ် <span>သရ ၁၂ လုံး</span></h1>
<div class="conlist">
<div class="item"><p>k[ka]</p><h1>ၵ</h1><span>[ကာ့]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>kh[kha]</p><h1>ၶ</h1><span>[ခါ့]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>ng[nga]</p><h1>င</h1><span>[ငါ့(င်)]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>j[ja]</p><h1>ၸ</h1><span>[ကြ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>s[sa]</p><h1>ၸ</h1><span>[ဆာ့]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>ny[nya]</p><h1>ၺ</h1><span>[ည]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>d[da]</p><h1>တ</h1><span>[တ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>th[tha]</p><h1>ထ</h1><span>[ထ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>n[na]</p><h1>ၼ</h1><span>[န]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>b[ba]</p><h1>ပ</h1><span>[ပ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>ph[pha]</p><h1>ၽ</h1><span>[ဖ]<i class="fa-solid fa-volume-high"></i></span></div>
<div class="item"><p>f[fa]</p><h1>ၾ</h1><span>[ဖာ]<i class="fa-solid fa-volume-high"></i></span></div>
</div>`;

const msg = new SpeechSynthesisUtterance();
let voices = [];


abcbtn.addEventListener("click",()=>{
    pop.style.display = "flex";
    popbox.innerHTML = `<h1>Basic Consonants(ဗျည်း ၁၉ လုံး)</h1>
    <p>ၡမ်းဘာသာစကားမှာ အခြေခံအားဖြင့် <b>ဗျည်း ၁၉ လုံး</b> ၡိပါသည်။ လေ့လာရန်အောက်ကခလုဒ်ကို နှိပ်ပါ။</p>
    <button onclick="constart()" class="constart">Start</button>`;
})
function tospeak(text){
    SpeechSynthesis.speak("hello world")
    responsiveVoice.speak(text);
}
popclose.addEventListener("click",()=>{
    pop.style.display = "none";
    popbox.innerHTML = "";
})
function constart(){
    pop.style.display = "none";
    popbox.innerHTML = "";
    maindiv.innerHTML = "";
    classdiv.innerHTML = basicinner;
}
vowel12btn.addEventListener("click",()=>{
    pop.style.display = "flex";
    popbox.innerHTML = `<h1>12 of vowels(သရ ၁၂ လုံး)</h1>
    <p>ၡမ်းဘာသာစကားမှာ အခြေခံအားဖြင့် <b>သရ ၁၂ လုံးနှင့် ၁၃ လုံး</b> ၡိပြီးယခုမှာ <b>သရ​​​​​​​​​​​ ၁၂လုံး</b>ကိုတင်ပြပါမည်။</b>။ လေ့လာရန်အောက်ကခလုဒ်ကို နှိပ်ပါ။</p>
    <button onclick="vo12start()" class="constart">Start</button>`;
})
function vo12start(){
    pop.style.display = "none";
    popbox.innerHTML = "";
    maindiv.innerHTML = "";
    classdiv.innerHTML = vow12inner;
}
