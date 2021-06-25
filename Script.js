<script src="https://code.jquery.com/jquery-3.6.0.min.js" integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4=" crossorigin="anonymous"></script>
    <script>
  		/************** Currency code auto Switch *************************/
          var currency_symbols = {
            'CountryCode':'Currency Code',
            'UK':'GBP',
            'NZ':'NZD',
            'CK':'NZD',
            'NU':'NZD',
            'PN':'NZD',
            'TK':'NZD',
            'AU':'AUD',
            'CX':'AUD',
            'CC':'AUD',
            'HM':'AUD',
            'KI':'AUD',
            'NR':'AUD',
            'NF':'AUD',
            'TV':'AUD',
            'AS':'EUR',
            'AD':'EUR',
            'AT':'EUR',
            'BE':'EUR',
            'FI':'EUR',
            'FR':'EUR',
            'GF':'EUR',
            'TF':'EUR',
            'DE':'EUR',
            'GR':'EUR',
            'GP':'EUR',
            'IE':'EUR',
            'IT':'EUR',
            'LU':'EUR',
            'MQ':'EUR',
            'YT':'EUR',
            'MC':'EUR',
            'NL':'EUR',
            'PT':'EUR',
            'RE':'EUR',
            'WS':'EUR',
            'SM':'EUR',
            'SI':'EUR',
            'ES':'EUR',
            'VA':'EUR',
            'GS':'GBP',
            'GB':'GBP',
            'JE':'GBP',
            'IO':'USD',
            'GU':'USD',
            'MH':'USD',
            'FM':'USD',
            'MP':'USD',
            'PW':'USD',
            'PR':'USD',
            'TC':'USD',
            'US':'USD',
            'UM':'USD',
            'VG':'USD',
            'VI':'USD',
            'HK':'HKD',
            'CA':'CAD',
            'JP':'JPY',
            'AF':'AFN',
            'AL':'ALL',
            'DZ':'DZD',
            'AI':'XCD',
            'AG':'XCD',
            'DM':'XCD',
            'GD':'XCD',
            'MS':'XCD',
            'KN':'XCD',
            'LC':'XCD',
            'VC':'XCD',
            'AR':'ARS',
            'AM':'AMD',
            'AW':'ANG',
            'AN':'ANG',
            'AZ':'AZN',
            'BS':'BSD',
            'BH':'BHD',
            'BD':'BDT',
            'BB':'BBD',
            'BY':'BYR',
            'BZ':'BZD',
            'BJ':'XOF',
            'BF':'XOF',
            'GW':'XOF',
            'CI':'XOF',
            'ML':'XOF',
            'NE':'XOF',
            'SN':'XOF',
            'TG':'XOF',
            'BM':'BMD',
            'BT':'INR',
            'IN':'INR',
            'BO':'BOB',
            'BW':'BWP',
            'BV':'NOK',
            'NO':'NOK',
            'SJ':'NOK',
            'BR':'BRL',
            'BN':'BND',
            'BG':'BGN',
            'BI':'BIF',
            'KH':'USD',
            'CM':'XAF',
            'CF':'XAF',
            'TD':'XAF',
            'CG':'XAF',
            'GQ':'XAF',
            'GA':'XAF',
            'CV':'CVE',
            'KY':'KYD',
            'CL':'CLP',
            'CN':'CNY',
            'CO':'COP',
            'KM':'KMF',
            'CD':'CDF',
            'CR':'CRC',
            'HR':'HRK',
            'CU':'CUP',
            'CY':'CYP',
            'CZ':'CZK',
            'DK':'DKK',
            'FO':'DKK',
            'GL':'DKK',
            'DJ':'DJF',
            'DO':'DOP',
            'TP':'IDR',
            'ID':'IDR',
            'EC':'ECS',
            'EG':'EGP',
            'SV':'SVC',
            'ER':'ETB',
            'ET':'ETB',
            'EE':'EEK',
            'FK':'FKP',
            'FJ':'FJD',
            'PF':'XPF',
            'NC':'XPF',
            'WF':'XPF',
            'GM':'GMD',
            'GE':'GEL',
            'GI':'GIP',
            'GT':'GTQ',
            'GN':'GNF',
            'GY':'GYD',
            'HT':'HTG',
            'HN':'HNL',
            'HU':'HUF',
            'IS':'ISK',
            'IR':'IRR',
            'IQ':'IQD',
            'IL':'ILS',
            'JM':'JMD',
            'JO':'JOD',
            'KZ':'KZT',
            'KE':'KES',
            'KP':'KPW',
            'KR':'KRW',
            'KW':'KWD',
            'KG':'KGS',
            'LA':'LAK',
            'LV':'LVL',
            'LB':'LBP',
            'LS':'LSL',
            'LR':'LRD',
            'LY':'LYD',
            'LI':'CHF',
            'CH':'CHF',
            'LT':'LTL',
            'MO':'MOP',
            'MK':'MKD',
            'MG':'MGA',
            'MW':'MWK',
            'MY':'MYR',
            'MV':'MVR',
            'MT':'MTL',
            'MR':'MRO',
            'MU':'MUR',
            'MX':'MXN',
            'MD':'MDL',
            'MN':'MNT',
            'MA':'MAD',
            'EH':'MAD',
            'MZ':'MZN',
            'MM':'MMK',
            'NA':'NAD',
            'NP':'NPR',
            'NI':'NIO',
            'NG':'NGN',
            'OM':'OMR',
            'PK':'PKR',
            'PA':'PAB',
            'PG':'PGK',
            'PY':'PYG',
            'PE':'PEN',
            'PH':'PHP',
            'PL':'PLN',
            'QA':'QAR',
            'RO':'RON',
            'RU':'RUB',
            'RW':'RWF',
            'ST':'STD',
            'SA':'SAR',
            'SC':'SCR',
            'SL':'SLL',
            'SG':'SGD',
            'SK':'SKK',
            'SB':'SBD',
            'SO':'SOS',
            'ZA':'ZAR',
            'LK':'LKR',
            'SD':'SDG',
            'SR':'SRD',
            'SZ':'SZL',
            'SE':'SEK',
            'SY':'SYP',
            'TW':'TWD',
            'TJ':'TJS',
            'TZ':'TZS',
            'TH':'THB',
            'TO':'TOP',
            'TT':'TTD',
            'TN':'TND',
            'TR':'TRY',
            'TM':'TMT',
            'UG':'UGX',
            'UA':'UAH',
            'AE':'AED',
            'UY':'UYU',
            'UZ':'UZS',
            'VU':'VUV',
            'VE':'VEF',
            'VN':'VND',
            'YE':'YER',
            'ZM':'ZMK',
            'ZW':'ZWD',
            'AX':'EUR',
            'AO':'AOA',
            'AQ':'AQD',
            'BA':'BAM',
            'CD':'CDF',
            'GH':'GHS',
            'GG':'GGP',
            'IM':'GBP',
            'LA':'LAK',
            'MO':'MOP',
            'ME':'EUR',
            'PS':'JOD',
            'BL':'EUR',
            'SH':'GBP',
            'MF':'ANG',
            'PM':'EUR',
            'RS':'RSD',
            'USAF':'USD',

          };


          function getCookie(cname) {
            var name = cname + "=";
            var decodedCookie = decodeURIComponent(document.cookie);
            var ca = decodedCookie.split(';');
            for(var i = 0; i <ca.length; i++) {
              var c = ca[i];
              while (c.charAt(0) == ' ') {
                c = c.substring(1);
              }
              if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
              }
            }
            return "";
          }


      $(function(){
          var geo_true = localStorage.getItem("ever_off");
         // console.log(geo_true);
          if (localStorage.getItem("ever_off") === null) {

             var new_current_currency = [];
                  jQuery('ul#wetheme-dropdown-2-dropdown li').each(function(){
                    var curr = $(this).attr('value');
                   // console.log("test"+curr);
                    new_current_currency.push(curr);
                  })

            $.get("https://ipinfo.io", function(response) {
              var country= response.country;
              var data_currecny = currency_symbols[country];           
              var current_currency = $('select[name="currency_code"]').val();         
              if(new_current_currency.indexOf(data_currecny) !== -1){
                     // alert("Value exists!");
                    } else{
                      data_currecny = 'USD';
                    }
             // console.log(data_currecny);

              if ( data_currecny != current_currency ){
        
                setTimeout(function(){
                $('li[value="'+ data_currecny +'"]').click();
                 // console.log('yes-set');
                },100);
                localStorage.setItem("ever_off", "true");
                
                //document.cookie = 'geo-off=true; path=/';
              }else{
               localStorage.setItem("ever_off", "true"); 
              }
            }, "jsonp");
          }
      });
    
  </script>

