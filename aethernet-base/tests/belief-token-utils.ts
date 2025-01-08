import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt, Bytes } from "@graphprotocol/graph-ts"
import {
  Approval,
  BeliefToken_ClaimAirdropWave,
  BeliefToken_EnableAirdropWave,
  BeliefToken_MintClaimableReward,
  Transfer
} from "../generated/BeliefToken/BeliefToken"

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  amount: BigInt
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
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return approvalEvent
}

export function createBeliefToken_ClaimAirdropWaveEvent(
  waveId: string,
  amount: BigInt,
  merkleProof: Array<Bytes>
): BeliefToken_ClaimAirdropWave {
  let beliefTokenClaimAirdropWaveEvent =
    changetype<BeliefToken_ClaimAirdropWave>(newMockEvent())

  beliefTokenClaimAirdropWaveEvent.parameters = new Array()

  beliefTokenClaimAirdropWaveEvent.parameters.push(
    new ethereum.EventParam("waveId", ethereum.Value.fromString(waveId))
  )
  beliefTokenClaimAirdropWaveEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  beliefTokenClaimAirdropWaveEvent.parameters.push(
    new ethereum.EventParam(
      "merkleProof",
      ethereum.Value.fromFixedBytesArray(merkleProof)
    )
  )

  return beliefTokenClaimAirdropWaveEvent
}

export function createBeliefToken_EnableAirdropWaveEvent(
  waveId: string,
  merkleRoot: Bytes
): BeliefToken_EnableAirdropWave {
  let beliefTokenEnableAirdropWaveEvent =
    changetype<BeliefToken_EnableAirdropWave>(newMockEvent())

  beliefTokenEnableAirdropWaveEvent.parameters = new Array()

  beliefTokenEnableAirdropWaveEvent.parameters.push(
    new ethereum.EventParam("waveId", ethereum.Value.fromString(waveId))
  )
  beliefTokenEnableAirdropWaveEvent.parameters.push(
    new ethereum.EventParam(
      "merkleRoot",
      ethereum.Value.fromFixedBytes(merkleRoot)
    )
  )

  return beliefTokenEnableAirdropWaveEvent
}

export function createBeliefToken_MintClaimableRewardEvent(
  recipient: Address,
  rewardType: i32,
  userId: string,
  amount: BigInt
): BeliefToken_MintClaimableReward {
  let beliefTokenMintClaimableRewardEvent =
    changetype<BeliefToken_MintClaimableReward>(newMockEvent())

  beliefTokenMintClaimableRewardEvent.parameters = new Array()

  beliefTokenMintClaimableRewardEvent.parameters.push(
    new ethereum.EventParam("recipient", ethereum.Value.fromAddress(recipient))
  )
  beliefTokenMintClaimableRewardEvent.parameters.push(
    new ethereum.EventParam(
      "rewardType",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(rewardType))
    )
  )
  beliefTokenMintClaimableRewardEvent.parameters.push(
    new ethereum.EventParam("userId", ethereum.Value.fromString(userId))
  )
  beliefTokenMintClaimableRewardEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return beliefTokenMintClaimableRewardEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  amount: BigInt
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
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return transferEvent
}
