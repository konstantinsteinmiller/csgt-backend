import getUserId from '../utils/getUserId'

const User = {
  // email: {
  //   fragment: 'fragment userId on User { id }',
  //   resolve(parent, args, { request }) {
  //     const userId = getUserId(request, false)
  //     return userId && userId === parent.id ? parent.email : null
  //   }
  // },
  password: {
    fragment: 'fragment userId on User { id }',
    resolve(parent, args, { request }) {
      const userId = getUserId(request, false)
      return userId && userId === parent.id ? parent.password : null
    }
  }
}
export default User
