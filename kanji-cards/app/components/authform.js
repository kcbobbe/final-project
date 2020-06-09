// import Component from '@glimmer/component';

// export default class AuthformComponent extends Component {
// }

// from ember simple auth
import { inject as service } from '@ember/service';
import Component from '@ember/component';
import config from '../config/environment';

export default Component.extend({
  session: service('session'),

  actions: {
    async authenticateWithOAuth2() {
      try {
        let { identification, password } = this;
        await this.get('session').authenticate('authenticator:oauth2', identification, password);

        // if (this.rememberMe) {
        //   this.get('session').set('store.cookieExpirationTime', 60 * 60 * 24 * 14);
        // }
      } catch (response) {
        console.log("didn't work")
        // let responseBody = await response.clone().json();
        // this.set('errorMessage', responseBody);
      }
    },

    updateIdentification(e) {
      this.set('identification', e.target.value);
    },

    updatePassword(e) {
      this.set('password', e.target.value);
    },

    // updateRememberMe(e) {
    //   this.set('rememberMe', e.target.checked);
    // },
  }
});
