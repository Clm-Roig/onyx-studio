let os_logo_brick_template = `
    <img class="logoSample" src="$$logo_url$$" alt="$$logo_alt$$"/>
`;

function replaceInLogoTemplate(production) {
  if (production.logo_url == "") {
    return "";
  }
  final_brick = os_logo_brick_template;
  final_brick = final_brick.replace("$$logo_url$$", production.logo_url);
  final_brick = final_brick.replace("$$logo_alt$$", `${production.band} logo`);
  return final_brick;
}
