// consoleErrBtn.js - display a dismissable button on page whenever
//                    `console.error()` is called

(function () {
  let errCount = 0;

  // create the "error" button and append to <body>
  const btnErrAlert = document.createElement('button');
  btnErrAlert.title = "click to dismiss";
  btnErrAlert.style.cssText = `
      position: fixed;
      bottom: 0px;
      left: 0px;
      width: 100vw;
      z-index: 1000;
      color: white;
      font-size: 12px;
      padding: 0.1rem 0;
      background-color: red;
      border: 1px solid transparent;
      opacity: 0.6;
      display: none`;
  document.body.appendChild(btnErrAlert);

  // modify console.error() to display our button
  const vanillaConsoleError = console.error;
  console.error = function () {
    const args = Array.from(arguments);
    vanillaConsoleError.apply(console, args);
    // increment error count, show "error" button
    btnErrAlert.innerText = `${++errCount} console error${
      errCount > 1 ? 's' : ''
    }`;
    btnErrAlert.style.display = '';
  };

  // hide the "error" button when clicked
  btnErrAlert.addEventListener('click', evt => {
    btnErrAlert.style.display = 'none';
    errCount = 0;
  });
})();
