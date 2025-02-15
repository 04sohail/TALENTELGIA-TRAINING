
# 🌟 Talentelgia Week One Learning

---

## SQL Queries and Enhancements
### Basic SQL Queries
1. **`SELECT`**: Retrieve specific columns or all columns (`*`) from a table.
2. **`WHERE`**: Filter records based on conditions.
3. **`IN`**: Select records where a column matches any value in a list.

### Types of Queries
- **Raw Queries**: Direct SQL statements.
- **ORM Queries**: Queries generated using Object-Relational Mapping tools.

### SQL Commands
- **DDL**: Data Definition Language (e.g., `CREATE`, `ALTER`, `DROP`).
- **DML**: Data Manipulation Language (e.g., `INSERT`, `UPDATE`, `DELETE`).
- **DQL**: Data Query Language (e.g., `SELECT`).
- **DCL**: Data Control Language (e.g., `GRANT`, `REVOKE`).
- **TCL**: Transaction Control Language (e.g., `COMMIT`, `ROLLBACK`).

### How to Enhance SQL Queries
- **Indexing**: Improves search performance.
- **Selective Columns**: Retrieve only the necessary columns.

---

## Git and GitHub Basics
### Learning Git
1. **Configuring User Info**:
   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "youremail@example.com"
   ```
2. **Creating and Managing Repositories**:
   - Initialize: `git init`
   - Clone: `git clone <repo-url>`
3. **Adding and Committing**:
   ```bash
   git add .
   git commit -m "Commit message"
   ```
4. **Branching**:
   - Create: `git branch <branch-name>`
   - Switch: `git checkout <branch-name>`
   - Merge: `git merge <branch-name>`

### Advanced GitHub Concepts
- Generating tokens and pushing using tokens.
- Inviting collaborators to repositories.
- Using `.gitignore`, `LICENSE`, and `README.md` files effectively.

---

## JavaScript Fundamentals
### Strings
- Common Methods: `charAt()`, `concat()`, `endsWith()`, `replace()`, `slice()`, `split()`, `toUpperCase()`, `toLowerCase()`, `trim()`, `.length`.
- Example:
   ```javascript
   const str = "Hello, World!";
   console.log(str.toUpperCase());
   ```

### Arrays
- Common Methods: `map()`, `filter()`, `reduce()`, `push()`, `pop()`, `slice()`, `join()`, `flat()`.
- Example:
   ```javascript
   const arr = [1, 2, 3, 4];
   const doubled = arr.map(num => num * 2);
   console.log(doubled);
   ```

### Functions
- **Callback Functions**:
   ```javascript
   function greet(name, callback) {
       callback(name);
   }
   greet("Alice", name => console.log("Hello, " + name));
   ```
- **Arrow Functions**: Concise syntax for writing functions.

---

## DOM Manipulation and Events
### Selecting HTML Elements
- **`getElementById()`**: Selects an element by ID.
- **`querySelectorAll()`**: Selects all matching elements.

### DOM Manipulation Methods
- **`innerHTML`**: Modify HTML content.
- **`createElement()`**: Create new HTML elements.
- **`appendChild()`**: Append an element to a parent.

### Events
- Common Event Types: `click`, `mouseover`, `keydown`.
- Adding Event Listeners:
   ```javascript
   button.addEventListener('click', () => alert('Clicked!'));
   ```

---

## Practice and Research Tasks
1. Write scenario-based programs for strings, arrays, and functions.
2. Explore advanced features like event delegation and prototypes.
3. Create a dynamic to-do list using DOM and event listeners.
4. Research advanced GitHub features and workflow optimizations.
