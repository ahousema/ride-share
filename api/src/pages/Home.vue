<template>
  <v-container>
    <div>
      <h4 class="display-1">Welcome to the Ride Share page!</h4>

      <v-btn text v-bind:to="{ name: 'sign-up' }">
      Sign Up
    </v-btn>
    
    <v-btn text v-bind:to="{ name: 'log-in' }">
      Log In
    </v-btn>
    
    <p class="body-1">Please log in if you have an account, or sign up if you do not.</p>
    
    </div>
  </v-container>
</template>
