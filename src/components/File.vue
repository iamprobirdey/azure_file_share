<template>
  <div
    class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full"
    v-if="model_checker === false"
  >
    <section class="w-full h-full p-1 overflow-auto">
      <header
        class="py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
      >
        <p
          class="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500"
        ></p>
        <div class="flex -space-x-2">
          <img
            v-if="thumbnail_proto === ''"
            src="@/assets/default.jpeg"
            alt=""
            srcset=""
          />
          <a href="javascript:void(0)" class="" v-if="thumbnail_proto != ''">
            <img
              v-if="['png', 'jpg', 'jpeg'].includes(type)"
              class="inline-block h-30 w-30 rounded-full object-cover ring-2 ring-white"
              :src="thumbnail_proto"
            />
            <iframe
              :src="thumbnail_proto"
              v-if="['pdf'].includes(type)"
            ></iframe>
          </a>
        </div>
        <form @submit.prevent="uploader()">
          <input
            type="file"
            class="w-auto px-2 py-1 my-2 mr-2 text-blueGray-500 transition duration-500 ease-in-out transform border rounded-md hover:text-blueGray-600 text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blueGray-100"
            name="file_upload"
            ref="file"
            @change="onChange"
          />

          <p
            class="justify-center mb-3 text-base leading-7 text-blueGray-500"
            :class="
              message_type === 'error' ? 'text-red-500' : 'text-green-500'
            "
          >
            {{ message }}
          </p>
          <div class="flex items-center w-full pt-4">
            <button
              class="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </header>
    </section>

    <div class="flex -space-x-2 mt-5 pl-5">
      <a href="javascript:void(0)" class="" @click="model_checker = true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          class="h-10 w-10 mb-10"
        >
          <path
            d="M5.5 13a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 13H11V9.413l1.293 1.293a1 1 0 001.414-1.414l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13H5.5z"
          />
          <path d="M9 13h2v5a1 1 0 11-2 0v-5z" />
        </svg>
      </a>
    </div>
  </div>
  <div
    class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full"
    v-if="model_checker === true"
  >
    <section class="w-full h-full p-1 overflow-auto">
      <header
        class="py-12 text-base text-blueGray-500 transition duration-500 ease-in-out transform bg-white border border-dashed rounded-lg focus:border-blue-500 focus:outline-none focus:shadow-outline focus:ring-2 ring-offset-current ring-offset-2"
      >
        <p
          class="flex flex-wrap justify-center mb-3 text-base leading-7 text-blueGray-500"
        ></p>
        <div class="flex -space-x-2">
          <img
            v-if="responseDocument === ''"
            src="@/assets/default.jpeg"
            alt="default"
          />
          <a href="javascript:void(0)" class="">
            <img
              v-if="['png', 'jpg', 'jpeg'].includes(type)"
              class="inline-block h-30 w-30 rounded-full object-cover ring-2 ring-white"
              :src="responseDocument"
            />
            <iframe
              :src="responseDocument"
              v-if="['pdf'].includes(type)"
            ></iframe>
          </a>
        </div>
        <div class="flex items-center w-full pt-4">
          <button
            class="w-full py-3 text-base text-white transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800"
            type="button"
            @click="fireTheCloud"
          >
            Retreive The File
          </button>
        </div>
      </header>
    </section>

    <div class="flex -space-x-2 mt-5 pl-5">
      <a
        href="javascript:void(0)"
        class=""
        @click="this.model_checker = !this.model_checker"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10 mb-10"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
            clip-rule="evenodd"
          />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      file_data: "",
      message: "",
      message_type: "",
      formData: {},
      fileType: ["jpeg", "jpg", "png", "pdf", "doc", "xl", "xls"],
      type: "",
      // Model On
      model_checker: false,
      //File reader
      reader: "",
      thumbnail_proto: "",
      //Azure Details
      accountName: "vuetrainings",
      sas_token:
        "?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-06-30T11:57:12Z&st=2021-06-21T03:57:12Z&spr=https,http&sig=mTL00vM%2Fl%2BWsZpB6p%2B%2ByhMuopBPN0c9qwVD2ILJ%2B0TY%3D",
      //Azure stuff
      directoryClient: {},
      connection_checker: false,
      uploadingFileName: "",
      uploadResponseUrl: "",
      responseDocument: "",
      responseDocumentType: "",
    };
  },
  components() {
    axios;
  },
  mounted() {
    //await this.uploader();
  },
  methods: {
    connectionSetup() {
      if (this.connection_checker) return;
      const {
        ShareServiceClient,
        AnonymousCredential,
      } = require("@azure/storage-file-share");

      this.anonymousCredential = new AnonymousCredential();

      const serviceClient = new ShareServiceClient(
        `https://${this.accountName}.file.core.windows.net${this.sas_token}`,
        this.anonymousCredential
      );

      this.directoryClient = serviceClient
        .getShareClient("demo-share")
        .getDirectoryClient("demo-directory");
      this.connection_checker = true;
    },

    async uploader() {
      this.connectionSetup();

      //const content = "Hello World!";
      this.uploadingFileName =
        "image_file" + new Date().getTime() + "." + this.type;
      const fileClient = this.directoryClient.getFileClient(
        this.uploadingFileName
      );
      //await fileClient.create(content.length);
      let response = await fileClient.create(this.reader.result.length);

      console.log(`Create file ${this.uploadingFileName} successfully`);
      //await fileClient.uploadRange(content, 0, content.length);
      await fileClient.uploadRange(
        this.reader.result,
        0,
        this.reader.result.length
      );
      this.message = "File is uploaded";
      this.uploadResponseUrl = response._response.request.url;
      this.thumbnail_proto = "";
      console.log(response);
      console.log(this.uploadResponseUrl);
    },
    onChange(e) {
      this.fileCheckByEvent(e);
      this.fileSizehandler();
      this.fileTypeHandler();
      this.converFileIntoBase64();
    },
    fileCheckByEvent(e) {
      let fileChecker = e.target.files || e.dataTransfer.files;
      if (!fileChecker.length) {
        this.message = "No file is added";
        this.message_type = "error";
        return;
      } else {
        this.message = "File is added";
        this.message_type = "";
      }
    },
    fileSizehandler() {
      const fileSize = this.$refs.file.files[0].size;
      if (fileSize / 1048576 > 10) {
        this.message = "File is too big";
        this.message_type = "error";
      }
    },
    fileTypeHandler() {
      this.type = this.$refs.file.files[0].type.split("/")[1];
      const typeValidationStatus =
        this.type === this.fileType.find((e) => e === this.type);
      if (typeValidationStatus) this.message_type = "";
      if (typeValidationStatus === false) {
        this.message_type = "error";
        this.message = "File type " + this.type + " is not supported";
      }
    },
    converFileIntoBase64() {
      this.file_data = this.$refs.file.files[0];

      this.reader = new FileReader();

      this.reader.readAsDataURL(this.file_data);

      this.reader.onload = () => {
        this.thumbnail_proto = this.reader.result;
      };
      this.reader.onerror = () => {
        console.log(this.reader.error);
      };
      //console.log(URL.createObjectURL(this.file_data));
    },
    async fireTheCloud() {
      axios
        .get(this.uploadResponseUrl)
        .then((response) => {
          this.responseDocument = response.data;
          console.log(this.responseDocument);
          // this.responseDocumentType = response.data
          //   .split(",")[0]
          //   .split(":")[1]
          //   .split(";")[0]
          //   .split("/")[1];
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>

//375134
