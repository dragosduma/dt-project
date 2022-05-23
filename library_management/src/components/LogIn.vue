<template>
    <div class="login">
        <h1>Log In</h1>
        <form>
            <input type="text" v-model="email" placeholder="Enter Email" required/>
            <input type="password" v-model="password" placeholder="Enter Password" required/>
            <button type="submit" v-on:click="logIn" >Log in</button>
        </form>
        <p>
            <router-link to="/signup">
                Don't have an account? Register here
            </router-link>
        </p>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LogIn',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        async logIn() {
            let result = await axios.get(
                `http://localhost:3000/users?email=${this.email}&password=${this.password}`
            )

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'Home' })
            }
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push({ name: 'Home' })
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

.login input,
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

.login button {
    width: 320px;
    height: 40px;
    border: 1px solid skyblue;
    background: skyblue;
    color: #fff;
    cursor: pointer;
}

.login h1 {
    width: 300px;
    height: 40px;
    padding-left: 80px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
}

.login p {
    width: 300px;
    padding-left: 10px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
}
</style>