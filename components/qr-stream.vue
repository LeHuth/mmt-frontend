<template>
  <div>
    <p class="decode-result">Last result: {{ result }}</p>
    <p class="validation-message">
      Validation message: {{ validationMessage }}
    </p>
    <p class="validation-success">
      Validation success: {{ validationSuccess }}
    </p>
    <p class="validation-date">
      Validation success: {{ validationDate }}
    </p>

    <qrcode-stream :camera="camera" @decode="onDecode" @init="onInit">
      <div v-show="showScanConfirmation" class="scan-confirmation">
        <img alt="Checkmark" width="128px" />
      </div>
    </qrcode-stream>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      camera: "HD Camera",
      result: null,
      showScanConfirmation: false,
      validationMessage: null,
      validationSuccess: null,
      validationDate: null
    };
  },

  methods: {
    async onInit(promise) {
      try {
        await promise;
      } catch (e) {
        console.error(e);
      } finally {
        this.showScanConfirmation = this.camera === "off";
      }
    },

    async onDecode(content) {
      this.result = content;

      this.pause();

      await this.validateTicket(content);
    },

    async validateTicket(uuid) {
      try {
        const response = await axios.post(
          `http://localhost:8080/ticket/validate/${uuid}`,
          {},
          {
            validateStatus: function (status) {
              return status < 500;
            },
          }
        );

        this.validationSuccess = response.data.success;
        this.validationMessage = response.data.message;
        this.validationDate = response.data.usage;

      } catch (err) {
        console.error(err);
        this.validationSuccess = false;
        this.validationMessage = "Fehler beim Validieren des Tickets";
      }
    },

    unpause() {
      this.camera = "auto";
    },

    pause() {
      this.camera = "off";
    },

    timeout(ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms);
      });
    },
  },
};
</script>
