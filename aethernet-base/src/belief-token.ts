import {
  Approval as ApprovalEvent,
  BeliefToken_ClaimAirdropWave as BeliefToken_ClaimAirdropWaveEvent,
  BeliefToken_EnableAirdropWave as BeliefToken_EnableAirdropWaveEvent,
  BeliefToken_MintClaimableReward as BeliefToken_MintClaimableRewardEvent,
  Transfer as TransferEvent
} from "../generated/BeliefToken/BeliefToken"
import {
  Approval,
  BeliefToken_ClaimAirdropWave,
  BeliefToken_EnableAirdropWave,
  BeliefToken_MintClaimableReward,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeliefToken_ClaimAirdropWave(
  event: BeliefToken_ClaimAirdropWaveEvent
): void {
  let entity = new BeliefToken_ClaimAirdropWave(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.waveId = event.params.waveId
  entity.amount = event.params.amount
  entity.merkleProof = event.params.merkleProof

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeliefToken_EnableAirdropWave(
  event: BeliefToken_EnableAirdropWaveEvent
): void {
  let entity = new BeliefToken_EnableAirdropWave(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.waveId = event.params.waveId
  entity.merkleRoot = event.params.merkleRoot

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBeliefToken_MintClaimableReward(
  event: BeliefToken_MintClaimableRewardEvent
): void {
  let entity = new BeliefToken_MintClaimableReward(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.recipient = event.params.recipient
  entity.rewardType = event.params.rewardType
  entity.userId = event.params.userId
  entity.amount = event.params.amount

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
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
