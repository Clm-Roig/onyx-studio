  function setVideoFrames() {
    const iframeContainers = document.getElementsByClassName("iframe-container");
    for (let iFrameContainer of iframeContainers) {
      const iFrame = iFrameContainer.children[0];
      const url = iFrame.attributes.urltoload.value;
      iFrame.src = url;
    }
  }

  if (window.addEventListener) // W3C DOM
    window.addEventListener('load', setVideoFrames, false);
  else if (window.attachEvent) { // IE DOM
    window.attachEvent('onload', setVideoFrames);
  } else { //NO SUPPORT, lauching right now
    setVideoFrame();
  }
