'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var ENTER_KEYCODE = 13;
var ESC_KEYCODE = 27;
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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

for (var i = 0; i < 4; i++) {
  similarCharacters.push({
    name: NAMES[Math.floor(Math.random() * 7)],
    surname: SURNAMES[Math.floor(Math.random() * 7)],
    coatColor: COAT_COLORS[Math.floor(Math.random() * 5)],
    eyesColor: EYES_COLORS[Math.floor(Math.random() * 4)]
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
};

var closeSetup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onSetupEscPress);
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
