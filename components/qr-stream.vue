<template>
  <div v-if="!showSpinner" :class="backgroundColorStatus" class="app-container">
    <p class="validation-message">
      {{ validationMessage }}
    </p>
    <p class="validation-message">
      {{ validationDate }}
    </p>

    <qrcode-stream
      :camera="camera"
      class="qr-preview"
      @decode="onDecode"
      @init="onInit"
    >
      <div v-show="showScanConfirmation" class="scan-confirmation">
        <img alt="Checkmark" width="128px">
      </div>
    </qrcode-stream>
  </div>
  <div v-else>
    <span class="loading loading-spinner loading-lg" />
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      camera: 'HD Camera',
      result: null,
      showScanConfirmation: false,
      validationMessage: null,
      validationDate: null,
      backgroundColorStatus: null,
      showSpinner: false
    }
  },

  methods: {
    async onInit (promise) {
      try {
        await promise
      } catch (e) {
        console.error(e)
      } finally {
        this.showScanConfirmation = this.camera === 'off'
      }
    },

    async onDecode (content) {
      this.showSpinner = true
      this.result = content

      this.pause()

      await this.validateTicket(content)

      await this.resumeAfterPause()
      this.showSpinner = false
    },

    async validateTicket (uuid) {
      try {
        const response = await axios.post(
                    `http://localhost:8080/tickets/validate/${uuid}`,
                    {},
                    {
                      validateStatus: function (status) {
                        return status < 500
                      }
                    }
        )

        this.backgroundColorStatus = response.data.success ? 'success' : 'failure'
        this.validationMessage = response.data.message
        this.validationDate = response.data.usage
      } catch (err) {
        console.error(err)
        this.validationMessage = 'Fehler beim Validieren des Tickets'
        this.backgroundColorStatus = 'failure'
      }
    },

    unpause () {
      this.camera = 'HD Camera'
    },

    pause () {
      this.camera = 'off'
    },

    timeout (ms) {
      return new Promise((resolve) => {
        window.setTimeout(resolve, ms)
      })
    },

    async resumeAfterPause () {
      await this.timeout(2000)
      this.unpause()
    }
  }
}
</script>

<style scoped>
.app-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 80vw;
    max-height: 80vh;
    overflow: hidden;
}

.qr-preview {
    width: 100%;
    height: auto;
    max-height: 60vh;
}

.decode-result,
.validation-message,
.validation-success,
.validation-date {
    font-size: 16px;
}

.scan-confirmation {
    width: 100px;
    height: 100px;
}

.validation-message {
    color: white;
    font-size: large;
}

.success {
    background-color: green;
}

.failure {
    background-color: red;
}
</style>
