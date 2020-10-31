const puppeteer = require("puppeteer");
const path = require("path")

async function messanger() {
  // set some options (set headless to false so we can see
  // this automated browsing experience)
  let launchOptions = { headless: false, args: ["--start-maximized"] };

  const browser = await puppeteer.launch(launchOptions);
  const page = await browser.newPage();

  // set viewport and user agent (just in case for nice viewing)
  await page.setViewport({ width: 1366, height: 768 });
  await page.setUserAgent(
    "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36"
  );

  // go to the target web
  await page.goto("https://cgi-lib.berkeley.edu/ex/fup.html");

  // get the selector input type=file (for upload file)
  await page.waitForSelector("input[type=file]");
  await page.waitForTimeout(1000);

  // get the ElementHandle of the selector above
    const inputUploadHandle = await page.$("input[type=file]");

  // prepare file to upload
    let fileToUpload = path.join(__dirname, "../../temp/test.pdf");

  // Sets the value of the file input to fileToUpload
  inputUploadHandle.uploadFile(fileToUpload);

  // doing click on button to trigger upload file
  await page.waitForSelector("input[type=submit]");
  await page.evaluate(() => {
    for (let element of document.getElementsByTagName("input")) {
      if (element.value === "Press") {
        element.click();
      }
    }
  });

  // close the browser
//   await browser.close();
}

module.exports = { messanger };
