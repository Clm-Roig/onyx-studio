let os_logo_brick_template = `
    <img class="logoSample" src="$$logo_url$$" alt="$$logo_alt$$"/>
`;

function replaceInLogoTemplate(production) {
  const { band, logo_url } = production;
  if (logo_url == "") {
    return "";
  }
  final_brick = os_logo_brick_template;
  final_brick = final_brick.replace("$$logo_url$$", logo_url);
  final_brick = final_brick.replace("$$logo_alt$$", `${band} logo`);
  return final_brick;
}
