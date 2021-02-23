const nodesToUpdate = document.getElementsByClassName('current-year');
[...nodesToUpdate].forEach((node) => node.textContent = new Date().getFullYear());
