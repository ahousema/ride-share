<template>
	<v-container>
		<div>
			<h4 class="display-1">Sign Up</h4>

			<instructions details="Sign up to be a driver." />

			<v-form v-model="valid">
				<!--remove this?-->
				<v-text-field 
					v-model="newDriver.email"
					v-bind:rules="rules.required"
					label="Email address"
				></v-text-field>
				<v-text-field
					v-model="newDriver.license"
					v-bind:rules="rules.required"
					label="Driver's license number"
				></v-text-field>
				<v-text-field
					v-model="newDriver.state"
					v-bind:rules="rules.required"
					label="License State (IN, NC, CO, etc)"
				>
				</v-text-field>
				<v-btn v-bind:disabled="!valid" v-on:click="handleSubmit"
					>Sign Up
				</v-btn>
			</v-form>

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
		</div>
	</v-container>
</template>

<script>
import Instructions from "../components/Instructions.vue";

export default {
	name: "SignUpPage",
	components: {
		Instructions, // Use the Instructions component we just imported
	},
	data: function () {
		return {
			valid: false, // Are all the fields in the form valid?

			// Object to collect account data
			newDriver: {
				license: "",
				state: ""
			},

			// Was an account created successfully?
			accountCreated: false,

			// Data to be displayed by the dialog.
			dialogHeader: "<no dialogHeader>",
			dialogText: "<no dialogText>",
			dialogVisible: false,

			// Validation rules for the form fields. This functionality is an extension
			// that's part of the Vuetify package. Each rule is a list of functions
			// (note the fat arrows). Vuetify invokes all functions in the list,
			// passing it the content of the associated form field. Functions should
			// return either true (the field passes that validation) or a string
			// containing an error message indicating why the field doesn't pass validation.
			rules: {
				required: [(val) => val.length > 0 || "Required"]
			},
		};
	},
	methods: {
		// Invoked when the user clicks the 'Sign Up' button.
		handleSubmit: function () {
			// Haven't been successful yet.
			this.accountCreated = false;

			// Post the content of the form to the Hapi server.
			this.$axios
			.post("/user", {
				license: this.newDriver.license,
				state: this.newDriver.state,
			})
			.then((result) => {
				// Based on whether things worked or not, show the
				// appropriate dialog.
				if (result.data.ok) {
					this.showDialog("Success", result.data.msge);
					this.accountCreated = true;
				} else {
					this.showDialog("Sorry", result.data.msge);
				}
			})
			.catch((err) => this.showDialog("Failed", err));
		},

		// Helper method to display the dialog box with the appropriate content.
		showDialog: function (header, text) {
			this.dialogHeader = header;
			this.dialogText = text;
			this.dialogVisible = true;
		},

		// Invoked by the "Okay" button on the dialog; dismiss the dialog
		// and navigate to the home page.
		hideDialog: function () {
			this.dialogVisible = false;
			if (this.accountCreated) {
				// Only navigate away from the sign-up page if we were successful.
				this.$router.push({ name: "driver-home" });
			}
		},
	},
};
</script>
