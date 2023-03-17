const styleHeader = document.getElementById("header-container");
        styleHeader.style.backgroundColor = 'rgb(0, 176, 105) ';

        const urgent = document.getElementsByClassName('emergency-tasks')

        for (let index = 0; index < urgent.length; index+= 1) {
            urgent[index].style.backgroundColor= 'rgb(255, 159, 132)';
        }
        const noUrgent = document.getElementsByClassName('no-emergency-tasks')

        for (let index = 0; index < noUrgent.length; index+= 1) {
            noUrgent[index].style.backgroundColor= 'rgb(249, 219, 94)';
        }
        const styleFooter = document.getElementById("footer-container");
        styleFooter.style.backgroundColor = 'rgb(0, 53, 51) ';

        let colorTextUrgent = document.querySelectorAll(".emergency-tasks h3");

        for (let index = 0; index < colorTextUrgent.length; index+= 1) {
            colorTextUrgent[index].style.backgroundColor= 'rgb(165, 0, 243)';
            
        }
        let colorTextNoUrgent = document.querySelectorAll(".no-emergency-tasks h3");

        for (let index = 0; index < colorTextNoUrgent.length; index+= 1) {
            colorTextNoUrgent[index].style.backgroundColor= 'rgb(35, 37, 37)';
            
        }