<template>
  <v-container>
    <div>
      <h4 class="display-1">Start A Ride</h4>
	  <instructions details="Start a ride">

		<v-form v-model="valid">
        <v-text-field
          v-model="newRide.from"
          label="Starting Location"
        ></v-text-field>
        <v-text-field
          v-model="newRide.to"
          label="Ending Location"
        ></v-text-field>
        <v-text-field
          v-model="newRide.date"
          label="Date of Ride (MM/DD/YYYY)"
        >
        </v-text-field>
        <v-text-field
          v-model="newRide.time"
          label="Departure Time"
        >
        </v-text-field>
        <v-text-field
          v-model="newRide.cost"
          label="Ride Cost Per Passenger"
        >
        </v-text-field>
        <v-btn v-bind:disabled="!valid" v-on:click="handleSubmit"
          >Sign Up
        </v-btn>
      </v-form>
    </div>

	<div class="text-xs-center">
        <v-dialog v-model="dialogVisible" width="500">
          <v-card>
            <v-card-title primary-title>
              {{ dialogHeader }}
            </v-card-title>

            <v-card-text>
              {{ dialogText }}
            </v-card-text>

            <v-divider></v-divider>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="primary" text v-on:click="hideDialog">Okay</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </div>

  </v-container>
</template>
