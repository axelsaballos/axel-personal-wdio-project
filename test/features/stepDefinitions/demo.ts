import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(1000);
});

Given(/^Sauce demo page is opened$/, async function () {
  await browser.url("https://www.saucedemo.com");
  await browser.pause(1000);
});

Given(/^Amazon page is opened$/, async function () {
  await browser.url("https://www.amazon.com");
  await browser.pause(1000);
});

When(/^Search with "([^"]*)?"$/, async function (searchItem) {
  let element = await $('//*[@name = "q"]');
  await element.setValue(searchItem);
  await browser.keys("Enter");
  await browser.pause(2000);
});

Then(/^Click on the first search result$/, async () => {
  let firstResult = await $('(//*[@class = "LC20lb MBeuO DKV0Md"])[1]');
  await firstResult.click();
});

Then(/^The URL should match "([^"]*)?"$/, async (expectedURL) => {
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
});
// Web interactions

Given(/^A web is opened$/, async () => {
  await browser.url("https://the-internet.herokuapp.com/");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});

When(/^Perform web interactions$/, async () => {
  let element = $('//*[@type = "number"]');
  await element.setValue("123");
  await browser.pause(3000);
});

Given(/^An auth web is opened$/, async () => {
  await browser.url("https://admin:admin@the-internet.herokuapp.com/basic_auth");
  await browser.setTimeout({ implicit: 15000, pageLoad: 10000 });
  await browser.maximizeWindow();
});