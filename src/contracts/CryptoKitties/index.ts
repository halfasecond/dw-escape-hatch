import coreAbi from './core.json'
import saleAbi from './sale.json'
import sireAbi from './sire.json'

const Core = { abi: coreAbi, addr: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d'.toLowerCase() }
const Sale = { abi: saleAbi, addr: '0xb1690C08E213a35Ed9bAb7B318DE14420FB57d8C'.toLowerCase() }
const Sire = { abi: sireAbi, addr: '0xC7af99Fe5513eB6710e6D5f44F9989dA40F27F26'.toLowerCase() }


export default { Core, Sale, Sire }