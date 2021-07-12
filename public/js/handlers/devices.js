/******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!******************************************!*\
  !*** ./resources/js/handlers/devices.js ***!
  \******************************************/
$('.edit_device').on('click', function () {
  var active_row = $(this).parents().eq(3);
  var device_propertie_cells = $(active_row).children('.info');
  var device_ctrl_cell = $(active_row).children('.ctrl');
  $(device_propertie_cells).each(function (index, cell) {
    var prop_name = $(cell).attr('name');
    var prop_val = $(cell).text().trim();
    $(cell).empty();
    $(cell).append('<input type="text" class="form-control" value="' + prop_val + '">');
  });
  $(device_ctrl_cell).children('.read-mode').attr('hidden', true);
  $(device_ctrl_cell).children('.edit-mode').attr('hidden', false);
});
$('.del_device').on('click', function () {
  var _this = this;

  console.log('delete device #' + $(this).val());
  var device_id = $(this).val();
  $.ajax({
    url: del_device_handler_link,
    data: {
      'device_id': device_id
    }
  }).done(function (result) {
    $(_this).parents().eq(3).remove();
  });
});
$('.cancel_upd_device').on('click', function () {
  var active_row = $(this).parents().eq(3);
  var device_propertie_cells = $(active_row).children('.info');
  var device_ctrl_cell = $(active_row).children('.ctrl');
  $(device_propertie_cells).each(function (index, cell) {
    var prop_name = $(cell).attr('name');
    var prop_val = $(cell).children().val().trim();
    $(cell).empty();
    $(cell).append(prop_val);
  });
  $(device_ctrl_cell).children('.read-mode').attr('hidden', false);
  $(device_ctrl_cell).children('.edit-mode').attr('hidden', true);
});
/******/ })()
;