import type { Person } from './types';

export const people: Person[] = [
  {
    id: 'meghan',
    dob: '6th sept 2005',
    name: 'Meghan Khaire',
    nickname: 'Sexa',
    photo: 'meghan.jpg',
    theme: { bg: '#c8eae7', accent: '#004aad', text: '#0cc0df' },
    message: '...',
    spotify: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator',
  },
  {
    id: 'Jabez',
    dob: '22nd july 2005',
    name: 'Jabez Bodkhe',
    nickname: 'Bear',
    photo: 'jabez.png',
    theme: { bg: '#aa9788', accent: '#fa7829', text: '#89675e' },
    message: '...',
    spotify: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator',
  },
  {
    id: 'priyal',
    dob: '9th augest 2005',
    name: 'Priyal Kothari',
    nickname: 'Pripri',
    photo: 'priyal.png',
    theme: { bg: '#ffbbda', accent: '#f333ce', text: '#ff92da' },
    message: '...',
    spotify: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator',
  },
  {
    id: 'nachiket',
    dob: '28th july 2004',
    name: 'Nachiket Kadam',
    nickname: 'Notty',
    photo: 'nachi.png',
    theme: { bg: '#ceb9d4', accent: '#f5640a', text: '#de68ff' },
    message: '...',
    spotify: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator',
  },
  {
    id: 'tanisha',
    dob: '13th April 2005',
    name: 'Tanisha Jagdale',
    nickname: 'Goldy',
    photo: 'tanisha.png',
    theme: { bg: '#ffe2b4', accent: '#f5640a', text: '#ffbd59' },
    message: '...',
    spotify: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator',
  },
  {
    id: 'Rushikesh',
    dob: '9th Dec 2005',
    name: 'Rushikesh Tonape',
    nickname: '0.5x',
    photo: 'rushi.png',
    theme: { bg: '#d1ebcb', accent: '#1a2c16', text: '#4f8345' },
    message: '...',
    spotify: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator',
  },
  {
    id: 'Jui',
    dob: '25th Oct 2004',
    name: 'Jui Shilimkar',
    nickname: 'DSE',
    photo: 'jui.png',
    theme: { bg: '#c7e4e4', accent: '#833e19', text: '#437e79' },
    message: '...',
    spotify: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator',
  },
  {
    id: 'arshad',
    dob: '2nd feb 2005',
    name: 'Arshad Mulani',
    nickname: 'Mulle',
    photo: 'arshad.png',
    theme: { bg: '#cf7a8c', accent: '#e1dbdb', text: '#cc0f14' },
    message: '...',
    spotify: 'https://open.spotify.com/embed/track/7MXVkk9YMctZqd1Srtv4MB?utm_source=generator',
  }


];

export function getPerson(id: string): Person | undefined {
  return people.find((p) => p.id === id);
}
