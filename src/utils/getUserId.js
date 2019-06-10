import jwt from 'jsonwebtoken'

const getUserId = (request, requireAuth = true) => {
  const header = request.request
    ? request.request.headers.authorization
    : request.connection.context.Authorization

  if (header) {
    const token = header.replace('Bearer ', '')
    const decoded = jwt.verify(token, 'mysecret')
    return decoded.userId
  }
  if (requireAuth) {
    throw new Error(`Authentication required. No token provided`)
  }

  return null
}

export default getUserId
