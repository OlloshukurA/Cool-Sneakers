const flipRight = document.getElementById('flipRight');
const flipLeft = document.getElementById('flipLeft');
const productBox = document.getElementById('productBox')
const frontImg = document.getElementById('frontImg')
const backImg = document.getElementById('backImg')
flipRight.addEventListener('click', () => {
    productBox.style.transform = "rotateY(180deg)"
    frontImg.style.left = "650px"
    backImg.style.left = "20px"
    frontImg.style.transform = "rotate(-30deg)"
    backImg.style.transform = "rotate(0deg)"
})

flipLeft.addEventListener('click', () => {
    productBox.style.transform = "rotateY(0deg)"
    frontImg.style.left = "20px"
    backImg.style.left = "-650px"
    frontImg.style.transform = "rotate(0deg)"
    backImg.style.transform = "rotate(-30deg)"
})