https://code.jquery.com/jquery-3.6.0.min.js
https://code.jquery.com

Comprehensive IP address data, IP geolocation API and database - IPInfo.io
https://ipinfo.io
4:05 PM
<script type="text/javascript">
window.addEventListener('DOMContentLoaded', function() {
  (function($) {
    $(document).ready(function() {
      var currmap = {"BD": "BDT", "BE": "EUR", "BF": "XOF", "BG": "BGN", "BA": "BAM", "BB": "BBD", "WF": "XPF", "BL": "EUR", "BM": "BMD", "BN": "BND", "BO": "BOB", "BH": "BHD", "BI": "BIF", "BJ": "XOF", "BT": "BTN", "JM": "JMD", "BV": "NOK", "BW": "BWP", "WS": "WST", "BQ": "USD", "BR": "BRL", "BS": "BSD", "JE": "GBP", "BY": "BYR", "BZ": "BZD", "RU": "RUB", "RW": "RWF", "RS": "RSD", "TL": "USD", "RE": "EUR", "TM": "TMT", "TJ": "TJS", "RO": "RON", "TK": "NZD", "GW": "XOF", "GU": "USD", "GT": "GTQ", "GS": "GBP", "GR": "EUR", "GQ": "XAF", "GP": "EUR", "JP": "JPY", "GY": "GYD", "GG": "GBP", "GF": "EUR", "GE": "GEL", "GD": "XCD", "GB": "GBP", "GA": "XAF", "SV": "USD", "GN": "GNF", "GM": "GMD", "GL": "DKK", "GI": "GIP", "GH": "GHS", "OM": "OMR", "TN": "TND", "JO": "JOD", "HR": "HRK", "HT": "HTG", "HU": "HUF", "HK": "HKD", "HN": "HNL", "HM": "AUD", "VE": "VEF", "PR": "USD", "PS": "ILS", "PW": "USD", "PT": "EUR", "SJ": "NOK", "PY": "PYG", "IQ": "IQD", "PA": "PAB", "PF": "XPF", "PG": "PGK", "PE": "PEN", "PK": "PKR", "PH": "PHP", "PN": "NZD", "PL": "PLN", "PM": "EUR", "ZM": "ZMK", "EH": "MAD", "EE": "EUR", "EG": "EGP", "ZA": "ZAR", "EC": "USD", "IT": "EUR", "VN": "VND", "SB": "SBD", "ET": "ETB", "SO": "SOS", "ZW": "ZWL", "SA": "SAR", "ES": "EUR", "ER": "ERN", "ME": "EUR", "MD": "MDL", "MG": "MGA", "MF": "EUR", "MA": "MAD", "MC": "EUR", "UZ": "UZS", "MM": "MMK", "ML": "XOF", "MO": "MOP", "MN": "MNT", "MH": "USD", "MK": "MKD", "MU": "MUR", "MT": "EUR", "MW": "MWK", "MV": "MVR", "MQ": "EUR", "MP": "USD", "MS": "XCD", "MR": "MRO", "IM": "GBP", "UG": "UGX", "TZ": "TZS", "MY": "MYR", "MX": "MXN", "IL": "ILS", "FR": "EUR", "IO": "USD", "SH": "SHP", "FI": "EUR", "FJ": "FJD", "FK": "FKP", "FM": "USD", "FO": "DKK", "NI": "NIO", "NL": "EUR", "NO": "NOK", "NA": "NAD", "VU": "VUV", "NC": "XPF", "NE": "XOF", "NF": "AUD", "NG": "NGN", "NZ": "NZD", "NP": "NPR", "NR": "AUD", "NU": "NZD", "CK": "NZD", "XK": "EUR", "CI": "XOF", "CH": "CHF", "CO": "COP", "CN": "CNY", "CM": "XAF", "CL": "CLP", "CC": "AUD", "CA": "CAD", "CG": "XAF", "CF": "XAF", "CD": "CDF", "CZ": "CZK", "CY": "EUR", "CX": "AUD", "CR": "CRC", "CW": "ANG", "CV": "CVE", "CU": "CUP", "SZ": "SZL", "SY": "SYP", "SX": "ANG", "KG": "KGS", "KE": "KES", "SS": "SSP", "SR": "SRD", "KI": "AUD", "KH": "KHR", "KN": "XCD", "KM": "KMF", "ST": "STD", "SK": "EUR", "KR": "KRW", "SI": "EUR", "KP": "KPW", "KW": "KWD", "SN": "XOF", "SM": "EUR", "SL": "SLL", "SC": "SCR", "KZ": "KZT", "KY": "KYD", "SG": "SGD", "SE": "SEK", "SD": "SDG", "DO": "DOP", "DM": "XCD", "DJ": "DJF", "DK": "DKK", "VG": "USD", "DE": "EUR", "YE": "YER", "DZ": "DZD", "US": "USD", "UY": "UYU", "YT": "EUR", "UM": "USD", "LB": "LBP", "LC": "XCD", "LA": "LAK", "TV": "AUD", "TW": "TWD", "TT": "TTD", "TR": "TRY", "LK": "LKR", "LI": "CHF", "LV": "EUR", "TO": "TOP", "LT": "LTL", "LU": "EUR", "LR": "LRD", "LS": "LSL", "TH": "THB", "TF": "EUR", "TG": "XOF", "TD": "XAF", "TC": "USD", "LY": "LYD", "VA": "EUR", "VC": "XCD", "AE": "AED", "AD": "EUR", "AG": "XCD", "AF": "AFN", "AI": "XCD", "VI": "USD", "IS": "ISK", "IR": "IRR", "AM": "AMD", "AL": "ALL", "AO": "AOA", "AQ": "", "AS": "USD", "AR": "ARS", "AU": "AUD", "AT": "EUR", "AW": "AWG", "IN": "INR", "AX": "EUR", "AZ": "AZN", "IE": "EUR", "ID": "IDR", "UA": "UAH", "QA": "QAR", "MZ": "MZN"};
      $.getJSON('//freegeoip.app/json/', function(location) {
        if(location.country_code){
          var mycurrency = currmap[location.country_code];
          if(mycurrency){
            $(".currency-picker").val(mycurrency);
            $(".currency-picker").change();
          }
        }
      });
    });
  })(jQuery);
});
</script>
