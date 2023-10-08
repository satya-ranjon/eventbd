<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines)

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A : `{}`

**_Write your explanation here:_**

In JavaScript, when a variable is declared but not initialized, it is assigned the value undefined by default.

The variable _**"greeting"**_ is declared using let but is not initially assigned a value, so it is in an "uninitialized" state.

So when _**"greeting"**_ value is set to **_greeting={}_**

This line of code initializes the _**"greeting"**_ variable and sets its value to an empty object

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines)

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: `"12"`

**_Write your explanation here:_**

JavaScript is a dynamically typed language, and it does type coercion when you use the _**+**_ operator.

In this case, it tries to concatenate a string because one of the operands is a string.

So, it converts the number 1 to a string and then concatenates it with the string _**"2"**_, resulting in the string _**"12"**_.

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines)

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

**_Write your explanation here:_**

The _**food array**_ is not modified anywhere in the code.

The Info object is completely different from the _**Food array**_.

when you _**console.log(food)**_; log the _**food array**_ using, then it will output the original contents of the _**food array**_, which will remain unchanged:

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines)

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: `Hi there, undefined`

**_Write your explanation here:_**

when defined by a function sayHi that takes one parameter _**name**_ and returns a greeting string.

When calling _**sayHi()**_\* in the _**console.log()**_ statement, no arguments are passed.

Since the name parameter is not given a default value, calling the function without an argument will result in _**name**_ being _**undefined**_.

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines)

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

**_Write your explanation here:_**

0 is considered falsy, so it doesn't increment count.

1, 2, and 3 are considered truthy, so count is incremented by 1 for each of these values.

</p>
</details>
