import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from 'chai'

Then(/^The user clicks on text (.*)$/,async (text:string) => {
  let element = await $(`//*[text() = ${text}]`);
  await element.click();
  await browser.setTimeout({implicit: 15000, pageLoad: 10000});
});

Then(/^the user enters text (.*) in input (.*)$/, async (text:string, atribute:string) => {
  let element = await $(`//*[@type = ${atribute}]`);
  await element.click();
  await element.setValue(text);
  await browser.pause(3000);
});