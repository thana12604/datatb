<template>
  <v-form v-model="valid">
    <v-card>
      <v-container>
        <h1 align="center">Register</h1>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="name"
              :rules="rules"
              hide-details="auto"
              label="Firstname"
              required
              filled
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="lastname"
              :rules="rules"
              hide-details="auto"
              label="Lastname"
              required
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="id"
              :rules="rules"
              hide-details="auto"
              label="ID"
              required
              filled
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="password"
              label="Password"
              :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
              :rules="rules"
              :type="show1 ? 'text' : 'password'"
              hide-details="auto"
              required
              filled
              @click:append="show1 = !show1"
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-select
              v-model="gender"
              hide-details="auto"
              :rules="[(v) => !!v || 'Item is required']"
              label="Gender"
              required
              :items="items"
              filled
            />
          </v-col>
          <v-col cols="12" md="5">
            <v-menu
              v-model="menu"
              hide-details="auto"
              :close-on-content-click="false"
              :nudge-right="40"
              transition="scale-transition"
              offset-y
              min-width="290px"
            >
              <template v-slot:activator="{ on, attrs }">
                <v-text-field
                  v-model="birthday"
                  hide-details="auto"
                  label="Birthday"
                  prepend-icon="mdi-calendar"
                  readonly
                  v-bind="attrs"
                  required
                  filled
                  v-on="on"
                />
              </template>
              <v-date-picker v-model="birthday" @input="menu = false" />
            </v-menu>
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="3">
            <v-text-field
              v-model="age"
              :rules="rules"
              hide-details="auto"
              label="Age"
              filled
            />
          </v-col>
          <v-col cols="12" md="5">
            <v-text-field
              v-model="email"
              :rules="rules"
              hide-details="auto"
              label="E-mail"
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="telephone"
              :rules="rules"
              hide-details="auto"
              label="Tel."
              filled
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="address"
              :rules="rules"
              hide-details="auto"
              label="Address"
              filled
            />
          </v-col>
        </v-row>
        <v-row align="center" justify="center">
          <v-col cols="12" md="4">
            <v-text-field
              v-model="district"
              :rules="rules"
              hide-details="auto"
              label="District"
              filled
            />
          </v-col>
          <v-col cols="12" md="4">
            <v-text-field
              v-model="province"
              :rules="rules"
              hide-details="auto"
              label="
Province"
              filled
            />
          </v-col>
        </v-row>
        <br />
        <br />
        <v-row align="center" justify="center">
          <v-dialog v-model="dialog" width="500">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="success"
                dark
                v-bind="attrs"
                v-on="on"
                @click="validate"
              >
                Commit
              </v-btn>
            </template>

            <v-card>
              <v-card-title class="headline"> Success! </v-card-title>

              <v-divider />

              <v-card-actions>
                <v-spacer />
                <v-btn color="primary" text @click="dialog = false">
                  Success!
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </v-container>
    </v-card>
  </v-form>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      math: '2',
      firstname: '',
      lastname: '',
      id: '',
      gender: '',
      age: '',
      email: '',
      telephone: '',
      address: '',
      district: '',
      province: '',
      show1: false,
      password: '',
      rules: [(value) => !!value || 'Required.'],
      min: (v) => v.length >= 8 || 'Min 8 characters',
      birthday: new Date().toISOString().substr(0, 10),
      menu: false,
      items: ['Male', 'Female'],
      dialog: false,
    }
  },
  computed: {
    ...mapGetters(['data']),
  },
  methods: {
    validate() {
      const name = this.name
      const lastname = this.lastname
      const id = this.id
      const password = this.password
      const age = this.age
      const gender = this.gender
      const email = this.email
      const birthday = this.birthday
      const telephone = this.telephone
      const address = this.address
      const district = this.district
      const province = this.province
      this.$store.commit('input', {
        name,
        lastname,
        id,
        password,
        age,
        gender,
        email,
        birthday,
        telephone,
        address,
        district,
        province,
      })
    },
  },
}
</script>

<style>
.theme--dark.v-application {
  background-image: url('https://www.onlygfx.com/wp-content/uploads/2017/01/black-wallpaper-8-1024x768.jpg');
  background-attachment: fixed;
  background-position: 100% 100%;
  background-repeat: no-repeat;
  background-size: cover;
}
.v-card {
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;
  padding: 18px;
  background-color: beige;
}
</style>
