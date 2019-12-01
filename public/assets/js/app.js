const getPizzas = () => {
  axios.get('/burgers')
  .then(burgers => {
    console.log(burgers)
  })
  .catch (e => console.error(e))
}

const addPizza = (name) => {
  axios.post('/burgers', {
    name,
    eaten: false
  })
  .then(() => {
    console.log('burger added')
  })
  .catch(e => console.error(e))
}

const eatPizza = id => {
axios.put(`/burgers/${id}`)
.then(() => {
  console.log('Burger Eaten')
})
.catch(e => console.error(e))
}

const removePizza = id => {
axios.delete(`/burgers/${id}`)
.then(() => {
  console.log('Burger Removed')
})
.catch(e => console.error(e))
}

document.getElementById('addBurger').addEventListener('click', e => {
  e.preventDefault()
  addPizza(document.getElementById('burger').value)
  document.getElementById('burger').value = ''
  window.location.reload()
   
})

document.addEventListener('click', e => {
  if(e.target.parentNode.className.includes('eatBurger')){
  eatPizza(e.target.parentNode.dataset.burger)
  window.location.reload()
  }else if(e.target.parentNode.className.includes('removeBurger')){
    removePizza(e.target.parentNode.dataset.burger)
    window.location.reload()
  }
})