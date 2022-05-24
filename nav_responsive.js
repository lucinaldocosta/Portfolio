class MobileNavBar{
	constructor(mobileMenu, navList, navLinks){
		this.mobileMenu = document.querySelector(mobileMenu);
		this.navList = document.querySelector(navList);
		this.navLinks = document.querySelectorAll(navLinks);
		this.activeClass = "active";
		this.handleClick = this.handleClick.bind(this);
	}
	animateLinks(){
		this.navLinks.forEach((link, index)=>{
		link.style.animation
			? (link.style.animation = ``)
			:(link.style.animation = `navLinksEntrance 0.7s ease forwards 
				${index / 7 + 0.3}s`);
		});
	}
	handleClick(){
		this.navList.classList.toggle(this.activeClass);
		this.mobileMenu.classList.toggle(this.activeClass);
		this.animateLinks()
	}
	addClickEvent(){
		this.mobileMenu.addEventListener("click", this.handleClick);
	}
	addClickEventClose(){
		this.navList.addEventListener("click", this.handleClick);
	}
	init(){
		if(this.mobileMenu){
			this.addClickEvent();
			this.addClickEventClose();
		}
		return this;
	}
}
let mobileNavBar = new MobileNavBar(
	".nav_menu_bars",
	".nav_ul", 
	".nav_ul li",
);
mobileNavBar.init();