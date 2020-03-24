var similarListElement = document.querySelector('.catalog__list');
var similarWrapperTemplate = document.querySelector('.template-item')
.content.querySelector('.catalog__list__item');

for (let i = 0; i < 8; i++) {
  var catalogItem = similarWrapperTemplate.cloneNode(true);
    console.log(catalogItem)
    similarListElement.appendChild(catalogItem);
};