const stockForm = document.querySelector('#stock')
const translateButton = document.querySelector('#translator')
const search = document.querySelector('input')
const loadMessage = document.querySelector('#message-1')
const displayMessage = document.querySelector('#message-2')  
const contactName = document.querySelector('#name')
const contactEmail = document.querySelector('#email') 
const contactNumber = document.querySelector('#phoneNumber')  
let toggle = false

if (translateButton) {
translateButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (!toggle) {
    contactName.textContent = "Bryan O'Donoghue"
    contactEmail.textContent = "bryan.odonoghue@cdw.com"
    contactNumber.textContent = "(206) 867-5309"
    translateButton.textContent = "01001001 00100111 01101101 00100000 01100001 00100000 01110010 01101111 01100010 01101111 01110100"
    toggle = true
    }
    else {
    contactName.textContent = "01000010 01110010 01111001 01100001 01101110 00100000 01001111 00100111 01000100 01101111 01101110 01101111 01100111 01101000 01110101 01100101 00001010"
    contactEmail.textContent = "01100010 01110010 01111001 01100001 01101110 00101110 01101111 01100100 01101111 01101110 01101111 01100111 01101000 01110101 01100101 01000000 01100011 01100100 01110111 00101110 01100011 01101111 01101101"
    contactNumber.textContent = "00101000 00110010 00110000 00110110 00101001 00100000 00111000 00110110 00110111 00101101 00110101 00110011 00110000 00111001"
    translateButton.textContent = "In English, please!"
    toggle = false
    }
})
}

if (stockForm) {
stockForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const stockTicker = search.value

    loadMessage.textContent = 'Fetching Stock..'
    displayMessage.textContent = ''


    fetch('http://localhost:3002/stock?ticker=' + stockTicker).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                loadMessage.textContent = data.error
            }
            else {
                console.log(data)
                loadMessage.textContent = 'Closing price for ' + data.companyName + ' (' + data.ticker + ') is ' + data.closingPrice + '. ' + data.companyName + ' is headquartered in ' + data.city + 
                ', ' + data.state + '.\n'
                displayMessage.textContent = 'Company Address:\n' + data.companyName + '\n' + data.addressLine + '\n' + data.city + ', ' + data.state + ' ' + data.zip 
                

            }
        })
    })

})
}
