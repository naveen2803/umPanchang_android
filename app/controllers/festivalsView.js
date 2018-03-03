var args = arguments[0] || {};
var fData;
var listItems1 = [];
var listItems2 = [];
var listItems3 = [];
var listItems4 = [];
var listItems5 = [];
var listItems6 = [];
var listItems7 = [];
var listItems8 = [];
var listItems9 = [];
var listItems10 = [];
var listItems11 = [];
var listItems12 = [];

var selectedItem;

(function() {
	var data = '[{"transId":"1","fDate":"18","fMonth":"3","fYear":"2018","Name":"Samvatsara arambha, Abhyanga, Nimbapushpa bhakshana, Panchanga poojana shravana, Ram Navaratra arambha, Shwetavarahakalpadi, Dhwajarohana, Ishti,  Chandradarshana"},{"transId":"2","fDate":"19","fMonth":"3","fYear":"2018","Name":"Vedavyasa teertha pu. (Penagundi), Satyaprajna teertha pu. (Atkur)"},{"transId":"3","fDate":"20","fMonth":"3","fYear":"2018","Name":"Gauri Tritiya, Uttama Manvadi, Matsya Jayanti"},{"transId":"4","fDate":"22","fMonth":"3","fYear":"2018","Name":" Udan Kalpadi"},{"transId":"5","fDate":"24","fMonth":"3","fYear":"2018","Name":"Navali Bhogapuresha Rathotsava, Bhavani Jayanti"},{"transId":"6","fDate":"25","fMonth":"3","fYear":"2018","Name":"Shri Rama Navami, Mahabhishekotsava in Uttaradi Math,  Kaveendra teertha pu. (Nava Brindavana),  Satyadhyana teertha pu. (Pandharapur)"},{"transId":"7","fDate":"26","fMonth":"3","fYear":"2018","Name":"Korwar Pranadeva Rathotsava, "},{"transId":"8","fDate":"27","fMonth":"3","fYear":"2018","Name":"Sarvesham Ekadashi (Kaamada)"},{"transId":"9","fDate":"28","fMonth":"3","fYear":"2018","Name":"Harivasara till 05:55am."},{"transId":"10","fDate":"29","fMonth":"3","fYear":"2018","Name":"Pradosha, Satyapriya teertha pu. (Manamadhurai)"},{"transId":"11","fDate":"31","fMonth":"3","fYear":"2018","Name":"Hanuma Jayanti, Vaishaka Snana arambha, Devasavarni Manvadi, Davanada Hunnime, Vishnu Panchaka,  Anvadhana"},{"transId":"12","fDate":"1","fMonth":"4","fYear":"2018","Name":"Ishti"},{"transId":"13","fDate":"3","fMonth":"4","fYear":"2018","Name":"Vageesha teertha pu. (Nava Brindavana)"},{"transId":"14","fDate":"5","fMonth":"4","fYear":"2018","Name":"Chandrala Parameshwari Rathotsava Sannati"},{"transId":"15","fDate":"8","fMonth":"4","fYear":"2018","Name":"Kalashtami"},{"transId":"16","fDate":"10","fMonth":"4","fYear":"2018","Name":"Vishnu Panchaka"},{"transId":"17","fDate":"11","fMonth":"4","fYear":"2018","Name":"Smartana Ekadashi, Harivasara till 11:40pm"},{"transId":"18","fDate":"12","fMonth":"4","fYear":"2018","Name":"Sarvesham Ekadashi, Satyavijaya teertha pu. (Satyavijayanagar)"},{"transId":"19","fDate":"13","fMonth":"4","fYear":"2018","Name":"Alpadwadashi till 07:00am, Pradosha"},{"transId":"20","fDate":"14","fMonth":"4","fYear":"2018","Name":"Maasa Shivaratri, Vishavat Punya Kala till 10:06am."},{"transId":"21","fDate":"15","fMonth":"4","fYear":"2018","Name":"Darsha, Anvadhana, "},{"transId":"22","fDate":"16","fMonth":"4","fYear":"2018","Name":"Vishnu Panchaka, Akshaya Tritiya Amavasya, Satyananda teertha pu. (Malkhed)"},{"transId":"23","fDate":"17","fMonth":"4","fYear":"2018","Name":"Chandradarshana, "},{"transId":"24","fDate":"18","fMonth":"4","fYear":"2018","Name":"Parashurama Jayanti, Akshaya Tritiya, Treta Ugadi, Jalakumbhadaana, Kalpadi, Vidyadhiraja teertha pu. (Jagannath Puri), Vijayadhwaja teertha pu. (Kanvateerth)"},{"transId":"25","fDate":"21","fMonth":"4","fYear":"2018","Name":"Shri Satyatma Teertha Sripadangalavara 23rd Peetharohana Mahotsava, Ramachandra teertha Pu. (Yaragola)"},{"transId":"26","fDate":"22","fMonth":"4","fYear":"2018","Name":"Gangotpatti, Gangapoojana"},{"transId":"27","fDate":"23","fMonth":"4","fYear":"2018","Name":"Durgashtami, Sheshadasara Pu. (Modalkal)"},{"transId":"28","fDate":"26","fMonth":"4","fYear":"2018","Name":"Sarvesham Ekadashi"},{"transId":"29","fDate":"27","fMonth":"4","fYear":"2018","Name":"Sadhini Dwadashi 06:38am, Pradosha"},{"transId":"30","fDate":"28","fMonth":"4","fYear":"2018","Name":"Vedavyasa Jayanti, Narasimha Jayanti"},{"transId":"31","fDate":"29","fMonth":"4","fYear":"2018","Name":"Aagihunnive, Anvadhana, Koppara Kshetradalli Narasimha Jayanti, Vishnu Panchaka, Vyasa Pooja, Vaishaka snana samapti, Koorma Jayanti, Torvi, Shoorpali, Muttagi, Mu.Kha.Hubli, NeeraNarasimha kshetragalalli Shri Lakshmi Narasimha Rathotsava"},{"transId":"32","fDate":"30","fMonth":"4","fYear":"2018","Name":"Ishti"},{"transId":"33","fDate":"7","fMonth":"5","fYear":"2018","Name":"Vishnupanchaka, Kalashtami,"},{"transId":"34","fDate":"8","fMonth":"5","fYear":"2018","Name":" Dhanisthanavkarambha"},{"transId":"35","fDate":"11","fMonth":"5","fYear":"2018","Name":"Sarveshama Ekadashi, "},{"transId":"36","fDate":"12","fMonth":"5","fYear":"2018","Name":"Brahmanyateertha punya tithi ( Abburu), "},{"transId":"37","fDate":"13","fMonth":"5","fYear":"2018","Name":"Pradosha, Maasa Shivaratri, "},{"transId":"38","fDate":"14","fMonth":"5","fYear":"2018","Name":"Banashankari Kuladharma"},{"transId":"39","fDate":"15","fMonth":"5","fYear":"2018","Name":"Anvadhana, Darsha, Vishnu Panchaka, Bhavuka Amavasya, Shanishwara Jayanti, Vishnupada parva punya kala till 08:25am"},{"transId":"40","fDate":"16","fMonth":"5","fYear":"2018","Name":"Adhika Jestha Masa Prarambha"},{"transId":"41","fDate":"13","fMonth":"6","fYear":"2018","Name":"Adhika Jestha Masa Sampanna"},{"transId":"42","fDate":"14","fMonth":"6","fYear":"2018","Name":"Ishti,  Dashahara vrata Arambha"},{"transId":"43","fDate":"15","fMonth":"6","fYear":"2018","Name":"chandradarshana, Satyasandhatirtha pu.(Mahishi), Mithuna Sankramana Shadashiti parvapunyakala  after 12.23pm"},{"transId":"44","fDate":"17","fMonth":"6","fYear":"2018","Name":"Pushyarka Yoga"},{"transId":"45","fDate":"19","fMonth":"6","fYear":"2018","Name":"Mohanadasara pu.(Chippagiri)"},{"transId":"46","fDate":"21","fMonth":"6","fYear":"2018","Name":"Durgashtami"},{"transId":"47","fDate":"23","fMonth":"6","fYear":"2018","Name":"Smartanam Ekadashi, Harivasara after 11:30pm, Dashaharavrata samapti, bhagirathijayantI, "},{"transId":"48","fDate":"24","fMonth":"6","fYear":"2018","Name":"Bhagavatanam Ekadashi"},{"transId":"49","fDate":"25","fMonth":"6","fYear":"2018","Name":"Kalamatra Sadhani,Pradosha"},{"transId":"50","fDate":"27","fMonth":"6","fYear":"2018","Name":"Satyabhinavatirtha pu. (NacharKoil) , ShriPadarajara pu. (Mulabagil), Vatasavitri puja, Anvadhana"},{"transId":"51","fDate":"28","fMonth":"6","fYear":"2018","Name":"AnadvahapaurnimA (Karahunnime),  Krishnadvaipayanatirtha pu.(kusamurti)), vishnupanchaka Abhava, Indrasavarnimanvadi, Isti"},{"transId":"52","fDate":"30","fMonth":"6","fYear":"2018","Name":"Satyapurnatirtha pu.(kolapura)"},{"transId":"53","fDate":"1","fMonth":"7","fYear":"2018","Name":"Raghuvaryatirtha pu.(Navabrindavana), Vishnupanchaka"},{"transId":"54","fDate":"5","fMonth":"7","fYear":"2018","Name":"Kalastami"},{"transId":"55","fDate":"7","fMonth":"7","fYear":"2018","Name":"Satyadheeratirtha pu.(Aatkoor)"},{"transId":"56","fDate":"9","fMonth":"7","fYear":"2018","Name":"Sarvesham Ekadashi , Vidyapati Teertha pu(Raya Velur)"},{"transId":"57","fDate":"10","fMonth":"7","fYear":"2018","Name":"Pradosha."},{"transId":"58","fDate":"11","fMonth":"7","fYear":"2018","Name":"Masa Shivaratri, Vijayeendratirtha pu.(Kumbakonam)"},{"transId":"59","fDate":"12","fMonth":"7","fYear":"2018","Name":"Darsha, Anvadhana"},{"transId":"60","fDate":"13","fMonth":"7","fYear":"2018","Name":" Vishnupanchaka, Isti,   MrittikavrishabhapujA, Mannettinaamavasya,  Isti"},{"transId":"61","fDate":"14","fMonth":"7","fYear":"2018","Name":"Chandradarshan"},{"transId":"62","fDate":"17","fMonth":"7","fYear":"2018","Name":"Dakshinayana Parva Punya Kaal till 10:08am"},{"transId":"63","fDate":"18","fMonth":"7","fYear":"2018","Name":"Karidina"},{"transId":"64","fDate":"21","fMonth":"7","fYear":"2018","Name":"Satyadhirajatirtha pu.(Veluru)"},{"transId":"65","fDate":"22","fMonth":"7","fYear":"2018","Name":"Chaturmasya Vrata Arambha, Chakshusha Manvadi"},{"transId":"66","fDate":"23","fMonth":"7","fYear":"2018","Name":"Sarveshama Ekadashi, Tapta Mudradharane, Shakavrata Arambha, Dharana Parana Vrata Arambha"},{"transId":"67","fDate":"24","fMonth":"7","fYear":"2018","Name":"Pradosha"},{"transId":"68","fDate":"27","fMonth":"7","fYear":"2018","Name":"Vyasa Pooja,  Guru Pournima, Dharmasavarni Manvaadi,   Vishnu Panchaka, Anvadhana, Satyasankalpatirtha pu.(Mysore), Chandra Grahana 11:55pm to 03:50am(next date). Refer panchanga for more details"},{"transId":"69","fDate":"28","fMonth":"7","fYear":"2018","Name":"Vishnu Panchaka,  Karidina"},{"transId":"70","fDate":"29","fMonth":"7","fYear":"2018","Name":"Ashoonya Shayanaya Vrata, Chandradoya 07:49pm"},{"transId":"71","fDate":"2","fMonth":"8","fYear":"2018","Name":"Shrimajjayatirthara pu.(MalaKheda)"},{"transId":"72","fDate":"7","fMonth":"8","fYear":"2018","Name":"Sarvesham Ekadashi"},{"transId":"73","fDate":"9","fMonth":"8","fYear":"2018","Name":"Pradosha,"},{"transId":"74","fDate":"11","fMonth":"8","fYear":"2018","Name":"Darsha, Vishnu Panchaka, Anvadhana, Deepasthambha Gauri Vrata, Nagara Amavasya, Satyadhishatirtha pu. (Rajamahendri)"},{"transId":"75","fDate":"12","fMonth":"8","fYear":"2018","Name":"Isti, Chandrandarshana"},{"transId":"76","fDate":"14","fMonth":"8","fYear":"2018","Name":"Mangala Gauri Vrata, Naga Chaturthi"},{"transId":"77","fDate":"15","fMonth":"8","fYear":"2018","Name":"Naga Panchami"},{"transId":"78","fDate":"16","fMonth":"8","fYear":"2018","Name":"Kalki Jayanti"},{"transId":"79","fDate":"17","fMonth":"8","fYear":"2018","Name":"Masa Mahalakshmi Kalasa Sthapana, Satyavara teertha pu.(Santebidanooru), Vishnupada parva punya kala after 12:27pm"},{"transId":"80","fDate":"18","fMonth":"8","fYear":"2018","Name":"Durgastami"},{"transId":"81","fDate":"21","fMonth":"8","fYear":"2018","Name":"Mangala Gauri Vrata"},{"transId":"82","fDate":"22","fMonth":"8","fYear":"2018","Name":"Sarvesham Ekadashi, Dadhivrat Arambha ,"},{"transId":"83","fDate":"23","fMonth":"8","fYear":"2018","Name":"Vishno pavitraropana , Pradosha"},{"transId":"84","fDate":"24","fMonth":"8","fYear":"2018","Name":"Vara Mahalakshmi Vrata"},{"transId":"85","fDate":"25","fMonth":"8","fYear":"2018","Name":" Rigveda Nutan Sahit Upakarma, Vishnu Panchaka Abhava,"},{"transId":"86","fDate":"26","fMonth":"8","fYear":"2018","Name":"Hayagreeva Jayanti, Noola Hunnive, Raksha Bandhana, Anvadhana, Yajurveda Nutan Sahit Upakarma"},{"transId":"87","fDate":"27","fMonth":"8","fYear":"2018","Name":"Isti, Ashoonya shayanaya vrata, Chandrodaya 07:45pm"},{"transId":"88","fDate":"28","fMonth":"8","fYear":"2018","Name":"Raghavendra swamigala pu.(Mantralaya), Mangalagauri vrata"},{"transId":"89","fDate":"2","fMonth":"9","fYear":"2018","Name":"Shree Krishna Jayanti Chandrodaya 11:37pm, Kalastami"},{"transId":"90","fDate":"3","fMonth":"9","fYear":"2018","Name":"Tithibhanteante Paranam 05:37pm, Soorya Savarni Manvadi"},{"transId":"91","fDate":"4","fMonth":"9","fYear":"2018","Name":"Mangalagauri vrata"},{"transId":"92","fDate":"6","fMonth":"9","fYear":"2018","Name":"Sarvesham Ekadashi, Gurupushya Amruta Yoga after 03:15pm"},{"transId":"93","fDate":"7","fMonth":"9","fYear":"2018","Name":"Alpa dwadashi till 06:35am, Pradosha, Satyadharma teertha pu.(Holehonnuru)"},{"transId":"94","fDate":"8","fMonth":"9","fYear":"2018","Name":"Masa Shivaratri"},{"transId":"95","fDate":"9","fMonth":"9","fYear":"2018","Name":"Anvadhana, Vishnupamchaka, Benakana amavasya, Kusha grahana, Darsha"},{"transId":"96","fDate":"10","fMonth":"9","fYear":"2018","Name":"Proshtapadi prarambha, Ishti"},{"transId":"97","fDate":"11","fMonth":"9","fYear":"2018","Name":"Balarama jayanti, Dhanvantari jayanti , Chandradarshana, Samaveda Upakarma"},{"transId":"98","fDate":"12","fMonth":"9","fYear":"2018","Name":"Varaha jayanti, Swarnagauri vrata,Taapasa manvadi, "},{"transId":"99","fDate":"13","fMonth":"9","fYear":"2018","Name":"Ganesha chaturthi, "},{"transId":"100","fDate":"14","fMonth":"9","fYear":"2018","Name":"Rishi panchami vrata"},{"transId":"101","fDate":"15","fMonth":"9","fYear":"2018","Name":"Suya Shashti, Prathah Snanadinda ashvamedh phala , Jyeshtha devyavahana "},{"transId":"102","fDate":"16","fMonth":"9","fYear":"2018","Name":"Jyeshtha gauri puja"},{"transId":"103","fDate":"17","fMonth":"9","fYear":"2018","Name":"Jyeshthadevi visarjana, Darakattikolluvadu after 07:40am,  Maasa mahalakshmi kalashavisarjana, Shadasheeti parva punya kala after 12:20pm"},{"transId":"104","fDate":"18","fMonth":"9","fYear":"2018","Name":"Jagannatha dasara pu. (Maanvi)"},{"transId":"105","fDate":"20","fMonth":"9","fYear":"2018","Name":"Sarvesham Ekadashi (Parivartini), Ksheera vrat aarambha , Satyeshtatirtha pu.(Atakur)"},{"transId":"106","fDate":"21","fMonth":"9","fYear":"2018","Name":"Shravana Dwadashi, Upavasa, Vamana jayati, Prasanna Venkaaadasara pu.(Badami)"},{"transId":"107","fDate":"23","fMonth":"9","fYear":"2018","Name":"Anant Vrata,"},{"transId":"108","fDate":"24","fMonth":"9","fYear":"2018","Name":"Proshthapadi shraddha, AnvAdhAna,"},{"transId":"109","fDate":"25","fMonth":"9","fYear":"2018","Name":"Vishnupanchaka Abhava, Anant Hunnive, Uma Maheswara Vruta, Mahalaya Arambha, Isti, Yadavarya pu. (Munavalli)"},{"transId":"110","fDate":"26","fMonth":"9","fYear":"2018","Name":"Ashoonyashayana vrata -chandrodaya 07:08pm"},{"transId":"111","fDate":"27","fMonth":"9","fYear":"2018","Name":"Shrinivasa teertha pu.(Honnali), Gaja Gauri Ahavana after 02:53am"},{"transId":"112","fDate":"28","fMonth":"9","fYear":"2018","Name":"Brihad gauri vrata, Mahabharani shraddha   "},{"transId":"113","fDate":"1","fMonth":"10","fYear":"2018","Name":"Poorvedyu shraddha"},{"transId":"114","fDate":"2","fMonth":"10","fYear":"2018","Name":"Madhyashtami shraddha, Ashtaka shraddha"},{"transId":"115","fDate":"3","fMonth":"10","fYear":"2018","Name":"Avidhava navami shraddha, Anwashtaka shraddha"},{"transId":"116","fDate":"4","fMonth":"10","fYear":"2018","Name":"Gurupushyamruta Yoga"},{"transId":"117","fDate":"5","fMonth":"10","fYear":"2018","Name":"Sarvesham Ekadashi (Indira) "},{"transId":"118","fDate":"6","fMonth":"10","fYear":"2018","Name":"Sanyasigala mahalaya, Pradosha, Kaliyugadi"},{"transId":"119","fDate":"7","fMonth":"10","fYear":"2018","Name":"Masa Shivaratri, Ghata Chaturdashi shraddha"},{"transId":"120","fDate":"8","fMonth":"10","fYear":"2018","Name":"Darsha, Sarvapitra Amavasya,Anvadhana, "},{"transId":"121","fDate":"9","fMonth":"10","fYear":"2018","Name":"Madhava teertharu pu.( Mannur), Matamahashradha, Vishnu Panchaka, Isti"},{"transId":"122","fDate":"10","fMonth":"10","fYear":"2018","Name":"Navarathri begins, Kalasha sthapana,  Chandra Darshana"},{"transId":"123","fDate":"12","fMonth":"10","fYear":"2018","Name":"Saptharatrotsava begins"},{"transId":"124","fDate":"14","fMonth":"10","fYear":"2018","Name":"Pancharatrotsava begins, Saraswati Ahavana after 02:52 pm."},{"transId":"125","fDate":"16","fMonth":"10","fYear":"2018","Name":"Triratrotsava begins, Saraswavati Pooja, Satyaparayana Teertha Pu. (Santebidanur)"},{"transId":"126","fDate":"17","fMonth":"10","fYear":"2018","Name":"Durgashtami, Satyaparakrama Teeratha Pu. (Chittapur)"},{"transId":"127","fDate":"18","fMonth":"10","fYear":"2018","Name":"Mahanavami, Vijaya Dashami, saraswati Visarjana , Vishnupanchaka,  Swaarochisha Manvaadi, Vishnuvataparva punya kala till 08:16am"},{"transId":"128","fDate":"19","fMonth":"10","fYear":"2018","Name":"Budha Jayanti, Shri Madhwa Jayanti"},{"transId":"129","fDate":"20","fMonth":"10","fYear":"2018","Name":"Sarvesham Ekadashi, Dvidala Vratha begins"},{"transId":"130","fDate":"22","fMonth":"10","fYear":"2018","Name":"Pradosha"},{"transId":"131","fDate":"23","fMonth":"10","fYear":"2018","Name":"Kojaagara Vratha"},{"transId":"132","fDate":"24","fMonth":"10","fYear":"2018","Name":"Kartika Snana Arambha, Nakshtra Deeparmbha, Vishnupanchaka, Shigehunnive, Anvadhana"},{"transId":"133","fDate":"25","fMonth":"10","fYear":"2018","Name":"Isti"},{"transId":"134","fDate":"26","fMonth":"10","fYear":"2018","Name":"Ashoonya Shayana vrata, Chandrodya at 7:35 PM"},{"transId":"135","fDate":"31","fMonth":"10","fYear":"2018","Name":"Kalashtami"},{"transId":"136","fDate":"3","fMonth":"11","fYear":"2018","Name":"Smarthanam Ekadashi, Harivasara after 09:10PM"},{"transId":"137","fDate":"4","fMonth":"11","fYear":"2018","Name":"Bhagavatanam Ekadashi"},{"transId":"138","fDate":"5","fMonth":"11","fYear":"2018","Name":"Govatsa Dwadashi, Pradosha, Dhana Thrayodashi, Jala Poorna Thrayodashi, Yama Deepa daana, Masa Shivaratri"},{"transId":"139","fDate":"6","fMonth":"11","fYear":"2018","Name":"Naraka Chaturdashi, Chandrodaya at 5:06 AM, Abhyanga, Yama Tarpana"},{"transId":"140","fDate":"7","fMonth":"11","fYear":"2018","Name":"Darsha, Vishnu Panchaka, Mahalakshmi Pooja, Deepavali Amavaya, Anvaadhaana"},{"transId":"141","fDate":"8","fMonth":"11","fYear":"2018","Name":"Bali Pratipada, Abhyanga, Maha Abhisheka at Uttaradi Math, Vikrama Samvatsara 2075, Ishti, Govaradhan Pooja"},{"transId":"142","fDate":"9","fMonth":"11","fYear":"2018","Name":"Yama Dwitiya (Bhagini hastena bhojana), Chandra darshana"},{"transId":"143","fDate":"10","fMonth":"11","fYear":"2018","Name":"Bhagini Tritiya, Satyapramoda Teertha Pu. (Tirukoilur), Mahasamaradhana at Uttaradi Math"},{"transId":"144","fDate":"13","fMonth":"11","fYear":"2018","Name":"Vedesha Teertha Pu. (Mannur)"},{"transId":"145","fDate":"14","fMonth":"11","fYear":"2018","Name":"Kalpaadi,  Vishnu Panchaka Abhava"},{"transId":"146","fDate":"15","fMonth":"11","fYear":"2018","Name":" Durgashtami, Gopastami"},{"transId":"147","fDate":"16","fMonth":"11","fYear":"2018","Name":"Mahalaya Gaun Kaal Samapti"},{"transId":"148","fDate":"17","fMonth":"11","fYear":"2018","Name":"Krutha Yugadi, Vishnupada parva punya kala till 12:09pm"},{"transId":"149","fDate":"18","fMonth":"11","fYear":"2018","Name":"Satyaveera Teertha Pu. (Korlahalli), Vijaya Dasara Pu. (Chippagiri)"},{"transId":"150","fDate":"19","fMonth":"11","fYear":"2018","Name":"Sarvesham Ekadashi (Prabhodhini), Chaturmasya ends, Vedanidhi Teertha Pu. (Pandarapur), Dvidala Vratha ends, Bheeshma Panchaka begins"},{"transId":"151","fDate":"20","fMonth":"11","fYear":"2018","Name":"Utthana Dwadashi, Tulasi Vivaha, Evening pooja of Sri Moola Rama Devaru at Uttaradi Math, Manvadi"},{"transId":"152","fDate":"21","fMonth":"11","fYear":"2018","Name":"Vaikunta Chaturdashi, Dhaatri Pooja"},{"transId":"153","fDate":"22","fMonth":"11","fYear":"2018","Name":"Anvaadhaana"},{"transId":"154","fDate":"23","fMonth":"11","fYear":"2018","Name":"Ishti, Vyasa Pooja, Kartika Snana ends, Gauri Hunnime, Dakshasaavarni Manvaadi, Bheeshma Panchaka ends, Vishnu Panchaka"},{"transId":"155","fDate":"25","fMonth":"11","fYear":"2018","Name":"Shri Satyapramoda Teerthara Paduka Maha Samaradhane"},{"transId":"156","fDate":"26","fMonth":"11","fYear":"2018","Name":"Vidyanidhi Teertha Pu. (Yaragola)"},{"transId":"157","fDate":"29","fMonth":"11","fYear":"2018","Name":"Kaalashtami, Kaala Bhairavi Jayanthi"},{"transId":"158","fDate":"3","fMonth":"12","fYear":"2018","Name":"Sarvesham Ekadashi"},{"transId":"159","fDate":"4","fMonth":"12","fYear":"2018","Name":"Pradosha"},{"transId":"160","fDate":"5","fMonth":"12","fYear":"2018","Name":"Masa Shivaratri"},{"transId":"161","fDate":"6","fMonth":"12","fYear":"2018","Name":"Padmanabha Teertha Pu. (Nava Brindavana), Darsha"},{"transId":"162","fDate":"7","fMonth":"12","fYear":"2018","Name":"Vishnu Panchaka, Mahipathi Dasara Pu. (Kakhandaki), Chattee Amavasya, Anvaadhaana"},{"transId":"163","fDate":"8","fMonth":"12","fYear":"2018","Name":"Ishti,  Chandradarshana"},{"transId":"164","fDate":"10","fMonth":"12","fYear":"2018","Name":"Raghuveeratirtha pu.(Kudali)."},{"transId":"165","fDate":"12","fMonth":"12","fYear":"2018","Name":"Sankarshanavadeyara pu.(Karamapundi), Vishnupanchaka Vruta grahana"},{"transId":"166","fDate":"13","fMonth":"12","fYear":"2018","Name":"Skandhashashthi,  Champashashthi."},{"transId":"167","fDate":"15","fMonth":"12","fYear":"2018","Name":"Durgashtami, Bhimajayanti."},{"transId":"168","fDate":"16","fMonth":"12","fYear":"2018","Name":"Kalpadi, Shadasheevat punya kala after 11:20am"},{"transId":"169","fDate":"17","fMonth":"12","fYear":"2018","Name":"Satyanidhitirtha pu.(Karnoolu), Dhanurmasa Arambha, Desha Bheda Ekadashi, Refer panchanga for more details"},{"transId":"170","fDate":"18","fMonth":"12","fYear":"2018","Name":"Ekadashi, Geeta Jayanti, Satyanathatirtha pu. (Viracholapura)."},{"transId":"171","fDate":"19","fMonth":"12","fYear":"2018","Name":"Mukkotidvadashi"},{"transId":"172","fDate":"20","fMonth":"12","fYear":"2018","Name":"Pradosha, Hanumadvrata, Satenahalli shantesha kartikotsava."},{"transId":"173","fDate":"22","fMonth":"12","fYear":"2018","Name":"Dattajayanti, Vishnupanchaka, Mannur Chennakeshavotsava, Shrimathadalli sahasrashankhabhisheka, Motampalli Bhimasenarathotsava, Anvadhana, Hostiluhunnime."},{"transId":"174","fDate":"23","fMonth":"12","fYear":"2018","Name":"Raghunathatirtha pu.(Malakheda) ishti."},{"transId":"175","fDate":"27","fMonth":"12","fYear":"2018","Name":"Akshobhyatirtha pu. (Malakheda)."},{"transId":"176","fDate":"28","fMonth":"12","fYear":"2018","Name":"Poorvedyu shraddha"},{"transId":"177","fDate":"29","fMonth":"12","fYear":"2018","Name":"Kalashtami, Astaka Shradha"},{"transId":"178","fDate":"30","fMonth":"12","fYear":"2018","Name":"Anvashtakashraddha."},{"transId":"179","fDate":"31","fMonth":"12","fYear":"2018","Name":"Deshabheda Ekadashi. Refer to Panchanga for more details"},{"transId":"180","fDate":"1","fMonth":"1","fYear":"2019","Name":"Sarvesham Ekadashi"},{"transId":"181","fDate":"3","fMonth":"1","fYear":"2019","Name":"Pradosha"},{"transId":"182","fDate":"4","fMonth":"1","fYear":"2019","Name":"Masa Shivaratri"},{"transId":"183","fDate":"5","fMonth":"1","fYear":"2019","Name":"Darsha, Anvadhama, Vishnu Panchaka, Ella Amavasya, Jitamitratirtha pu. (Krrishnagaddi)"},{"transId":"184","fDate":"6","fMonth":"1","fYear":"2019","Name":"Ishti"},{"transId":"185","fDate":"7","fMonth":"1","fYear":"2019","Name":"Chandra Darshan"},{"transId":"186","fDate":"8","fMonth":"1","fYear":"2019","Name":"Vishnu Panchaka"},{"transId":"187","fDate":"13","fMonth":"1","fYear":"2019","Name":"Bhogi"},{"transId":"188","fDate":"14","fMonth":"1","fYear":"2019","Name":"Banadashtami, Banashankariutsava arambha."},{"transId":"189","fDate":"15","fMonth":"1","fYear":"2019","Name":"Makara Sankramana, Uttarayana Parva Punya Kaal till 09:00AM, Karidina,"},{"transId":"190","fDate":"17","fMonth":"1","fYear":"2019","Name":"Sarvesham Ekadashi, Raghuttamatirtha pu. (Tirukoiluru) Manvadi"},{"transId":"191","fDate":"18","fMonth":"1","fYear":"2019","Name":"Pradosha"},{"transId":"192","fDate":"19","fMonth":"1","fYear":"2019","Name":"Raghupriyatirtha pu. (Kudali)"},{"transId":"193","fDate":"20","fMonth":"1","fYear":"2019","Name":"Devi sarvashakanivedana, (palledahabba) , Anvadhana"},{"transId":"194","fDate":"21","fMonth":"1","fYear":"2019","Name":"Banashankari utsavasamapti, Maghasnanarambha, Banadahunnime, Vishnupanchaka , Ishti"},{"transId":"195","fDate":"26","fMonth":"1","fYear":"2019","Name":"Satyakamatirthara pu. (Atakura)"},{"transId":"196","fDate":"27","fMonth":"1","fYear":"2019","Name":"Naraharitirtha pu.(Hampi) purvedyu shraddha."},{"transId":"197","fDate":"28","fMonth":"1","fYear":"2019","Name":"Satyabhijnatirtha pu.(Ranebennura), Ashtakashraddha, Gopaladasara pu. (Uttanura), Kalastami "},{"transId":"198","fDate":"29","fMonth":"1","fYear":"2019","Name":"Anvashtakashraddha."},{"transId":"199","fDate":"31","fMonth":"1","fYear":"2019","Name":"Sarveshamekadashi"},{"transId":"200","fDate":"2","fMonth":"2","fYear":"2019","Name":"Pradosha,  Masa Shivaratri"},{"transId":"201","fDate":"3","fMonth":"2","fYear":"2019","Name":"VidyAdhishatirtha pu.(Ekachakranagara/ Ranebennuru)"},{"transId":"202","fDate":"4","fMonth":"2","fYear":"2019","Name":"Darsha, ViShnupanchaka, Anvadhana, Purandaradasara pu. (Hampi) Avaratri amavasya."},{"transId":"203","fDate":"5","fMonth":"2","fYear":"2019","Name":"Ishti"},{"transId":"204","fDate":"6","fMonth":"2","fYear":"2019","Name":"Chandra Darshana"},{"transId":"205","fDate":"10","fMonth":"2","fYear":"2019","Name":"Vasanta Panchami"},{"transId":"206","fDate":"11","fMonth":"2","fYear":"2019","Name":"Bhogi"},{"transId":"207","fDate":"12","fMonth":"2","fYear":"2019","Name":"Rathasaptami, Vaivasvatamanvadi, Akaparne Snana, Kooshmandaan,"},{"transId":"208","fDate":"13","fMonth":"2","fYear":"2019","Name":"Bheeshmashtami, Bheeshma Tarpana, Vishnupadaparva punya kala till 12:22pm"},{"transId":"209","fDate":"14","fMonth":"2","fYear":"2019","Name":"Shri Madhvanavami, Shrimadanandateerthara Badarikashramapravesha"},{"transId":"210","fDate":"15","fMonth":"2","fYear":"2019","Name":"Smartanam Ekadashi harivasara after 12:43 am(next date)"},{"transId":"211","fDate":"16","fMonth":"2","fYear":"2019","Name":"Bhagavatanam EkadashI(jaya), Satyajnana teertha pu. (Rajamahendri)."},{"transId":"212","fDate":"17","fMonth":"2","fYear":"2019","Name":"Bheema dwadashi, pradoSha, Kalpadi,"},{"transId":"213","fDate":"19","fMonth":"2","fYear":"2019","Name":"Maghasnana samapti, Vyasapuja, Dwaparayugadi, No Vishnupanchaka, Bharatahunnime, Kuladharma, anvAdhAna, "},{"transId":"214","fDate":"20","fMonth":"2","fYear":"2019","Name":" Isti"},{"transId":"215","fDate":"23","fMonth":"2","fYear":"2019","Name":"Yalagur Kshetra - Prana devara Kartikotsava"},{"transId":"216","fDate":"25","fMonth":"2","fYear":"2019","Name":"Purvedyushraddha."},{"transId":"217","fDate":"26","fMonth":"2","fYear":"2019","Name":"Kalaahtami, Ashtakashraddha."},{"transId":"218","fDate":"27","fMonth":"2","fYear":"2019","Name":"Sita Jayanti, Anvaahtakashraddha."},{"transId":"219","fDate":"2","fMonth":"3","fYear":"2019","Name":"Sarvesham Ekadashi"},{"transId":"220","fDate":"3","fMonth":"3","fYear":"2019","Name":"Pradosha"},{"transId":"221","fDate":"4","fMonth":"3","fYear":"2019","Name":"Vishnuteertha pu.(Madanoor) Mahashivaratri, No Vishnu Panchaka"},{"transId":"222","fDate":"6","fMonth":"3","fYear":"2019","Name":"Anvadhana, Darsha, Vishnu Panchaka, Shivaratri Amavasya"},{"transId":"223","fDate":"7","fMonth":"3","fYear":"2019","Name":"Payovratarambha, Ishti."},{"transId":"224","fDate":"8","fMonth":"3","fYear":"2019","Name":"Chandradarshan"},{"transId":"225","fDate":"12","fMonth":"3","fYear":"2019","Name":"Satyavrata teertha pu.(Sangali)."},{"transId":"226","fDate":"14","fMonth":"3","fYear":"2019","Name":"Durgastami"},{"transId":"227","fDate":"15","fMonth":"3","fYear":"2019","Name":"Shadasheeti Parva Punya Kaaal after 08:00am"},{"transId":"228","fDate":"17","fMonth":"3","fYear":"2019","Name":"Sarvesham Ekadashi"},{"transId":"229","fDate":"18","fMonth":"3","fYear":"2019","Name":"Pradosha"},{"transId":"230","fDate":"19","fMonth":"3","fYear":"2019","Name":"Payovrataparana."},{"transId":"231","fDate":"20","fMonth":"3","fYear":"2019","Name":"Kamadahana, Holihunnime,  Anvadhana."},{"transId":"232","fDate":"21","fMonth":"3","fYear":"2019","Name":"Satyabodhateertha pu.(Savanur), Karidina, Dhulivandana, Vasantotsava, Amrakusumaprashana, Ishti , Abhyanga, No Vishnu panchaka, Brahma Savarni Manvadi"},{"transId":"233","fDate":"23","fMonth":"3","fYear":"2019","Name":"Vadirajateertha pu.(Sode), Kalpadi."},{"transId":"234","fDate":"24","fMonth":"3","fYear":"2019","Name":"Vyasarajateertha pu.(Navavrundavana)."},{"transId":"235","fDate":"25","fMonth":"3","fYear":"2019","Name":"Rangapanchami"},{"transId":"236","fDate":"27","fMonth":"3","fYear":"2019","Name":"Purvedyu shraddha ."},{"transId":"237","fDate":"28","fMonth":"3","fYear":"2019","Name":"Ashtakashraddha , Kalashtami"},{"transId":"238","fDate":"29","fMonth":"3","fYear":"2019","Name":"Anvashtakashraddha."},{"transId":"239","fDate":"30","fMonth":"3","fYear":"2019","Name":"DeshaBheda Dashami, Refer panchanga for more details"},{"transId":"240","fDate":"31","fMonth":"3","fYear":"2019","Name":"Smartanam Ekadashi, Harivasara after 11:39pm, "},{"transId":"241","fDate":"1","fMonth":"4","fYear":"2019","Name":"Bhagavatanam Ekadashi "},{"transId":"242","fDate":"2","fMonth":"4","fYear":"2019","Name":"Pradosha"},{"transId":"243","fDate":"3","fMonth":"4","fYear":"2019","Name":"Masa Shivaratri"},{"transId":"244","fDate":"4","fMonth":"4","fYear":"2019","Name":"Darsha"},{"transId":"245","fDate":"5","fMonth":"4","fYear":"2019","Name":" Anvadhana. Rudrasavarnimanvadi, Vishnupanchaka, Satyasantushtateetha pu. (Mysuru) Anvadhana, Ugadiamavasya."}]';
	fData = JSON.parse(data);
	loadList();	
})();

