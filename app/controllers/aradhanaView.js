var args = arguments[0] || {};

var aData;
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
	var data = '[{"transID":"1","aDate":"19","aMonth":"3","aYear":"2018","lat":"16.332008","lng":"77.540592","Masa":"Chaitra","Paksha":"ShuklapakSha","Thithi":"Dvitiya","name":"Vedavyasa teertha pu. (Penagundi), Satyaprajna teertha pu. (Atkur)"},{"transID":"2","aDate":"25","aMonth":"3","aYear":"2018","lat":"17.672687","lng":"75.30761","Masa":"Chaitra","Paksha":"ShuklapakSha","Thithi":"Ashtami","name":"Satyadhyana teertha pu. (Pandharapur)"},{"transID":"3","aDate":"25","aMonth":"3","aYear":"2018","lat":"15.353142","lng":"76.501292","Masa":"Chaitra","Paksha":"ShuklapakSha","Thithi":"NavamI","name":"Kaveendra teertha pu. (Nava Brindavana)"},{"transID":"4","aDate":"29","aMonth":"3","aYear":"2018","lat":"9.689047","lng":"78.459077","Masa":"Chaitra","Paksha":"ShuklapakSha","Thithi":"TrayodashI","name":"Satyapriya teertha pu. (Manamadhurai)"},{"transID":"5","aDate":"3","aMonth":"4","aYear":"2018","lat":"15.353142","lng":"76.501292","Masa":"Chaitra","Paksha":"Krishnapaksha","Thithi":"Tritiya","name":"Vageesha teertha pu. (Nava Brindavana)"},{"transID":"6","aDate":"12","aMonth":"4","aYear":"2018","lat":"12.675307","lng":"79.317266","Masa":"Chaitra","Paksha":"Krishnapaksha","Thithi":"Navami","name":"Satyavijaya teertha pu. (Satyavijayanagar)"},{"transID":"7","aDate":"16","aMonth":"4","aYear":"2018","lat":"17.200859","lng":"77.157856","Masa":"Vaishakha","Paksha":"ShuklapakSha","Thithi":"Pratipat","name":"Satyananda teertha pu. (Malkhed)"},{"transID":"8","aDate":"18","aMonth":"4","aYear":"2018","lat":"16.764987","lng":"77.1405","Masa":"Vaishakha","Paksha":"ShuklapakSha","Thithi":"Tritiya","name":"Vidyadhiraja teertha pu. (Jagannath Puri), Vijayadhwaja teertha pu. (Kanvateerth)"},{"transID":"9","aDate":"21","aMonth":"4","aYear":"2018","lat":"16.764987","lng":"77.1405","Masa":"Vaishakha","Paksha":"ShuklapakSha","Thithi":"Shasthi","name":"Ramachandra teertha Pu. (Yaragola)"},{"transID":"10","aDate":"23","aMonth":"4","aYear":"2018","lat":"0","lng":"0","Masa":"vaishAkha","Paksha":"ShuklapakSha","Thithi":"Ashtami","name":"Sheshadasara Pu. (Modalkal)"},{"transID":"11","aDate":"12","aMonth":"5","aYear":"2018","lat":"12.704148","lng":"77.175543","Masa":"Vaishakha","Paksha":"Krishnapaksha","Thithi":"ekAdashI","name":"Brahmanyateertha punya tithi ( Abburu)"},{"transID":"12","aDate":"15","aMonth":"6","aYear":"2018","lat":"13.694176","lng":"75.340312","Masa":"jyeShTha","Paksha":"shuklapakSha","Thithi":"pratipat","name":"Satyasandhatirtha pu.(Mahishi)"},{"transID":"13","aDate":"19","aMonth":"6","aYear":"2018","lat":"15.223933","lng":"77.322561","Masa":"jyeShTha","Paksha":"shuklapakSha","Thithi":"saptamI","name":"Mohanadasara pu.(Chippagiri)"},{"transID":"14","aDate":"27","aMonth":"6","aYear":"2018","lat":"13.174671","lng":"78.409601","Masa":"jyeShTha","Paksha":"shuklapakSha","Thithi":"chaturdashI","name":"Satyabhinavatirtha pu. (NacharKoil) \nShriPadarajara pu. (Mulabagil)"},{"transID":"15","aDate":"28","aMonth":"6","aYear":"2018","lat":"0","lng":"0","Masa":"jyeShTha","Paksha":"shuklapakSha","Thithi":"paurNimA","name":"Krishnadvaipayanatirtha pu.(kusamurti)"},{"transID":"16","aDate":"30","aMonth":"6","aYear":"2018","lat":"16.382567","lng":"77.482125","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Thithi":"dvitIyA","name":"Satyapurnatirtha pu.(kolapura)"},{"transID":"17","aDate":"1","aMonth":"7","aYear":"2018","lat":"15.353142","lng":"76.501292","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Thithi":"tRRitIyA","name":"Raghuvaryatirtha pu.(Navabrindavana)"},{"transID":"18","aDate":"7","aMonth":"7","aYear":"2018","lat":"16.332008","lng":"77.540592","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Thithi":"aShTamI","name":"Satyadheeratirtha pu.(Aatkoor)"},{"transID":"19","aDate":"9","aMonth":"7","aYear":"2018","lat":"12.921822","lng":"79.132289","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Thithi":"dvAdashI","name":"Vidyapatitirtha pu.(Rayaveloor)"},{"transID":"20","aDate":"11","aMonth":"7","aYear":"2018","lat":"10.964726","lng":"79.367758","Masa":"jyeShTha","Paksha":"kRRiShNapakSha","Thithi":"trayodashI","name":"Vijayeendratirtha pu.(Kumbakonam)"},{"transID":"21","aDate":"21","aMonth":"7","aYear":"2018","lat":"0","lng":"0","Masa":"AShADha","Paksha":"shuklapakSha","Thithi":"navamI","name":"Satyadhirajatirtha pu.(Veluru)"},{"transID":"22","aDate":"27","aMonth":"7","aYear":"2018","lat":"12.295719","lng":"76.64393","Masa":"AShADha","Paksha":"shuklapakSha","Thithi":"paurNimA","name":"Satyasankalpatirtha pu.(Mysore)"},{"transID":"23","aDate":"2","aMonth":"8","aYear":"2018","lat":"17.200859","lng":"77.157856","Masa":"AShADha","Paksha":"kRRiShNapakSha","Thithi":"paMchamI","name":"Shrimajjayatirthara pu.(MalaKheda)"},{"transID":"24","aDate":"11","aMonth":"8","aYear":"2018","lat":"17.000924","lng":"81.805328","Masa":"AShADha","Paksha":"kRRiShNapakSha","Thithi":"amAvAsyA","name":"Satyadhishatirtha pu. (Rajamahendri)"},{"transID":"25","aDate":"17","aMonth":"8","aYear":"2018","lat":"13.726431","lng":"77.476875","Masa":"Shravana","Paksha":"ShuklapakSha","Thithi":"Sapthami","name":"Satyavara teertha pu.(Santebidanooru)"},{"transID":"26","aDate":"28","aMonth":"8","aYear":"2018","lat":"15.951776","lng":"77.425732","Masa":"Shravana","Paksha":"Krishnapaksha","Thithi":"Dvitiya","name":"Raghavendra swamigala pu.(Mantralaya)"},{"transID":"27","aDate":"7","aMonth":"9","aYear":"2018","lat":"13.965005","lng":"75.687795","Masa":"Shravana","Paksha":"Krishnapaksha","Thithi":"TrayodashI","name":"Satyadharma teertha pu.(Holehonnuru)"},{"transID":"28","aDate":"18","aMonth":"9","aYear":"2018","lat":"0","lng":"0","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Thithi":"NavamI","name":"Jagannatha dasara pu. (Maanvi)"},{"transID":"29","aDate":"20","aMonth":"9","aYear":"2018","lat":"15.920043","lng":"75.680029","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Thithi":"Dwadashi","name":"Satyeshtatirtha pu.(Atakur)"},{"transID":"30","aDate":"21","aMonth":"9","aYear":"2018","lat":"15.920043","lng":"75.680029","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Thithi":"TrayodashI","name":"Prasanna Venkaaadasara pu.(Badami)"},{"transID":"31","aDate":"25","aMonth":"9","aYear":"2018","lat":"0","lng":"0","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Thithi":"Purnime","name":" Yadavarya pu. (Munavalli)"},{"transID":"32","aDate":"27","aMonth":"9","aYear":"2018","lat":"0","lng":"0","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Thithi":"Dwitiya","name":"Shrinivasa teertha pu.(Honnali)"},{"transID":"33","aDate":"9","aMonth":"10","aYear":"2018","lat":"17.302587","lng":"76.101439","Masa":"Bhadrapada","Paksha":"ShuklapakSha","Thithi":"Amavasya","name":"Madhava teertharu pu."},{"transID":"34","aDate":"16","aMonth":"10","aYear":"2018","lat":"13.726431","lng":"77.476875","Masa":"Ashvin","Paksha":"shuklapakSha","Thithi":"saptamI","name":"Satyaparayana Teertha Pu. (Santebidanur)"},{"transID":"35","aDate":"17","aMonth":"10","aYear":"2018","lat":"16.741428","lng":"76.307602","Masa":"Ashvin","Paksha":"shuklapakSha","Thithi":"aShTamI","name":"Satyaparakrama Teeratha Pu. (Chittapur)"},{"transID":"36","aDate":"10","aMonth":"11","aYear":"2018","lat":"11.977009","lng":"79.206507","Masa":"kArtik","Paksha":"shuklapakSha","Thithi":"tRRitIyA","name":"Satyapramoda Teertha Pu. (Tirukoilur), Mahasamaradhana at Uttaradi Math"},{"transID":"37","aDate":"13","aMonth":"11","aYear":"2018","lat":"17.302587","lng":"76.101439","Masa":"kArtik","Paksha":"shuklapakSha","Thithi":"ShaShThI","name":"Vedesha Teertha Pu. (Manoor)"},{"transID":"38","aDate":"18","aMonth":"11","aYear":"2018","lat":"0","lng":"0","Masa":"kArtik","Paksha":"shuklapakSha","Thithi":"navamI","name":"Satyaveera Teertha Pu. (Korlahalli), Vijaya Dasara Pu. (Chippagiri)"},{"transID":"39","aDate":"19","aMonth":"11","aYear":"2018","lat":"17.672687","lng":"75.30761","Masa":"kArtik","Paksha":"shuklapakSha","Thithi":"dvAdashI","name":"Vedanidhi Teertha Pu. (Pandarapur)"},{"transID":"40","aDate":"26","aMonth":"11","aYear":"2018","lat":"15.353142","lng":"76.501292","Masa":"kArtik","Paksha":"kRRiShNapakSha","Thithi":"chaturthI","name":"Vidyanidhi Teertha Pu. (Yaragola)"},{"transID":"41","aDate":"6","aMonth":"12","aYear":"2018","lat":"15.353142","lng":"76.501292","Masa":"kArtik","Paksha":"kRRiShNapakSha","Thithi":"chaturdashI","name":"Padmanabha Teertha Pu. (Nava Brindavana)"},{"transID":"42","aDate":"7","aMonth":"12","aYear":"2018","lat":"0","lng":"0","Masa":"kArtik","Paksha":"kRRiShNapakSha","Thithi":"amAvAsyA","name":"Mahipati Dasara pu(Kakhandaki)"},{"transID":"43","aDate":"10","aMonth":"12","aYear":"2018","lat":"0","lng":"0","Masa":"mArgashIrSh","Paksha":"shuklapakSha","Thithi":"tRRitIyA","name":"Raghuveeratirtha pu.(Kudali)."},{"transID":"44","aDate":"12","aMonth":"12","aYear":"2018","lat":"0","lng":"0","Masa":"mArgashIrSh","Paksha":"shuklapakSha","Thithi":"paMchamI","name":"Sankarshanavadeyara pu.(Karamapundi), "},{"transID":"45","aDate":"17","aMonth":"12","aYear":"2018","lat":"15.828278","lng":"78.035511","Masa":"mArgashIrSh","Paksha":"shuklapakSha","Thithi":"dashamI","name":"Satyanidhitirtha pu.(Karnulu)."},{"transID":"46","aDate":"18","aMonth":"12","aYear":"2018","lat":"11.943346","lng":"79.294397","Masa":"mArgashIrSh","Paksha":"shuklapakSha","Thithi":"ekAdashI","name":" Satyanathatirtha pu. (Viracholapura)."},{"transID":"47","aDate":"23","aMonth":"12","aYear":"2018","lat":"17.200859","lng":"77.157856","Masa":"mArgashIrSh","Paksha":"kRRiShNapakSha","Thithi":"pratipat","name":"Raghunathatirtha pu.(Malakheda) ishti."},{"transID":"48","aDate":"27","aMonth":"12","aYear":"2018","lat":"17.200859","lng":"77.157856","Masa":"mArgashIrSh","Paksha":"kRRiShNapakSha","Thithi":"paMchamI","name":"Akshobhyatirtha pu. (Malakheda)."},{"transID":"49","aDate":"5","aMonth":"1","aYear":"2019","lat":"16.743687","lng":"77.129774","Masa":"mArgashIrSh","Paksha":"kRRiShNapakSha","Thithi":"amAvAsyA","name":" Jitamitratirtha pu. (Krrishnagaddi)"},{"transID":"50","aDate":"17","aMonth":"1","aYear":"2019","lat":"11.977009","lng":"79.206507","Masa":"pauSha","Paksha":"shuklapakSha","Thithi":"ekAdashI","name":"Raghuttamatirtha pu. (Tirukoyalura) Manvadi."},{"transID":"51","aDate":"19","aMonth":"1","aYear":"2019","lat":"0","lng":"0","Masa":"pauSha","Paksha":"shuklapakSha","Thithi":"trayodashI","name":"Raghupriyatirtha pu. (Kudali)."},{"transID":"52","aDate":"26","aMonth":"1","aYear":"2019","lat":"16.332008","lng":"77.540592","Masa":"pauSha","Paksha":"kRRiShNapakSha","Thithi":"chaturthI","name":"Satyakamatirthara pu. (Atakura)"},{"transID":"53","aDate":"27","aMonth":"1","aYear":"2019","lat":"15.333209","lng":"76.466495","Masa":"pauSha","Paksha":"kRRiShNapakSha","Thithi":"saptamI","name":"Naraharitirtha pu.(Hampi) "},{"transID":"54","aDate":"28","aMonth":"1","aYear":"2019","lat":"14.616625","lng":"75.61942","Masa":"pauSha","Paksha":"kRRiShNapakSha","Thithi":"aShTamI","name":"Satyabhijnatirtha pu.(Ranebennura), Gopaladasara pu. (Uttanura)."},{"transID":"55","aDate":"3","aMonth":"2","aYear":"2019","lat":"14.616625","lng":"75.61942","Masa":"pauSha","Paksha":"kRRiShNapakSha","Thithi":"chaturdashI","name":"VidyAdhishatirtha pu.(Ekachakranagara) Ranebennuru."},{"transID":"56","aDate":"4","aMonth":"2","aYear":"2019","lat":"15.333209","lng":"76.466495","Masa":"pauSha","Paksha":"kRRiShNapakSha","Thithi":"amAvAsyA","name":"Purandaradasara pu. (Hampi) "},{"transID":"57","aDate":"16","aMonth":"2","aYear":"2019","lat":"17.000924","lng":"81.805328","Masa":"mAgha","Paksha":"shuklapakSha","Thithi":"ekAdashI","name":"SatyajnanaTeertha pu. (Rajamahendri)"},{"transID":"58","aDate":"4","aMonth":"3","aYear":"2019","lat":"0","lng":"0","Masa":"mAgha","Paksha":"kRRiShNapakSha","Thithi":"trayodashI","name":"Vishnuteertha pu.(Madanura)"},{"transID":"59","aDate":"12","aMonth":"3","aYear":"2019","lat":"16.866193","lng":"74.564874","Masa":"phAlguNa","Paksha":"shuklapakSha","Thithi":"ShaShThI","name":"Satyavrata teertha pu.(Sangali)."},{"transID":"60","aDate":"21","aMonth":"3","aYear":"2019","lat":"14.970905","lng":"75.340215","Masa":"phAlguNa","Paksha":"kRRiShNapakSha","Thithi":"pratipat","name":"Satyabodha teeIrtha pu.(Savanuru)"},{"transID":"61","aDate":"23","aMonth":"3","aYear":"2019","lat":"14.734513","lng":"74.778254","Masa":"phAlguNa","Paksha":"kRRiShNapakSha","Thithi":"tRRitIyA","name":"Vadirajateertha pu.(Sode)"},{"transID":"62","aDate":"24","aMonth":"3","aYear":"2019","lat":"15.353142","lng":"76.501292","Masa":"phAlguNa","Paksha":"kRRiShNapakSha","Thithi":"chaturthI","name":"Vyasarajateertha pu.(Navavrindavana)."},{"transID":"63","aDate":"5","aMonth":"4","aYear":"2019","lat":"12.295719","lng":"76.64393","Masa":"phAlguNa","Paksha":"kRRiShNapakSha","Thithi":"amAvAsyA","name":"Satyasantushta teertha pu. (Mysore)"}]';
	aData = JSON.parse(data);
	loadList();	
})();


