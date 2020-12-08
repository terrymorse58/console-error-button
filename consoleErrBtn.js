// consoleErrBtn.js - display a dismissable button on page whenever
//                    `console.error()` is called

(function () {
  let errCount = 0;

  // create the "error" button and append to <body>
  const btnErrAlert = document.createElement('button');
  btnErrAlert.style.cssText = `
      position: fixed;
      top: calc(100vh - 4px);
      left: 2px;
      z-index: 1000;
      color: white;
      padding: 0.8rem 0.5rem;
      background-color: red;
      border: 1px solid transparent;
      border-radius: .2rem;
      opacity: 0.8;
      transform: rotate(-90deg);
      transform-origin: top left;
      display: none`;
  document.body.appendChild(btnErrAlert);

  // modify console.error() to display our button
  const vanillaConsoleError = console.error;
  console.error = function () {
    const args = Array.from(arguments);
    vanillaConsoleError.apply(console, args);
    // increment error count, show "error" button
    btnErrAlert.innerText = `${++errCount} console.error()`;
    btnErrAlert.style.display = '';
  };

  // hide the "error" button when clicked
  btnErrAlert.addEventListener('click', evt => {
    btnErrAlert.style.display = 'none';
    errCount = 0;
  });
})();
