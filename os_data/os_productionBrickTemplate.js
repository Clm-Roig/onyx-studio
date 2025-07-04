var os_production_brick_template = `
<div class="masonry__brick"> 
	<div class="item-folio"> 

		<div class="item-folio__thumb">
			<img data-lazy="$$cover_url$$" alt="$$band$$ - $$name$$ artwork" class="production-sample" width=315 height=315> 
		</div> 

		$$youtube_link$$
		$$facebook_link$$
    $$bandcamp_link$$

		<div class="item-folio__text"> 
			<h3 class="item-folio__title"> 
				$$name$$
			</h3> 
			<p class="item-folio__cat">
				$$band$$ ($$release_year$$) <span class="item-folio__genre">$$genre$$</span>
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

function replaceInProdTemplate(production) {
  final_brick = os_production_brick_template;
  keys = Object.keys(production);
  keys.map((key) => {
    value = production[key];
    if (!!value) {
      if (key == "youtube_url") {
        value = getYoutubeLink(value);
        final_brick = final_brick.replace("$$youtube_link$$", value);
      } else if (key == "facebook_url") {
        value = getFacebookLink(value);
        final_brick = final_brick.replace("$$facebook_link$$", value);
      } else if (key == "bandcamp_url") {
        value = getBandcampLink(value);
        final_brick = final_brick.replace("$$bandcamp_link$$", value);
      } else if (key == "credits") {
        value = value.join(", ");
        final_brick = final_brick.replace("$$credits$$", value);
      } else if (key == "genre") {
        final_brick = final_brick.replace("$$genre$$", " - " + value);
      } else {
        let regex = new RegExp("\\$\\$" + key + "\\$\\$", "g");
        final_brick = final_brick.replace(regex, value);
      }
    }

    // Handle null values
    else {
      if (key == "cover_url") {
        if (!!production["logo_url"]) {
          final_brick = final_brick.replace(
            "$$cover_url$$",
            production["logo_url"]
          );
        } else {
          final_brick = final_brick.replace(
            "$$cover_url$$",
            "images/covers/no_image.png"
          );
        }
      }
      if (key == "release_year") {
        final_brick = final_brick.replace("($$release_year$$)", "");
      }
    }
  });

  // Remove empty remaining slots
  let regex = new RegExp("\\$\\$(.*?)\\$\\$", "g");
  final_brick = final_brick.replace(regex, "");

  return final_brick;
}

function getYoutubeLink(youtube_url) {
  res =
    '<a href="' +
    youtube_url +
    '" target= "_blank" class="item-folio__social-network-link item-folio__youtube-link" title="Youtube link">';
  res += '<i class="fab fa-youtube"></i>';
  res += "</a>";
  return res;
}

function getFacebookLink(facebook_url) {
  res =
    '<a href="' +
    facebook_url +
    '" target= "_blank" class="item-folio__social-network-link item-folio__facebook-link" title="Facebook link">';
  res += '<i class="fab fa-facebook-f"></i>';
  res += "</a>";
  return res;
}

function getBandcampLink(bandcamp_url) {
  res =
    '<a href="' +
    bandcamp_url +
    '" target= "_blank" class="item-folio__social-network-link item-folio__bandcamp-link" title="Bandcamp link">';
  res += '<i class="fab fa-bandcamp"></i>';
  res += "</a>";
  return res;
}
