const LowercaseChars = "abcdefghijklmnopqrstuvwxyz"
const UppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
const NumbersChars = "0123456789"
const SymbolsChars = "~!@#$%^&*?<>=-+"

const Uppercase = document.querySelector('#uppercase')
const Numbers = document.querySelector('#numbers')
const Symbols = document.querySelector('#symbols')
const Password = document.querySelector('#password')
const Slider = document.querySelector('.slider')
const Value = document.querySelector('.value')
const Copy = document.querySelector('.copy')
const Button = document.querySelector('.inputs button')

// 改变密码长度
Slider.addEventListener('input', () => {
    Value.textContent = Slider.value
})

// 生成密码
function mimashengcheng() {
    const length = Number(Slider.value)
    let chars = LowercaseChars
    if (Uppercase.checked) {
        chars += UppercaseChars
    }
    if (Numbers.checked) {
        chars += NumbersChars
    }
    if (Symbols.checked) {
        chars += SymbolsChars
    }
    let password = ''
    for (let i = 0; i < length; i++) {
        let index = Math.floor(Math.random() * chars.length)
        password += chars[index]
    }
    Password.value = password
}

// 点击生成密码按钮生成密码
Button.addEventListener('click', () => {
    mimashengcheng()
})

// 点击复制按钮进行复制
Copy.addEventListener('click', () => {
    Password.focus()
    Password.select()

    document.execCommand('copy')
})

// 页面刷新出现密码
mimashengcheng()