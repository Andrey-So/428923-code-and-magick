'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var SHADOW_OFFSET = 10;
var CONTENT_X = 150;
var COLUMN_WIDTH = 40;
var COLUMN_WITDH_OFFSET = 90;
var HISTOGRAM_HEIGHT = 150;
var COLOR_BLACK = '#000';
var COLOR_WHITE = '#FFF';
var TEXTLINE1_CONTENT = 'Ура вы победили!';
var TEXTLINE1_X = 240;
var TEXTLINE1_Y = 30;
var TEXTLINE2_CONTENT = 'Список результатов:';
var TEXTLINE2_X = 223
var TEXTLINE2_Y = 55;
var TEXTLINE3_CONTENT = 'Вы';
var RGBA_RED = 'rgba(255, 0, 0, 1)';

window.renderStatistics = function (ctx, names, times) {
  var shrinkRatio = Math.max.apply(null, times) / HISTOGRAM_HEIGHT;
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(CLOUD_X + SHADOW_OFFSET, CLOUD_Y + SHADOW_OFFSET, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = COLOR_WHITE;
  ctx.fillRect(CLOUD_X, CLOUD_Y, CLOUD_WIDTH, CLOUD_HEIGHT);
  ctx.fillStyle = COLOR_BLACK;
  ctx.fillText(TEXTLINE1_CONTENT, TEXTLINE1_X, TEXTLINE1_Y);
  ctx.fillText(TEXTLINE2_CONTENT, TEXTLINE2_X, TEXTLINE2_Y);

  names.forEach(function (name, i) {
    var xCoord = CONTENT_X + (i * COLUMN_WITDH_OFFSET);
    var time = times[i];
    ctx.fillStyle = COLOR_BLACK;
    ctx.fillText(Math.floor(time), xCoord, 235);
    ctx.fillText(name, xCoord, 250);
    ctx.fillStyle = name === TEXTLINE3_CONTENT ? RGBA_RED : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(xCoord, 220, COLUMN_WIDTH, -(time / shrinkRatio));
  });
};
