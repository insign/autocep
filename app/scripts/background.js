browser.runtime.onInstalled.addListener((details) => {
  console.log('previousVersion', details.previousVersion)
})

browser.browserAction.setBadgeText({
  text: `ON`
})

console.log(`'aAllo 'Allo! Event Page for Browser Action`)
