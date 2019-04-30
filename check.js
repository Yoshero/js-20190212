// import * as countryCodes from './blocks/phonenumber/country-codes'
let countryCodes = { 'AF': '+93', 'AL': '+355', 'DZ': '+213', 'AS': '+1', 'AD': '+376', 'AO': '+244', 'AI': '+1', 'AG': '+1', 'AR': '+54', 'AM': '+374', 'AW': '+297', 'AU': '+61', 'AT': '+43', 'AZ': '+994', 'BH': '+973', 'BD': '+880', 'BB': '+1', 'BY': '+375', 'BE': '+32', 'BZ': '+501', 'BJ': '+229', 'BM': '+1', 'BT': '+975', 'BO': '+591', 'BA': '+387', 'BW': '+267', 'BR': '+55', 'IO': '+246', 'VG': '+1', 'BN': '+673', 'BG': '+359', 'BF': '+226', 'MM': '+95', 'BI': '+257', 'KH': '+855', 'CM': '+237', 'CA': '+1', 'CV': '+238', 'KY': '+1', 'CF': '+236', 'TD': '+235', 'CL': '+56', 'CN': '+86', 'CO': '+57', 'KM': '+269', 'CK': '+682', 'CR': '+506', 'CI': '+225', 'HR': '+385', 'CU': '+53', 'CY': '+357', 'CZ': '+420', 'CD': '+243', 'DK': '+45', 'DJ': '+253', 'DM': '+1', 'DO': '+1', 'EC': '+593', 'EG': '+20', 'SV': '+503', 'GQ': '+240', 'ER': '+291', 'EE': '+372', 'ET': '+251', 'FK': '+500', 'FO': '+298', 'FM': '+691', 'FJ': '+679', 'FI': '+358', 'FR': '+33', 'GF': '+594', 'PF': '+689', 'GA': '+241', 'GE': '+995', 'DE': '+49', 'GH': '+233', 'GI': '+350', 'GR': '+30', 'GL': '+299', 'GD': '+1', 'GP': '+590', 'GU': '+1', 'GT': '+502', 'GN': '+224', 'GW': '+245', 'GY': '+592', 'HT': '+509', 'HN': '+504', 'HK': '+852', 'HU': '+36', 'IS': '+354', 'IN': '+91', 'ID': '+62', 'IR': '+98', 'IQ': '+964', 'IE': '+353', 'IL': '+972', 'IT': '+39', 'JM': '+1', 'JP': '+81', 'JO': '+962', 'KZ': '+7', 'KE': '+254', 'KI': '+686', 'XK': '+381', 'KW': '+965', 'KG': '+996', 'LA': '+856', 'LV': '+371', 'LB': '+961', 'LS': '+266', 'LR': '+231', 'LY': '+218', 'LI': '+423', 'LT': '+370', 'LU': '+352', 'MO': '+853', 'MK': '+389', 'MG': '+261', 'MW': '+265', 'MY': '+60', 'MV': '+960', 'ML': '+223', 'MT': '+356', 'MH': '+692', 'MQ': '+596', 'MR': '+222', 'MU': '+230', 'YT': '+262', 'MX': '+52', 'MD': '+373', 'MC': '+377', 'MN': '+976', 'ME': '+382', 'MS': '+1', 'MA': '+212', 'MZ': '+258', 'NA': '+264', 'NR': '+674', 'NP': '+977', 'NL': '+31', 'AN': '+599', 'NC': '+687', 'NZ': '+64', 'NI': '+505', 'NE': '+227', 'NG': '+234', 'NU': '+683', 'NF': '+672', 'KP': '+850', 'MP': '+1', 'NO': '+47', 'OM': '+968', 'PK': '+92', 'PW': '+680', 'PS': '+970', 'PA': '+507', 'PG': '+675', 'PY': '+595', 'PE': '+51', 'PH': '+63', 'PL': '+48', 'PT': '+351', 'PR': '+1', 'QA': '+974', 'CG': '+242', 'RE': '+262', 'RO': '+40', 'RU': '+7', 'RW': '+250', 'BL': '+590', 'SH': '+290', 'KN': '+1', 'MF': '+590', 'PM': '+508', 'VC': '+1', 'WS': '+685', 'SM': '+378', 'ST': '+239', 'SA': '+966', 'SN': '+221', 'RS': '+381', 'SC': '+248', 'SL': '+232', 'SG': '+65', 'SK': '+421', 'SI': '+386', 'SB': '+677', 'SO': '+252', 'ZA': '+27', 'KR': '+82', 'ES': '+34', 'LK': '+94', 'LC': '+1', 'SD': '+249', 'SR': '+597', 'SZ': '+268', 'SE': '+46', 'CH': '+41', 'SY': '+963', 'TW': '+886', 'TJ': '+992', 'TZ': '+255', 'TH': '+66', 'BS': '+1', 'GM': '+220', 'TL': '+670', 'TG': '+228', 'TK': '+690', 'TO': '+676', 'TT': '+1', 'TN': '+216', 'TR': '+90', 'TM': '+993', 'TC': '+1', 'TV': '+688', 'UG': '+256', 'UA': '+380', 'AE': '+971', 'GB': '+44', 'US': '+1', 'UY': '+598', 'VI': '+1', 'UZ': '+998', 'VU': '+678', 'VA': '+39', 'VE': '+58', 'VN': '+84', 'WF': '+681', 'YE': '+967', 'ZM': '+260', 'ZW': '+263' };

console.log(countryCodes);

// function req () {
//   return fetch(`http://apilayer.net/api/countries?access_key=a66ab8e6f404fe484554f900c232b72d`).then(response => {
//     return response.json();
//   }).catch(err => {
//     // Do something for an error here
//     console.log(err)
//   });
// }
/*
req().then(data => {
  // Work with JSON data here
  console.log(data);
  let spanCountry = document.body.querySelector('#selected_country');
  let spanPhone = document.body.querySelector('#phone')
  let json = {}

  let lists = '<select id="selecter_country" onchange="showChange()">'
  for (let key in data) {
    /* ... делать что-то с obj[key] ...
    console.log(key, ' : ', data[key].dialling_code)
    json[key] = data[key].dialling_code;
    if (key === 'RU') {
      lists += `<option id="${key}" value="${key}" selected>${key}</option>`
      document.body.querySelector('#phone').textContent = '+7'
    } else {
      lists += `<option id="${key}" value="${key}" data_code_country="${data[key].dialling_code}">${key}</option>`
    }
  }
  lists += '</select>'
  console.log(JSON.stringify(json))
  spanCountry.innerHTML = lists;
  return data

})

*/

function createLists () {
  let spanCountry = document.body.querySelector('#selected_country');
  let spanPhone = document.body.querySelector('#phone');
  let lists = {};
  lists = '<select id="selecter_country" onchange="showChange()" >';

  for (let key in countryCodes) {
    if (key === 'RU') {
      lists += `<option id="${key}" value="${key}" selected>${key}</option>`;
      spanPhone.textContent = countryCodes[key];
      document.body.querySelector('#phone').textContent = '+7'
    } else {
      lists += `<option id="${key}" value="${key}" data_code_country="${countryCodes[key]}">${key}</option>`
    }
  }
  lists += '</select>'
  spanCountry.innerHTML = lists;
}

function showChange () {
  let selectedCountry = document.body.querySelector('#selecter_country').value;
  console.log(selectedCountry)
  document.body.querySelector('#phone').textContent = countryCodes[selectedCountry];
}
createLists()
showChange();
