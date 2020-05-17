/*
 * object-id.js
 * Copyright: Mehdi J. Shooshtari 2020
 */

if (!document) { // noinspection ES6ConvertVarToLetConst
  var document = { cookie: '' }
} // fix crashes on node

// noinspection ES6ConvertVarToLetConst
/**
 * Javascript class that mimics how WCF serializes a object of type MongoDB.Bson.ObjectId
 * and converts between that format and the standard 24 character representation.
 */
var ObjectId = (function () {
  // noinspection ES6ConvertVarToLetConst
  var increment = Math.floor(Math.random() * (16777216))
  // noinspection ES6ConvertVarToLetConst
  var pid = Math.floor(Math.random() * (65536))
  // noinspection ES6ConvertVarToLetConst
  var machine = Math.floor(Math.random() * (16777216))

  // noinspection ES6ConvertVarToLetConst
  var setMachineCookie = function () {
    // noinspection ES6ConvertVarToLetConst
    var cookieList = document.cookie.split('; ')
    for (var i in cookieList) {
      var cookie = cookieList[i].split('=')
      // noinspection ES6ConvertVarToLetConst
      var cookieMachineId = parseInt(cookie[1], 10)
      if (cookie[0] == 'mongoMachineId' && cookieMachineId && cookieMachineId >= 0 && cookieMachineId <= 16777215) {
        machine = cookieMachineId
        break
      }
    }
    document.cookie = 'mongoMachineId=' + machine + ';expires=Tue, 19 Jan 2038 05:00:00 GMT;path=/'
  }
  if (typeof (localStorage) != 'undefined') {
    try {
      // noinspection ES6ConvertVarToLetConst
      var mongoMachineId = parseInt(localStorage['mongoMachineId'])
      if (mongoMachineId >= 0 && mongoMachineId <= 16777215) {
        machine = Math.floor(localStorage['mongoMachineId'])
      }
      // Just always stick the value in.
      localStorage['mongoMachineId'] = machine
    } catch (e) {
      setMachineCookie()
    }
  } else {
    setMachineCookie()
  }

  function ObjId() {
    if (!(this instanceof ObjectId)) {
      return new ObjectId(arguments[0], arguments[1], arguments[2], arguments[3]).toString()
    }

    if (typeof (arguments[0]) == 'object') {
      this.timestamp = arguments[0].timestamp
      this.machine = arguments[0].machine
      this.pid = arguments[0].pid
      this.increment = arguments[0].increment
    } else if (typeof (arguments[0]) == 'string' && arguments[0].length == 24) {
      this.timestamp = Number('0x' + arguments[0].substr(0, 8)),
        this.machine = Number('0x' + arguments[0].substr(8, 6)),
        this.pid = Number('0x' + arguments[0].substr(14, 4)),
        this.increment = Number('0x' + arguments[0].substr(18, 6))
    } else if (arguments.length == 4 && arguments[0] != null) {
      this.timestamp = arguments[0]
      this.machine = arguments[1]
      this.pid = arguments[2]
      this.increment = arguments[3]
    } else {
      this.timestamp = Math.floor(new Date().valueOf() / 1000)
      this.machine = machine
      this.pid = pid
      this.increment = increment++
      if (increment > 0xffffff) {
        increment = 0
      }
    }
  }

  return ObjId
})()

ObjectId.prototype.getDate = function () {
  return new Date(this.timestamp * 1000)
}

ObjectId.prototype.toArray = function () {
  // noinspection ES6ConvertVarToLetConst
  var strOid = this.toString()
  // noinspection ES6ConvertVarToLetConst
  var array = []
  // noinspection ES6ConvertVarToLetConst
  var i
  for (i = 0; i < 12; i++) {
    array[i] = parseInt(strOid.slice(i * 2, i * 2 + 2), 16)
  }
  return array
}

/**
 * Turns a WCF representation of a BSON ObjectId into a 24 character string representation.
 */
ObjectId.prototype.toString = function () {
  if (this.timestamp === undefined
    || this.machine === undefined
    || this.pid === undefined
    || this.increment === undefined) {
    return 'Invalid ObjectId'
  }

  // noinspection ES6ConvertVarToLetConst
  var timestamp = this.timestamp.toString(16)
  // noinspection ES6ConvertVarToLetConst
  var machine = this.machine.toString(16)
  // noinspection ES6ConvertVarToLetConst
  var pid = this.pid.toString(16)
  // noinspection ES6ConvertVarToLetConst
  var increment = this.increment.toString(16)
  return '00000000'.substr(0, 8 - timestamp.length) + timestamp +
    '000000'.substr(0, 6 - machine.length) + machine +
    '0000'.substr(0, 4 - pid.length) + pid +
    '000000'.substr(0, 6 - increment.length) + increment
}

module.exports = ObjectId
