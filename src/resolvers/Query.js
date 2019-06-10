import getUserId from '../utils/getUserId'

const Query = {
  projects(parent, { query, first, skip, after, orderBy }, { prisma }, info) {
    const opArgs = query
      ? {
          where: { OR: [{ title_contains: query }, { body_contains: query }] },
          first,
          skip,
          after,
          orderBy
        }
      : { first, skip, after, orderBy }
    return prisma.query.projects(opArgs, info)
  },
  users(parent, { query, first, skip, after }, { prisma }, info) {
    const opArgs = query
      ? { where: { name_contains: query }, first, skip, after }
      : { first, skip, after }
    return prisma.query.users(opArgs, info)
  },
  user(parent, { id }, { prisma, request }, info) {
    const userId = getUserId(request, false)

    if (id !== userId) {
      throw new Error(`You dont have permission to other users`)
    }

    return prisma.query.user({ where: { id } }, info)
  },
  dialogs(parent, { query, first, skip, after }, { prisma }, info) {
    const opArgs = query
      ? {
          where: {
            OR: [
              { source_contains: query },
              { target_contains: query },
              { file_contains: query }
            ]
          },
          first,
          skip,
          after
        }
      : { first, skip, after }
    return prisma.query.dialogs(opArgs, info)
  },
  translations(parent, { query, first, skip, after }, { prisma }, info) {
    const opArgs = query
      ? {
          where: {
            OR: [
              { de_contains: query },
              { en_contains: query },
              { ru_contains: query },
              { pl_contains: query }
            ]
          },
          first,
          skip,
          after
        }
      : { first, skip, after }
    return prisma.query.translations(opArgs, info)
  }
}

export default Query
