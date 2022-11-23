import Two from 'two.js';

const endpoint = document.querySelector('#app');

const params = {
    fullscree: true,
};

const two = new Two(params).appendTo(endpoint);

export { two };
