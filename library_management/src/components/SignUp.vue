<template>
    <div class="register">
        <form>
            <h1>Sign Up</h1>
            <input type="text" v-model="name" placeholder="Enter Name" required/>
            <input type="text" v-model="email" placeholder="Enter Email" required/>
            <input type="password" v-model="password" placeholder="Enter Password" required/>
            <button type="submit" v-on:click="signUp">Sign Up</button>
        </form>
        <p>
            <router-link to="/login">
                Already have an account? Login here
            </router-link>
        </p>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'SignUp',
    data() {
        return {
            errors: '',
            name: '',
            email: '',
            password: ''
        }
    },
    methods: {
        async signUp() {

            this.errors = [];

            if (!this.name) {
                this.errors.push("Name required.");
            }
           else if (!this.email) {
                this.errors.push('Email required.');
            } 
            else if (!this.validEmail(this.email)) {
                this.errors.push('Valid email required.');
                alert("Valid email required.");
            }
            else if(!this.password){
                this.errors.push('Password required.');
            } 
        
            console.log(this.errors);
            if(!this.errors.length){
                let result = await axios.post("http://localhost:3000/users", {
                    name: this.name,
                    email: this.email,
                    password: this.password
                });

                if (result.status == 201) {
                    localStorage.setItem("user-info", JSON.stringify(result.data))
                    this.$router.push({ name: 'Home' })
                }
            }
        },
        validEmail: function (email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
        }    
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'LogIn' })
        }
    }
}
</script>
<style scoped>
#h1 {
    padding-left: 20px;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
}

.register input,
button {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}

.register button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}

.register h1 {
    width: 300px;
    height: 40px;
    padding-left: 70px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
}

.register p {
    width: 300px;
    padding-left: 10px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
}
</style>