<template>
  <v-form v-model="valid">
    
    <div class="pa-10 font-weight-medium">Registrace</div>
    <subheader class="pl-10 font-weight-small">Registrací získáváte možnost vyhrát zájezd za 60 000 Kč!</subheader>
    
    <v-container>
      <v-row>
        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="lastname"
            :rules="nameRules"
            :counter="10"
            label="Last name"
            required
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          md="4"
        >
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>
    <v-btn text color="grey"  >
      <span>Vytvořit účet</span>
      
    </v-btn>
  </v-form>

</template>

<script>
  export default {
    name: 'Home',
      }
</script>