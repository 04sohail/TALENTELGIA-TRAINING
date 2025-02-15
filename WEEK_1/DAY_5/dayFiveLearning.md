
# 🌟 Talentelgia Day Five Learning

## 🌐 What is DOM?
The **Document Object Model (DOM)** is a programming interface for web documents. It represents the structure of an HTML or XML document as a tree of objects, allowing scripts to update the content, structure, and style of the document dynamically.

---

## 🔍 How to Select HTML Elements Using Selectors
### Key Methods:
1. **`getElementsByClassName()`**:
   - Selects all elements with a specific class name.
   ```javascript
   const elements = document.getElementsByClassName('example');
   console.log(elements);
   ```

2. **`getElementById()`**:
   - Selects a single element by its unique ID.
   ```javascript
   const element = document.getElementById('exampleId');
   console.log(element);
   ```

3. **`querySelector()`**:
   - Selects the first matching element for a CSS selector.
   ```javascript
   const element = document.querySelector('.example');
   console.log(element);
   ```

4. **`querySelectorAll()`**:
   - Selects all matching elements for a CSS selector.
   ```javascript
   const elements = document.querySelectorAll('div.example');
   console.log(elements);
   ```

---

## ✨ DOM Manipulation Methods
1. **`innerHTML`**:
   - Gets or sets the HTML content of an element.
   ```javascript
   element.innerHTML = '<p>New Content</p>';
   ```

2. **`innerText`**:
   - Gets or sets the text content of an element.
   ```javascript
   element.innerText = 'New Text';
   ```

3. **`createElement()`**:
   - Creates a new HTML element.
   ```javascript
   const newElement = document.createElement('div');
   newElement.innerText = 'Hello World';
   ```

4. **`appendChild()`**:
   - Appends a child element to a parent element.
   ```javascript
   parentElement.appendChild(newElement);
   ```

5. **`setAttribute()`**:
   - Sets an attribute for an element.
   ```javascript
   element.setAttribute('id', 'newId');
   ```

6. **`removeAttribute()`**:
   - Removes an attribute from an element.
   ```javascript
   element.removeAttribute('id');
   ```

---

## 🎯 What Are Events?
Events are actions or occurrences that happen in the browser (e.g., clicks, keypresses, mouse movements) that can be handled using JavaScript.

### Common Event Types:
- **`click`**: Triggered when an element is clicked.
- **`mouseover`**: Triggered when the mouse hovers over an element.
- **`keydown`**: Triggered when a key is pressed.
- **`load`**: Triggered when the page or a resource is fully loaded.

### Example of Adding an Event Listener:
```javascript
button.addEventListener('click', function() {
   alert('Button clicked!');
});
```

---

## 🧩 Tasks
1. **R&D on `eventListeners`**:
   - Explore the `addEventListener()` method for attaching multiple event handlers.
   - Investigate event delegation for dynamic content.
2. **Practice Scenario-Based Questions**:
   - Write a program to dynamically update a list based on user input.
   - Implement a button that changes the color of a div when clicked.
   - Create a form validation using DOM manipulation and events.
