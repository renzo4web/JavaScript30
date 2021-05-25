const dropdownBg = document.querySelector('.dropdownBackground');

const nav = document.querySelector('.top');
const triggers = document.querySelectorAll('.cool li');

const handleEnter = (e) => {
  const trigger = e.target;
  const dropdown = trigger.querySelector('.dropdown');
  dropdownBg.classList.add('open');

  trigger.classList.add('trigger-enter');
  setTimeout(
    () =>
      trigger.classList.contains('trigger-enter') &&
      trigger.classList.add('trigger-enter-active'),
    250
  );

  const dropdownCords = dropdown.getBoundingClientRect();
  const navCords = nav.getBoundingClientRect();

  dropdownBg.style.setProperty('width', `${dropdownCords.width}px`);
  dropdownBg.style.setProperty('height', `${dropdownCords.height}px`);
  dropdownBg.style.setProperty(
    'transform',
    `translate(${dropdownCords.left - navCords.left}px,${
      dropdownCords.top - navCords.top
    }px)`
  );
};

const handleLeave = (e) => {
  const trigger = e.target;

  trigger.classList.remove('trigger-enter', 'trigger-enter-active');
  dropdownBg.classList.remove('open');
};

triggers.forEach((trigger) =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach((trigger) =>
  trigger.addEventListener('mouseleave', handleLeave)
);
