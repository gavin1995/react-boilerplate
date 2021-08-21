import moment from 'moment'

export const FORCE_REFRESH_KEY = '_ut'

export const strParse = str => {
  try {
    return JSON.parse(str)
  } catch (e) {
    return str
  }
}

export const getUrlParams = (parseArray = []) => {
  const { href } = window.location
  const search = `?${href.split('?')[1]}`
  if (!search) return {}
  const vars = search.substring(1).split('&')
  const queryString = {}
  for (let i = 0; i < vars.length; i += 1) {
    const pair = vars[i].split('=')
    const key = pair[0]
    let value = decodeURIComponent(pair[1])
    // 类型转换
    if (parseArray.includes(key)) {
      value = strParse(value)
    }
    if (typeof queryString[key] === 'undefined') {
      queryString[key] = value
    } else if (typeof queryString[key] === 'string') {
      queryString[key] = [queryString[key], value]
    } else {
      queryString[key].push(value)
    }
  }
  return queryString
}

export const compact = array => {
  let resIndex = 0
  const result = []

  if (array == null) {
    return result
  }

  for (const value of array) {
    if (value) {
      result[resIndex++] = value
    }
  }
  return result
}

export const json2queryString = (json, refresh = false) => {
  if (refresh) {
    json[FORCE_REFRESH_KEY] = moment().unix()
  }
  const queryString = compact(
    Object.keys(json).map(key =>
      json[key] !== 'undefined' && json[key] !== undefined && json[key] !== null && json[key] !== ''
        ? `${key}=${json[key]}`
        : '',
    ),
  ).join('&')
  return queryString ? `?${queryString}` : ''
}
