<template>
  <div>
    <router-view />
  </div>
</template>

<script>
// import Homepage from "./components/Homepage.vue";
import * as AzureStorageFileShare from "@azure/storage-file-share";
//{ShareServiceClient,StorageSharedKeyCredential,} from require("@azure/storage-file-share");

export default {
  data() {
    return {
      serviceClient: {},
      serviceClientWithSASData: {},
      directoryClient: {},
      shareName: "demo-share",
      directoryName: "demo-directory",
      content: "",
      fileName: "",
      accountName: "vuetrainings",
      accountKey:
        "PW38JqGvzBqsV06LvpxBsusSWW/6/x/MMRdCCtxsY2YTzf+Vmp0ibH2AgdKiOV4Lo0/mArAlsJBv5E6dEi8a9Q==",
      sas_token:
        "?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-06-21T03:23:21Z&st=2021-06-19T19:23:21Z&spr=https,http&sig=hwtWomDbb61f78643dVNXrKi%2BllpupTdbOj7IaGTzIo%3D",
      sas_url:
        "https://vuetrainings.file.core.windows.net/?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-06-22T23:20:23Z&st=2021-06-19T15:20:23Z&spr=https,http&sig=AFOkPnYLkonUJDb6T62VrmmiE4VrXpnQ%2FOWyKf0NUHA%3D",
      //second test
      anonymousCredential: {},
    };
  },
  name: "App",
  async mounted() {
    console.log(AzureStorageFileShare);
    // const {
    //   ShareServiceClient,
    //   AnonymousCredential,
    // } = require("@azure/storage-file-share");
    // this.anonymousCredential = new AnonymousCredential();
    // const serviceClient = new ShareServiceClient(
    //   `https://${this.accountName}.file.core.windows.net${this.sas_token}`,
    //   this.anonymousCredential
    // );
    // console.log(serviceClient);
    // console.log(`List shares`);
    // let i = 1;
    // for await (const share of serviceClient.listShares()) {
    //   console.log(`Share ${i++}: ${share.name}`);
    // }
    // const directoryClient = serviceClient
    //   .getShareClient("demo-share")
    //   .getDirectoryClient("demo-directory");
    // const content = "Hello World!";
    // const fileName = "newfile" + new Date().getTime();
    // const fileClient = directoryClient.getFileClient(fileName);
    // await fileClient.create(content.length);
    // console.log(`Create file ${fileName} successfully`);
    // // Upload file range
    // await fileClient.uploadRange(content, 0, content.length);
    // console.log(`Upload file range "${content}" to ${fileName} successfully`);
    // End of era
    // await this.getTheAothGuy();
    // await this.testTheShit();
    // console.log(this.directoryClient);
    // await this.directoryClient.create(this.content.length);
    // console.log("3");
    // console.log(`Create file ${this.fileName} successfully`);
    // await this.directoryClient.uploadRange(
    //   this.content,
    //   0,
    //   this.content.length
    // );
    // console.log(
    //   `Upload file range "${this.content}" to ${this.fileName} successfully`
    // );
    // async function main() {
    //   const directoryClient = serviceClient
    //     .getShareClient(shareName)
    //     .getDirectoryClient(directoryName);
    //   const content = "Hello World!";
    //   const fileName = "newfile" + new Date().getTime();
    //   const fileClient = directoryClient.getFileClient(fileName);
    //   await fileClient.create(content.length);
    //   console.log(`Create file ${fileName} successfully`);
    //   await fileClient.uploadRange(content, 0, content.length);
    //   console.log(`Upload file range "${content}" to ${fileName} successfully`);
    // }
  },
  methods: {
    testTheShit() {
      this.directoryClient = this.serviceClient
        .getShareClient(this.shareName)
        .getDirectoryClient(this.directoryName);
      this.content = "Hello World!";
      this.fileName = "newfile" + new Date().getTime();
      this.directoryClient.getFileClient(this.fileName);
    },
    getTheAothGuy() {
      const { ShareServiceClient } = require("@azure/storage-file-share");
      const account = "vuetranings";
      //const sas =
      //"?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlutfx&se=2021-06-30T15:17:02Z&st=2021-06-18T07:17:02Z&sip=51.140.13.96&spr=https&sig=3Xek2w1ab1py12XabMjw3vPhK%2BnQbW%2FKK%2F%2FKk4hgAZo%3D";
      const sas =
        "?sv=2020-02-10&ss=bfqt&srt=sco&sp=rwdlacuptfx&se=2021-06-20T00:39:18Z&st=2021-06-19T16:39:18Z&sip=127.0.0.1&spr=https,http&sig=B4NbBLxsOryBwdXcng%2BfbWNqyNTKA8JI6KYIMcZqsQg%3D";
      this.serviceClient = new ShareServiceClient(
        `https://${account}.file.core.windows.net${sas}`,
        this.anonymousCredential
      );
      console.log(this.serviceClient);
    },
  },
  components: {
    // Homepage,
  },
};
</script>

<style></style>
