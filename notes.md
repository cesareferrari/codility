# Iterations in Javascript
## Using for loops

In programming we often need to iterate on a series of values. For example, we
may have to print out all the numbers in an array. Or we may have to multiply a series of numbers together.

One common way to iterate on a list is to use a for loop.

A for loop in Javascript has this structure:

```
for (  <1. initialize a counter>;
       <2. condition>;
       <3. increment the counter>) {

  <4. statement>

}
```

In step 1 we initialize a counter that will be used to keep track of our 
iteration. We typically set this to a variable called i

The variable name can be anything, but it's common to use the letter i for iterator. If you need more than one variable, you can use other names, like j, k, or anything else.

In this example below, we initialize the iterator to 0:

```
 let i = 0
```

Step 2 is the condition that allows our loop to continue looping. As long as the
condition is true, our loop will keep going.
An example of a condition is:

```
i < array.length
```

Here we assume we have an array and check its length.
If the iterator i is less than the array length, the condition evaluates to true
so we keep on looping.
If the iterator i reaches a higher value than the length of the array, the
condition evaluates to false, and the loop stops.

In step 3 we increment the iterator. If the iterator was 0 at the beginning
of the loop, in step 3 we may want to increment it to 1.
We do this with this syntax:

```
i++
```

If the iterator starts at 1, this code will increse it by 1 and assign the value back to the iterator, so the iterator is now 2.

We don't have to increase it every time, we can decrease it or add 2 every time,
like so:

```
i--    // decrease by 1
i + 2  // increase by 2 every time the loop executes
```

What we do depends on what we need to achieve in our loop.

Let's see an example of loop in action.

Say we want to print out all the elements of an array. We set up a function called printArrayElements that takes an array as an argument and sets up a loop. The loop goes through all the elements and prints them to the console one by one.

```
const printArrayElements = array => {
  for (let i = 0; i < array.length; i++) {
    console.log("Array element:", array[i]);
  }
}

printArrayElements([1, 2, 4, 5]);
printArrayElements(['a', 'b', 'c', 'd']);
```

Tomorrow we will look at more complex examples of looping, but all for loops
work the same way under the hood.




## Iterations in Javascript
### Using for loop to output a factorial of an integer

One way to use a for loop in Javascript is to calculate a factorial of an integer.

A factorial is the product of an integer and all the integers below it. So, if we have the integer 5, the factorial will be the product of 1, 2, 3, 4, and 5:

```
1 * 2 * 3 * 4 * 5 = 120
```

This calculation seems a very good candidate for a loop. We take each number in turn and multiply it by the product of the previous numbers.

Let's start by creating a function skeleton that we can call later with the input integer:

```
const factorialOf = integer => {
  // calculation goes here
}
```

This is an arrow function called factorialOf and takes an integer as its sole argument.

Since we start calculating from 1, it makes sense to initialize a variable that holds the factorial to 1 inside our function:

```
let factorial = 1;
```

We use let in this case because this variable will be reassigned every time we go through the loop. If we used const to declare the variable we would get an error because const cannot be reassigned after it's created.

Our function needs to return something. Since we calculate a factorial and we put the result into the factorial variable, we might as well return it at the end of factorialOf:

```
return factorial;
```

Now we need to do the hard work of actually calculating the factorial using a for loop.

Let's think for a moment how we are going to do this. Let's write down the requirements for this function.

We need to start with the number 1, so the initial counter can be set to 1.

We need to keep looping until our counter is less or equal to the input integer.

we need to take the initial factorial result and multiply it by the counter every time inside the loop.

After each step through the loop, we need do increase our counter by 1.

With all this in mind, let's write a loop that fulfills all these requirements:

```
for(let i = 1; i <= integer; i++) {
  factorial *= i;
}
```


Well, our code is pretty short but as you can see it fulfills all our requirements.

We initialize i to 1, we run the loop while i <= integer and we increment i by 1 at each turn.
Inside the loop, we take factorial and multiply it by the value of i.

Below is the full function code:

```
const factorialOf = integer => {
  let factorial = 1;

  for(let i = 1; i <= integer; i++) {
    factorial *= i;
  }

  return factorial;
}
```

If we test it out now, we get the correct results:

```
console.log(factorialOf(2));  // 2
console.log(factorialOf(5));  // 120
console.log(factorialOf(4));  // 24
```

Summary:

We performed a slightly complex operation of creating a function that calculates a factorial given an integer by using a for loop.

We iterated on all numbers between 1 and the given integer and multiplied each one by the previous numbers inside the loop.

We finally returned the result of the operation.

We'll see another example of looping tomorrow: we will print out characters to the console by using a double loop.



## Triangle of asterisks
### Using a loop to print to the console in Javascript

We have seen how to use a Javascript for loop to make calculations in how to calculate a factorial of an integer.

for loops can be used to print out characters to the console, as well. Here I am describing a common problem of printing a triangle of asterisks given an input number that specifies the size of the triangle.

For example, if the given number is 4, we should print out a triangle like this:

```
*
**
***
****
```

Four rows and four columns of asterisks.

