OC.L10N.register(
    "password_policy",
    {
    "Password is expired, please use forgot password method to reset" : "密碼已到期。請使用忘記密碼方式重設",
    "Password must not have been used recently before." : "密碼不可以是近期使用過的。",
    "Password is among the 1,000,000 most common ones. Please make it unique." : "密碼出現在 1,000,000 個常用密碼列表內，請設定獨一無二的密碼。",
    "Password is present in compromised password list. Please choose a different password." : "密碼出現在洩露的密碼清單中。請選擇其它密碼。",
    "Password needs to be at least %s characters long" : "密碼需長於 %s 個字母",
    "Password needs to contain at least one numeric character." : "密碼需要包含至少一個數字。",
    "Password needs to contain at least one special character." : "密碼應包含一個特殊符號。",
    "Password needs to contain at least one lower and one upper case character." : "密碼應包含最少一個大寫與一個小寫。",
    "Password policy" : "密碼規範",
    "Allows admins to configure a password policy" : "允許管理者設定密碼策略",
    "Allow admin to define certain pre-conditions for password, e.g. enforce a minimum length" : "允許管理員定義密碼的某些條件，例如強制最小長度",
    "Minimum password length" : "密碼最小長度",
    "User password history" : "密碼重複使用（禁止用戶使用前幾次使用過的密碼）",
    "Number of days until user password expires" : "密碼到期天數",
    "Number of login attempts before the user account is blocked (0 for no limit)" : "次嘗試後用戶的帳戶將被鎖定（設為零則永不鎖定）",
    "Forbid common passwords" : "禁止常見的密碼",
    "Enforce upper and lower case characters" : "一定要各用一個大寫與小寫",
    "Enforce numeric characters" : "一定要用數字",
    "Enforce special characters" : "一定要用特殊符號",
    "Check password against the list of breached passwords from haveibeenpwned.com" : "將密碼送至haveibeenpwned.com以檢查該組密碼是否存在於外洩的資料集中",
    "This check creates a hash of the password and sends the first 5 characters of this hash to the haveibeenpwned.com API to retrieve a list of all hashes that start with those. Then it checks on the Nextcloud instance if the password hash is in the result set." : "此項檢查僅使用用戶輸入的密碼之前五個字母，將前五個字母雜湊後傳送到haveibeenpwned.com的API以獲得所有由這五個字母開頭之密碼雜湊值清單，而此清單將被下載回Nextcloud進行完整比對：亦即haveibeenpwned.com只會獲得密碼前五字元的雜湊值，而非完整密碼。",
    "Minimal length" : "最小長度",
    "days until user password expires" : "天密碼到期",
    "login attempts before the user account is blocked. (0 for no limit)" : "鎖定用戶帳號前的嘗試次數 (0 表示不限制)"
},
"nplurals=1; plural=0;");
