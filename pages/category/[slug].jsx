
import { getAllPostSlugs, getPostBySlug, getMorePostsForSlug } from '../../lib/kontentClient';

export default function Post({ post }) {

  return (

    <div>
      <h1>{post.title} </h1>
    </div>
  )
}

export async function getStaticProps({ params }) {
  return await Promise.all([
    getPostBySlug(params.slug),
  ]).then((values) => ({
    props: {
      post: values[0]
    },
  }))
}


export async function getStaticPaths() {
  const slugs = await getAllPostSlugs(['slug'])
  return {
    paths: slugs.map(
      (slug) =>
        ({
          params: {
            slug,
          },
        } || [])
    ),
    fallback: false,
  }
}