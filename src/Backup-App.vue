<template>
  <v-app id="inspire">
     <v-navigation-drawer 
     v-model="drawer"
      app
    >
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            Kudrna.cz 
          </v-list-item-title>
          <v-list-item-subtitle>
            Cestovka s duší
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar 
      app
      color="primary"
      dark
      src="fuji.jpg"
      height="200px"
    >
      

    <v-app-bar-nav-icon class="black--text" @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-app-bar-title class="black--text font-weight-bold" >Procestujte s námi svět!</v-app-bar-title>


      <v-spacer></v-spacer>

    </v-app-bar>


    <v-main>
      <router-view></router-view>
    </v-main>
    <v-footer 
    
    dark
    padless
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="teal">
      <v-spacer></v-spacer>
      
        <strong class="subheading">Zůstaňte s námi ve spojení!</strong>

        <v-spacer></v-spacer>

        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4"
          dark
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-title>
 
    </v-card>
  </v-footer>
  </v-app>
  
  
</template>

<script>
  export default {
    data: () => ({ 
      drawer: null, 
      items: [
        { title: 'Zajezdy', icon: 'mdi-airplane', to: '/' },
        { title: 'Destinace', icon: 'mdi-home', to: '/Destinace' },
        { title: 'Registrace', icon: 'mdi-home', to: '/Registration' },
        ],
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>