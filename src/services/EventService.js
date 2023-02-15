import axios from "axios"

// const url = 'https://api.spotchat.live/v1'
const url = 'https://api.moonchat.live/v1'
const info = '/games/valentine/info?sk='
const senders = '/games/valentine/senders?sk='
const receivers = '/games/valentine/receivers?sk='

let sk = '';



const apiCall = axios.create({
    baseURL: url,
    headers: {
        'Client-Type' : 'web',
    }
})

const getParam = (param) => {
    const searchParam = new URLSearchParams(window.location.search);
    let value = searchParam.get(param);
    return value ? value : null;
  };

sk=getParam('sk')
sk='eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYXBpLm1vb25jaGF0LmxpdmVcL3YxXC9hdXRoXC9vYXV0aCIsImlhdCI6MTY3NjM3NjE0MSwiZXhwIjoxNjc2OTgwOTQxLCJuYmYiOjE2NzYzNzYxNDEsImp0aSI6ImVsUmM2cmpSeG9CM29uSFUiLCJzdWIiOjEzNzU1LCJwcnYiOiIyM2JkNWM4OTQ5ZjYwMGFkYjM5ZTcwMWM0MDA4NzJkYjdhNTk3NmY3In0.WfF7TFaaAw8gbuCAxcg8dR8hFhLvSCIBlPCXu1gf1tg';

export default {
    EventGetInfo(){
        return apiCall.get( info + sk)
    },
    EventGetSenders(){
        return apiCall.get(senders + sk)
    },
    EventGetRecevires(){
        return apiCall.get(receivers + sk)
    },
}