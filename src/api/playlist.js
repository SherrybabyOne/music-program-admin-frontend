import request from './../utils/request'

const baseUrl = 'http://localhost:3000'

export function fetchList(params) {
  return request({
    params,
    url: `${baseUrl}/playlist/list`,
    method: 'GET'
  })
}
