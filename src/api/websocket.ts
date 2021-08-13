import io from 'socket.io-client'
import { WS_API_URL } from '../constants'

const socket = io(WS_API_URL)

export default socket
