<template>
  <div>
    <div style="margin: 30px">
      需求：将多个网页链接，转成PDF，然后ZIP📦下载到本地
    </div>

    <button v-click="convertToPDF()">Convert to PDF and Pack as ZIP</button>
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  data() {
    return {
      url: [
        "https://ciicjob-assess.oss-cn-beijing.aliyuncs.com/report/disc/index.html?id=00139df0-55aa-4d3b-b225-2b27a890488f#/",
        "https://ciicjob-assess.oss-cn-beijing.aliyuncs.com/report/disc/index.html?id=00139df0-55aa-4d3b-b225-2b27a890488f#/",
      ],
    };
  },
  created() {},
  methods: {
    async convertToPDF() {
      console.log("begin ");

      // Get the URLs of the three web pages
    //   const url1 = this.url[0];
    //   const url2 = this.url[1];

    //   // Use a third-party library to generate PDF files from the web pages
    //   // Here we use jsPDF (https://github.com/MrRio/jsPDF)
    //   const pdf1 = await this.generatePDF(url1);
    //   const pdf2 = await this.generatePDF(url2);

    //   const zip = new JSZip();
    //   zip.file("page1.pdf", pdf1);
    //   zip.file("page2.pdf", pdf2);

    //   // Generate the ZIP file and download it
    //   const content = await zip.generateAsync({ type: "blob" });
    //   saveAs(content, "pages.zip");
    },

    generatePDF(url) {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("GET", `https://pdfapi.com/api/v1/${url}`, true);
        xhr.responseType = "arraybuffer";
        xhr.onload = function () {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error(`Failed to generate PDF from ${url}`));
          }
        };
        xhr.onerror = function () {
          reject(new Error(`Failed to generate PDF from ${url}`));
        };
        xhr.send();
      });
    },
  },
};
</script>
