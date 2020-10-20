const getme = document.getElementById('getme1')
const token = document.getElementById('tk1')
const dt = document.getElementById('dt1')
const coming = document.getElementById('coming')
const reserve = document.getElementById('reserve')


const initialize = async () => {
  getme.onclick = () => {
    window.location = 'home.html'
  }

  token.onclick = () => {
    window.location = 'token.html'
  }

  dt.onclick = () => {
    window.location = 'deposit.html'

  }
  reserve.onclick = () => {
    window.location = 'reserve.html'
  }
  coming.onclick = () => {
    window.location = 'coming.html'

  }

}

window.addEventListener('DOMContentLoaded', initialize)
