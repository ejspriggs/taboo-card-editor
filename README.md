# taboo-card-editor
Website users can CRUD user accounts, and having chosen a user account, can CRUD cards as that user.  Should be modular enough to be adapted to serve as a config component of a larger project where you can play the game online, later.

![users-narrow](readme_images/users-narrow.jpg)
![users-wide](readme_images/users-wide.jpg)
![cards-narrow](readme_images/cards-narrow.jpg)
![cards-wide](readme_images/cards-wide.jpg)
![entity-relationship diagram](readme_images/erd.jpg)

| URL             | REST Operation     | HTTP Verb | CRUD Action   | EJS View             |
| :-------------- | :----------------- | :-------: | :-----------: | :------------------- |
| /nuke           | N/A                | GET       | delete/create | N/A                  |
| /               | redirect: /users   | GET       | N/A           | N/A                  |
| /users          | index              | GET       | read          | index-users.ejs      |
| /users/new      | form for creation  | GET       | N/A           | user-create-edit.ejs |
| /users/:id      | show               | GET       | read          | user-show.ejs        |
| /users/edit/:id | form for edit      | GET       | read          | user-create-edit.ejs |
| /users          | add                | POST      | create        | N/A                  |
| /users/:id      | edit               | PUT       | update        | N/A                  |
| /users/:id      | destroy            | DELETE    | delete        | N/A                  |
| /cards          | index              | GET       | read          | index-cards.ejs      |
| /cards/new      | form for creation  | GET       | N/A           | card-create-edit.ejs |
| /cards/:id      | show               | GET       | read          | card-show.ejs        |
| /cards/edit/:id | form for edit      | GET       | read          | card-create-edit.ejs |
| /cards          | add                | POST      | create        | N/A                  |
| /cards/:id      | edit               | PUT       | update        | N/A                  |
| /cards/:id      | destroy            | DELETE    | delete        | N/A                  |