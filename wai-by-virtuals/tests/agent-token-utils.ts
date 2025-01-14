import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  AutoSwapThresholdUpdated,
  ExternalCallError,
  InitialLiquidityAdded,
  Initialized,
  LimitsUpdated,
  LiquidityPoolAdded,
  LiquidityPoolCreated,
  LiquidityPoolRemoved,
  OwnershipTransferStarted,
  OwnershipTransferred,
  ProjectTaxBasisPointsChanged,
  ProjectTaxRecipientUpdated,
  RevenueAutoSwap,
  Transfer,
  ValidCallerAdded,
  ValidCallerRemoved
} from "../generated/AgentToken/AgentToken"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  value: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return approvalEvent
}

export function createAutoSwapThresholdUpdatedEvent(
  oldThreshold: BigInt,
  newThreshold: BigInt
): AutoSwapThresholdUpdated {
  let autoSwapThresholdUpdatedEvent =
    changetype<AutoSwapThresholdUpdated>(newMockEvent())

  autoSwapThresholdUpdatedEvent.parameters = new Array()

  autoSwapThresholdUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldThreshold",
      ethereum.Value.fromUnsignedBigInt(oldThreshold)
    )
  )
  autoSwapThresholdUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newThreshold",
      ethereum.Value.fromUnsignedBigInt(newThreshold)
    )
  )

  return autoSwapThresholdUpdatedEvent
}

export function createExternalCallErrorEvent(
  identifier: BigInt
): ExternalCallError {
  let externalCallErrorEvent = changetype<ExternalCallError>(newMockEvent())

  externalCallErrorEvent.parameters = new Array()

  externalCallErrorEvent.parameters.push(
    new ethereum.EventParam(
      "identifier",
      ethereum.Value.fromUnsignedBigInt(identifier)
    )
  )

  return externalCallErrorEvent
}

export function createInitialLiquidityAddedEvent(
  tokenA: BigInt,
  tokenB: BigInt,
  lpToken: BigInt
): InitialLiquidityAdded {
  let initialLiquidityAddedEvent =
    changetype<InitialLiquidityAdded>(newMockEvent())

  initialLiquidityAddedEvent.parameters = new Array()

  initialLiquidityAddedEvent.parameters.push(
    new ethereum.EventParam("tokenA", ethereum.Value.fromUnsignedBigInt(tokenA))
  )
  initialLiquidityAddedEvent.parameters.push(
    new ethereum.EventParam("tokenB", ethereum.Value.fromUnsignedBigInt(tokenB))
  )
  initialLiquidityAddedEvent.parameters.push(
    new ethereum.EventParam(
      "lpToken",
      ethereum.Value.fromUnsignedBigInt(lpToken)
    )
  )

  return initialLiquidityAddedEvent
}

export function createInitializedEvent(version: BigInt): Initialized {
  let initializedEvent = changetype<Initialized>(newMockEvent())

  initializedEvent.parameters = new Array()

  initializedEvent.parameters.push(
    new ethereum.EventParam(
      "version",
      ethereum.Value.fromUnsignedBigInt(version)
    )
  )

  return initializedEvent
}

export function createLimitsUpdatedEvent(
  oldMaxTokensPerTransaction: BigInt,
  newMaxTokensPerTransaction: BigInt,
  oldMaxTokensPerWallet: BigInt,
  newMaxTokensPerWallet: BigInt
): LimitsUpdated {
  let limitsUpdatedEvent = changetype<LimitsUpdated>(newMockEvent())

  limitsUpdatedEvent.parameters = new Array()

  limitsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldMaxTokensPerTransaction",
      ethereum.Value.fromUnsignedBigInt(oldMaxTokensPerTransaction)
    )
  )
  limitsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxTokensPerTransaction",
      ethereum.Value.fromUnsignedBigInt(newMaxTokensPerTransaction)
    )
  )
  limitsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "oldMaxTokensPerWallet",
      ethereum.Value.fromUnsignedBigInt(oldMaxTokensPerWallet)
    )
  )
  limitsUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newMaxTokensPerWallet",
      ethereum.Value.fromUnsignedBigInt(newMaxTokensPerWallet)
    )
  )

  return limitsUpdatedEvent
}

export function createLiquidityPoolAddedEvent(
  addedPool: Address
): LiquidityPoolAdded {
  let liquidityPoolAddedEvent = changetype<LiquidityPoolAdded>(newMockEvent())

  liquidityPoolAddedEvent.parameters = new Array()

  liquidityPoolAddedEvent.parameters.push(
    new ethereum.EventParam("addedPool", ethereum.Value.fromAddress(addedPool))
  )

  return liquidityPoolAddedEvent
}

