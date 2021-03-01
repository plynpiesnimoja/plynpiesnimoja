/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it


// Docs: https://www.gatsbyjs.com/docs/add-offline-support-with-a-service-worker/
export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Strona została zaktualizowana i wymaga odświeżenia. ` +
      `Odświeżyć stronę teraz?`
  )
  if (answer === true) {
    window.location.reload()
  }
  // Automat na odświeżanie, ale...
  // https://github.com/gatsbyjs/gatsby/issues/9087#issuecomment-459105021
  
  // window.location.reload(true)
}



// In case using custom sw, code registering in Gatsby
// export const registerServiceWorker = () => true 