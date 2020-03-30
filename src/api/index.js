import request from 'superagent'

const baseURL = 'https://picsum.photos'

export const fetchMainApi = async () => {
  const {body} = await request.get(
    `${baseURL}/v2/list?page=1&limit=10`
  )
  console.log('main API - ', body)
  return body
}

export const fetchMoreApi = async (page) => {
  const {body} = await request.get(
    `${baseURL}/v2/list?page=${page}&limit=10`
  )
  console.log('more API - ', body)
  return body
}

export const fetchDetailApi = async (id) => {
  const {body} = await request.get(
    `${baseURL}/id/${id}/info`
  )
  console.log('detail API - ', body)
  return body
}