export const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase()) && email.length <= 50;
};

export const validatePassword = (password) => {
  const length = password.length;
  return length >= 4 && length <= 50;
};

export const validateUser = (email, password) => {
  if (email === 'test@rapptrlabs.com' && password === 'Test123') {
    return {
      user_id: 16,
      user_email: 'test@rapptrlabs.com',
      user_username: 'testuser',
      user_is_active: 1,
      user_profile_image:
        'http://dev.rapptrlabs.com/Tests/images/taylor_avatar.png',
      user_last_active_epoch: 1544680026,
      user_creation_epoch: 1544713200,
      user_is_new: 1,
      user_token:
        '6dd4737a8b7ec61313ae5e900420d46815e1d13b2902be71b97a8fbf1f421a3e',
    };
  }
};
