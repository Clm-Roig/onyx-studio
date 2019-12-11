var os_logo_brick_template = `
    <img class="logoSample" src="$$logo_url$$"/>
`;

function replaceInLogoTemplate(production) {
    if(production.logo_url == "") {
        return ""
    }
    final_brick = os_logo_brick_template
    final_brick = final_brick.replace("$$logo_url$$", production.logo_url)
    return final_brick
}
