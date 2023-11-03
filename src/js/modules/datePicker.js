import { easepick, TimePlugin } from '@easepick/bundle';

export const datePickerCheckIn = () => {
  const picker = new easepick.create({
    element: document.getElementById('check-in'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
      'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
    ],
    format: 'DD/MM/YY',
    // format: 'HH:mm, DD/MM/YY',
    // plugins: [TimePlugin],
  });
}

export const datePickerCheckOut = () => {
  const picker = new easepick.create({
    element: document.getElementById('check-out'),
    css: [
      'https://cdn.jsdelivr.net/npm/@easepick/core@1.2.1/dist/index.css',
      'https://cdn.jsdelivr.net/npm/@easepick/time-plugin@1.2.1/dist/index.css',
    ],
    format: 'DD/MM/YY'
  });
}