/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedListener,
  TypedContractMethod,
} from "../common";

export interface PremiumContractInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "changePremium"
      | "checkValidPremium"
      | "owner"
      | "purchasePremium"
      | "repayPremium"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "changePremium",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "checkValidPremium",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "purchasePremium",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "repayPremium",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "changePremium",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "checkValidPremium",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "purchasePremium",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "repayPremium",
    data: BytesLike
  ): Result;
}

export interface PremiumContract extends BaseContract {
  connect(runner?: ContractRunner | null): PremiumContract;
  waitForDeployment(): Promise<this>;

  interface: PremiumContractInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  changePremium: TypedContractMethod<
    [_newPremiumType: BigNumberish],
    [void],
    "nonpayable"
  >;

  checkValidPremium: TypedContractMethod<[], [boolean], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  purchasePremium: TypedContractMethod<
    [_premiumType: BigNumberish],
    [void],
    "payable"
  >;

  repayPremium: TypedContractMethod<[], [void], "payable">;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "changePremium"
  ): TypedContractMethod<[_newPremiumType: BigNumberish], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "checkValidPremium"
  ): TypedContractMethod<[], [boolean], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "purchasePremium"
  ): TypedContractMethod<[_premiumType: BigNumberish], [void], "payable">;
  getFunction(
    nameOrSignature: "repayPremium"
  ): TypedContractMethod<[], [void], "payable">;

  filters: {};
}
