
const borrowButton = document.getElementById('borrowbutton')
const repayButton = document.getElementById('repaybutton')
const bal = document.getElementById('account_balance')

const initialize = async () => {
  const newAccounts = await ethereum.request({
    method: 'eth_accounts',
  })

  // function balance (updated) {
  //   bal.innerHTML = updated
  // }

  // function handleNewNetwork (networkId) {
  //   networkDiv.innerHTML = networkId
  // }

  async function getbalance () {
    try {
      // const user_borrow = await web3.eth.getBalance(account,
      // balance(user_borrow)
      web3.eth.getBalance(newAccounts[0], function (err, balance) {
        if (err === null) {
          bal.innerHTML = web3.fromWei(balance, 'ether') || 'not able to get balance'
        }
      })
    } catch (err) {
      console.error(err)
    }
  }
  getbalance()
  //   sendButton.onclick = () => {
  //     web3.eth.sendTransaction({
  //       from: newAccounts[0],
  //       to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
  //       value: '0x29a2241af62c0000',
  //       gas: 21000,
  //       gasPrice: 20000000000,
  //     }, (result) => {
  //       console.log(result)
  //     })
  //   }

  // }

  repayButton.onclick = () => {
    window.location = 'repay_final.html'
  }

  borrowButton.onclick = () => {
    window.location = 'borrow_final.html'
  }

}
window.addEventListener('DOMContentLoaded', initialize)

