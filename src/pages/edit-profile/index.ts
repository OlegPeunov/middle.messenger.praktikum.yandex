/* eslint-disable */
import { Block } from '../../utils/Block';
import editProfileTpl from './edit-profile.hbs';
import { InputValidator } from '../../utils/InputValidator';
import { Input } from '../../partials/input/index';
import { Error } from '../../partials/error/index';
import { Button } from '../../partials/button/index';
import AuthController from '../../controllers/AuthController';
import { UpdateData } from '../../api/AuthAPI';
import store from '../../utils/Store';
import { withStore } from '../../utils/Store';

/* eslint-enable */
interface editProfileProps {}
// eslint-disable-next-line
export class EditProfileBase extends Block <editProfileProps>{
  
  constructor(props: editProfileProps) {
    super('div', props);
  }

  async init() {

    const inputValidator = new InputValidator();
    const validateButton: any = {
      input1: false,
      input2: false,
      input3: false,
      input4: false,
      input5: false,
      input6: false,
      input7: false,
      input8: false,
    };

    function checkBtn(btn:any) {
      if (!validateButton.input1 && !validateButton.input2) {
        btn.setFalse();
      } else {
        btn.setTrue();
      }
    }

    // this.children.headerBlock = new HeaderPage({});
    const profileData = store.getState().user;

    this.children.inputMail = new Input({
      name: 'email',
      id: 'email-signup',
      type: 'email',
      placeholder: 'Почта',
      value: profileData.email,
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
      value: profileData.login,
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
      value: profileData.first_name,
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
      value: profileData.second_name,
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
      value: profileData.phone,
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

    this.children.inputDisplayName = new Input({
      name: 'display_name',
      id: 'first_name-edit',
      type: 'login',
      placeholder: 'Отоброжаемое имя',
      value: profileData.display_name,
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
      label: 'Сохранить',
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

          checkBtn(this.children.signUpButton);
          // eslint-disable-next-line
        const btnToEnable = (!validateButton.input1 && !validateButton.input2 && !validateButton.input3 && !validateButton.input4 && !validateButton.input5)

          if (btnToEnable) {
            this.onSubmit()
          }
        },
      },
    });

  }

  onSubmit() {
    const values = Object
      .values(this.children)
      .filter(child => child instanceof Input)
      .map((child) => ([(child as Input).getName(), (child as Input).getValue()]))

    const data = Object.fromEntries(values);

    console.log(data)

    AuthController.updateUser(data as UpdateData);
  }

  render() {
    return this.compile(editProfileTpl, this.props);
  }
}

const withUser = withStore((state:any) => ({...state.user}));
export const EditProfile = withUser(EditProfileBase);
