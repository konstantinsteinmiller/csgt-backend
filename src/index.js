import '@babel/polyfill/noConflict'
import server from './server'

server.start({ port: process.env.PORT || 4000 }, () => {
  console.log(`'${process.env.NODE_ENV}' CSGT GraphQL server started`) // eslint-disable-line
})
