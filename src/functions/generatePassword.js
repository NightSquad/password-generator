export default function generatePassword(length, settings) {
    const alphabet = [..."abcdefghijklmnopqrstuvwxyz"]
    const numbers = [..."0123456789"]
    const symbols = [..."!.,-_@#$%^&*()+=~"]
    const settingsArray = []
    const password = []
    for (let key in settings) {
        if (settings[key]) settingsArray.push(key)
    }
    for (let i = 0; i < length; i++) {
        let charType = settingsArray[Math.floor(Math.random() * settingsArray.length)]
        switch (charType) {
            case "UpperCase":
                password.push(alphabet[Math.floor(Math.random() * alphabet.length)].toUpperCase())
                break
            case "LowerCase":
                password.push(alphabet[Math.floor(Math.random() * alphabet.length)])
                break
            case "numbers":
                password.push(numbers[Math.floor(Math.random() * numbers.length)])
                break
            case "symbols":
                password.push(symbols[Math.floor(Math.random() * symbols.length)])
        }
    }
    return password.join("")
}