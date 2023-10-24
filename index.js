const alerts = {
  showAlertWithButton: function (alertText, buttonText, hideAfter) {
    const alertContainer = createAlertContainer();
    const alertTextElement = createAlertText(alertText);
    const replayButton = createReplayButton(buttonText, alertContainer);

    alertContainer.appendChild(alertTextElement);
    alertContainer.appendChild(replayButton);

    document.body.appendChild(alertContainer);

    setTimeout(() => {
      alertContainer.style.display = "none";
    }, hideAfter);
  },

  showAlertWithoutButton: function (alertText, color, hideAfter) {
    const alertContainer = createAlertContainer();
    const alertTextElement = createAlertText(alertText);
    alertContainer.style.backgroundColor = color;

    alertContainer.appendChild(alertTextElement);

    document.body.appendChild(alertContainer);

    setTimeout(() => {
      alertContainer.style.display = "none";
    }, hideAfter);
  },

  showRedAlert: function (alertText, buttonText, hideAfter) {
    const alertContainer = createAlertContainer();
    const alertTextElement = createAlertText(alertText);
    alertContainer.style.backgroundColor = "red";

    if (buttonText) {
      const replayButton = createReplayButton(buttonText, alertContainer);
      alertContainer.appendChild(replayButton);
    }

    document.body.appendChild(alertContainer);

    setTimeout(() => {
      alertContainer.style.display = "none";
    }, hideAfter);
  },

  showGreenAlert: function (alertText, buttonText, hideAfter) {
    const alertContainer = createAlertContainer();
    const alertTextElement = createAlertText(alertText);
    alertContainer.style.backgroundColor = "green";

    if (buttonText) {
      const replayButton = createReplayButton(buttonText, alertContainer);
      alertContainer.appendChild(replayButton);
    }

    document.body.appendChild(alertContainer);

    setTimeout(() => {
      alertContainer.style.display = "none";
    }, hideAfter);
  },
};

function createAlertContainer() {
  const alertContainer = document.createElement("div");
  alertContainer.style.position = "absolute";
  alertContainer.style.top = "10px";
  alertContainer.style.right = "10px";
  alertContainer.style.color = "#fff";
  alertContainer.style.padding = "10px";
  alertContainer.style.borderRadius = "5px";
  alertContainer.style.display = "flex";
  alertContainer.style.alignItems = "center";
  return alertContainer;
}

function createAlertText(text) {
  const alertTextElement = document.createElement("div");
  alertTextElement.textContent = text;
  alertTextElement.style.marginRight = "10px";
  return alertTextElement;
}
