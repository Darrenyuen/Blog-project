import ShowBlogs from './components/ShowBlog.vue'
import Life from './components/Life.vue'
import Write from './components/Write.vue'
import About from './components/About.vue'
import SingleBlog from './components/SingleBlog.vue'
import SingleArticle from './components/SingleArticle.vue'
export default[
	{path:"/",component:ShowBlogs},
	{path:"/write", component:Write},
	{path:"/life", component:Life},
	{path:"/about", component:About},
	{path:"/blog/:id", component:SingleBlog},
	{path:"/article/:id", component:SingleArticle}
]