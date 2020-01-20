# crud

## 起步

- 初始化
- 模板处理

## 路由设计

| function | path             | get params | post params                 | others                        |
| -------- | ---------------- | ---------- | --------------------------- | ----------------------------- |
| GET      | /students        |            |                             | render index                  |
| GET      | /students/new    |            |                             | render create page            |
| POST     | /students        |            | name, gender, age, hobbies  | handle create page            |
| GET      | /students/edit   | id         |                             | get info of student info page |
| POST     | /students/edit   |            | id,name,gender,age, hobbies | handle edit student page      |
| POST     | /students/delete | id         |                             | delete student page           |
