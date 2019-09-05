export const navigateToHome = () => window.location.assign('/');

export const navigateToCheckout = () => window.location.assign('/checkout');

export const navigateToProductDetail = id => window.location.assign(`/product?id=${id}`);

export const navigateToProductList = search => window.location.assign(`/list-products?search=${search}`);

export const navigateToProductCategory = search => window.location.assign(`/products-category?search=${search}`);

export const navigateToOrderDetail = order => window.location.assign(
  `/order-details?id=${order.id}&orderVendorId=${order.orderVendorId}`
);

export const navigateToUserOrderPage = () => window.location.assign('/user-orders');

export const navigateToSearchResult = (search, offset) => window.location.assign(
  `${window.location.pathname}?search=${search}&offset=${offset}`
);
