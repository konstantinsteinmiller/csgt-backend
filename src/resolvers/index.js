import { extractFragmentReplacements } from 'prisma-binding'
const fs = require('fs')
const path = require('path')

// dynamically load all resolvers from the resolvers directory
const dymResolvers = {}
fs.readdirSync(path.resolve(__dirname)).forEach(file => {
  const req = `dymResolvers.${file.split('.')[0]} 
    = require('./${file}').default`
  eval(req)
})

const resolvers = { ...dymResolvers }
delete resolvers.index

const fragmentReplacements = extractFragmentReplacements(resolvers)

export { resolvers, fragmentReplacements }
