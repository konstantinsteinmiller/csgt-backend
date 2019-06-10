import prisma from '../prisma'

const checkPermissions = (userId, permissions) => {
  const user = prisma.query.user({ where: { id: userId } })
  if (!user) {
    throw new Error(`User not found`)
  }

  const hasPermission = permissions.every(permission => {
    return user.permissions.some(enumPer => enumPer === permission)
  })

  if (!hasPermission) {
    throw new Error(`User doesn't have permission for this action`)
  }
}

export default checkPermissions
