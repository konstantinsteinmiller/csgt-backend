export default {
  dialog: {
    subscribe(parent, { userId }, { prisma }, info) {
      return prisma.subscription.dialog(
        null, // { where: { node: { post: { id: userIdId } } } },
        info
      )
    }
  },
  user: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.user(
        null, // { where: { node: { published: true } } },
        info
      )
    }
  },
  translation: {
    subscribe(parent, args, { prisma }, info) {
      return prisma.subscription.translation(
        null, // { where: { node: { published: true } } },
        info
      )
    }
  }
}
