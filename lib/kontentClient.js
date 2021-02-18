// Kentico Kontent Delivery API
import { DeliveryClient } from '@kentico/kontent-delivery';

const createDeliveryClient = options => {

  const config = {
    projectId: process.env.KONTENT_PROJECT_ID,
  };

  return new DeliveryClient(config);
};

const client = new DeliveryClient({
  projectId: process.env.KONTENT_PROJECT_ID,
})


function parsePost(post) {
  return {
    title: post.main_content__title.value,
  }
}


export async function getMorePostsForSlug(slug, preview) {
  return client
    .items()
    .queryConfig({
      usePreviewMode: !!preview,
    })
    .type('category')
    .withParameter('elements.slug[neq]', slug)
    .toPromise()
    .then((res) => {
      return res.items.map((post) => parsePost(post))
    })
}



export async function getAllPostSlugs() {
  const postsResponse = await client
    .items()
    .type('category')
    .elementsParameter(['slug'])
    .toPromise()

  return postsResponse.items.map((post) => post.slug.value)
}


export async function getPostBySlug(slug) {
  const post = await client
    .items()
    .type('category')
    .equalsFilter('elements.slug', slug)
    .toPromise()
    .then((result) => result.getFirstItem())
    .then((post) => parsePost(post))
  return post
}




export {
  createDeliveryClient,
};



