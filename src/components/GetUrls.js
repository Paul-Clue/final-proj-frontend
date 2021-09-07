function getLogo(frm) {
  let flick = '';
  switch (frm.make) {
    case 'Gucci':
      flick = 'https://blog.logomyway.com/wp-content/uploads/2016/12/gucci-logo-gold.jpg';
      return flick;
    case 'Versace':
      flick = 'https://logos-world.net/wp-content/uploads/2020/04/Versace-Logo.png';
      return flick;
    case 'Armani':
      flick = 'https://1000logos.net/wp-content/uploads/2016/10/Giorgio-Armani-logo.jpg';
      return flick;
    case 'D&G':
      flick = 'https://global-uploads.webflow.com/5e157548d6f7910beea4e2d6/60a3d1be18fcab31b78277f6_dolce-gabbana-luxury-logo.png';
      return flick;
    case 'Tom Ford':
      flick = 'https://logovtor.com/wp-content/uploads/2020/08/tom-ford-eyewear-logo-vector.png';
      return flick;
    case 'Burberry':
      flick = 'https://1000logos.net/wp-content/uploads/2019/06/Burberry-Logo-1999.jpg';
      return flick;
    default:
      flick = 'No Logo';
      return flick;
  }
}

const appoints = 'https://secure-mountain-84366.herokuapp.com/appoints';
const appoint = 'https://secure-mountain-84366.herokuapp.com/appoint';
const login = 'https://secure-mountain-84366.herokuapp.com/login';
const login2 = 'https://secure-mountain-84366.herokuapp.com/login2';
const frm = 'https://secure-mountain-84366.herokuapp.com/frm';

export {
  getLogo, appoints, appoint, login, login2, frm,
};
