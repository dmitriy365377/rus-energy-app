
export interface Errors {
    personalAccount?: string,
    password?: string
}

export function validate(values: any) {
    let errors: Errors = {}

    if (!values.personalAccount) {
        errors.personalAccount = "Номер лицевого счета не введен"
    } else if (values.personalAccount.length <= 10) {
        errors.personalAccount = "Номер лицевого счета должен состоять из 11 цифр"
    }

    if (!values.password) {
        errors.password = "Вы забыли ввести пароль"
    } else if (values.password.length < 10) {
        errors.password = "Длина пароля меньше 10 символов"
    }

    return errors;
}