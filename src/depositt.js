
const cnfdepositt = document.getElementById('cnfdepositt')


const initialize = async () => {
  const newAccounts = await ethereum.request({
    method: 'eth_accounts',
  })

  cnfdepositt.onclick = () => {
    // const amount = document.getElementById('amount')
    // console.log(amount)
    // const amount = document.getElementById('amount').value()
    web3.eth.sendTransaction({
      from: newAccounts[0],
      to: '0x2f318C334780961FB129D2a6c30D0763d9a5C970',
      value: '0x29a2241af62c0000',
      gas: 21000,
      gasPrice: 20000000000,
    }, (result) => {
      console.log(result)
    })
  }
}

window.addEventListener('DOMContentLoaded', initialize)

