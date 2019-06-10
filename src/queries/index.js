const queries = `query {
  users( query:"" ) {
    id
    name
    email
    posts {
      id
      title
      body
      published
      comments {
        id 
        text
      }
    }
  }
}`

const mutations = `
  updateComment(id:"cjwpbbl0z00k307145slwobco", data: {
    text:"stehpans comment 1"
  }){
    id 
    text
  }
    
  deleteComment(id:"cjwpbbl0z00k307145slwobco"){
    id 
    text
  }
  createComment(data: {
    text:"stehpans comment 2"
    author: "cjwp97q3t00ed0714tyxbw97g"
    post: "cjwp9rktk00eq0714iz8g8jv9"
  }){
    id 
    text
  }
  
  updateUser(
    id: "cjwp97q3t00ed0714tyxbw97g",
    data: {
      email: "stepahnnsnsn@sfasdf.com"
    }
  ){
    id
    name 
    email
  }
  
  deleteUser(id: "cjwp8u9pi00dy071403wa15pv"
  ){
    id
    name 
    email
  }
  
  createUser(
  data: {
    name:"Stephan"
    email: "stephan@gmail.com"
  }){
    id
    name 
    email
  }
  
  
  updatePost(
    id: "cjwp9rktk00eq0714iz8g8jv9",
    data: {
      published:true
    }
  ){
    id
    title 
    body 
    published
  }
  
  deletePost(
  id: "cjwpbqr6600kt0714yklu3prk"){
    id
    title 
    body
    published
  }
  createPost(
  data: {
    title:"Are you for real?"
    body: "just check out prisma.... duhh"
    published: true
    author: "cjwp97q3t00ed0714tyxbw97g"
  }){
    id
    title 
    body
    published
  }
`

const subscriptions = `
  comment(postId:"cjwp9rktk00eq0714iz8g8jv9") {
    mutation
    node {
      id text author {
        id name
      }
    }
  }
  post {
    mutation
    node {
      id 
      title
      author {
        id 
        name
      }
    }
  }`
