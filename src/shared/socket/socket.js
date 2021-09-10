import { createContext } from 'react';
import io from 'socket.io-client';

// export const socket = io.connect('http://localhost:8080');
export const socket = io.connect('https://kauction-server.herokuapp.com/');

export const SocketContext = createContext(socket);
