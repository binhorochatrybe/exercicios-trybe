// SELETORES
const INPUT_TEXT = document.querySelector("#input-text");
const INPUT_CHECKBOX = document.querySelector("#input-checkbox");
const HREF_LINK = document.querySelector("#href");

HREF_LINK.addEventListener('click', function name(params) {
    params.preventDefault()
})

INPUT_CHECKBOX.addEventListener('click', function name(params) {
    params.preventDefault()
})
INPUT_TEXT.addEventListener('keypress', function name(params) {
    let caractere = params.key
    if (caractere != 'a') {
        params.preventDefault()
    }
})