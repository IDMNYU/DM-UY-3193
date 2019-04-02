// require and instantiate express
const app = require('express')()

// fake posts to simulate a database
const posts = [
  {
    id: 1,
    author: 'Pedro',
    title: 'My Thoughts on Halloween Candy',
    body: 'Candy corn: thumbs up; Circus peanuts: thumbs down'
  },
  {
    id: 2,
    author: 'Tommy',
    title: 'Best Halloween Costumes',
    body: '1) ghost, 2) vampire, 3) zombie Donald Trump'
  },
  {
    id: 3,
    author: 'Emma',
    title: 'How to get fake blood out of your carpet',
    body: 'vinegar and hot water, blot'
  },
  {
    id: 4,
    author: 'Cody',
    title: 'Halloween Events',
    body: 'Party at IDM on Friday!'
  }
]

// set the view engine to ejs
app.set('view engine', 'ejs')

// blog home page
app.get('/', (req, res) => {
  // render `home.ejs` with the list of posts
  res.render('home', { posts: posts })
})

// blog post
app.get('/post/:id', (req, res) => {
  // find the post in the `posts` array
  const post = posts.filter((post) => {
    return post.id == req.params.id
  })[0]

  // render the `post.ejs` template with the post content
  res.render('post', {
    author: post.author,
    title: post.title,
    body: post.body
  })
})

app.listen(8080)

console.log('listening on port 8080')
