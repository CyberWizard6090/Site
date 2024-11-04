export const UpFontSize = (step: number) => {
    // let old_step = parseInt(document.documentElement.getAttribute('Special-Fontsize'))
    document.documentElement.setAttribute('Special-Fontsize', step.toString())
    localStorage.setItem('Special-Fontsize', step.toString());
    // if (old_step) {

    //     const elements = document.querySelectorAll('*');
    //     elements.forEach(element => {
    //         // Получаем текущий размер шрифта
    //         if (step !== old_step) {
    //             const currentFontSize = parseInt(window.getComputedStyle(element).getPropertyValue('font-size'));

    //             // Если задан размер шрифта , увеличиваем его на заданный процент 
    //             if (currentFontSize) {
    //                 element.style.fontSize = `${Math.round(parseInt(element.style.fontSize) * (step / old_step))}px`;
    //                 element.setAttribute('Special-Fontsize', step.toString())
    //             }
    //         }

    //     });



    // }

    // Получаем все элементы на странице




    // Перебираем все элементы и изменяем размер шрифта






}