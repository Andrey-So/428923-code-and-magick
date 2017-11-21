'use strict';

window.renderStatistics = function (ctx, names, times) {
  var cloudWidth = 420;
  var cloudHeight = 270;
  var cloudX = 100;
  var cloudY = 10;
  var shadowOffset = 10;
  var contentX = 150;
  var columnWidth = 40;
  var columnWidthOffset = 90;
  var histogramHeight = 150;
  var shrinkRatio = Math.max.apply(null, times) / histogramHeight;
  ctx.font = '16px PT Mono';
  ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
  ctx.fillRect(cloudX + shadowOffset, cloudY + shadowOffset, cloudWidth, cloudHeight);
  ctx.fillStyle = '#fff';
  ctx.fillRect(cloudX, cloudY, cloudWidth, cloudHeight);
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 240, 30);
  ctx.fillText('Список результатов:', 223, 55);
  for (var i = 0; i < names.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), contentX + (i * columnWidthOffset), 235);
    ctx.fillText(names[i], contentX + (i * columnWidthOffset), 250);
    ctx.fillStyle = names[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'rgba(0, 0, 255, ' + Math.random() + ')';
    ctx.fillRect(contentX + (i * columnWidthOffset), 220, columnWidth, -(times[i] / shrinkRatio));
  }
};
