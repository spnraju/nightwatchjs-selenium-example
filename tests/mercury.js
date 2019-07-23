module.exports = {
  tags: ['mercury'],
  'Mercury Tours Login': function (browser) {
    browser
      .url('http://newtours.demoaut.com/')
      .maximizeWindow()
      .waitForElementVisible('body', 3000)
      .assert.title('Welcome: Mercury Tours')
      .waitForElementVisible('input[type=text]', 3000)
      .setValue('input[type=text]', 'mercury')
      .waitForElementVisible('input[type=password]', 3000)
      .setValue('input[type=password]', 'mercury')
      .click('input[type=image]')
      .end();
  }
};