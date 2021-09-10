// PRODUCT DETAIL SCREEN
export const subscribeProductById = (socket, id, callback) => {
  socket.emit('ON_GET_DATA_BY_ID', id);
  socket.on('EMIT_GET_DATA_BY_ID', (response) => {
    return callback(response);
  });
};

export const subscribeProductRoomOnly = (socket, productId, callback) => {
  const room = 'room' + productId;
  socket.emit('JOIN', room);
  socket.on('EMIT_GET_PRODUCT_DTL', (response) => {
    callback(response);
  });
};

export const subscribeInfoAuction = (socket, callback) => {
  socket.on('EMIT_INFO_AUCTION', (response) => {
    const data = {
      product: response.data,
      message: response.message,
    };
    callback(data);
  });
};

export const sendInfoAcutionRoomOnly = (
  socket,
  productId,
  price,
  username,
  option
) => {
  socket.emit('ON_SEND_INFO_AUCTION', {
    room: 'room' + productId,
    id: +productId,
    user: username,
    price,
    option,
    timestamp: Date.now(),
  });
};

export const sendInfoOrderAuction = (socket, price, productId) => {
  socket.emit('ON_CHANGE_PRICE_BY_ID', {
    id: +productId,
    price: +price,
  });
  socket.emit('ON_GET_PRODUCT_DTL', {
    id: +productId,
    room: 'room' + productId,
  });
};

export const cleanUpSocketProductDetail = (socket, id) => {
  socket.off('EMIT_GET_DATA_BY_ID');
  socket.off('EMIT_GET_PRODUCT_DTL');
  socket.off('EMIT_INFO_AUCTION');
  const room = 'room' + id;
  socket.emit('LEAVE_ROOM', room);
};

// PRODUCTS SCREEN
export const subscribeProductsCurrent = (socket, callback) => {
  socket.emit('ON_GET_DATA_CURRENT');
  socket.on('EMIT_DATA_CURRENT', (response) => {
    callback(response);
  });
};

export const cleanUpSocketProducts = (socket) => {
  socket.off('EMIT_DATA_CURRENT');
};

// COUNTDOWN
export const onResetProductById = (socket, id) => {
  socket.emit('ON_RESET_PRODUCT_BY_ID', +id);
};

export const cleanUpSocketCountDown = (socket) => {
  socket.off('ON_RESET_PRODUCT_BY_ID');
};
