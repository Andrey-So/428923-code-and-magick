'use strict';

var setup = document.querySelector('.setup');
setup.classList.remove('hidden');

var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];

var similarListElement = setup.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name + ' ' + wizard.surname;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return wizardElement;
};

var fragment = document.createDocumentFragment();

var similarCharacters = [{}];
for (var i = 0; i <= 4; i++) {
  similarCharacters[i] = {
    name: names[Math.floor(Math.random() * 7)],
    surname: surnames[Math.floor(Math.random() * 7)],
    coatColor: coatColors[Math.floor(Math.random() * 5)],
    eyesColor: eyesColors[Math.floor(Math.random() * 4)]
  };
  fragment.appendChild(renderWizard(similarCharacters[i]));
}
similarListElement.appendChild(fragment);
setup.querySelector('.setup-similar').classList.remove('hidden');
