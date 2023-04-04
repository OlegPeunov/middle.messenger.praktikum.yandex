/* eslint-disable */
import { Block } from '../../utils/Block';
import editProfileTpl from './edit-profile.hbs';
import { HeaderPage } from '../../partials/header/index';
import { InputValidator } from '../../utils/InputValidator';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import { Button } from '../../partials/button/index';
/* eslint-enable */

interface editProfileProps {

}
// eslint-disable-next-line
export class EditProfile extends Block<editProfileProps>{
  constructor(props: editProfileProps) {
    super('div', props);
  }

  init() {
    const inputValidator = new InputValidator('');
    const validateButton = {
      input1: true,
      input2: true,
      input3: true,
      input4: true,
      input5: true,
      input6: true,
      input7: true,
      input8: true,
    };

    function checkBtn(btn) {
      if (!validateButton.input1 && !validateButton.input2) {
        btn.setFalse();
      } else {
        btn.setTrue();
      }
    }

    this.children.headerBlock = new HeaderPage({});
    this.children.inputMail = new Input({
      name: 'email',
      id: 'email-signup',
      type: 'email',
      placeholder: 'Почта',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputMail.get(), 'email');
          this.children.errPlaceMail.setProps({ label: res.message });
          validateButton.input1 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputMail.get(), 'email');
          this.children.errPlaceMail.setProps({ label: res.message });
          validateButton.input1 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceMail = new Error({
      label: '',
      id: 'error-email-signup',
    });

    this.children.inputLogin = new Input({
      name: 'login',
      id: 'login-signin',
      type: 'login',
      placeholder: 'Логин',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputLogin.get(), 'login');
          this.children.errPlaceLogin.setProps({ label: res.message });
          validateButton.input2 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputLogin.get(), 'login');
          this.children.errPlaceLogin.setProps({ label: res.message });
          validateButton.input2 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceLogin = new Error({
      label: '',
      id: 'error-login-signup',
    });

    this.children.inputFirst = new Input({
      name: 'first_name',
      id: 'first_name-signup',
      type: 'login',
      placeholder: 'Имя',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputFirst.get(), 'first_name');
          this.children.errPlaceFirst.setProps({ label: res.message });
          validateButton.input3 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputFirst.get(), 'first_name');
          this.children.errPlaceFirst.setProps({ label: res.message });
          validateButton.input3 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceFirst = new Error({
      label: '',
      id: 'error-first_name-signup',
    });

    this.children.inputSecond = new Input({
      name: 'second_name',
      id: 'second_name-signup',
      type: 'login',
      placeholder: 'Фамилия',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputSecond.get(), 'second_name');
          this.children.errPlaceSecond.setProps({ label: res.message });
          validateButton.input4 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputSecond.get(), 'second_name');
          this.children.errPlaceSecond.setProps({ label: res.message });
          validateButton.input4 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceSecond = new Error({
      label: '',
      id: 'error-second_name-signup',
    });

    this.children.inputTel = new Input({
      name: 'phone',
      id: 'phone-signup',
      type: 'tel',
      placeholder: 'Телефон',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputTel.get(), 'phone');
          this.children.errPlaceTel.setProps({ label: res.message });
          validateButton.input5 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputTel.get(), 'phone');
          this.children.errPlaceTel.setProps({ label: res.message });
          validateButton.input5 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlaceTel = new Error({
      label: '',
      id: 'error-phone-signup',
    });

    this.children.inputPassOne = new Input({
      name: 'password_one',
      id: 'password_one',
      type: 'password',
      placeholder: 'Пароль',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputPassOne.get(), 'password_one');
          this.children.errPlacePassOne.setProps({ label: res.message });
          validateButton.input6 = res.err;
          this.children.signUpButton.setProps({ active: false });
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputPassOne.get(), 'password_one');
          this.children.errPlacePassOne.setProps({ label: res.message });
          validateButton.input6 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlacePassOne = new Error({
      label: '',
      id: 'error-password_one',
    });

    this.children.inputPassTwo = new Input({
      name: 'password_two',
      id: 'password_two',
      type: 'password',
      placeholder: 'Пароль',
      events: {
        focus: () => {
          const res = inputValidator.regularCheck(this.children.inputPassTwo.get(), 'password_two');
          this.children.errPlacePassOne.setProps({ label: res.message });
          validateButton.input7 = res.err;
          this.children.signUpButton.setProps({ active: false });
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          const res = inputValidator.regularCheck(this.children.inputPassTwo.get(), 'password_two');
          this.children.errPlacePassOne.setProps({ label: res.message });
          validateButton.input7 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errPlacePassTwo = new Error({
      label: '',
      id: 'error-password_two',
    });

    this.children.inputDisplayName = new Input({
      name: 'display_name',
      id: 'first_name-edit',
      type: 'login',
      placeholder: 'Отоброжаемое имя',
      events: {
        focus: () => {
          // eslint-disable-next-line
          const res = inputValidator.regularCheck(this.children.inputDisplayName.get(), 'display_name');
          this.children.errDisplayName.setProps({ label: res.message });
          validateButton.input8 = res.err;
          checkBtn(this.children.signUpButton);
        },
        blur: () => {
          // eslint-disable-next-line
          const res = inputValidator.regularCheck(this.children.inputDisplayName.get(), 'display_name');
          this.children.errDisplayName.setProps({ label: res.message });
          validateButton.input8 = res.err;
          checkBtn(this.children.signUpButton);
        },
      },
    });
    this.children.errDisplayName = new Error({
      label: '',
      id: 'error-first_name-edit',
    });

    this.children.signUpButton = new Button({
      active: true,
      id: 'popup-button-signup',
      className: 'popup__button-active',
      label: 'Авторизоваться',
      events: {
        click: (event:Event) => {
          event.preventDefault();

          const res1 = inputValidator.regularCheck(this.children.inputMail.get(), 'email');
          this.children.errPlaceMail.setProps({ label: res1.message });
          validateButton.input1 = res1.err;
          checkBtn(this.children.signUpButton);

          const res2 = inputValidator.regularCheck(this.children.inputLogin.get(), 'login');
          this.children.errPlaceLogin.setProps({ label: res2.message });
          validateButton.input2 = res2.err;
          checkBtn(this.children.signUpButton);
          const res3 = inputValidator.regularCheck(this.children.inputFirst.get(), 'first_name');
          this.children.errPlaceFirst.setProps({ label: res3.message });
          validateButton.input3 = res3.err;
          checkBtn(this.children.signUpButton);
          const res4 = inputValidator.regularCheck(this.children.inputSecond.get(), 'second_name');
          this.children.errPlaceSecond.setProps({ label: res4.message });
          validateButton.input4 = res4.err;
          checkBtn(this.children.signUpButton);
          const res5 = inputValidator.regularCheck(this.children.inputTel.get(), 'phone');
          this.children.errPlaceTel.setProps({ label: res5.message });
          validateButton.input5 = res5.err;
          checkBtn(this.children.signUpButton);
          // eslint-disable-next-line
          const res6 = inputValidator.regularCheck(this.children.inputPassOne.get(), 'password_one');
          this.children.errPlacePassOne.setProps({ label: res6.message });
          validateButton.input6 = res6.err;
          this.children.signUpButton.setProps({ active: false });
          checkBtn(this.children.signUpButton);
          // eslint-disable-next-line
          const res7 = inputValidator.regularCheck(this.children.inputPassTwo.get(), 'password_two');
          this.children.errPlacePassOne.setProps({ label: res7.message });
          validateButton.input7 = res7.err;
          this.children.signUpButton.setProps({ active: false });

          checkBtn(this.children.signUpButton);
          // eslint-disable-next-line
        const btnToEnable = (!validateButton.input1 && !validateButton.input2 && !validateButton.input3 && !validateButton.input4 && !validateButton.input5 && !validateButton.input6 && !validateButton.input7)

          if (btnToEnable) {
            console.log({
              inputMail: this.children.inputMail.get(),
              login: this.children.inputLogin.get(),
              inputFirst: this.children.inputFirst.get(),
              inputSecond: this.children.inputSecond.get(),
              inputTel: this.children.inputTel.get(),
              inputPassOne: this.children.inputPassOne.get(),
              inputPassTwo: this.children.inputPassTwo.get(),
              inputDisplayName: this.children.inputDisplayName.get(),
            });
          }
        },
      },
    });
  }

  render() {
    return this.compile(editProfileTpl, this.props);
  }
}
