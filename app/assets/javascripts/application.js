/*
 * This is a manifest file that'll be compiled into application.css, which will include all the files
 * listed below.
 *
 * Any CSS and SCSS file within this directory, lib/assets/stylesheets, vendor/assets/stylesheets,
 * or vendor/assets/stylesheets of plugins, if any, can be referenced here using a relative path.
 *
 * You're free to add application-wide styles to this file and they'll appear at the bottom of the
 * compiled file so the styles you add here take precedence over styles defined in any styles
 * defined in the other CSS/SCSS files in this directory. It is generally better to create a new
 * file per style scope.
 *
 *= require_tree .
 *= require_self
 */

@import "bootstrap-sprockets";
@import "bootstrap";

#logo {
	font-size: 26px;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: -1px;
	padding: 15px 0;
	a {
		color: #2F363E;
	}
}

#main_content {
	#content {
		float: none;
	}
	padding-bottom: 100px;
	.link {
		padding: 2em 1em;
		border-bottom: 1px solid #e9e9e9;
		.title {

			a {
				color: #FF4500;
			}
		}
	}
	.comments_title {
		margin-top: 2em;
	}
	#comments {
		.comment {
			padding: 1em 0;
			border-top: 1px solid #E9E9E9;
			.lead {
				margin-bottom: 0;
			}
		}
	}
}