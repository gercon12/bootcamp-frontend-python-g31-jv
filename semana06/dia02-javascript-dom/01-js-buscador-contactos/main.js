const searchInput = document.querySelector('#search-input')
const contactList = document.querySelector('#contact-list')
const contacts = document.querySelectorAll('.contact')
//const email = document.querySelectorAll('.email')

// console.log(searchInput)
// console.log(contactList)


//searchInput.addEventListener(Evento, Funcion)

searchInput.addEventListener('input', function(event){ 
    const query = event.target.value.toLowerCase()

    contacts.forEach(function(contact){
        const name = contact.querySelector('.name').textContent.toLowerCase()
        const email = contact.querySelector('.email').textContent.toLowerCase()

        //const coincidencias_email = email.includes(query)
        const coincidencias = name.includes(query)  || email.includes(query)
        //console.log(name)

        if (coincidencias){
            contact.classList.remove('hidden')
        } else {
            contact.classList.add('hidden')
        }


    })
})