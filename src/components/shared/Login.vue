<template>
<w-modal v-if="showModal" @close="handleClosingEvent">
  <div slot="content">
      <form @submit.prevent="handleSubmit">
        <fieldset>
          <input id="phone" type="text" name="phone" v-model="phone" required>
          <label for="phone">Broj telefona</label>
          <div class="after"></div>
        </fieldset>
        <fieldset>
          <input id="password" type="password" name="password" v-model="password" required>
          <label for="password">Lozinka</label>
          <div class="after"></div>
        </fieldset>
        <fieldset class="flex-center">
          <button @click.prevent="handleSubmit" class="btn btn-danger">Uloguj se</button>
        </fieldset>
        <b-alert :show="errMsg !== null" variant="danger">{{ errMsg }}</b-alert>
      </form>
  </div>
</w-modal>
</template>

<script>
import wModal from '@/components/shared/wModal'
import authService from '@/services/auth'
export default {
  components: {
    wModal
  },
  props: {
    showModal: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  data () {
    return {
      phone: '',
      password: '',
      errMsg: null
    }
  },
  methods: {
    handleClosingEvent () {
      this.$emit('closeLoginModal')
    },
    handleSubmit () {
      if (this.phone == '' || this.password == '') {
        this.errMsg = "Morate uneti broj telefona i lozinku"
        setTimeout(() => {
            this.errMsg = null
          },3000)
        return null
      }
      authService.authenticate(
        {
          phone: this.phone,
          password: this.password
        },
        token => {
          this.$router.push({
            name: 'user-profile'
          })
        },
        err => {
          setTimeout(() => {
            this.errMsg = null
          },3000)
          this.errMsg = 'Broj telefona ili lozinka nisu dobro uneti.'
        }
      )
    }
  }
}
</script>

<style scoped>

form {
  width: 300px;
  margin: 20px auto;
}

fieldset {
  position: relative;
  border: none;  
}
.alert-danger {
    color: white;
    font-size: 12px;
    background-color: red;
    border-color: white;
    margin-top: 12px;
}

label {
  position: absolute;  
  top: 18px;
  color: rgba(0, 0, 0, 0.3);
  transform-origin: left;
  transition: all 0.3s ease;
}

input:focus ~ label {
  color: red;  
}

input:focus ~ label,
input:valid ~ label {
  top: 0;
  transform: scale(0.6, 0.6);
}

input {
  font-size: 20px;  
  width: 100%;
  border: none;  
  margin-top: 25px;
}

input:focus {
  outline: none;
}

.after {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, red 50%, transparent 50%);
  background-color: rgba(0, 0, 0, 0.3);
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: all 0.6s ease;
}

input:focus ~ .after {
  background-position: 0 0;
}

button {
  position: relative;
  width: 100%;
  font-size: 20px;  
  font-family: system-ui, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  margin-top: 20px;
  padding: 2px 10px;
  color: rgba(0, 0, 0, 0.4);
  border: none;
  /* background: linear-gradient(to right, red 50%, transparent 50%); */
  background-color: red;
  background-size: 200% 100%;
  background-position: 100% 0;
  transition: all 0.6s ease;
}

button:before {
  position: absolute;
  content: "Uloguj se";
  top: 2px;
  bottom: 2px;
  left: 2px;
  right: 2px;
  display: block;
  background-color: red;
  color: white;
}

button:active,
button:focus,
button:hover {
  outline: none;
  background-position: 0 0;
  color: red;
}
</style>

