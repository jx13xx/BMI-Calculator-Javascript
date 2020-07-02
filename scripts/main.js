
//Creating elements
const heightEl = document.querySelector('#height')
const weightEl = document.querySelector('#weight')
const cal_btn = document.querySelector('#cal-bmi')
const summary = document.createElement('h2')

// Creating BMI array
const values ={
    height: '',
    weight: ''
}


heightEl.value = values.height
weightEl.value = values.weight
summary.textContent = ''

heightEl.addEventListener('input', function (e) {
    values.height = e.target.value

    
})

weightEl.addEventListener('input', function (e) {
    values.weight = e.target.value

})

document.querySelector('#cal-bmi').addEventListener('click', function (e) {
    // console.log(`The height is ${values.height} cm`)
    // console.log(`The weight is ${values.weight}kg`)
    findBMI(values.height, values.weight)
})


const findBMI = function(finalHeight,finalWeight){
    const heightSquare = finalHeight * finalHeight;
    bmi = (((finalWeight)/(heightSquare)) * 10000).toFixed(2)
   // console.log(bmi)
   result(bmi)


}

const result = function(bmi) {
    var fatLevel

    if(bmi >30){
        fatLevel = 'obese'
    } else if( bmi >25 && bmi <29.9){
        fatLevel ='overweight'
    } else if( bmi >18.5 && bmi <24.9){
        fatLevel ='healthy weight'
    } else if(bmi < 18.5){
        fatLevel ='underweight'
    }
        
    
    summary.textContent = `You're BMI is ${bmi}. You're in the ${fatLevel} range.`
    document.querySelector('#result').appendChild(summary)

}


