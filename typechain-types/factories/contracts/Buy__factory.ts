/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { NonPayableOverrides } from "../../common";
import type { Buy, BuyInterface } from "../../contracts/Buy";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "Pay",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x608060405234801561001057600080fd5b50336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555061025c806100606000396000f3fe6080604052600436106100295760003560e01c80633ccfd60b1461002e578063537a924c14610045575b600080fd5b34801561003a57600080fd5b5061004361004f565b005b61004d610126565b005b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16146100dd576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016100d490610199565b60405180910390fd5b3373ffffffffffffffffffffffffffffffffffffffff166108fc479081150290604051600060405180830381858888f19350505050158015610123573d6000803e3d6000fd5b50565b3460015461013491906101f2565b600181905550565b600082825260208201905092915050565b7f596f7520617265206e6f74206f776e6572000000000000000000000000000000600082015250565b600061018360118361013c565b915061018e8261014d565b602082019050919050565b600060208201905081810360008301526101b281610176565b9050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b60006101fd826101b9565b9150610208836101b9565b92508282019050808211156102205761021f6101c3565b5b9291505056fea2646970667358221220ca3b4eac38e04bcb2d087ebcba459a8b65a8472d9d34a420350ee9adb34c861364736f6c63430008140033";

type BuyConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: BuyConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Buy__factory extends ContractFactory {
  constructor(...args: BuyConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: NonPayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: NonPayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Buy & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Buy__factory {
    return super.connect(runner) as Buy__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): BuyInterface {
    return new Interface(_abi) as BuyInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Buy {
    return new Contract(address, _abi, runner) as unknown as Buy;
  }
}
