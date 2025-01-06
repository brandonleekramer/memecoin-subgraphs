import {
  Approval as ApprovalEvent,
  AutoSwapThresholdUpdated as AutoSwapThresholdUpdatedEvent,
  ExternalCallError as ExternalCallErrorEvent,
  InitialLiquidityAdded as InitialLiquidityAddedEvent,
  Initialized as InitializedEvent,
  LimitsUpdated as LimitsUpdatedEvent,
  LiquidityPoolAdded as LiquidityPoolAddedEvent,
  LiquidityPoolCreated as LiquidityPoolCreatedEvent,
  LiquidityPoolRemoved as LiquidityPoolRemovedEvent,
  OwnershipTransferStarted as OwnershipTransferStartedEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  ProjectTaxBasisPointsChanged as ProjectTaxBasisPointsChangedEvent,
  ProjectTaxRecipientUpdated as ProjectTaxRecipientUpdatedEvent,
  RevenueAutoSwap as RevenueAutoSwapEvent,
  Transfer as TransferEvent,
  ValidCallerAdded as ValidCallerAddedEvent,
  ValidCallerRemoved as ValidCallerRemovedEvent
} from "../generated/AgentToken/AgentToken"
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
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleAutoSwapThresholdUpdated(
  event: AutoSwapThresholdUpdatedEvent
): void {
  let entity = new AutoSwapThresholdUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldThreshold = event.params.oldThreshold
  entity.newThreshold = event.params.newThreshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleExternalCallError(event: ExternalCallErrorEvent): void {
  let entity = new ExternalCallError(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.identifier = event.params.identifier

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialLiquidityAdded(
  event: InitialLiquidityAddedEvent
): void {
  let entity = new InitialLiquidityAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.tokenA = event.params.tokenA
  entity.tokenB = event.params.tokenB
  entity.lpToken = event.params.lpToken

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLimitsUpdated(event: LimitsUpdatedEvent): void {
  let entity = new LimitsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldMaxTokensPerTransaction = event.params.oldMaxTokensPerTransaction
  entity.newMaxTokensPerTransaction = event.params.newMaxTokensPerTransaction
  entity.oldMaxTokensPerWallet = event.params.oldMaxTokensPerWallet
  entity.newMaxTokensPerWallet = event.params.newMaxTokensPerWallet

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityPoolAdded(event: LiquidityPoolAddedEvent): void {
  let entity = new LiquidityPoolAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addedPool = event.params.addedPool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityPoolCreated(
  event: LiquidityPoolCreatedEvent
): void {
  let entity = new LiquidityPoolCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addedPool = event.params.addedPool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleLiquidityPoolRemoved(
  event: LiquidityPoolRemovedEvent
): void {
  let entity = new LiquidityPoolRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.removedPool = event.params.removedPool

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferStarted(
  event: OwnershipTransferStartedEvent
): void {
  let entity = new OwnershipTransferStarted(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectTaxBasisPointsChanged(
  event: ProjectTaxBasisPointsChangedEvent
): void {
  let entity = new ProjectTaxBasisPointsChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.oldBuyBasisPoints = event.params.oldBuyBasisPoints
  entity.newBuyBasisPoints = event.params.newBuyBasisPoints
  entity.oldSellBasisPoints = event.params.oldSellBasisPoints
  entity.newSellBasisPoints = event.params.newSellBasisPoints

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleProjectTaxRecipientUpdated(
  event: ProjectTaxRecipientUpdatedEvent
): void {
  let entity = new ProjectTaxRecipientUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.treasury = event.params.treasury

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRevenueAutoSwap(event: RevenueAutoSwapEvent): void {
  let entity = new RevenueAutoSwap(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.value = event.params.value

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidCallerAdded(event: ValidCallerAddedEvent): void {
  let entity = new ValidCallerAdded(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.addedValidCaller = event.params.addedValidCaller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleValidCallerRemoved(event: ValidCallerRemovedEvent): void {
  let entity = new ValidCallerRemoved(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.removedValidCaller = event.params.removedValidCaller

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
