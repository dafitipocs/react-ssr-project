"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.navigateToSearchResult = exports.navigateToUserOrderPage = exports.navigateToOrderDetail = exports.navigateToProductCategory = exports.navigateToProductList = exports.navigateToProductDetail = exports.navigateToCheckout = exports.navigateToHome = void 0;

var navigateToHome = function navigateToHome() {
  return window.location.assign('/');
};

exports.navigateToHome = navigateToHome;

var navigateToCheckout = function navigateToCheckout() {
  return window.location.assign('/checkout');
};

exports.navigateToCheckout = navigateToCheckout;

var navigateToProductDetail = function navigateToProductDetail(id) {
  return window.location.assign("/product?id=".concat(id));
};

exports.navigateToProductDetail = navigateToProductDetail;

var navigateToProductList = function navigateToProductList(search) {
  return window.location.assign("/list-products?search=".concat(search));
};

exports.navigateToProductList = navigateToProductList;

var navigateToProductCategory = function navigateToProductCategory(search) {
  return window.location.assign("/products-category?search=".concat(search));
};

exports.navigateToProductCategory = navigateToProductCategory;

var navigateToOrderDetail = function navigateToOrderDetail(order) {
  return window.location.assign("/order-details?id=".concat(order.id, "&orderVendorId=").concat(order.orderVendorId));
};

exports.navigateToOrderDetail = navigateToOrderDetail;

var navigateToUserOrderPage = function navigateToUserOrderPage() {
  return window.location.assign('/user-orders');
};

exports.navigateToUserOrderPage = navigateToUserOrderPage;

var navigateToSearchResult = function navigateToSearchResult(search, offset) {
  return window.location.assign("".concat(window.location.pathname, "?search=").concat(search, "&offset=").concat(offset));
};

exports.navigateToSearchResult = navigateToSearchResult;