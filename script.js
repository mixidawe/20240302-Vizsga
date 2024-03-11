document.addEventListener('DOMContentLoaded', function() {

    const arak = [1250, 1400, 1650, 2000, 2450, 3400, 3800];

    
    const inputs = document.querySelectorAll('input');

    
    inputs.forEach(function(input, index) {
        input.addEventListener('input', function() {
            
            let sum = 0;

            inputs.forEach(function(input, i) {
                let quantity = parseFloat(input.value);
                let price = arak[i];
                let eredmeny = isNaN(quantity) ? '' : quantity * price;
                let eredmenyCella = document.querySelector('.eredmeny' + (i + 1));
                eredmenyCella.textContent = eredmeny === '' ? '' : Math.round(eredmeny).toLocaleString('hu-HU') + ' Ft';
                sum += isNaN(eredmeny) ? 0 : eredmeny;
            });

            let osszesenCella = document.querySelector('.eredmenysum');
            osszesenCella.textContent = sum === '' ? '' : Math.round(sum).toLocaleString('hu-HU') + ' Ft';
        });
    });
});