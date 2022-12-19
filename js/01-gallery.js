import { galleryItems } from "./gallery-items.js";
// Change code below this line

// console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const galleryMarkup = galleryItems
  .map(({ preview, original, description }) => {
    return `<div class="gallery__item">
        <a class="gallery__link" href = ${original}>
            <img 
                class = "gallery__image"
                src = ${preview} 
                data-source = ${original} 
                alt = ${description}
            />
        </a>
    </div>`;
  })
  .join("");

galleryRef.insertAdjacentHTML("beforeend", galleryMarkup);

galleryRef.addEventListener("click", onImgClick);
function onImgClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }

  const largeImage = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImage}" width="800" height="600">
`);
  instance.show();

  document.addEventListener("keydown", onCloseImg);

  function onCloseImg(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }
}

// Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
// Реалізація делегування на div.gallery і отримання url великого зображення.
// Підключення скрипту і стилів бібліотеки модального вікна basicLightbox. Використовуй CDN сервіс jsdelivr і додай у проект посилання на мініфіковані (.min) файли бібліотеки.
// Відкриття модального вікна по кліку на елементі галереї. Для цього ознайомся з документацією і прикладами.
// Заміна значення атрибута src елемента <img> в модальному вікні перед відкриттям. Використовуй готову розмітку модального вікна із зображенням з прикладів бібліотеки basicLightbox