function loadList()
{
	for (var i = 0; i < fData.length; i++) 
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");
			
		var fFullDate = fData[i].fDate + "/" + fData[i].fMonth + "/" + fData[i].fYear;
		var fName = "-- " + fData[i].name.replace(regex,"\n-- ");
		
						
		switch( fData[i].fMonth )
		{
			case  "1":
			{
				listItems1.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}					
				});				
				break;
			}
			case  "2":
			{
				listItems2.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}						
				});	
				break;
			}
			case  "3":
			{
				listItems3.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}						
				});	
				break;
			}
			case  "4":
			{
				listItems4.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "5":
			{
				listItems5.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}		
				});	
				break;
			}
			case  "6":
			{
				listItems6.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "7":
			{
				listItems7.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "8":
			{
				listItems8.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "9":
			{
				listItems9.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "10":
			{
				listItems10.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
			case  "11":
			{
				listItems11.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}		
				});	
				break;
			}
			case  "12":
			{
				listItems12.push({				
						lblDate: {text: fFullDate},
						lblName: {text: fName},
						properties: {
							searchableText: fName, 
							height: Ti.UI.SIZE,
							fDate: fData[i].fDate,
							fMonth: fData[i].fMonth,
							fYear: fData[i].fYear						
						}	
				});	
				break;
			}
		}			
	}
	
	//Alloy.Collections.Festival.reset(listItems);
	
	
	/**
	 * CREATE SECTIONS
	 */
	var section1 = Ti.UI.createListSection();
	var section2 = Ti.UI.createListSection();
	var section3 = Ti.UI.createListSection();
	var section4 = Ti.UI.createListSection();
	var section5 = Ti.UI.createListSection();
	var section6 = Ti.UI.createListSection();
	var section7 = Ti.UI.createListSection();
	var section8 = Ti.UI.createListSection();
	var section9 = Ti.UI.createListSection();
	var section10 = Ti.UI.createListSection();
	var section11 = Ti.UI.createListSection();
	var section12 = Ti.UI.createListSection();
	
	/**
	 * ADD ITEMS TO SECTIONS
	 */
	section1.items = listItems1;
	section2.items = listItems2;
	section3.items = listItems3;
	section4.items = listItems4;
	section5.items = listItems5;
	section6.items = listItems6;
	section7.items = listItems7;
	section8.items = listItems8;
	section9.items = listItems9;
	section10.items = listItems10;
	section11.items = listItems11;
	section12.items = listItems12;
	
	/**
	 * ADD SECTIONS TO LIST
	 */
	$.flist.sections = [section3, section4, section5, section6, section7, section8, section9, section10, section11, section12, section1, section2];
	
	/**
	 * SET SECTION HEADERS
	 */
	$.flist.sections[0].headerTitle = "March";
	$.flist.sections[1].headerTitle = "April";
	$.flist.sections[2].headerTitle = "May";
	$.flist.sections[3].headerTitle = "June";
	$.flist.sections[4].headerTitle = "July";
	$.flist.sections[5].headerTitle = "August";
	$.flist.sections[6].headerTitle = "September";
	$.flist.sections[7].headerTitle = "October";
	$.flist.sections[8].headerTitle = "November";
	$.flist.sections[9].headerTitle = "December";
	$.flist.sections[10].headerTitle = "January";
	$.flist.sections[11].headerTitle = "February";
	
	var d = new Date();
	$.flist.scrollToItem(d.getMonth(), 1);
}

