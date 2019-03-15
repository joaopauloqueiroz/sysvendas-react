validateUserLogin = (data) => {
    data.assert('email', 'O email não pode estar vazio.').notEmpty();
    data.assert('email', 'O email não e válido.').isEmail();
    data.assert('password','A senha não pode estar vazia.').notEmpty();

    return data.validationErrors();
}

module.exports = {validateUserLogin}