export function createLiquidityPoolCreatedEvent(
  addedPool: Address
): LiquidityPoolCreated {
  let liquidityPoolCreatedEvent =
    changetype<LiquidityPoolCreated>(newMockEvent())

  liquidityPoolCreatedEvent.parameters = new Array()

  liquidityPoolCreatedEvent.parameters.push(
    new ethereum.EventParam("addedPool", ethereum.Value.fromAddress(addedPool))
  )

  return liquidityPoolCreatedEvent
}

export function createLiquidityPoolRemovedEvent(
  removedPool: Address
): LiquidityPoolRemoved {
  let liquidityPoolRemovedEvent =
    changetype<LiquidityPoolRemoved>(newMockEvent())

  liquidityPoolRemovedEvent.parameters = new Array()

  liquidityPoolRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "removedPool",
      ethereum.Value.fromAddress(removedPool)
    )
  )

  return liquidityPoolRemovedEvent
}

export function createOwnershipTransferStartedEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferStarted {
  let ownershipTransferStartedEvent =
    changetype<OwnershipTransferStarted>(newMockEvent())

  ownershipTransferStartedEvent.parameters = new Array()

  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferStartedEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferStartedEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent =
    changetype<OwnershipTransferred>(newMockEvent())

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createProjectTaxBasisPointsChangedEvent(
  oldBuyBasisPoints: BigInt,
  newBuyBasisPoints: BigInt,
  oldSellBasisPoints: BigInt,
  newSellBasisPoints: BigInt
): ProjectTaxBasisPointsChanged {
  let projectTaxBasisPointsChangedEvent =
    changetype<ProjectTaxBasisPointsChanged>(newMockEvent())

  projectTaxBasisPointsChangedEvent.parameters = new Array()

  projectTaxBasisPointsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldBuyBasisPoints",
      ethereum.Value.fromUnsignedBigInt(oldBuyBasisPoints)
    )
  )
  projectTaxBasisPointsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newBuyBasisPoints",
      ethereum.Value.fromUnsignedBigInt(newBuyBasisPoints)
    )
  )
  projectTaxBasisPointsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "oldSellBasisPoints",
      ethereum.Value.fromUnsignedBigInt(oldSellBasisPoints)
    )
  )
  projectTaxBasisPointsChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newSellBasisPoints",
      ethereum.Value.fromUnsignedBigInt(newSellBasisPoints)
    )
  )

  return projectTaxBasisPointsChangedEvent
}

export function createProjectTaxRecipientUpdatedEvent(
  treasury: Address
): ProjectTaxRecipientUpdated {
  let projectTaxRecipientUpdatedEvent =
    changetype<ProjectTaxRecipientUpdated>(newMockEvent())

  projectTaxRecipientUpdatedEvent.parameters = new Array()

  projectTaxRecipientUpdatedEvent.parameters.push(
    new ethereum.EventParam("treasury", ethereum.Value.fromAddress(treasury))
  )

  return projectTaxRecipientUpdatedEvent
}

export function createRevenueAutoSwapEvent(): RevenueAutoSwap {
  let revenueAutoSwapEvent = changetype<RevenueAutoSwap>(newMockEvent())

  revenueAutoSwapEvent.parameters = new Array()

  return revenueAutoSwapEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  value: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("value", ethereum.Value.fromUnsignedBigInt(value))
  )

  return transferEvent
}

export function createValidCallerAddedEvent(
  addedValidCaller: Bytes
): ValidCallerAdded {
  let validCallerAddedEvent = changetype<ValidCallerAdded>(newMockEvent())

  validCallerAddedEvent.parameters = new Array()

  validCallerAddedEvent.parameters.push(
    new ethereum.EventParam(
      "addedValidCaller",
      ethereum.Value.fromFixedBytes(addedValidCaller)
    )
  )

  return validCallerAddedEvent
}

export function createValidCallerRemovedEvent(
  removedValidCaller: Bytes
): ValidCallerRemoved {
  let validCallerRemovedEvent = changetype<ValidCallerRemoved>(newMockEvent())

  validCallerRemovedEvent.parameters = new Array()

  validCallerRemovedEvent.parameters.push(
    new ethereum.EventParam(
      "removedValidCaller",
      ethereum.Value.fromFixedBytes(removedValidCaller)
    )
  )

  return validCallerRemovedEvent
}
