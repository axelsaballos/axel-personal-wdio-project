import { Given, When, Then } from "@wdio/cucumber-framework";
import chai from "chai";

Then (/^the user verifies if dropdown (.*) is selected$/, async (atribute: string) => {
  await $(`//*[@id = ${atribute}]//option[@selected = 'selected']`).isDisplayed
  // $('//select/option[@selected = 'selected']')
  await browser.pause(3000);
});

Then (/^the user verifies if dropdown is selected$/, async () => {
  let element = await $('//select/option[@selected = "selected"]');
  let val = await element.getText();
  chai.expect(val).to.equal('Please select an option');
  await browser.pause(3000);
});

Then (/^the user selects (.*) dropdown option$/, async (text:string) => {
  await ($('//*[@id = "dropdown"]')).selectByVisibleText(text);
});

Then (/^the user selects (.*) atribute with value (.*) in dropdown option$/,async (atribute:string, value:string) => {
  await ($('//*[@id = "dropdown"]')).selectByAttribute(atribute, value);
});

Then (/^the user selects (.*) index from dropdown$/, async (index:number) => {
  await ($('//*[@id = "dropdown"]')).selectByIndex(index);
});

Then (/^the user verifies if checkbox with html tag "([^"]*)?" as (.*) at position (.*) is selected$/,async (tag:string, atribute:string, index:string) => {
  // await $(`//*[@${tag} = ${atribute}]/input[${index}]`).isSelected();
  let isChecked = await $(`//*[@${tag} = ${atribute}]/input[${index}]`).isSelected();
  chai.expect(isChecked).to.be.true;
});