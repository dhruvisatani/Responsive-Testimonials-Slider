(function () {
    const customerImage = document.querySelector('#customer-img')
    const customerName = document.querySelector('#customer-name')
    const customerText = document.querySelector('#customer-text')
    const customerNumber = document.querySelector('.code')

    const btn = document.querySelectorAll('.btn')
    let index = 0
    const customers = []

    function Customer(num, img, name, text) {
        this.num = num
        this.img = img
        this.name = name
        this.text = text
    }

    function createCustomer(num, img, name, text) {
        let Img = `./img/${img}.jpg`
        let customer = new Customer(num, Img, name, text)

        customers.push(customer)
    }
    createCustomer('1/5', 0, 'Dhruvi satani', ' Satani Dhruvi is web developer who works predominantly in company')
    createCustomer('2/5', 1, 'Aditya', ' Aditya Roy Kapur is an Indian actor who works predominantly in Hindi films ')
    createCustomer('3/5', 2, 'varun', ' Varun Dhawan is an Indian actor who works in Hindi films')
    createCustomer('4/5', 3, 'sidharth ', ' Sidharth Malhotra is an Indian actor who works in Hindi films ,He began his career as a fashion model ')
    createCustomer('5/5', 4, 'aliya ', 'Alia Bhatt is a British actress of Indian descent who predominantly works in Hindi films ')

    btn.forEach(function (button) {

        button.addEventListener('click', function (e) {
            if (e.target.parentElement.classList.contains('preveBtn')) {
                if (index === 0) {
                    index = customers.length
                }
                index--
                customerNumber.textContent = customers[index].num
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text
            }

            if (e.target.parentElement.classList.contains('nextBtn')) {
                index++
                if (index === customers.length) {
                    index = 0
                }
                customerNumber.textContent = customers[index].num
                customerImage.src = customers[index].img
                customerName.textContent = customers[index].name
                customerText.textContent = customers[index].text


            }
        })
    })


})()