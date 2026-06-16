const input = document.getElementById('email');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

const maskEmail = (email) => {
    const pos = email.indexOf("@");
    const slicedPart = email.slice(1,pos - 1);
    const lengthOfSliced = slicedPart.length;
    const mask = "*".repeat(lengthOfSliced);
    const restElemenet = email.slice(pos-1);
    const output = email[0]+mask+restElemenet;
    result.innerText = `Masked email: ${output}`;
}


btn.addEventListener("click", () => {
    const email = input.value;
    maskEmail(email)
})