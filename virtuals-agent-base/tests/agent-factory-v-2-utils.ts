import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import {
  ApplicationThresholdUpdated,
  GovUpdated,
  ImplContractsUpdated,
  Initialized,
  NewApplication,
  NewPersona,
  Paused,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Unpaused
} from "../generated/AgentFactoryV2/AgentFactoryV2"

export function createApplicationThresholdUpdatedEvent(
  newThreshold: BigInt
): ApplicationThresholdUpdated {
  let applicationThresholdUpdatedEvent =
    changetype<ApplicationThresholdUpdated>(newMockEvent())

  applicationThresholdUpdatedEvent.parameters = new Array()

  applicationThresholdUpdatedEvent.parameters.push(
    new ethereum.EventParam(
      "newThreshold",
      ethereum.Value.fromUnsignedBigInt(newThreshold)
    )
  )

  return applicationThresholdUpdatedEvent
}

export function createGovUpdatedEvent(newGov: Address): GovUpdated {
  let govUpdatedEvent = changetype<GovUpdated>(newMockEvent())

  govUpdatedEvent.parameters = new Array()

  govUpdatedEvent.parameters.push(
    new ethereum.EventParam("newGov", ethereum.Value.fromAddress(newGov))
  )

  return govUpdatedEvent
}

export function createImplContractsUpdatedEvent(
  token: Address,
  dao: Address
): ImplContractsUpdated {
  let implContractsUpdatedEvent =
    changetype<ImplContractsUpdated>(newMockEvent())

  implContractsUpdatedEvent.parameters = new Array()

  implContractsUpdatedEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  implContractsUpdatedEvent.parameters.push(
    new ethereum.EventParam("dao", ethereum.Value.fromAddress(dao))
  )

  return implContractsUpdatedEvent
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

export function createNewApplicationEvent(id: BigInt): NewApplication {
  let newApplicationEvent = changetype<NewApplication>(newMockEvent())

  newApplicationEvent.parameters = new Array()

  newApplicationEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return newApplicationEvent
}

export function createNewPersonaEvent(
  virtualId: BigInt,
  token: Address,
  dao: Address,
  tba: Address,
  veToken: Address,
  lp: Address
): NewPersona {
  let newPersonaEvent = changetype<NewPersona>(newMockEvent())

  newPersonaEvent.parameters = new Array()

  newPersonaEvent.parameters.push(
    new ethereum.EventParam(
      "virtualId",
      ethereum.Value.fromUnsignedBigInt(virtualId)
    )
  )
  newPersonaEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  newPersonaEvent.parameters.push(
    new ethereum.EventParam("dao", ethereum.Value.fromAddress(dao))
  )
  newPersonaEvent.parameters.push(
    new ethereum.EventParam("tba", ethereum.Value.fromAddress(tba))
  )
  newPersonaEvent.parameters.push(
    new ethereum.EventParam("veToken", ethereum.Value.fromAddress(veToken))
  )
  newPersonaEvent.parameters.push(
    new ethereum.EventParam("lp", ethereum.Value.fromAddress(lp))
  )

  return newPersonaEvent
}

export function createPausedEvent(account: Address): Paused {
  let pausedEvent = changetype<Paused>(newMockEvent())

  pausedEvent.parameters = new Array()

  pausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return pausedEvent
}

export function createRoleAdminChangedEvent(
  role: Bytes,
  previousAdminRole: Bytes,
  newAdminRole: Bytes
): RoleAdminChanged {
  let roleAdminChangedEvent = changetype<RoleAdminChanged>(newMockEvent())

  roleAdminChangedEvent.parameters = new Array()

  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "previousAdminRole",
      ethereum.Value.fromFixedBytes(previousAdminRole)
    )
  )
  roleAdminChangedEvent.parameters.push(
    new ethereum.EventParam(
      "newAdminRole",
      ethereum.Value.fromFixedBytes(newAdminRole)
    )
  )

  return roleAdminChangedEvent
}

export function createRoleGrantedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleGranted {
  let roleGrantedEvent = changetype<RoleGranted>(newMockEvent())

  roleGrantedEvent.parameters = new Array()

  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleGrantedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleGrantedEvent
}

export function createRoleRevokedEvent(
  role: Bytes,
  account: Address,
  sender: Address
): RoleRevoked {
  let roleRevokedEvent = changetype<RoleRevoked>(newMockEvent())

  roleRevokedEvent.parameters = new Array()

  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("role", ethereum.Value.fromFixedBytes(role))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )
  roleRevokedEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )

  return roleRevokedEvent
}

export function createUnpausedEvent(account: Address): Unpaused {
  let unpausedEvent = changetype<Unpaused>(newMockEvent())

  unpausedEvent.parameters = new Array()

  unpausedEvent.parameters.push(
    new ethereum.EventParam("account", ethereum.Value.fromAddress(account))
  )

  return unpausedEvent
}
