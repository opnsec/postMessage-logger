function logMessage(event) {
  try {
    console.log("Message received by: " + document.location.href, "\norigin: " + event.origin + " source: ", event.source, "\ndata:", event.data)
  } catch (error) {
    // If the source window is cross-origin, you can't log it here
    console.log("Message received by: " + document.location.href, "\norigin: " + event.origin + " source is cross-origin", "\ndata:", event.data)
  }
}
addEventListener("message", logMessage)