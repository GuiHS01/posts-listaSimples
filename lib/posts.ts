
export interface iPost {
  userId: number
  id: number
  title: string
  body: string
}

export async function getPosts(context: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${context}?&_limit=50`)
  const data = await res.json()

  if (!data) {
    return null
  }
  const postData = data.map(post => {
    return {
      ...post
    } as iPost
  })

  return postData
}

export async function getPostsCollection(context: string, id: Number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${context}?userId=${id}&_limit=4`)
  const data = await res.json()

  if (!data) {
    return null
  }
  const postData = data.map(post => {
    return {
      ...post
    } as iPost
  })

  return postData
}

export async function getPost(context: string, post: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/${context}/${post}`)
  const data = await res.json()
  if (!data) {
    return null
  }

  return { ...data } as iPost
}