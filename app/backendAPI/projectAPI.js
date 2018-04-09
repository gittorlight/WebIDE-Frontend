import { request } from '../utils'
import config from '../config'

export function fetchProjects () {
  return request.get('/projects')
}

export function fetchTemplates () {
  return request.get('/projects?template=true')
}

export function findCodingProject ({ projectName, ownerName }) {
  return request.get(`ws/find/coding/${ownerName}/${projectName}`, null, { headers: { Accept: '*/*' } })
}

export function findExternalProject ({ url }) {
  return request.get(`ws/find/coding/${config.globalKey}`, { url })
}

export function syncProject () {
  return request.post('/project/sync')
}
