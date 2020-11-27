document.addEventListener('DOMContentLoaded', function () {

    // function initAccordeon() {
    //     let firstSectionBodyHeight = document.querySelector('.accordeon-section .accordeon-body > *').clientHeight
    //     document.querySelector('.accordeon-section .accordeon-body').style.maxHeight = firstSectionBodyHeight + 'px'
    // }

    // initAccordeon()



    let accordeonHeaderClickHandler = function (e) {
        document.querySelectorAll('.js-section').forEach(function (section) {
            section.querySelector('.js-content').style.maxHeight = '0px'
        })

        const accordeonSection = e.target.closest('.js-section')

        const insideElHeight = accordeonSection.querySelector('.js-content > *').clientHeight

        accordeonSection.querySelector('.js-content').style.maxHeight = insideElHeight + 'px'
    }

    document.querySelectorAll('.js-section')
        .forEach(function (section) {
            section.addEventListener('click', accordeonHeaderClickHandler)
        })



    const accordionsElSection = document.querySelectorAll('.js-section');

    for (item of accordionsElSection) {
        item.addEventListener('click', function () {

            if (this.classList.contains('active')) {

                document.querySelectorAll('.js-section').forEach(function (section) {
                    section.querySelector('.js-content').style.maxHeight = '0px'
                })
                this.classList.remove('active');
            } else {
                for (el of accordionsElSection) {
                    el.classList.remove('active');
                }
                this.classList.add('active');
            }
        })
    }

})