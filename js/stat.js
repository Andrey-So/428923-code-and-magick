'use strict';

var cloudWidth = 420;
var cloudHeight = 270;
var cloudX = 100;
var cloudY = 10;
var shadowOffset = 10;

var contentX = 150;
var columnWidthOffset = 90;
var histogramHeight = 150;

window.renderStatistics = function (ctx, names, times) {
  var shrinkRatio = Math.max.apply(null, times) / histogramHeight;
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloudX + shadowOffset, cloudY + shadowOffset, cloudWidth, cloudHeight);
  ctx.fillStyle = '#fff';
  ctx.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);
  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', 240, 30);
  ctx.fillText('Список результатов:', 223, 55);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), contentX + (i * columnWidthOffset), 235);
    ctx.fillText(names[i], contentX + (i * columnWidthOffset), 250);
    if (names[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      var blueTransparent = 'rgba(0, 0, 255, ' + Math.random() + ')';
      ctx.fillStyle = blueTransparent;
    }
    ctx.fillRect(contentX + (i * columnWidthOffset), 220, 40, -(times[i] / shrinkRatio));
  }
};
