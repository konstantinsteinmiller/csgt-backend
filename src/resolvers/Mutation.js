import bcrypt from 'bcryptjs'
import getUserId from '../utils/getUserId'
import generateToken from '../utils/generateToken'
import hashPassword from '../utils/hashPassword'
import checkPermissions from '../utils/checkPermissions'

const Mutation = {
  async login(parent, { data }, { prisma }) {
    if (data.password.length < 8) {
      throw new Error(`Password must be 8 characters or longer`)
    }

    const user = await prisma.query.user({ where: { email: data.email } })
    if (!user) {
      throw new Error(`email / password combination is wrong`)
    }

    const isMatch = await bcrypt.compare(data.password, user.password)
    if (!isMatch) {
      throw new Error(`email / password combination is wrong`)
    }
    return {
      user,
      token: generateToken(user.id)
    }
  },
  async createProject(parent, { data }, { prisma, request }, info) {
    getUserId(request)
    return await prisma.mutation.createProject({ data }, info)
  },
  async deleteProject(parent, { id }, { prisma, request }, info) {
    getUserId(request)
    return await prisma.mutation.deleteProject({ where: { id } }, info)
  },
  async updateProject(parent, { id, data }, { prisma, request }, info) {
    getUserId(request)
    // checkPermissions(userId, [enums.permissions.UPDATE_PROJECT])
    return await prisma.mutation.updateProject({ where: { id }, data }, info)
  },
  async createUser(parent, { data }, { prisma, request }) {
    getUserId(request)
    const password = await hashPassword(data.password)
    const user = await prisma.mutation.createUser({
      data: { ...data, password }
    })
    return {
      user,
      token: generateToken(user.id)
    }
  },
  async deleteUser(parent, args, { prisma, request }, info) {
    getUserId(request)
    const userId = getUserId(request)
    return await prisma.mutation.deleteUser({ where: { id: userId } }, info)
  },
  async updateUser(parent, { data }, { prisma, request }, info) {
    const userId = getUserId(request)

    if (typeof data.password === 'string') {
      data.password = await hashPassword(data.password)
    }

    return await prisma.mutation.updateUser(
      { where: { id: userId }, data },
      info
    )
  },
  async createDialog(parent, { data }, { prisma, request }, info) {
    getUserId(request)
    return await prisma.mutation.createDialog(
      {
        data: {
          ...data,
          translation: {
            create: { ...data.translation }
          },
          project: {
            connect: { id: data.project }
          }
        }
      },
      info
    )
  },
  async deleteDialog(parent, { id }, { prisma, request }, info) {
    getUserId(request)
    return await prisma.mutation.deleteDialog({ where: { id } }, info)
  },
  async updateDialog(parent, { id, data }, { prisma, request }, info) {
    getUserId(request)
    return await prisma.mutation.updateDialog({ where: { id }, data }, info)
  },
  // async createTranslation(parent, { data }, { prisma }, info) {
  //   return await prisma.mutation.createTranslation(
  //     {
  //       data: {
  //         ...data,
  //         dialog: {
  //           connect: { ...data.dialog }
  //         }
  //       }
  //     },
  //     info
  //   )
  // },
  // async deleteTranslation(parent, { id }, { prisma }, info) {
  //   return await prisma.mutation.deleteTranslation({ where: { id } }, info)
  // },
  async updateTranslation(parent, { id, data }, { prisma, request }, info) {
    getUserId(request)
    return await prisma.mutation.updateTranslation(
      { where: { id }, data },
      info
    )
  }
}
export default Mutation
