<template>
  <v-container>
    <div>
      <h4 class="display-1">Driver Home</h4>
      
      <v-btn text v-bind:to="{ name: 'user-join' }">
      Join A Ride
    </v-btn>
    
    <v-btn text v-bind:to="{ name: 'user-request' }">
      Request A Ride
    </v-btn>
    
    <v-btn text v-bind:to="{ name: 'user-check' }">
      Check Rides
    </v-btn><br>

      <p class="body-1">Sign up for an existing ride, request a ride to be added, or check rides you've already joined.</p> <br><br><br>
    
    <v-btn text v-bind:to="{ name: 'driver-start' }">
      Start A Ride
    </v-btn>
    
    <v-btn text v-bind:to="{ name: 'driver-requests' }">
      Check Ride Requests
    </v-btn><br>
    
    <p class="body-1">Start a new ride or see what rides others have requested.</p>
      
    </div>
  </v-container>
</template>
