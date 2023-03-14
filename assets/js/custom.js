

jQuery(document).ready(function () {

		function toggleCreateComments() {
			$(".create-comment").slideToggle();
		}

		function returnTime(){
			var dt = new Date();
			var time = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
			return time;
		}
		

		function createNewComment (){

			$('.created-comments').prepend(
				`<div class="comments" id="comment0" style="display:block">
				<div class="profile">
				  <img src="assets/img/anonim.png"></div>
				<div class="comment-content">
				  <p class="name">
					 <font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">${$('.create-comment__name').val()}</font>
					 </font>
				  </p>
				  <p>
					 <font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">${$('.create-comment__body').val()}</font>
					 </font>
				  </p>
				</div>
				<div class="clr"></div>
				<div class="comment-status">
				  <span>
					 <font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">Curte·comente</font>
					 </font>
					 <img src="assets/img/3.jpg" width="15px" height="15px">
					 <font style="vertical-align: inherit;">
						<font style="vertical-align: inherit;">29</font>
					 </font>
				  </span>
				  <font style="vertical-align: inherit;">
					 <small>
						<font style="vertical-align: inherit;">·</font>
					 </small>


					 <small>
						<u>
						  <font style="vertical-align: inherit;">${returnTime()}</font>
						</u>
					 </small>
				  </font>
				  <small>
					 <font style="vertical-align: inherit;"></font>
					 <u>
						<font style="vertical-align: inherit;"></font>
					 </u>
				  </small>
				</div>
			 </div>`
			)

			$('.create-comment__name').val('')
			$('.create-comment__body').val('')
			toggleCreateComments();
		}

		$('#addComment').click(function(){
			toggleCreateComments();
		})

		$('.create-comment__button').click(function(){
			
			createNewComment();
		})
})