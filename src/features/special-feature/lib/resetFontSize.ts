import { UpFontSize } from "./UpFontSize";

export const resetFontSize = () => {
  const MyKey = 'Special-Fontsize'
  let size:number
  if (!localStorage.getItem(MyKey)) {
    // Если значение не найдено, записываем его
    localStorage.setItem(MyKey, '100');
    size= 100
  } else {

    //  size = parseInt(localStorage.getItem(MyKey))
     
   
  }

  // Получаем все элементы на странице
  const elements = document.querySelectorAll('*');

  // Перебираем все элементы и изменяем размер шрифта на изначальный
  // elements.forEach(element => {
  //   // Получаем текущий размер шрифта

  //   const currentFontSize = parseInt(window.getComputedStyle(element).getPropertyValue('font-size'));

  //   // Устанавливаем размер шрифта на изначальный
  //   if (element.getAttribute('Special-Fontsize') === null) {
  //     element.setAttribute('Special-Fontsize', '100')
  //     element.style.fontSize = currentFontSize + 'px';
  //   }
 
  // });
  // UpFontSize(size);
}