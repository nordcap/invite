#Реализация страницы отправки приглашений на регистрацию на сайте

1. Страница состоит из строки меню в верхней части,
   области контента и статического футера. Положение меню фиксировано, футер не
   фиксирован но всегда снизу, то есть прокручивается вместе с контентом, но не может
   подниматься выше нижней границы окна, ширина страницы фиксированная. Строка меню
   содержит информацию о текущем пользователе, в данном случае только его имя, данная
   информация должна загружаться динамически (из json-заглушки). Основной контент это
   таблица приглашений и кнопка "пригласить в систему". Приглашение включает в себя дату,
   имя приглашаемого и статус, по всем полям возможна сортировка. Нажатие на
   кнопку "пригласить в систему" открывает диалог для приглашения нового пользователя.
   Данные нового пользователя заполняются в несколько шагов, после чего выводится
   сообщение об успешной отправке приглашения.
#Требования к технологиям:
1. основной фреймворк - AngularJS 1.5
2. инструмент для управления зависимостями - bower

#Требования к реализации:
1. приложение должно быть одностраничным
2. запрос данных с сервера всегда в формате json, в качестве ответов сервера подставлять
заглушки в виде статических json-файлов