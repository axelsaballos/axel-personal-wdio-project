import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then(/^The user clicks on text (.*)$/, async (text: string) => {
  let element = await $(`//*[text() = ${text}]`);
  await element.click();
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.pause(3000);
});

Then(/^the user enters text "([^"]*)?" in input "([^"]*)?"$/, async (text: string, atribute: string) => {
  let element = await $(`//*[@type = ${atribute}]`);
  await element.click();
  await element.setValue(text);
  await browser.pause(3000);
});

Then(/^the user click the option "([^"]*)?" in the checkbox with id "([^"]*)?"$/, async (index: string, id: string) => {
  await $(`//*[@id = ${id}]/input[${index}]`).click();
});

Then(/^the user clicks on checkbox with html tag "([^"]*)?" as "([^"]*)?" in position "([^"]*)?" if it's not selected$/, async (tag: string, attribute: string, index: string) => {
  let ele = await $(`//*[@${tag} = ${attribute}]/input[${index}]`);
  if (!ele.isSelected()) {
    await ele.click();
  }
});

Then(/^the user click all elements that are not selecte in checkbox with html tag "([^"]*)?" as "([^"]*)?"$/, async (tag: string, attribute: string) => {
  let elementArray = await $$(`//*[@${tag} = ${attribute}]/input`);
  for (let i = 0; i < elementArray.length; i += 1) {
    let ele = elementArray[i];
    if (!ele.isSelected) {
      ele.click;
    }
  }
});

Then(/^the user switches to window "([^"]*)?"$/, async (name: string) => {
  let windowHandles = await browser.getWindowHandles();
  for (let i = 0; i < windowHandles.length; i += 1) {
    await browser.switchToWindow(windowHandles[i]);
    let currentWindowTitle = await browser.getTitle();
    if (currentWindowTitle === name) {
      await browser.switchToWindow(windowHandles[i]);
      await browser.pause(4000);
      break;
    }
  }
});

Then (/^the user gets and send text from alert$/,async () => {
  let alertTxt = await browser.getAlertText();
  await browser.sendAlertText('Hi');
  await browser.acceptAlert();
});

Then (/^the user upload a file$/,async () => {
  await $ ('//*[@id = "file-upload"]').addValue(`${process.cwd()}/data/fileUpload/demo.txt`);
});

Then (/^the user clicks on element with html tag "([^"]*)?" as (.*) at index "([^"]*)?"$/,async (tag:string, attribute:string, index:string) => {
  await $ (`(//*[@${tag} = ${attribute}])[${index}]`).click();
  await browser.pause(3000);
});