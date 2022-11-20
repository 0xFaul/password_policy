OC.L10N.register(
    "password_policy",
    {
    "Password is expired, please use forgot password method to reset" : "Термін дії пароля закінчився, скористайтеся методом «Забули пароль», щоб скинути його",
    "Password must not have been used recently before." : "Пароль не повинен використовуватися нещодавно.",
    "Password is among the 1,000,000 most common ones. Please make it unique." : "Пароль",
    "Password is present in compromised password list. Please choose a different password." : "Пароль присутній у списку зламаних паролів. Виберіть інший пароль.",
    "Password needs to be at least %s characters long." : "Довжина пароля має бути не менше %s символів.",
    "Password needs to contain at least one numeric character." : "Пароль має містити принаймні одну цифру.",
    "Password needs to contain at least one special character." : "Пароль повинен містити хоча б один спеціальний символ.",
    "Password needs to contain at least one lower and one upper case character." : "Пароль повинен містити принаймні один нижній і один верхній регістри.",
    "Password policy" : "Політика паролей",
    "Allows admins to configure a password policy" : "Дозволяє адміністраторам налаштовувати політику паролів",
    "Allow admin to define certain pre-conditions for password, e.g. enforce a minimum length" : "Дозволити адміністратору визначати певні попередні умови для пароля, напр. дотримуватися мінімальної довжини",
    "Saved" : "Збережено",
    "Minimum password length" : "Мінімальна довжина пароля",
    "User password history" : "Історія паролів користувача",
    "Number of days until user password expires" : "Кількість днів до закінчення терміну дії пароля користувача",
    "Number of login attempts before the user account is blocked (0 for no limit)" : "Кількість спроб входу до блокування облікового запису користувача (0 без обмежень)",
    "Forbid common passwords" : "Заборонити загальні паролі",
    "Enforce upper and lower case characters" : "Застосування символів верхнього та нижнього регістру",
    "Enforce numeric characters" : "Застосування цифрових символів",
    "Enforce special characters" : "Застосування спеціальних символів",
    "Check password against the list of breached passwords from haveibeenpwned.com" : "Перевірте пароль зі списком зламаних паролів на сайті haveibeenpwned.com",
    "This check creates a hash of the password and sends the first 5 characters of this hash to the haveibeenpwned.com API to retrieve a list of all hashes that start with those. Then it checks on the Nextcloud instance if the password hash is in the result set." : "Ця перевірка створює хеш пароля та надсилає перші 5 символів цього хешу до API haveibeenpwned.com для отримання списку всіх хешів, які починаються з них. Потім він перевіряє хмару Nextcloud, чи присутній хеш пароля в наборі результатів.",
    "Unknown error" : "Невідома помилка",
    "Minimal length has to be a non negative number" : "Мінімальна довжина має бути невід’ємним числом",
    "History size has to be a non negative number" : "Розмір історії має бути невід’ємним числом",
    "Expiration days have to be a non negative number" : "Дні закінчення терміну дії мають бути невід’ємними числами",
    "Maximum login attempts have to be a non negative number" : "Максимальна кількість спроб входу має бути невід’ємним числом",
    "Error while saving" : "Помилка під час збереження"
},
"nplurals=4; plural=(n % 1 == 0 && n % 10 == 1 && n % 100 != 11 ? 0 : n % 1 == 0 && n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 12 || n % 100 > 14) ? 1 : n % 1 == 0 && (n % 10 ==0 || (n % 10 >=5 && n % 10 <=9) || (n % 100 >=11 && n % 100 <=14 )) ? 2: 3);");
