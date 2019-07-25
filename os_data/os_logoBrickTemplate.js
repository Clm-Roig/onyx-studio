var os_logo_brick_template = `
    <img data-aos="fade-up" class="logoSample" src="$$logo_url$$"/>
`;

function replaceInLogoTemplate(production) {
    if(production.logo_url == "") {
        return ""
    }
    final_brick = os_logo_brick_template
    console.log(production.logo_url)
    final_brick = final_brick.replace("$$logo_url$$", production.logo_url)
    return final_brick
}
