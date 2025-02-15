
# 🌟 Talentelgia Day One Learning

## 📊 SQL Queries Overview

### 🛠️ Basic SQL Queries
- **SELECT**: Retrieve specific data from a database table.
- **\***: Wildcard to select all columns.
- **IN**: Filter rows based on a list of values.
- **WHERE**: Apply conditions to filter rows.

### 📂 Types of Queries
1. **Raw Queries**:
   - Direct SQL commands executed in the database.
   - Example: `SELECT * FROM users WHERE age > 30;`
2. **ORM Queries**:
   - Use Object-Relational Mapping (ORM) tools to interact with the database.
   - Example (Django ORM): `User.objects.filter(age__gt=30)`

### ⚖️ Difference Between Raw and ORM Queries
| Feature            | Raw Queries                       | ORM Queries                     |
|--------------------|-----------------------------------|---------------------------------|
| Performance        | Faster                            | Slightly slower                 |
| Complexity         | Requires SQL knowledge            | Easier to use                   |
| Maintainability    | Harder to maintain                | More maintainable               |
| Security           | Not Secure(SQL Injection)         | Secure                          |


### 🔑 Types of SQL Commands
1. **DDL (Data Definition Language)**: Define and manage database structures.
   - Example: `CREATE TABLE`, `ALTER TABLE`.
2. **DML (Data Manipulation Language)**: Manipulate data in tables.
   - Example: `INSERT`, `UPDATE`, `DELETE`.
3. **DQL (Data Query Language)**: Query data.
   - Example: `SELECT`.
4. **DCL (Data Control Language)**: Manage access rights.
   - Example: `GRANT`, `REVOKE`.
5. **TCL (Transaction Control Language)**: Manage database transactions.
   - Example: `COMMIT`, `ROLLBACK`.

### 🚀 Enhancing SQL Queries
- **Indexing**: Create indexes on frequently queried columns to improve performance.
- **Selective Column Selection**: Retrieve only necessary columns instead of using `*`.

---

## 🖇️ Git Essentials Overview

### 🔍 R&D and Learning Topics
1. **README.md File**: Document project details.
2. **.gitignore**: Exclude files from version control.
3. **License**: Specify terms of project use.
4. **Hooks**: Automate tasks during Git events.
5. **GIT Tokens**: Secure authentication for remote repositories.
6. **Inviting Collaborators**: Share access with team members.

### 🌐 HTML Enhancements
- **Async and Defer**: Optimize script loading.
- **Meta Tags**: Improve SEO and define webpage metadata.

### 📝 Git Workflow Steps
1. **Configuring Git**:
   - `git config --global user.name "Your Name"`
   - `git config --global user.email "you@example.com"`
2. **Creating a Repository**:
   - `git init`
3. **Adding Files**:
   - `git add <file-name>`
   - `git add .` (add all changes)
4. **Committing Changes**:
   - `git commit -m "Commit message"`
5. **Branching**:
   - Create: `git branch <branch-name>`
   - Switch: `git checkout <branch-name>`
6. **Cloning Repositories**:
   - `git clone <repository-url>`
7. **Generating Tokens**: Secure access to remote repositories.
8. **Pushing Using Tokens**:
   - `git push https://<token>@github.com/<repository>.git`

### 🌟 Best Practices
- Always include a well-structured `README.md` file to describe your project.
