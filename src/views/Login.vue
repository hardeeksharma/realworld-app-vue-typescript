<template>

    <div class="auth-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Sign In</h1>
                    <p class="text-xs-center">
                        <router-link to="/register">Need an account?</router-link>
                    </p>

                    <ul v-if="loginError" class="error-messages">
                        <li>{{loginError}}</li>
                    </ul>

                    <form>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" v-model="email" type="text" placeholder="Email">
                        </fieldset>
                        <fieldset class="form-group">
                            <input class="form-control form-control-lg" v-model="password" type="password"
                                   placeholder="Password">
                        </fieldset>
                        <button @click.prevent="login" class="btn btn-lg btn-primary pull-xs-right">
                            Sign In
                        </button>
                    </form>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    import {Vue, Component} from "vue-property-decorator";
    import user from '@/store/modules/users'

    @Component
    export default class Login extends Vue {

        email = ''
        password = ''
        loginError = ''

        login() {
            console.log(`Login with ${this.email}`)
            user.login({
                email: this.email,
                password: this.password
            }).then(() => {
                this.$router.push('/')
            }).catch(err => {
                this.loginError = "Invalid username of password";
            })

        }
    }

</script>