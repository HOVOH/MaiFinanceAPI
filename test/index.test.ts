import {
  ContractFactory,
  providers,
  Network,
} from '@hovoh/evmcontractsregistry';
import { IQiDAOProtocol, qiDAOProtocol } from '../src';

describe('ContractFactory', () => {
  let contractFactory: ContractFactory<IQiDAOProtocol>;

  beforeEach(function () {
    contractFactory = new ContractFactory(providers, qiDAOProtocol);
  });

  it('Should return the network contract factory', () => {
    const networkContractFactory = contractFactory.forNetwork(
      Network.OPERA_MAIN_NET
    );
    expect(networkContractFactory.networkProvider).not.toBeNull();
  });

  it('Should return the contracts properly typed and initialised', async () => {
    const wftmVault = contractFactory
      .forNetwork(Network.OPERA_MAIN_NET)
      .getLatestContractInstance('WFTMVault');
    const WFTM_ADDRESS = '0x21be370D5312f44cB42ce377BC9b8a0cEF1A4C83';
    expect(await wftmVault.collateral()).toEqual(WFTM_ADDRESS);
  });
});
