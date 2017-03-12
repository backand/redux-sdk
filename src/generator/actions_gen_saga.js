module.exports = function actions_gen (name) {
  var upname = name.toUpperCase();
  var camel  = name.charAt(0).toUpperCase() + name.substr(1).toLowerCase();
  return (
    `import { ${upname}_REQUEST, ${upname}_RESOLVE, ${upname}_REJECT,
  CREATE_${upname}_RESOLVE, CREATE_${upname}_REJECT,
  UPDATE_${upname}_RESOLVE, UPDATE_${upname}_REJECT,
  REMOVE_${upname}_RESOLVE, REMOVE_${upname}_REJECT } from './${name}Types'
import backand from '@backand/vanilla-sdk'

// add custom actions here!

// generated actions
export const get${camel} = (options = {}) => {
  return {
    type: 'SAGA_GET_REQUEST',
    payload: {
      name: '${name}',
      args: [
        options,
      ],
    },
  }
}

export const create${camel} = (data, options = {}, parameters) => {
  return {
    type: 'SAGA_CREATE_REQUEST',
    payload: {
      name: '${name}',
      args: [
        data,
        options,
        parameters
      ],
    },
  }
}

export const update${camel} = (id, data, options = {}, parameters) => {
  return {
    type: 'SAGA_UPDATE_REQUEST',
    payload: {
      name: '${name}',
      args: [
        id,
        data,
        options,
        parameters
      ],
    },
  }
}

export const remove${camel} = (id, parameters) => {
  return {
    type: 'SAGA_REMOVE_REQUEST',
    payload: {
      name: '${name}',
      args: [
        id,
        parameters
      ],
    },
  }
}
`)
}
