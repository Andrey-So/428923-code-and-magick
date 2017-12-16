'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');
  var similarListElement = setup.querySelector('.setup-similar-list');
  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
  var dialogHandle = setup.querySelector('.setup-user-pic');
  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };
  var fragment = document.createDocumentFragment();
  var similarCharacters = [];
  var defaultSetupCoords;
  for (var i = 0; i < 4; i++) {
    similarCharacters.push({
      name: NAMES[Math.floor(Math.random() * NAMES.length)],
      surname: SURNAMES[Math.floor(Math.random() * SURNAMES.length)],
      coatColor: COAT_COLORS[Math.floor(Math.random() * COAT_COLORS.length)],
      eyesColor: EYES_COLORS[Math.floor(Math.random() * EYES_COLORS.length)]
    });
    fragment.appendChild(renderWizard(similarCharacters[i]));
  }
  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');

  var onSetupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closeSetup();
    }
  };

  var openSetup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
    if (defaultSetupCoords != undefined) {
      setup.style.left = defaultSetupCoords.x;
      setup.style.top = defaultSetupCoords.y;
    }
  };

  var closeSetup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onSetupEscPress);
  };

  var changeColor = function (subject, colors) {
    subject.style.fill = colors[Math.floor(Math.random() * colors.length)];
  };

  setupOpen.addEventListener('click', function () {
    openSetup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openSetup();
    }
  });

  setupClose.addEventListener('click', function () {
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closeSetup();
    }
  });

  wizardCoat.addEventListener('click', function () {
    changeColor(wizardCoat, COAT_COLORS);
  });

  wizardEyes.addEventListener('click', function () {
    changeColor(wizardEyes, EYES_COLORS);
  });

  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = FIREBALL_COLORS[Math.floor(Math.random() * FIREBALL_COLORS.length)];
  });

  dialogHandle.addEventListener('mousedown', function (downEvt) {

    downEvt.preventDefault();
    var startCoords = {
      x: downEvt.clientX,
      y: downEvt.clientY
    };

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setup.style.top = (setup.offsetTop - shift.y) + 'px';
      setup.style.left = (setup.offsetLeft - shift.x) + 'px';
      if (defaultSetupCoords === undefined) {
        defaultSetupCoords = {
          x: setup.style.left,
          y: setup.style.top
        };
      }
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });
})();
