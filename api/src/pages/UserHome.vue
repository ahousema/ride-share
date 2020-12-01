<template>
  <v-container>
    <div>
      <h4 class="display-1">User Home</h4>
      
      <v-btn text v-bind:to="{ name: 'user-join' }">
      Join A Ride
    </v-btn>
    
    <v-btn text v-bind:to="{ name: 'user-request' }">
      Request A Ride
    </v-btn>
    
    <v-btn text v-bind:to="{ name: 'user-check' }">
      Check Rides
    </v-btn>

	<v-btn text v-bind:to="{ name: 'user-driver' }">
	  Become A Driver
	</v-btn>

      <p class="body-1">Sign up for an existing ride, request a ride to be added, check rides you've already joined, or sign up to become a driver.</p>
    </div>
  </v-container>
</template>
