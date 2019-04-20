//function
function check(e) {
  e.preventDefault();
  //elements
  const month = document.getElementById('month').value.toLowerCase();
  const date = document.getElementById('date').value;
  const name = document.getElementById('name').value.toUpperCase();
  const form = document.getElementById('form');
  const display = document.querySelector('.display');
  //if and else
  if (month == 'march' && date >= 21) {
    display.textContent = `${name} Your Birth Sign Is Aries`;
  } else if (month == 'april' && date <= 19) {
    display.textContent = `${name} Your Birth Sign Is Aries`;
  } else if (month == 'april' && date >= 20) {
    display.textContent = `${name} Your Birth Sign Is Tauras`;
  } else if (month == 'may' && date <= 20) {
    display.textContent = `${name} Your Birth Sign Is Tauras`;
  } else if (month == 'may' && date >= 21) {
    display.textContent = `${name} Your Birth Sign Is Gemini`;
  } else if (month == 'june' && date <= 20) {
    display.textContent = `${name} Your Birth Sign Is Gemini`;
  } else if (month == 'june' && date >= 21) {
    display.textContent = `${name} Your Birth Sign Is Cancer`;
  } else if (month == 'july' && date <= 22) {
    display.textContent = `${name} Your Birth Sign Is Cancer`;
  } else if (month == 'july' && date >= 23) {
    display.textContent = `${name} Your Birth Sign Is Leo`;
  } else if (month == 'august' && date <= 22) {
    display.textContent = `${name} Your Birth Sign Is Leo`;
  } else if (month == 'august' && date >= 23) {
    display.textContent = `${name} Your Birth Sign Is Virgo`;
  } else if (month == 'september' && date <= 22) {
    display.textContent = `${name} Your Birth Sign Is Virgo`;
  } else if (month == 'aseptember' && date >= 23) {
    display.textContent = `${name} Your Birth Sign Is Libra`;
  } else if (month == 'september' && date <= 22) {
    display.textContent = `${name} Your Birth Sign Is Libra`;
  } else if (month == 'october' && date <= 23) {
    display.textContent = `${name} Your Birth Sign Is Scorpio`;
  } else if (month == 'november' && date <= 21) {
    display.textContent = `${name} Your Birth Sign Is Scorpio`;
  } else if (month == 'november' && date >= 22) {
    display.textContent = `${name} Your Birth Sign Is Sagitarius`;
  } else if (month == 'december' && date <= 21) {
    display.textContent = `${name} Your Birth Sign Is Sagitarius`;
  } else if (month == 'december' && date <= 22) {
    display.textContent = `${name} Your Birth Sign Is Capricorn`;
  } else if (month == 'january' && date <= 19) {
    display.textContent = `${name} Your Birth Sign Is Capricorn`;
  } else if (month == 'january' && date <= 20) {
    display.textContent = `${name} Your Birth Sign Is Aquarius`;
  } else if (month == 'february' && date <= 18) {
    display.textContent = `${name} Your Birth Sign Is Aquarius`;
  } else if (month == 'february' && date >= 19) {
    display.textContent = `${name} Your Birth Sign Is Pisces`;
  } else if (month == 'march' && date <= 20) {
    display.textContent = `${name} Your Birth Sign Is Pisces`;
  }
  form.reset();
}
//event
document.getElementById('form').addEventListener('submit', check);
