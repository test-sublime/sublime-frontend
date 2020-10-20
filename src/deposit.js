
const depositt = document.getElementById('depositt')
const withdrawnbutton = document.getElementById('withdrawnbutton')
const supplybalance = document.getElementById('supplybalance')

const initialize = async () => {
  const newAccounts = await ethereum.request({
    method: 'eth_accounts',
  })
  async function getbalance () {
    try {
      // const user_borrow = await web3.eth.getBalance(account,
      // balance(user_borrow)
      web3.eth.getBalance(newAccounts[0], function (err, balance) {
        if (err === null) {
          supplybalance.innerHTML = web3.fromWei(balance, 'ether') || 'not able to get balance'
        }
      })
    } catch (err) {
      console.error(err)
    }
  }
  getbalance()
  depositt.onclick = () => {
    window.location = 'depositt.html'
  }

  withdrawnbutton.onclick = () => {
    window.location = 'withdrawn.html'
  }

}

window.addEventListener('DOMContentLoaded', initialize)

