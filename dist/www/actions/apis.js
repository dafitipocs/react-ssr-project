"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.suggest = suggest;
exports.getShoppingCart = getShoppingCart;
exports.addToShoppingCart = addToShoppingCart;
exports.updateShoppingCart = updateShoppingCart;
exports.removeShoppingCart = removeShoppingCart;
exports.updateShoppingCartPaymentMethod = updateShoppingCartPaymentMethod;
exports.getOpenedOrders = getOpenedOrders;
exports.getClosedOrders = getClosedOrders;

var _constants = require("../constants");

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function suggest(name, limit, offset) {
  if (typeof name !== 'string' || name.length < 1) {
    throw new Error('O parâmetro name deve ser uma string com pelo menos 1 caracter.');
  }

  if (typeof limit !== 'number' || isNaN(limit) || !isFinite(limit) || limit < 1) {
    throw new Error('O parâmetro limit deve ser um número maior que zero.');
  }

  if (typeof offset !== 'number' || isNaN(offset) || !isFinite(offset) || offset < 0) {
    throw new Error('O parâmetro offset deve ser um número positivo maior ou igual zero.');
  }

  return {
    type: _constants.CALL_API,
    animationStart: _constants.LOADING_SUGGESTIONS,
    metadata: {
      url: "/apis/products?limit=".concat(limit, "&offset=").concat(offset, "&name=").concat(name),
      method: 'get'
    },
    error: {
      type: _constants.STOP_LOADING_SUGGESTIONS
    },
    success: {
      type: _constants.UPDATE_SUGGESTIONS
    }
  };
}

function getShoppingCart() {
  return {
    type: _constants.CALL_API,
    animationStart: _constants.LOADING_START,
    animationEnd: _constants.LOADING_STOP,
    metadata: {
      url: '/apis/shoppingcart',
      method: 'get'
    },
    error: {
      type: _constants.NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível carregar o carrinho de compras'
      }
    },
    success: {
      type: _constants.UPDATE_SHOPPING_CART
    }
  };
}

function addToShoppingCart(product) {
  if (!product || _typeof(product) !== 'object' || Array.isArray(product)) {
    throw new Error('O parâmetro product é obrigatório.');
  }

  return {
    type: _constants.CALL_API,
    animationStart: _constants.LOADING_START,
    animationEnd: _constants.LOADING_STOP,
    metadata: {
      url: '/apis/shoppingcart',
      method: 'post',
      data: product
    },
    error: {
      type: _constants.NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível adicionar o produto'
      }
    },
    success: getShoppingCart()
  };
}

function updateShoppingCart(product) {
  if (!product || _typeof(product) !== 'object' || Array.isArray(product)) {
    throw new Error('O parâmetro product é obrigatório.');
  }

  return {
    type: _constants.CALL_API,
    animationStart: _constants.LOADING_START,
    animationEnd: _constants.LOADING_STOP,
    metadata: {
      url: '/apis/shoppingcart',
      method: 'put',
      data: product
    },
    error: {
      type: _constants.NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível atualizar o produto'
      }
    },
    success: getShoppingCart()
  };
}

function removeShoppingCart(productId) {
  if (typeof productId !== 'string' || productId.length < 1) {
    throw new Error('O parâmetro productId deve ser uma string com pelo menos 1 caracter.');
  }

  return {
    type: _constants.CALL_API,
    animationStart: _constants.LOADING_START,
    animationEnd: _constants.LOADING_STOP,
    metadata: {
      url: "/apis/shoppingcart/".concat(productId),
      method: 'delete'
    },
    error: {
      type: _constants.NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível remover o produto'
      }
    },
    success: getShoppingCart()
  };
}

function updateShoppingCartPaymentMethod(paymentMethodId) {
  if (typeof paymentMethodId !== 'string' || paymentMethodId.length < 1) {
    throw new Error('O parâmetro paymentMethodId deve ser uma string com pelo menos 1 caracter.');
  }

  return {
    type: _constants.CALL_API,
    animationStart: _constants.LOADING_START,
    animationEnd: _constants.LOADING_STOP,
    metadata: {
      url: '/apis/payment-methods',
      method: 'post',
      data: {
        paymentMethodId: paymentMethodId
      }
    },
    error: {
      type: _constants.NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível atualizar a forma de pagamento'
      }
    },
    success: getShoppingCart()
  };
}

function getOpenedOrders(dateFrom, dateTo, id, offset, limit) {
  if (typeof dateFrom !== 'string' || dateFrom.length !== 10) {
    throw new Error('O parâmetro dateFrom deve ser uma string com 10 caracteres.');
  }

  if (typeof dateTo !== 'string' || dateTo.length !== 10) {
    throw new Error('O parâmetro dateTo deve ser uma string com 10 caracteres.');
  }

  if (typeof id !== 'string') {
    throw new Error('O parâmetro id deve ser uma string.');
  }

  if (typeof offset !== 'number' || isNaN(offset) || !isFinite(offset) || offset < 0) {
    throw new Error('O parâmetro offset deve ser um número positivo maior ou igual zero.');
  }

  if (typeof limit !== 'number' || isNaN(limit) || !isFinite(limit) || limit < 1) {
    throw new Error('O parâmetro limit deve ser um número maior que zero.');
  }

  return {
    type: _constants.CALL_API,
    metadata: {
      url: "/apis/orders/opened?offset=".concat(offset, "&limit=").concat(limit, "&dateFrom=").concat(dateFrom, "&dateTo=").concat(dateTo, "&id=").concat(id),
      method: 'get'
    },
    error: {
      type: _constants.NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível carregar os pedidos em andamento'
      }
    },
    success: {
      type: _constants.UPDATE_OPENED_ORDERS
    }
  };
}

function getClosedOrders(dateFrom, dateTo, id, offset, limit) {
  if (typeof dateFrom !== 'string' || dateFrom.length !== 10) {
    throw new Error('O parâmetro dateFrom deve ser uma string com 10 caracteres.');
  }

  if (typeof dateTo !== 'string' || dateTo.length !== 10) {
    throw new Error('O parâmetro dateTo deve ser uma string com 10 caracteres.');
  }

  if (typeof id !== 'string') {
    throw new Error('O parâmetro id deve ser uma string.');
  }

  if (typeof offset !== 'number' || isNaN(offset) || !isFinite(offset) || offset < 0) {
    throw new Error('O parâmetro offset deve ser um número positivo maior ou igual zero.');
  }

  if (typeof limit !== 'number' || isNaN(limit) || !isFinite(limit) || limit < 1) {
    throw new Error('O parâmetro limit deve ser um número maior que zero.');
  }

  return {
    type: _constants.CALL_API,
    metadata: {
      url: "/apis/orders/closed?offset=".concat(offset, "&limit=").concat(limit, "&dateFrom=").concat(dateFrom, "&dateTo=").concat(dateTo, "&id=").concat(id),
      method: 'get'
    },
    error: {
      type: _constants.NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível carregar os pedidos finalizados'
      }
    },
    success: {
      type: _constants.UPDATE_CLOSED_ORDERS
    }
  };
}