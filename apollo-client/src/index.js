import ApolloBoost, { gql } from 'apollo-boost'

const client = new ApolloBoost({
  uri: 'http://localhost:4000'
})

const getUsers = gql`
  query {
    users {
      id
      name
    }
  }
`

const getProjects = gql`
  query {
    projects {
      id
      name
    }
  }
`

client
  .query({
    query: getUsers
  })
  .then(res => {
    let html = ''

    res.data.users.forEach(user => {
      html += `<div>
                  <h3>${user.name}</h3>
                </div>`
    })

    document.querySelector('.users').innerHTML = html
  })

client
  .query({
    query: getProjects
  })
  .then(res => {
    let html = ''

    res.data.projects.forEach(project => {
      html += `<div>
                  <h3>${project.name} - ${project.id}</h3>
                </div>`
    })

    document.querySelector('.projects').innerHTML = html
  })
