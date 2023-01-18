import { Web3Modal, Web3Button, Web3ModalProvider, useAccount } from '@web3modal/react'
import { Chain, provider } from '@web3modal/ethereum'
export const generalAuth = async ({account, chain, balance}) => {
  
  return (
    <>
      <Web3Modal config={config} />
    </>
  )
}