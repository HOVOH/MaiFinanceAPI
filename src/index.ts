import {ContractVersions, NetworksContractsRegistry, Network} from "@hovoh/evmcontractsregistry";
import {MAI__factory, Masterchef__factory, QI__factory, Vault__factory} from "./bindings/factories";

const vault = (address: string, deployedAt: number) => new ContractVersions(Vault__factory.connect, [
  {
    address, deployedAt
  }
])

const fantomMainnetContracts = {
  MAI: new ContractVersions(MAI__factory.connect, [
    {
      address: "0xfb98b335551a418cd0737375a2ea0ded62ea213b",
      deployedAt: 16653942
    }
  ]),
  QI: new ContractVersions(QI__factory.connect, [
    {
      address: "0x68Aa691a8819B07988B18923F712F3f4C8d36346",
      deployedAt: 20746190
    }
  ]),
  MasterChef: new ContractVersions(Masterchef__factory.connect, [
    {
      address: "0x230917f8a262bF9f2C3959eC495b11D1B7E1aFfC",
      deployedAt: 22012429
    }
  ]),
  WFTMVault: vault("0x1066b8FC999c1eE94241344818486D5f944331A0", 19101495),
  WETHVault: vault("0xD939c268C49c442F037E968F045ba02f499562D4", 19102550),
  yvWFTMVault: vault("0x7efB260662a6FA95c1CE1092c53Ca23733202798", 19090340),
  yvDAIVault: vault("0x682E473FcA490B0adFA7EfE94083C1E63f28F034",19090614),
  yvWETHVault: vault("0x7aE52477783c4E3e5c1476Bbb29A8D029c920676", 34989912),
  yvBTCVault: vault("0x571F42886C31f9b769ad243e81D06D0D144BE7B4", 35342428),
  yvYFI: vault("0x6d6029557a06961aCC5F81e1ffF5A474C54e32Fd",34990050),
  BTCVault: vault("0xE5996a2cB60eA57F03bf332b5ADC517035d8d094",19421435),
  LINKVault: vault("0xd6488d586E8Fcd53220e4804D767F19F5C846086", 19419434),
  SUSHIVault: vault("0x267bDD1C19C932CE03c7A62BBe5b95375F9160A6", 19419476),
  AAVEVault: vault("0xdB09908b82499CAdb9E6108444D5042f81569bD9", 19419007),
  mooScreamFTMVault: vault("0x3609A304c6A41d87E895b9c1fd18c02ba989Ba90", 20274350),
  mooScreamETHVault: vault("0xC1c7eF18ABC94013F6c58C6CdF9e829A48075b4e", 20273855),
  mooScreamWBTCVault: vault("0x5563Cc1ee23c4b17C861418cFF16641D46E12436", 20456301),
  mooScreamLINKVault: vault("0x8e5e4D08485673770Ab372c05f95081BE0636Fa2", 20274533),
  mooScreamDAIVault: vault("0xBf0ff8ac03f3E0DD7d8faA9b571ebA999a854146", 20271481),
  mooBooBTCFTM: vault("0xf34e271312e41bbd7c451b76af2af8339d6f16ed", 22195938),
  mooBooETHFTM: vault("0x9ba01b1279b1f7152b42aca69faf756029a9abde", 22196711),
  mooBIFI: vault("0x75d4ab6843593c111eeb02ff07055009c836a1ef", 23346470)
}

export interface IQiDAOProtocol {
  [Network.OPERA_MAIN_NET]: typeof fantomMainnetContracts
}

export const qiDAOProtocol = new NetworksContractsRegistry<IQiDAOProtocol>()
qiDAOProtocol.addNetwork(Network.OPERA_MAIN_NET, fantomMainnetContracts);
