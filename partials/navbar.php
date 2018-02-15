
<div id="menu-background" class="">
	<div class="container">
		<div class="menu-relative"><!--position relative  -->
		<div class="main-menu-container">

					<!-- <img src="" alt=""> -->
				<a class="logo-a" href="index.php">
					<div id="transcount-white">
						<?php include 'partials/logo.php'; ?>
					</div>
					<div id="transcount-blue" class="logo-hidden">
						<?php include 'partials/logo-blue.php'; ?>
					</div>
				</a>
			<nav class="main-menu"><!-- position absolute -->

				<ul class="main-menu-list" id="secondary-menu"> <!-- mobile paslepiama meniu dalis -->
					<li><a href="#">Features</a></li>
					<li><a href="#">Pricing</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Partnership</a></li>
					<li><a href="#">About</a></li>
					<li><a href="#">Contact</a></li>
					<li class="login"><a href="#">Login</a></li>
					<li class="signup"><a href="#">Sign Up</a></li>
				</ul>

				<ul class="main-menu-list" id="language-menu-full">
					<li><a href="#">English</a></li>
					<li><a href="#">Pусский</a></li>
					<li><a href="#">Espanol</a></li>
					<li><a href="#">Deutsch</a></li>
					<li><a href="#">Lietuvių</a></li>
				</ul>

				<ul class="main-menu-list" id="main-menu">
					<li class="drop-down-link" onclick="languageMenuButton()"><a class="no-hov" href="#">EN <i class="fa fa-caret-down" aria-hidden="true"></i></a>
						<ul id="language-menu">
							<li><a href="#">FR</a></li>
							<li><a href="#">DE</a></li>
							<li><a href="#">LT</a></li>
						</ul>
					</li>
					<li class="menu-buttons"><!-- MENIU Mygtukas expand menu mobile -->
						<div class="menu-logo-container">
							<i id="menu-logo" class="fa fa-bars" aria-hidden="true" onclick="menuButton()"></i>
						</div>
					</li>
				</ul>

			</nav>
		</div>
	</div>
	</div>
</div>