function loadList()
{
	for (var i = 0; i < aData.length; i++) 
	{
		var delim = ",";
		var regex = new RegExp(delim,"g");
			
		var aFullDate = aData[i].aDate + "/" + aData[i].aMonth + "/" + aData[i].aYear;
		var aName = aData[i].name.replace(regex,"\n");
		
		switch( aData[i].aMonth )
			{
				case  "1":
				{
					listItems1.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});				
					break;
				}
				case  "2":
				{
					listItems2.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "3":
				{
					listItems3.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "4":
				{
					listItems4.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "5":
				{
					listItems5.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "6":
				{
					listItems6.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "7":
				{
					listItems7.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "8":
				{
					listItems8.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "9":
				{
					listItems9.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "10":
				{
					listItems10.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "11":
				{
					listItems11.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
				case  "12":
				{
					listItems12.push({				
						lblDate: {
							text: aFullDate
						},
						lblName: {
							text: aName
						},
						properties: {
							searchableText: aName,
							aDate: aData[i].aDate,
							aMonth: aData[i].aMonth,
							aYear: aData[i].aYear,
							aLat: aData[i].lat,
							aLng: aData[i].lng,
							aContact: aData[i].contact
						}
						
					});	
					break;
				}
			}	
	}

	
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
	$.alist.sections = [section3, section4, section5, section6, section7, section8, section9, section10, section11, section12, section1, section2];
	
	/**
	 * SET SECTION HEADERS
	 */
	$.alist.sections[0].headerTitle = "March";
	$.alist.sections[1].headerTitle = "April";
	$.alist.sections[2].headerTitle = "May";
	$.alist.sections[3].headerTitle = "June";
	$.alist.sections[4].headerTitle = "July";
	$.alist.sections[5].headerTitle = "August";
	$.alist.sections[6].headerTitle = "September";
	$.alist.sections[7].headerTitle = "October";
	$.alist.sections[8].headerTitle = "November";
	$.alist.sections[9].headerTitle = "December";
	$.alist.sections[10].headerTitle = "January";
	$.alist.sections[11].headerTitle = "February";
	
	var d = new Date();
	$.alist.scrollToItem(d.getMonth(), 0,{animated: false});
}

function addKeyboard(e)
{
	$.sBar.softKeyboardOnFocus = Titanium.UI.Android.SOFT_KEYBOARD_SHOW_ON_FOCUS;
	$.sBar.focus();
}

function itemClickHandler(e)
{
	selectedItem = $.alist.sections[e.sectionIndex].items[e.itemIndex];
	$.dialog.title = $.alist.sections[e.sectionIndex].items[e.itemIndex].properties.searchableText + "(" + selectedItem.properties.aDate + "/" + selectedItem.properties.aMonth + "/" + selectedItem.properties.aYear + ")" ;
	$.dialog.selectedIndex = -1;
	$.dialog.show();
}

function onOptionSelect(e)
{
	if(e.index == 0)
		checkCalanderPermission();
	if(e.index == 1)
		checkLocationPermission();	
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
	if(selectableCalendars.length == 0)
	{
		showToast("Calander not selected.");
	}
	else
	{
		var CALENDAR_TO_USE = selectableCalendars[0].id;
		var calendar = Ti.Calendar.getCalendarById(CALENDAR_TO_USE);
		
		var eventYear = parseInt(selectedItem.properties.aYear);
		var eventMonth = parseInt(selectedItem.properties.aMonth)-1;
		var eventDate = parseInt(selectedItem.properties.aDate);
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
}

function showToast(message)
{
	var msg = message;
	if(message == undefined)
		msg = "Event added to calendar";
		
	var toast = Ti.UI.createNotification({
	    message: msg,
	    duration: Ti.UI.NOTIFICATION_DURATION_LONG
	});
	toast.show();
}

function checkLocationPermission()
{
	if (Ti.Geolocation.hasLocationPermissions( Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE ) ) {
		getDirections();
	} else {
		Ti.Geolocation.requestLocationPermissions( Ti.Geolocation.AUTHORIZATION_WHEN_IN_USE, function(e) {
			if (e.success) {
				getDirections();
			} else {
				alert('Location permission denied.');
			}
		});
	}
}

function getDirections()
{
	Titanium.Geolocation.getCurrentPosition(function(e)
	{
	    if (e.error)
	    {
	        var dialog = Ti.UI.createAlertDialog({
			    message: 'Please turn on the GPS on your device',
			    ok: 'Ok',
			    title: 'Warning'
			  });
			 dialog.show();
	        return;
	    }
	 
	    var longitude = e.coords.longitude;
	    var latitude = e.coords.latitude;
	    var altitude = e.coords.altitude;
	    var heading = e.coords.heading;
	    var accuracy = e.coords.accuracy;
	    var speed = e.coords.speed;
	    var timestamp = e.coords.timestamp;
	    var altitudeAccuracy = e.coords.altitudeAccuracy;
	    
	    var address = "saddr=" + latitude + "," + longitude + "&daddr=" + selectedItem.properties.aLat + "," + selectedItem.properties.aLng;
	    var navigationURL = 'http://maps.google.com/maps?' + address;
	    Titanium.Platform.openURL(navigationURL);
	});
}

function closeWindow()
{
	$.winAradhane.close();
}