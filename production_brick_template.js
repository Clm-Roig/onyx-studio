var production_brick_template = `<div class="masonry__brick" data-aos="fade-up"> 
	<div class="item-folio"> 

		<div class="item-folio__thumb"> 
			<img src="$$cover_url$$" alt=""> 
		</div> 

		<div class="item-folio__text"> 
			<h3 class="item-folio__title"> 
				$$name$$
			</h3> 
			<p class="item-folio__cat"> 
				$$band$$ 
			</p> 
		</div> 

		<a href="$$link$$" class="item-folio__project-link" title="Project link" target="_blank"> 
			Lien
		</a> 

		<span class="item-folio__caption"> 
			<p></p> 
		</span> 

	</div> <!-- end item-folio --> 
</div> <!-- end masonry__brick -->   
`;

function replaceInTemplate(production) {
	final_brick = production_brick_template
	keys = Object.keys(production)
	keys.map((key) => {
		final_brick = final_brick.replace("$$"+key+"$$", production[key])
	})
	return final_brick
}