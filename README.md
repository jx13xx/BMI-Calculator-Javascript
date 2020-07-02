# BMI-Calculator

<img src="styles/cover.jpg">

 A simple BMI calculator built on javscript which takes the input of Height(cm) and Weight in (kg)
 The entire code exists in the **main.js** file 

## Adding the input field parameters
The main input fields that are required to calculate the BMI are the height and weight of the person.
We need to add a text input field on the **index.html** first to display it on the webpage then create the
**document.query()** tag on the main.js file

```html
<body>
    <h1> BMI Calculator </h1>
    <div>

        <input type="text" class="input-entry" id="height" placeholder="Enter your Height (cm)" name="text">
        <input type="text" class="input-entry" id="weight" placeholder="Enter your weight (kg)" name="text">
        <button id="cal-bmi" class="button">Calculate BMI</button>
        <label id="result" class="result"></label>
    </div>

    <script src ="scripts/main.js"></script>
</body>
```
To add the elements on the javascript file we need to first add the `document.querySelector()` function 

```javascript 
//Creating elements
const heightEl = document.querySelector('#height') // input entry
const weightEl = document.querySelector('#weight') // input entry
const cal_btn = document.querySelector('#cal-bmi') //button
const summary = document.createElement('h2')       //result display text
```
The values from the input fields can retrived using the `.value` function. In order to actively listen for value from the input parameters we use the `addEventListener()` 

```javascript
heightEl.value = values.height
weightEl.value = values.weight
summary.textContent = ''

heightEl.addEventListener('input', function (e) {
    values.height = e.target.value

    
})

weightEl.addEventListener('input', function (e) {
    values.weight = e.target.value

})
```

This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 18 or older.
Category	BMI range - kg/m2
BMI table for adults

| Weight  | Range |
| ------------- | ------------- |
| Less than 18.5 | Underweight  |
| Between 18.5 and 24.9  | Healthy Weight  |
| Between 25 and 29.9  | Overweight  |
| Over 30  | Obese  |

Once the **Calculate BMI** button is pushed the findBMI() is being called which takes the input parametrs (height, weight)

```javascript
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
```
The final function `result` is used to calculate the BMI and grade which range it falls in. The fucntion also displays the output message in this function
```javascript
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
```


