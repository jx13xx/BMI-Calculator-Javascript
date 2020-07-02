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

Once the **Calculate BMI** button is pushed the findBMI() is being called which takes the input parametrs (height, weight)
BMI table for adults

This is the World Health Organization's (WHO) recommended body weight based on BMI values for adults. It is used for both men and women, age 18 or older.
Category	BMI range - kg/m2

| Weight  | Range |
| ------------- | ------------- |
| Less than 18.5 | Underweight  |
| Between 18.5 and 24.9  | Healthy Weight  |
| Between 25 and 29.9  | Overweight  |
| Over 30  | Obese  |




