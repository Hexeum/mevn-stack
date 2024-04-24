<template>
    <DefaultLayout>
        <v-row v-if="!isLoading" class="text-center justify-center">
            <v-col cols="12"></v-col>
            <v-col cols="8" class="mb-4 mt-15">
                <v-card>
                    <v-card-title class="text-h5  text-center bg-primary">
                        Reset Your Password
                    </v-card-title>

                    <v-form ref="passwordResetForm" v-model="passwordResetValid" @submit.prevent="passwordResetSubmit">
                        <v-card-text class="text-center">
                            <v-row>
                                <v-col cols="12">
                                    <v-alert v-if="error" type="error" dense dismissible>
                                        Password reset link is invalid or has expired.
                                    </v-alert>
                                    <v-alert v-if="success" type="success" dense dismissible>
                                        We've sent you an email to make sure it's really you. Please check your inbox and click the confirmation link.
                                    </v-alert>
                                </v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="accountEmail" :disabled="requestSent" :rules="emailRules" autocomplete="email"
                                        label="Email" outlined required></v-text-field>
                                </v-col>
                            </v-row>
                        </v-card-text>
                        <v-card-actions class="justify-center">
                            <v-btn v-if="!requestSent" class="hvr-shrink pl-5 pr-5 bg-primary mb-2" size="x-large" rounded type="submit">
                                Reset Password
                            </v-btn>
                        </v-card-actions>
                    </v-form>
                </v-card>
            </v-col>
        </v-row>
    </DefaultLayout>
</template>

<script setup lang="ts">
import { onMounted, ref, Ref } from "vue";
import DefaultLayout from "../layouts/DefaultLayout.vue";
import { VForm } from "vuetify/components";
import router from "../router";
import userService from "../services/userService";

const isLoading = ref(true);
const requestSent = ref(false);

const passwordResetValid = ref(false);
const error = ref(false);
const success = ref(false);

const accountEmail = ref('');
const passwordResetForm: Ref<InstanceType<typeof VForm> | null> = ref(null);

const emailRules = [
    (v: string) => !!v || "E-mail is required",
    (v: string) => /.+@.+\..+/.test(v) || "E-mail must be valid",
];

const passwordResetSubmit = async () => {
    const isValid = await passwordResetForm.value?.validate();
    if (isValid?.valid) {
        requestSent.value = true;
        await userService.resetPasswordRequest(accountEmail.value);
        error.value = false;
        success.value = true;
    }
};

onMounted(async () => {
    isLoading.value = true;
    if (router.currentRoute.value.query.error) {
        error.value = true;
        success.value = false;
    }
    isLoading.value = false;
})
</script>