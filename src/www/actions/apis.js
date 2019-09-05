/* eslint no-restricted-globals: off */

import {
  CALL_API,
  NOTIFY_ERROR,
  UPDATE_SHOPPING_CART,
  UPDATE_SUGGESTIONS,
  LOADING_SUGGESTIONS,
  STOP_LOADING_SUGGESTIONS,
  LOADING_START,
  LOADING_STOP,
  UPDATE_OPENED_ORDERS,
  UPDATE_CLOSED_ORDERS
} from '../constants';

export function suggest(name, limit, offset) {

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
    type: CALL_API,
    animationStart: LOADING_SUGGESTIONS,
    metadata: {
      url: `/apis/products?limit=${limit}&offset=${offset}&name=${name}`,
      method: 'get'
    },
    error: {
      type: STOP_LOADING_SUGGESTIONS
    },
    success: {
      type: UPDATE_SUGGESTIONS
    }
  };
}

export function getShoppingCart() {
  return {
    type: CALL_API,
    animationStart: LOADING_START,
    animationEnd: LOADING_STOP,
    metadata: {
      url: '/apis/shoppingcart',
      method: 'get'
    },
    error: {
      type: NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível carregar o carrinho de compras'
      }
    },
    success: {
      type: UPDATE_SHOPPING_CART
    }
  };
}

export function addToShoppingCart(product) {

  if (!product || typeof product !== 'object' || Array.isArray(product)) {
    throw new Error('O parâmetro product é obrigatório.');
  }

  return {
    type: CALL_API,
    animationStart: LOADING_START,
    animationEnd: LOADING_STOP,
    metadata: {
      url: '/apis/shoppingcart',
      method: 'post',
      data: product
    },
    error: {
      type: NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível adicionar o produto'
      }
    },
    success: getShoppingCart()
  };
}

export function updateShoppingCart(product) {

  if (!product || typeof product !== 'object' || Array.isArray(product)) {
    throw new Error('O parâmetro product é obrigatório.');
  }

  return {
    type: CALL_API,
    animationStart: LOADING_START,
    animationEnd: LOADING_STOP,
    metadata: {
      url: '/apis/shoppingcart',
      method: 'put',
      data: product
    },
    error: {
      type: NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível atualizar o produto'
      }
    },
    success: getShoppingCart()
  };
}

export function removeShoppingCart(productId) {

  if (typeof productId !== 'string' || productId.length < 1) {
    throw new Error('O parâmetro productId deve ser uma string com pelo menos 1 caracter.');
  }

  return {
    type: CALL_API,
    animationStart: LOADING_START,
    animationEnd: LOADING_STOP,
    metadata: {
      url: `/apis/shoppingcart/${productId}`,
      method: 'delete'
    },
    error: {
      type: NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível remover o produto'
      }
    },
    success: getShoppingCart()
  };
}

export function updateShoppingCartPaymentMethod(paymentMethodId) {

  if (typeof paymentMethodId !== 'string' || paymentMethodId.length < 1) {
    throw new Error('O parâmetro paymentMethodId deve ser uma string com pelo menos 1 caracter.');
  }

  return {
    type: CALL_API,
    animationStart: LOADING_START,
    animationEnd: LOADING_STOP,
    metadata: {
      url: '/apis/payment-methods',
      method: 'post',
      data: { paymentMethodId }
    },
    error: {
      type: NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível atualizar a forma de pagamento'
      }
    },
    success: getShoppingCart()
  };
}

export function getOpenedOrders(dateFrom, dateTo, id, offset, limit) {

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
    type: CALL_API,
    metadata: {
      url: `/apis/orders/opened?offset=${offset}&limit=${limit}&dateFrom=${dateFrom}&dateTo=${dateTo}&id=${id}`,
      method: 'get'
    },
    error: {
      type: NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível carregar os pedidos em andamento'
      }
    },
    success: {
      type: UPDATE_OPENED_ORDERS
    }
  };
}

export function getClosedOrders(dateFrom, dateTo, id, offset, limit) {

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
    type: CALL_API,
    metadata: {
      url: `/apis/orders/closed?offset=${offset}&limit=${limit}&dateFrom=${dateFrom}&dateTo=${dateTo}&id=${id}`,
      method: 'get'
    },
    error: {
      type: NOTIFY_ERROR,
      payload: {
        position: 'top-right',
        message: 'Não foi possível carregar os pedidos finalizados'
      }
    },
    success: {
      type: UPDATE_CLOSED_ORDERS
    }
  };
}
