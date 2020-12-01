<template>
  <v-container>
    <div>
      <h4 class="display-1">Driver Home</h4>
      
      <v-btn text v-bind:to="{ name: 'user-join' }">
      Join A Ride
    </v-btn>
    
    <v-btn text v-bind:to="{ name: 'user-check' }">
      Check Rides
    </v-btn>

      <p class="body-1">Sign up for an existing ride or check rides you've already joined.</p> <br><br><br>
    
    <v-btn text v-bind:to="{ name: 'driver-start' }">
      Start A Ride
    </v-btn>
    
    <p class="body-1">Start a new ride for others to join.</p>
      
    </div>
  </v-container>
</template>
