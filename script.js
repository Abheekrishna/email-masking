const input = document.getElementById('email');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

const maskEmail = (email) => {
    const pos = email.indexOf("@");
    const slicedPart = email.slice(1,pos - 1);
    
    console.log(slicedPart);
    
}
maskEmail("abheekrishna17@gmail.com")

btn.addEventListener("click", () => {
})