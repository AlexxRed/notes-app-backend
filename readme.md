### Команди:

- `npm run start:dev` &mdash; старт сервера в режимі розробки (development)
- `npm run lint` &mdash; запустити виконання перевірки коду з eslint, необхідно виконувати перед кожним PR та виправляти всі помилки лінтера
- `npm lint:fix` &mdash; та ж перевірка лінтера, але з автоматичними виправленнями простих помилок

1. Створити файл .env в корені проекту
2. Додати до нього змінну DB_HOST="mongodb+srv://Alex:sd22sd55hh76@cluster0.7kwqcqm.mongodb.net/To-do?retryWrites=true&w=majority"
3. Запустити сервер в режимі розробки 'npm run start:dev'
4. встановити всі залежності 'npm i'
5. Отримання запитів з бази данних
   http://localhost:5000/api/notes/ - Get all notes.
   http://localhost:5000/api/notes/ - Create a note object.
   http://localhost:5000/api/notes/63299ef18be532620921f47e - Retrieve item.
   http://localhost:5000/api/notes/:id - Remove item.
   http://localhost:5000/api/notes/:id - Edit item.
   http://localhost:5000/api/notes/archive - Get archive notes.
   http://localhost:5000/api/notes/stats - All notes statistic.
   http://localhost:5000/api/notes/:id/archive - Change archive or not
