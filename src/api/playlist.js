import request from './../utils/request'

const baseUrl = 'http://localhost:3000'

export function fetchList(params) {
  return request({
    params,
    url: `${baseUrl}/playlist/list`,
    method: 'GET'
  })
}

export function fetchById(params) {
  return request({
    params,
    url: `${baseUrl}/playlist/getById`,
    method: 'GET'
  })
}

export function update(params) {
  return request({
    url: `${baseUrl}/playlist/updatePlaylist`,
    data: {
      ...params
    },
    method: 'POST'
  })
}
