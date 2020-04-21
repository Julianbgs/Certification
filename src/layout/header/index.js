import './header.sass';

export default () => {
  let link = document.querySelector('.header__link_hover');
  let tooltip = document.querySelector('.header__tooltip');

  link.addEventListener('mouseover', () => {
    tooltip.style.opacity = '1';
  });

  link.addEventListener('mouseout', () => {
    tooltip.style.opacity = '0';
  });
}
