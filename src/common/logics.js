export function is_username(asValue) {
  var regExp = /^[a-zA-Z0-9]{4,12}$/;

  //   닉네임은 최소 4자 이상, 12자 이하 알파벳 대소문자(a-z, A-Z), 숫자(0-9)로 구성됩니다.

  return regExp.test(asValue);
}

export function is_password(asValue) {
  var regExp = /^(?=.*[a-zA-Z])(?=.*\d)(?=.*\W).{8,20}$/;

  //   비밀번호는 최소 8자 이상, 20자 이하 알파벳 대소문자, 숫자(0-9), 특수문자로 구성됩니다."

  return regExp.test(asValue);
}
