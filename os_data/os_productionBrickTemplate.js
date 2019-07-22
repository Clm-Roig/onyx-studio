var os_production_brick_template = `
<div class="masonry__brick" data-aos="fade-up"> 
	<div class="item-folio"> 

		<div class="item-folio__thumb">
			<img src="$$cover_url$$" alt="$$band$$ - $$name$$ artwork" class="production-sample"> 
		</div> 

		$$youtube_link$$
		$$facebook_link$$

		<div class="item-folio__text"> 
			<h3 class="item-folio__title"> 
				$$name$$
			</h3> 
			<p class="item-folio__cat">
				$$band$$ ($$year$$)
			</p> 
		</div> 


		<div class="item-folio__credits"> 
			<span class="credits-text"> 
				$$credits$$
			</span> 
		</div> 

	</div> <!-- end item-folio --> 
</div> <!-- end masonry__brick -->  
`;

function replaceInTemplate(production) {
	final_brick = os_production_brick_template
	keys = Object.keys(production)
	keys.map((key) => {
		value = production[key]
		if(value != "") {
			if (key == "youtube_url"){
				value = getYoutubeLink(value)
				final_brick = final_brick.replace("$$youtube_link$$", value)
			}
			else if (key == "facebook_url"){
				value = getFacebookLink(value)
				final_brick = final_brick.replace("$$facebook_link$$", value)
			}
      else if (key == "credits"){
        value = value.join(", ")
        final_brick = final_brick.replace("$$credits$$", value)
      }
			else {
				let regex = new RegExp('\\$\\$' + key + '\\$\\$', 'g')
				final_brick = final_brick.replace(regex, value)	
			}
		}		
    if(key == "cover_url" && value == "") {
        if(production['logo_url'] != "")
            final_brick = final_brick.replace("$$cover_url$$", production['logo_url'])
        else
            final_brick = final_brick.replace("$$cover_url$$", "images/covers/no_image.png")
    }
	})
	
	// Remove empty remaining slots
	let regex = new RegExp("\\$\\$(.*?)\\$\\$", 'g')
	final_brick = final_brick.replace(regex, '')

	return final_brick
}

function getYoutubeLink(youtube_url) {
	res = '<a href="' + youtube_url + '" target= "_blank" class="item-folio__social-network-link item-folio__youtube-link" title="Youtube link">'
	res += '<i class="fab fa-youtube"></i>'
	res += '</a>'
	return res
}

function getFacebookLink(facebook_url) {
	res = '<a href="' + facebook_url + '" target= "_blank" class="item-folio__social-network-link item-folio__facebook-link" title="Facebook link">'
	res += '<i class="fab fa-facebook-f"></i>'
	res += '</a>'
	return res
}