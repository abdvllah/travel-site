import MobileMenu from './modules/MobileMenu';
<<<<<<< HEAD
import MobileMenu from './modules/StickyHeader';

var mobileMenu = new MobileMenu();
var stickyHeader = new StickyHeader();
=======
import RevealOnScroll from './modules/RevealOnScroll';
import $ from 'jquery';

var mobileMenu = new MobileMenu();
new RevealOnScroll($(".feature-item"), "85%");
new RevealOnScroll($(".testimonial"), "60%");
>>>>>>> master
