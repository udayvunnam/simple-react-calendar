"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getDayFormatted = exports.getISODate = void 0;

var _format = _interopRequireDefault(require("date-fns/format"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var getISODate = function getISODate(date) {
  return (0, _format["default"])(date, 'YYYY-MM-DD');
};

exports.getISODate = getISODate;

var getDayFormatted = function getDayFormatted(date) {
  return (0, _format["default"])(date, 'D');
};

exports.getDayFormatted = getDayFormatted;