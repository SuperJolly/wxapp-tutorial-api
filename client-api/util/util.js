function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time
  }

  var hour = parseInt(time / 3600)
  time = time % 3600
  var minute = parseInt(time / 60)
  time = time % 60
  var second = time

  return ([hour, minute, second]).map(function (n) {
    n = parseInt(n).toString()
    return n[1] ? n : '0' + n
  }).join(':')
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude)
    latitude = parseFloat(latitude)
  }

  longitude = longitude.toFixed(2)
  latitude = latitude.toFixed(2)

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.')
  }
}

const fPromise = fn => obj => {
  return new Promise((resolve, reject) => {
      obj.complete = obj.success = (res) => {
        // console.log(res,'>')
        resolve(res)
      }
      obj.fail = (err) => {
        reject(err)
      }
      fn(obj);
  })
}


module.exports = {
  formatTime: formatTime,
  formatLocation: formatLocation,
  fPromise: fPromise
}
