const checkFunctions = {
  checkuserName: (userName) => {
    if (userName.length === 1 || userName.length > 7) return -1;
    else if (userName.length === 0) return 0;
    else return 1;
  },

  checkuser_id: (id) => {
    if (!id.length) return 0;
    if (id.length < 4) return -1;
    if (!/[0-9a-zA-Z]/.test(id)) return -2;
    return 1;
  },

  checkpassword: (pw) => {
    if (!pw.length) return 0;
    if (pw.length < 4) return -1;
    return 1;
  },
  checksamePw: (checkPw, pw) => {
    if (!checkPw.length) return 0;
    if (pw !== checkPw) return -1;
    return 1;
  },
  checkemail: (email) => {
    if (!email.length) return 0;
    if (!/[a-z0-9._-]*@[a-z0-9_-]+\.[a-z]+/.test(email)) return -1;
    return 1;
  },

  checknickName: (nickName) => {
    if (nickName.length === 0) return 0;
    if (nickName.length === 1) return -1;
    return 1;
  },
};

const defaultValid = {
  user_id: 0,
  userName: 0,
  password: 0,
  samePw: 0,
  email: 0,
  nickName: 0,
};

export { checkFunctions, defaultValid };
