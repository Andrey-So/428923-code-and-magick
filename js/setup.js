'use strict';
(function () {
  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');
  var wizardCoat = setup.querySelector('.setup-wizard .wizard-coat');
  var wizardEyes = setup.querySelector('.setup-wizard .wizard-eyes');
  var fireball = setup.querySelector('.setup-fireball-wrap');

  var similarListElement = setup.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
    return wizardElement;
  };

  var fragment = document.createDocumentFragment();

  var similarCharacters = [];

  for (var i = 0; i < window.constants.NUMBER_OF_WIZARDS; i++) {
    similarCharacters.push({
      name: window.constants.NAMES[Math.floor(Math.random() * window.constants.NAMES.length)],
      surname: window.constants.SURNAMES[Math.floor(Math.random() * window.constants.SURNAMES.length)],
      coatColor: window.constants.COAT_COLORS[Math.floor(Math.random() * window.constants.COAT_COLORS.length)],
      eyesColor: window.constants.EYES_COLORS[Math.floor(Math.random() * window.constants.EYES_COLORS.length)]
    });
    fragment.appendChild(renderWizard(similarCharacters[i]));
  }
  similarListElement.appendChild(fragment);
  setup.querySelector('.setup-similar').classList.remove('hidden');

  var onSetupEscPress = function (evt) {
    if (evt.keyCode === window.constants.ESC_KEYCODE) {
      closeSetup();
    }
  };

  var openSetup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onSetupEscPress);
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
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      openSetup();
    }
  });

  setupClose.addEventListener('click', function () {
    closeSetup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.constants.ENTER_KEYCODE) {
      closeSetup();
    }
  });

  wizardCoat.addEventListener('click', function () {
    changeColor(wizardCoat, window.constants.COAT_COLORS);
  });

  wizardEyes.addEventListener('click', function () {
    changeColor(wizardEyes, window.constants.EYES_COLORS);
  });

  fireball.addEventListener('click', function () {
    fireball.style.backgroundColor = window.constants.FIREBALL_COLORS[Math.floor(Math.random() * window.constants.FIREBALL_COLORS.length)];
  });
})();
