

export const identiyNextAPI = (platform: string, identity: string) => {

  return `query findOneIdentityWithSource {
  identity(platform: "twitter", identity: "suji_yan") {
    uuid
    platform
    identity
    displayName
    createdAt
    addedAt
    updatedAt
    neighbor(depth: 5) {
      sources
      identity {
        createdAt
        uuid
        platform
        identity
        displayName
      }
    }
  }
}`
}