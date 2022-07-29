**Confidential. *Please do not make public this document or your solution.***

<p>
<img alt="veritran logo" width="500" src="https://i.imgur.com/jsTbKua.png">
</p>

# Veritran's React Code Exercise

# We will pay extreme attention to:

- **Object oriented design.**
- **Testable design & TDD.**
- **Clean code, KISS, DRY**
- **Extensibility**
- **SOLID Principles.**
- **Attention to details.**

# Background

Your mission is to create a simple ComboBox using **React**, **StyledComponents** and **Typescript**. A ComboBox is a
component that lets you select an option from a set list of options, allowing the user to search an item by text.

When in doubt, go for the simplest solution. You don’t need to create any kind of user interface apart from the ComboBox
nor make these features available through any server. It's not required to expose as a web service nor implement a
database.

Write tests for your component so that you can verify it is working correctly as you iterate over the component.

The exercise evolves as a sequence of iterations. Try to complete each iteration before reading the next one.

You can import the file [combobox.fig](combobox.fig) into Figma to get an idea of the colors, sizes, etc.

## What to do

### Iteration 1: Create a simple ComboBox

Use the following images as a visual representation of the expected control:

<p>
<img alt="iteration1" width="500" src="https://i.imgur.com/pkGaVRF.png">
</p>

It does not need to be an exact replica, although try to make it as similar as possible.

The ComboBox needs to have the following interactions:

- The options show the display value of the selected option.
- The options show when the ComboBox gains focus.
- The options stop showing when the ComboBox looses focus.
- When an option is selected, it must call onChange passing the option's value as the only parameter to the function.
- There is no need to add text search in this step, so there is no point in letting the user write on the control.

### Iteration 2: Make it clearable

The ComboBox needs to have the option to clear it, since some clients require it.

<p>
<img alt="iteration2" width="500" src="https://i.imgur.com/xO4gcEf.png">
</p>

This should:

- Add an "X", which calls onChange with null as the only parameter to the function when it is clicked.

### Iteration 3: Filter options by text

When the ComboBox is written, only options that match said text should be shown. This means that given the
options `["Dólar", "Peso", "Rublo"]` and having written `"l"` on the ComboBox, Dólar and Rublo should show, but Peso
should not.

<p>
<img alt="iteration3" width="500" src="https://i.imgur.com/ltrqdP6.png">
</p>

### Iteration 4: Add "server fetch" feature

Some users can't load all options on the ComboBox because there are just to many of them and their DBs would freeze.
What they need is to be able to show just some options at a time, based on the text the user is typing. That way, when
the user types some text, the server will retrieve the options that the ComboBox needs to show. Bear in mind that you do
not need to code the server calls, just make it posible for the ComboBox to implement this feature.

While using this feature:

- Do not show options if the text is less than 3 characters typed by the user.
- When the user writes 3 or more characters into the ComboBox, call an event that allows said behaviour.
- Add an example that illustrates this feature in action (again, there is no need to implement a DB or remote calls for
  this. Just simulating them is fine).
