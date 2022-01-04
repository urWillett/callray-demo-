import {config_SpringPort,config_Host,config_CTIPort,config_Protocol} from '../../config/index'

const Host = config_Host;

const myPort = config_SpringPort;

const CTIPort = config_CTIPort;

const Protocol = config_Protocol;

const User = {
  account_alias: "",
  account_desp: "",
  account_despdescribe: 0,
  account_dspts: null,
  account_id: 0,
  account_name: "",
  account_password: "",
  account_property: 0,
  account_rights: ""
}

export {
  Host,
  myPort,
  Protocol,
  User,
  CTIPort
}