The size of the triangle is governed by the integer passed in as the argument.

We start by writing down our specifications:

We have an unknown integer as an input.
The integer is greater than zero.
The output should be asterisks printed out to the console.
We should print out a number of rows that's equal to the argument.
The fist row will have 1 asterisk.
For each subsequent row we have 1 asterisk more than the row that came before
it.
The last row has the same number of asterisks as the argument.

We know that if we want to handle a series of things recursively we can use a for loop.

To get our feet wet, let's start by defininig a function that prints out as many asterisks as the input number:

```
const triangle = n => {
  for (let i = 1; i <= n; i++) {
    process.stdout.write('*');
  }
  process.stdout.write('\n');
}

```

We could print out stuff using console.log but console.log adds a return character at the end of its output, which may mess things up for us in this case, so I am using process.stdout.write, which writes to standard out but doesn't add any extra characters.

As you can see, we are just iterating from 1 to n (n being the argument passed to our function) and for each iteration we print out `*`.

At the end of the loop, we print out a return character to separate the console prompt from our printout.

If we call our function like this:

```
triangle2(5);
```

we get this result:

```
*****
```

It's a start. Now, how do we print the columns?

It looks like a second loop, nested inside the first loop, would help.

This would be our structure in pseudocode:

```
for ( 1 to n ) {   // outer iteration

  for ( 1 to n ) {  // inner iteration
    // print `*` 
  }

  // print new line

}
```

This code says: 

Start outer iteration, counter is 1
Start inner iteration, counter is 1
Print `*`
Print new line
Go back to outer iteration, now the counter is 2 
Run the inner iteration 2 times
Inner iteration prints out `*` 2 times, for a total of `**`
Print new line
Go back to outer iteration, now the counter is 3 
Inner iteration prints out `*` 3 times, for a total of `***`

... and so on until we reach n

Then stop and exit the function.


Now, let's fill out our pseudo code with real code, setting up the variables for the for loop.

The inner loop uses its own set of variables, as you can see:

```
const triangle = n => {

  for (let i = 1; i <= n; i++) {

    for (let j = 1; j <= i; j++) {
      process.stdout.write('*');
    }
    process.stdout.write("\n");
  }

}
```

Now, if we call this code with: 

```
triangle(10);
```

we get the result we want:


```
*
**
***
****
*****
******
*******
********
*********
********** 

*****
```

We have seen how to use a nested loop to print out random characters to the console.
We'll talk more about Javascript iterations in future articles.



## While loop

In addition to a for loop, Javascript has a while loop that's used in a similar
way. 

While loops are useful when we don't know in advance how many times a statement should be executed but we know that it must be executed every time a condition is true.

The while loop has this structure:

```
while (condition) {
  statement
}
```

The loop keeps iterating while a condition is true and the statement inside the loop is executed. When the condition becomes false, the loop stops iterating and control is passed to the statement after the loop.

Here's an example of a while loop.

```
let n = 0;

while (n <= 3) {
  console.log(n);
  n++;
}

console.log('End loop')
```

We initialize a number to 0 and inside the loop we print out the number and add 1 to it.

The next time the loop executes, n will be equal to 2 and so on. 

The condition specifies that the loop keeps iterating while n is less or equal to 3. When this condition is met, the loop stops, the code prints out 'End loop' and our program exits.

A real program

Let's put the while loop to good use. We know that the number 234 has 3 digits and the number 2 has 1 digit.

What about the number 1000343490884773 ? How many digits are there? Yes, we
could count them one by one but that takes time and we may lose track of the count. It would be much easier to have the computer count them for us.

Can we build a function that quickly calculates how many digits a given number
has?
Of course we can. We just use our trusty old while loop. 

One way to count how many digits a number has is to convert the number to a
string and then count the characters.

Here's an example: 

```
[1000343490884773].toString().split('').length  // 16
```

This will return the correct length, but what if we don't want to convert the
number to a string?

Another approach is to keep dividing the given number by 10 and count how many
times we do this operation.
Every time we divide by 10, we effectively remove a digit from the end of
the number.
When there are no numbers left, we know we have counted all the numbers
recursively.

Here's a function that does just this:

```
const numberOfDigits = (n) => {
  let result = 0;

  while (n > 0) {
    n = Math.floor(n / 10);
    result++;
  }

  return result;
}
```

We initialize a result variable to 0. This variable keeps track of how many
digits the given number has.
We then we set up a while loop that runs while the given number is more than 0.

Inside the loop we divide the number by 10. We use the Math.floor() method
because we want to get rid of the decimal number:

```
4773 / 10               // equals 477.3
Math.floor(4773 / 10)   // equals 477
```

Since we removed a digit, we add 1 to result.

We keep going until we don't have any more digits to remove. At that point, n
will be zero, so the while loop stops and we return the result, which is the
number of digits in the given number.

Let's test it out:

```
console.log(numberOfDigits(234));                //  3
console.log(numberOfDigits(2));                  //  1
console.log(numberOfDigits(1000343490884773));   // 16
```

We have seen how a while loop can help us when counting the digits in
a large number.



