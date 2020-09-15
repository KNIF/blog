---
title: 'Intro to C# Delegates'
excerpt: 'A quick introduction to C# Delegates and how they work. I will also show some the equivalent code in C++ to make it easier to understand if you come from a C/C++ background.'
date: '2020-09-15T19:00:00Z'
author:
  name: KNIF
  picture: '/assets/blog/authors/KNIF.png'
---

## Definition of a Delegate

From the Microsoft Docs:

> A delegate is a type that represents references to methods with a particular parameter list and return type. When you instantiate a delegate, you can associate its instance with any method with a compatible signature and return type. You can invoke (or call) the method through the delegate instance.

> Delegates are used to pass methods as arguments to other methods. Event handlers are nothing more than methods that are invoked through delegates. You create a custom method, and a class such as a windows control can call your method when a certain event occurs.

<!--
Any method from any accessible class or struct that matches the delegate type can be assigned to the delegate. The method can be either static or an instance method. This makes it possible to programmatically change method calls, and also plug new code into existing classes.
-->

---

## Explanation based on an Example

Declaring a delegate that accepts a method of following form:

| Return Type | Parameter     |
| ----------- | ------------- |
| `string`    | `string name` |

<br/>

```cs
delegate string SayDelegate(string name);
```

Two example methods for said delegate

```cs
string SayHello(string name) => $"Hello, {name}.";
string SayBye(string name) => $"Bye, {name}.";
```

Then select a random one of the two methods:

```cs
SayDelegate sayInstance;
if (new Random().Next(0, 2) == 1)
    sayInstance = SayHello;
else
    sayInstance = SayBye;
```

And invoke it and print the result:

```cs
Console.WriteLine(sayInstance("KNIF"));
// or
Console.WriteLine(sayInstance.Invoke("KNIF"));
```

<br/>

---

## C++ Equivalent to upper Example with Pointers

```cpp

string SayHello(string name) {
  return "Hello, " + name;
}
string SayBye(string name) {
  return "Bye, " + name;
}

string (*foo)(string);
foo = &SayHello;

std::cout << foo("KNIF"); << std::endl;
```

<br/>

---

## Summary and further Resources

I hope this helps understanding delegates and makes you use them more as they're very useful.

If you want to learn more about delegates check out the official Documentation [HERE](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates).
