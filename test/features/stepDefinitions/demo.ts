import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from 'chai'

Given(/^Google page is opened$/, async function () {
  await browser.url("https://www.google.com");
  await browser.pause(1000);
});

When(/^Search with "([^"]*)?"$/, async function (searchItem) {
  let element = await $('//*[@name = "q"]');
  await element.setValue(searchItem);
  await browser.keys('Enter')
  await browser.pause(2000);
});

Then(/^Click on the first search result$/, async () => {
  let firstResult = await $('(//*[@class = "LC20lb MBeuO DKV0Md"])[1]');
  await firstResult.click();
});

Then(/^The URL should match "([^"]*)?"$/,async (expectedURL) => {
  let url = await browser.getUrl();
  chai.expect(url).to.equal(expectedURL);
})
