const calculateTemp = () => {

    const numbertemp = document.getElementById('temp').value;
    // console.log(numbertemp);

    const tempSelected = document.getElementById('temp_diff');
    // console.log(tempSelected);
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
    // console.log(valueTemp);

    
    const celToFah = (cel) => {

        let fahrenheit = Math.round((cel * 9/5) + 32 );
        return fahrenheit; 

    }
    // (32°F − 32) × 5/9 

    const fahToCel = (fah) => {
        let celsius = Math.round((fah - 32) * 5/9);
        return celsius;

    }
    
    
    let result;

    if(valueTemp == 'cel'){
        result = celToFah(numbertemp);
        document.getElementById('resultContainer').innerHTML= `= ${result} °Fahrenheit`;
    } else {
        result = fahToCel(numbertemp);
        document.getElementById('resultContainer').innerHTML= `= ${result} °Celsius`;
    }

}