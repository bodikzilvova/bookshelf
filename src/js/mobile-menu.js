import { save, load } from './storage';
import { NAME_STORAGE_USER } from './registration-window';

const refs = {
  burgerBtn: document.querySelector('.burger-btn'),
  closeBtn: document.querySelector('.close-btn'),
  mobileMenuContainer: document.querySelector('.mobile-menu_container'),
  mobileMenuGuest: document.querySelector('.mobile-menu_guest'),
  mobileMenuUser: document.querySelector('.mobile-menu_user'),
  burgerIcon: document.querySelector('.burger-ico'),
  userName: document.querySelector('.user_name'),
};

refs.burgerBtn.addEventListener('click', handleMobileMenu);
refs.closeBtn.addEventListener('click', handleMobileMenu);

let menuStatus = 'close';

function handleMobileMenu() {
  if (menuStatus === 'close') {
    openMobileMenu();
    refs.closeBtn.style.display = 'flex';
    refs.burgerBtn.style.display = 'none';
    addClass(refs.burgerBtn, 'hide');
    addClass(refs.closeBtn, 'show');

    menuStatus = 'open';
    return;
  }
  if (menuStatus === 'open') {
    closeMobileMenu();
    refs.closeBtn.style.display = 'none';
    refs.burgerBtn.style.display = 'flex';
    addClass(refs.burgerBtn, 'show');
    addClass(refs.closeBtn, 'hide');
    menuStatus = 'close';
    return;
  }
}

function openMobileMenu() {
  if (load('userData')) {
    const { name } = load(NAME_STORAGE_USER);
    refs.userName.textContent = name;

    removeClass(refs.mobileMenuContainer, 'mobile-menu_is-hidden');
    addClass(refs.mobileMenuUser, 'open');
    return;
  }
  removeClass(refs.mobileMenuContainer, 'mobile-menu_is-hidden');
  addClass(refs.mobileMenuGuest, 'open');
}

function closeMobileMenu() {
  if (load('userData')) {
    addClass(refs.mobileMenuContainer, 'mobile-menu_is-hidden');
    removeClass(refs.mobileMenuUser, 'open');
    return;
  }
  addClass(refs.mobileMenuContainer, 'mobile-menu_is-hidden');
  removeClass(refs.mobileMenuGuest, 'open');
}

function addClass(object, value) {
  object.classList.add(value);
}

function removeClass(object, value) {
  object.classList.remove(value);
}
