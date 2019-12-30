<template>

    <div class="settings-page">
        <div class="container page">
            <div class="row">

                <div class="col-md-6 offset-md-3 col-xs-12">
                    <h1 class="text-xs-center">Your Settings</h1>

                    <form>
                        <fieldset>
                            <fieldset class="form-group">
                                <input class="form-control" v-model="user.image" type="text" placeholder="URL of profile picture">
                            </fieldset>
                            <fieldset class="form-group">
                                <input v-model="user.username" class="form-control form-control-lg" type="text" placeholder="Your Name">
                            </fieldset>
                            <fieldset class="form-group">
                                <textarea v-model="user.bio" class="form-control form-control-lg" rows="8" placeholder="Short bio about you"></textarea>
                            </fieldset>
                            <fieldset class="form-group">
                                <input v-model="user.email" class="form-control form-control-lg" type="text" placeholder="Email">
                            </fieldset>
                            <fieldset class="form-group">
                                <input v-model="user.password" class="form-control form-control-lg" type="password" placeholder="Password">
                            </fieldset>
                            <button @click="updateUser()" class="btn btn-lg btn-primary pull-xs-right">
                                Update Settings
                            </button>
                        </fieldset>
                    </form>
                    <hr>
                    <button class="btn btn-outline-danger">
                        Or click here to logout.
                    </button>
                </div>

            </div>
        </div>
    </div>

</template>

<script>

    import {Component,Vue} from 'vue-property-decorator';
    import user from '@/store/modules/users'

    @Component
    export default class Settings extends Vue {

        user = user.user || {}

         async updateUser() {
            console.log("Updating user profile")
            await user.updateProfile({
                email: this.user.email,
                bio:this.user.bio,
                image:this.user.image,
                username:this.user.username,
                password:this.user.password
            });
        }
    }

</script>