function addKeyboard(e)
{
	$.sBar.softKeyboardOnFocus = Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	$.sBar.focus();
}

function itemClickHandler(e)
{
	selectedItem = $.flist.sections[e.sectionIndex].items[e.itemIndex];
	$.dialog.title = $.flist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.fDate + "/" + selectedItem.properties.fMonth + "/" + selectedItem.properties.fYear + ")" ;
	$.dialog.selectedIndex = -1;
	$.dialog.show();
}

function onOptionSelect(e)
{
	if(e.index == 0)
		checkCalanderPermission();
}

function checkCalanderPermission()
{
	var selectableCalendars = [];
	if (Ti.Calendar.hasCalendarPermissions()) {
		selectableCalendars = Ti.Calendar.selectableCalendars;
		addEventToCalander(selectableCalendars);
	} else {
		Ti.Calendar.requestCalendarPermissions(function(e) {
			if (e.success) {
				selectableCalendars = Ti.Calendar.selectableCalendars;
				addEventToCalander(selectableCalendars);
			} else {
				alert('Calander permission denied.');
			}
		});
	}
}
function addEventToCalander(selectableCalendars)
{
	var CALENDAR_TO_USE = selectableCalendars[0].id;
	var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);
	
	var eventYear = parseInt(selectedItem.properties.fYear);
	var eventMonth = parseInt(selectedItem.properties.fMonth)-1;
	var eventDate = parseInt(selectedItem.properties.fDate);
	var existingEvents = calendar.getEventsInDate( eventYear, eventMonth, eventDate );
	
	var doEventExist = false;
	for(var i = 0;  i < existingEvents.length; i++)
	{
		if( existingEvents[i].description ==  selectedItem.properties.searchableText)
		{
			doEventExist = true;
			break;
		}
	}
	
	if(!doEventExist)
	{
		// Create the event
		var eventBegins = new Date(eventYear, eventMonth, eventDate, 10, 0, 0);
		var eventEnds = new Date(eventYear, eventMonth, eventDate, 14, 0, 0);
		var details = {
		    title: 'UM Panchanga Aradhana',
		    description: selectedItem.properties.searchableText,
		    begin: eventBegins,
		    end: eventEnds
		};
	
		var event = calendar.createEvent(details);
	}
	
	showToast();
}

function showToast()
{
	var toast = Ti.UI.createNotification({
	    message:"Event added to calendar",
	    duration: Ti.UI.NOTIFICATION_DURATION_LONG
	});
	toast.show();
}

function closeWindow()
{
	$.winFestivals.close();
}