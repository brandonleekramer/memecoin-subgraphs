import {
  ApplicationThresholdUpdated as ApplicationThresholdUpdatedEvent,
  GovUpdated as GovUpdatedEvent,
  ImplContractsUpdated as ImplContractsUpdatedEvent,
  Initialized as InitializedEvent,
  NewApplication as NewApplicationEvent,
  NewPersona as NewPersonaEvent,
  Paused as PausedEvent,
  RoleAdminChanged as RoleAdminChangedEvent,
  RoleGranted as RoleGrantedEvent,
  RoleRevoked as RoleRevokedEvent,
  Unpaused as UnpausedEvent,
} from "../generated/AgentFactoryV2/AgentFactoryV2"
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
  Unpaused,
} from "../generated/schema"

export function handleApplicationThresholdUpdated(
  event: ApplicationThresholdUpdatedEvent,
): void {
  let entity = new ApplicationThresholdUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newThreshold = event.params.newThreshold

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleGovUpdated(event: GovUpdatedEvent): void {
  let entity = new GovUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.newGov = event.params.newGov

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleImplContractsUpdated(
  event: ImplContractsUpdatedEvent,
): void {
  let entity = new ImplContractsUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.token = event.params.token
  entity.dao = event.params.dao

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInitialized(event: InitializedEvent): void {
  let entity = new Initialized(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.version = event.params.version

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewApplication(event: NewApplicationEvent): void {
  let entity = new NewApplication(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.internal_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleNewPersona(event: NewPersonaEvent): void {
  let entity = new NewPersona(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.virtualId = event.params.virtualId
  entity.token = event.params.token
  entity.dao = event.params.dao
  entity.tba = event.params.tba
  entity.veToken = event.params.veToken
  entity.lp = event.params.lp

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePaused(event: PausedEvent): void {
  let entity = new Paused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleAdminChanged(event: RoleAdminChangedEvent): void {
  let entity = new RoleAdminChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.previousAdminRole = event.params.previousAdminRole
  entity.newAdminRole = event.params.newAdminRole

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleGranted(event: RoleGrantedEvent): void {
  let entity = new RoleGranted(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRoleRevoked(event: RoleRevokedEvent): void {
  let entity = new RoleRevoked(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.role = event.params.role
  entity.account = event.params.account
  entity.sender = event.params.sender

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUnpaused(event: UnpausedEvent): void {
  let entity = new Unpaused(
    event.transaction.hash.concatI32(event.logIndex.toI32()),
  )
  entity.account = event.params.account

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
