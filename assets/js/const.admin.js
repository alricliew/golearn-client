// This file declare global constants
const MYAllState = ["Kuala Lumpur","Selangor","Penang","Johor","Melaka",
        "Negeri Sembilan", "Pahang","Perak", "Terengganu","Kelantan","Kedah","Sabah","Sarawak",
        "Perlis", "Putrajaya"];
const MYAllStateId = ["kuala lumpur","selangor","penang","johor","melaka",
        "negeri sembilan", "pahang","perak", "terengganu","kelantan","kedah","sabah","sarawak",
        "perlis", "putrajaya"];

// Total place: 164
const cityJohor = ["Gelang Patah","Kluang","Kota Tinggi","Kulai","Mersing",
    "Muar","Nusajaya","Pasir Gudang","Permas Jaya","Pontian","Segamat","Senai",
    "Skudai","Tampoi","Ulu Tiram"]; // 15
const cityKL = ["Bandar Tun Razak","Bangsar","Bukit Bintang","Kepong","Lembah Pantai",
    "Nilai","Serdang","Seputeh","Wangsa Maju"]; //9
const cityPenang = ["Air Itam","Bayan Lepas","Balik Pulau","Batu Ferringhi",
    "Bukit Mertajam","Butterworth","Georgetown","Jelutong","Kulim","Nibong Tebal",
    "Perai","Tasek Gelugor"];  //12
// const citySelangor = ["Ampang","Cheras","Damansara","Kajang","Kuala Selangor",
//     "Petaling Jaya","Puchong", "Putrajaya","Sabak Bernam","Shah Alam","Subang Jaya",
//     "Setapak"]; //12

const citySelangor = ["Ampang",
    "Bandar Baru Ampang, Ampang",
    "Pandan Indah, Ampang",
    "Taman Keramat, Ampang",
    "Bukit Antarabangsa, Ampang",
    "Taman Melawati, Ampang",
    
    "Balakong",
    "Taman Desa Karunmas Balakong",
    
    "Bukit Jalil",
    "Bandar Kinrara, Bukit Jalil",
    "Sungai Besi, Bukit Jalil",
    "Taman Serdang Raya, Bukit Jalil",
    
    "Cheras",
    "Bandar Mahkota Cheras",
    "Sunway Cheras",
    "Taman Baru Sungai Long, Cheras",
    "Taman Suntex, Cheras",
    "Taman Damai Bakti, Cheras",
    "Alam Damai, Cheras",
    "Taman Cheras Jaya",
    "Taman Len Seng, Cheras",
    
    "Kajang",
    "Bandar Teknologi Kajang",
    "Bandar Baru Bangi, Kajang",
    
    "Kepong",
    "Taman Indah Perdana, Kepong",
    "Taman Metropolitan, Kepong",
    "Desa Jaya Kepong",
    "Kepong Baru",
    "Taman Megah Kepong, Kepong",
    "Taman Petaling, Kepong",
    "Taman Seri Kepong Baru, Kepong",
    "Kepong Baru Tambahan",
    "Taman Bukit Maluri, Kepong",
    "Taman Perdana, Kepong",
    "Taman Ehsan, Kepong",
    "Taman Sri Sinar, Kepong",
    "Bukit Segambut, Kepong",
    "Taman Menjalara, Kepong",
    "Jinjiang, Kepong",
    "Taman Petaling, Kepong",
    "Jalan Rimbunan Melati, Kepong",
    "Desa ParkCity, Kepong",
    "Taman Bayu Sri Bintang, Kepong",
    "Taman Daya, Kepong",
    "Taman Wangsa Permai, Kepong",
    
    
    "Klang",
    "Port Klang",
    "Bukit Prima Pelangi, Klang",
    "Bandar Parklands, Klang",
    "Taman Sentosa, Klang",
    "Taman Sri Andalas, Klang",
    "Lebuh Sungai Kapar Indah, Klang",
    "Taman Klang Ria",
    "Taman Gembira, Klang",
    "Bandar Bukit Raja, Klang",
    "Taman Sungai Buloh, Klang",
    "Taman Seri Sentosa, Klang",
    "Bandar Puteri Klang",
    "Bandar Putera, Klang",
    "Taman Setia Permai, Klang",
    "Bukit Tinggi, Klang",
    "Taman Klang Utama",
    "Kota Bayuemas, Klang",
    "Bandar Botanic, Klang",
    "Taman Selatan, Klang",
    "Bandar Bestari, Klang",
    "Taman Saujana Meru, Klang",
    
    "Puchong",
    "Bandar Kinrara, Puchong",
    "Bandar Puteri Puchong",
    "Bandar Bukit Puchong",
    
    "Petaling Jaya",
    "Bandar Utama",
    "Bukit Gasing",
    "Kota Damansara",
    "Ara Damansara",
    "Bandar Utama",
    "Mutiara Damansara",
    "Damansara Perdana",
    "Bandar Seri Damanasara",
    "Damansara Damai",
    "Kelana Jaya",
    "Sungei Way",
    "Damansara Jaya",
    "Damansara Utama",
    "Sunway",
    "Taman Mayang Jaya",
    "Taman Megah",
    "Taman SEA",
    "Kampung Tunku",
    "Taman Subang",
    "Taman Universiti & Seaport",
    "Petaling Utama",
    "Taman Medan",
    "Taman Desaria",
    "Bandar Sunway",
    "Tropicana",
    "SS2",
    
    "Semenyih",
    "Bandar Teknologi Kajang, Semenyih",
    "Taman Semenyih Sentral",
    "Taman Pelangi Semenyih, Semenyih",
    "Bandar Rinching, Semenyih",
    "Bandar Tasik Kesuma, Semenyih",
    
    "Seri Kembangan, ",
    "Puncak Jalil, Seri Kembangan",
    "Taman Bukit Serdang, Seri Kembangan",
    "Taman Putra Permai, Seri Kembangan",
    "Taman Serdang Jaya, Seri Kembangan",
    
    "Shah Alam",
    "Section 1",
    "Section 2",
    "Section 3",
    "Section 4",
    "Section 6",
    "Section 7",
    "Section 8",
    "Section 9",
    "Section 10",
    "Section 11",
    "Section 12",
    "Section 13",
    "Section 17",
    "Section 18",
    "Section 19",
    "Section 20",
    "Section 22",
    "Section 23",
    "Section 24",
    "Section 25 / Taman Sri Muda",
    "Section 27 / Taman Bunga Negara",
    "Section 28 / Taman Alam Megah",
    "Section 31",
    "Section 32 /Bukit Rimau",
    "Section 33",
    "Section 34",
    "Alam Impian / Section 35",
    "Glenmarie / Section U1",
    "Kota Kemuning",
    "Taman TTDI Jaya/ Section U2",
    "Section U5 / (Bandar Pinggiran Subang, Subang Bestaria Bandar Pinggiran Subang)",
    "Section U6",
    "Bukit Jelutong / Section U8",
    "Sunway Kayangan / Section U9",
    "Section U10 / Alam Budiman & Puncak Perdana",
    "Section U11",
    "Section U12 / Desa Alam & Cahaya Alam",
    "Setia Alam/ Section U13",
    "Alam Budiman / Section U14",
    "Puncak Alam / Section U15",
    "Taman Bukit Subang, City of Elmina, Denai Alam / Section U16",
    "Section U17",
    "Paya Jaras /Section U18",
    "Section U19",
    "Bandar Baru Sungai Buloh, Kelab Rahman Putra Malaysia, Bukit Rahman Putra, Kelab Rahman Putra / Section U20",
    
    
    "Subang Jaya",
    "USJ 2 / UEP Subang Jaya",
    "USJ 3",
    "USJ 4",
    "USJ 5",
    "USJ 6",
    "USJ 9",
    "USJ 11",
    "USJ 12",
    "USJ 14",
    "USJ 17",
    "USJ 19",
    "USJ 23",
    "Kelana Jaya",
    "SS7",
    "SS15",
    "SS17",
    "SS18",
    "SS19",
    "Taman Pinggiran USJ",
    "Putra Permai",
    "Putra Height",
    "USJ Heights",
    "Persiaran Wangsa Baiduri",
    "Subang-Bestari",
    "Taman Subang Permai",
    "Taman Subang Perdana",
    "Taman Mutiara Subang",
    
    "Sungai Buloh",
    "Bukit Rahman Putra, Sungai Buloh ",
    "Kampung Baru Sungai Buloh",
    "Damansara Damai, Sungai Buloh",
    "Bandar Pinggiran Subang, Sungai Buloh"];

const cityKedah = ["Baling","Bandar Baharu","Kota Setar","Kuala Muda",
    "Kubang Pasu", "Kulim","Langkawi", "Padang Terap","Pendang","Pokok Sena",
    "Sik","Yan"]; //12

const cityKelantan = ["Bachok","Gua Musang","Jeli","Kota Bharu",
        "Kuala Krai", "Machang","Pasir Mas", "Pasir Puteh","Tanah Merah","Tumpat"]; //10

const cityMelaka = ["Alor Gajah","Kota Melaka","Jasin"]; //3

const cityNegeriSembilan = ["Jelebu","Jempol","Kuala Pilah","Port Dickson",
        "Rembau", "Seremban", "Tampin"]; //7

const cityPahang = ["Pekan","Kuantan","Bera","Cameron Highlands",
        "Jerantut", "Bentong","Lipis", "Maran","Raub","Rompin","Temerloh"]; //11

const cityPerak = ["Batang Padang","Hilir Perak","Hulu Perak","Kerian",
        "Kinta", "Kuala Kangsar","Larut, Matang", "Selama","Manjung","Perak Tengah","Kampar"]; //11

const cityTerengganu = ["Kuala Terengganu","Besut","Dungun","Hulu Terengganu",
        "Kemaman", "Marang","Setiu", "Kuala Nerus"]; //8

const cityPutraJaya = ["Putrajaya"]; //1
const cityPerlis = ["Perlis"];//1

const citySabah = ["Kota Kinabalu","Sandakan","Tawau","Kota Marudu",
        "Kudat", "Pitas","Beluran", "Kinabatangan","Tongod","Kunak","Lahad Datu", "Semporna",
        "Kota Belud", "Papar","Penampang", "Putatan","Ranau","Tuaran","Beaufort", "Keningau",
        "Kuala Penyu", "Nabawan","Sipitang", "Tambunan","Tenom"]; //25

const citySarawak = ["Kuching","Bintulu","Sibu","Sri Aman", "Bau", "Lundu",
        "Miri", "Marudi","Samarahan", "Simunjan","Asajaya","Sarikei","Siburan", "Tebedu", "Pakan",
        "Kanowit", "Selangau", "Lubok Antu","Limbang","Lawas","Kapit", "Song", "Belaga",
        "Betong", "Saratok","Tatau"]; //27

// This function select city based on State
// TODO: Change the 
function  selectCityBasedOnState (selectedCity){
    // List<AreaOfState> areaOfStateList = new ArrayList<>();
    switch (selectedCity){
        case "Kuala Lumpur":
            return cityKL;
        case "Selangor":
            return citySelangor;
        case "Penang":
            return cityPenang;
        case "Johor":
            return cityJohor;
        case "Melaka":
            return cityMelaka;
        case "Negeri Sembilan":
            return cityNegeriSembilan;
        case "Pahang":
            return cityPahang;
        case "Perak":
            return cityPerak;
        case "Terengganu":
            return cityTerengganu;
        case "Kelantan":
            return cityKelantan;
        case "Kedah":
            return cityKedah;
        case "Sabah":
            return citySabah;
        case "Sarawak":
            return citySarawak;
        case "Perlis":
            return cityPerlis;
        case "Putrajaya":
            return cityPutraJaya;
        default:
            return null;
    }
}

// This function select city based on State
function  selectCityBasedOnStateId(selectedStateId){
    switch (selectedStateId){
        case "kuala lumpur":
            return cityKL;
        case "selangor":
            return citySelangor;
        case "penang":
            return cityPenang;
        case "johor":
            return cityJohor;
        case "melaka":
            return cityMelaka;
        case "negeri sembilan":
            return cityNegeriSembilan;
        case "pahang":
            return cityPahang;
        case "perak":
            return cityPerak;
        case "terengganu":
            return cityTerengganu;
        case "kelantan":
            return cityKelantan;
        case "kedah":
            return cityKedah;
        case "sabah":
            return citySabah;
        case "sarawak":
            return citySarawak;
        case "perlis":
            return cityPerlis;
        case "putrajaya":
            return cityPutraJaya;
        default:
            return null;
    }
}

// This function select City based on City Id (same as City) and State Id
// Note: This is for tutor portal specific

function getCityNameBasedOnCityIdAndStateId(stateId, cityId ){
    switch (stateId){
        case "kuala lumpur":
            return cityKL[cityKL.indexOf(cityId)];
        case "selangor":
            return citySelangor[citySelangor.indexOf(cityId)];
        case "penang":
            return cityPenang[cityPenang.indexOf(cityId)];
        case "johor":
            return cityJohor[cityJohor.indexOf(cityId)];
        case "melaka":
            return cityMelaka[cityMelaka.indexOf(cityId)];
        case "negeri sembilan":
            return cityNegeriSembilan[cityNegeriSembilan.indexOf(cityId)];
        case "pahang":
            return cityPahang[cityPahang.indexOf(cityId)];
        case "perak":
            return cityPerak[cityPerak.indexOf(cityId)];
        case "terengganu":
            return cityTerengganu[cityTerengganu.indexOf(cityId)];
        case "kelantan":
            return cityKelantan[cityKelantan.indexOf(cityId)];
        case "kedah":
            return cityKedah[cityKedah.indexOf(cityId)];
        case "sabah":
            return citySabah[citySabah.indexOf(cityId)];
        case "sarawak":
            return citySarawak[citySarawak.indexOf(cityId)];
        case "perlis":
            return cityPerlis[cityPerlis.indexOf(cityId)];
        case "putrajaya":
            return cityPutraJaya[cityPutraJaya.indexOf(cityId)];
        default:
            return null;
    }
}


// Education Level and subjects
// const Category = ["UPSR (Awaiting New Curriculum)", "PT3", "SPM", "PreU", "IGCSE", "A Level"];
// const CategoryId = ["upsr", "pt3", "spm", "preu", "igcse", "alevel"];

// const SubjectUPSR = ["Bahasa Melayu", "Bahasa Inggeris", "Matematik", "Sains", "Bahasa Cina", "Bahasa Tamil"];
// const SubjectIdUPSR = ["bm", "english", "math", "science", "bc", "bt"];
// const SubjectPT3 = ["Bahasa Melayu", "Bahasa Inggeris", "Mathematics", "Science", "Bahasa Cina", "Bahasa Tamil",
//         "Sejarah", "Geografi", "Asas Sains Komputer", "Reka Bentuk dan Teknologi"];
// const SubjectIdPT3 = ["bm", "english", "math", "science", "bc", "bt", "sej", "geo", "ask", "rbk"];
// const SubjectSPM = ["Bahasa Melayu", "Bahasa Inggeris", "Mathematics", "Additional Mathematics", "Sejarah",
//         "Chemistry", "Biology", "Physics", "Ekonomi", "Reka Bentuk dan Teknologi","Perniagaan","Prinsip Perakaunan", "Bahasa Cina"];
// const SubjectIdSPM = ["bm", "english", "math", "addmath", "sej",
//         "che", "bio", "phy", "eko", "rbk","perniagaan","pp", "bc"];
// const SubjectPreU = ["Pengajian Am", "Mathematics(M)", "Mathematics(T)", "Physics", "Chemistry", "Biology",
//         "Pengajian Perniagaan", "Ekonomi", "Perakaunan", "Bahasa Melayu", "Sejarah","Geografi","Kesusasteraan Melayu",
//         "Bahasa Cina", "Bahasa Tamil"];
// const SubjectIdPreU = ["pa", "math(M)", "math(T)","phy", "che", "bio",
//         "pp", "eko", "perakaunan", "bm", "sej","geo","kesusasteraanMelaye",
//         "bc", "bt"];
// const SubjectIGCSE = ["First Language English", "Second Language English", "Malay", "Mathematics","Additional Mathematics",
//         "Chemistry", "Biology", "Physics", "Combined Science", "Accounting","Business Studies","Economics"];
// const SubjectIdIGCSE = ["firstEnglish", "secondEnglish", "bm", "math","addmath",
//         "che", "bio", "phy", "combinedScience", "accounting","business","eco"];

// const SubjectALevel = ["Accounting", "Applied ICT", "Biology", "Business","Chemistry",
//         "Computer Science", "Economics", "English Literature", "Further Mathematics", "Law",
//         "Mathematics", "Physics","Psychology", "Sociology"];
// const SubjectIdALevel = ["accountingAlevel", "appliedICT", "bioAlevel", "businessAlevel","cheAlevel",
//         "cs", "ecoAlevel", "englishLiterature", "furmath", "law",
//         "mathAlevel","phyAlevel", "psy", "socio"];


const Category = ["Kindergarten", "Primary", "PT3", "SPM", "STPM", "Reception/Nursery", "Cambridge Primary", 
        "Cambridge Lower Secondary", "IGCSE", "A Level",
        "IB Early Years","IB Primary (PYP)","IB Middle (MYP)", "IB Diploma", "UEC Junior", 
        "UEC Senior", "AUSMAT", "South Australian Matriculation (SAM)", "English Exam", 
        "Adult Language", "Music", "Computer Programming"];

const CategoryId = ["kindergarten", "upsr", "pt3", "spm", "stpm", "recep", "camPri", "camLowerSec", "igcse", "alevel",
"ibEyp", "ibPyp", "ibMyp", "ibDiploma", "uecJun", "uecSen","ausmat", "sam",
"engExam", "adultLanguage", "music", "computer"];

// NOTE: TOTAL 260 Total subjects
// NOTE: TOTAL 111 Restricted subjects
const SubjectKindergarten = ["Bahasa Melayu", "Bahasa Inggeris", "Bahasa Cina", "Bahasa Tamil", "Matematik", "Sains",
        "Phonics", "Suku Kata", "Pendidikan Islam", "Pendidikan Moral"];
const SubjectIdKindergarten = ["kinBm", "kinEnglish", "kinBc", "kinBt", "kinMath", "kinSains",
        "kinPhonics", "kinSukuKata", "kinPi", "kinPm"];  // 10 
const SubjectRestrictedIdKindergarten = ["kinBm", "kinEnglish", "kinMath", "kinSains"]; // 4

// NOTE: Added second row subjects
// Source: https://www.ipendidikan.my/senarai-mata-pelajaran-sekolah-rendah-kssr.html
const SubjectUPSR = ["Bahasa Melayu", "Bahasa Inggeris", "Matematik", "Sains", "Bahasa Cina",
        "Bahasa Tamil", "Sejarah", "Reka Bentuk dan Teknologi", "Pendidikan Islam / Moral", "Bahasa Iban",
        "Bahasa Arab", "Bahasa Kadazandusun"];
// const SubjectIdUPSR = ["bm", "english", "math", "science", "bc",
//         "bt", "sej", "rbk", "pim", "priIban",
//         "priArab", "priKadazandusun"]; // 12 
const SubjectIdUPSR = ["priBm", "priEnglish", "priMath", "priScience", "priBc",
        "priBt", "priSej", "priRbk", "priPim", "priIban",
        "priArab", "priKadazandusun"];
const SubjectRestrictedIdUPSR =["priBm", "priEnglish", "priBc", "priMath", "priScience"]; // 5

// IMPORTANT! The list below is created only for update information > preferred subject
// const SubjectIdUPSRSpecial = ["pribm", "prienglish", "primath", "priscience", "pribc",
//         "pribt", "prisej", "prirbk", "pripim", "priIban",
//         "priArab", "priKadazandusun"]; // 12 

// Source: https://www.moe.gov.my/images/KPM/UKK/2019/03_Mac/Brochure_PT3-UPDATED-19March1.jpg
const SubjectPT3 = ["Bahasa Melayu", "Bahasa Inggeris", "Mathematics", "Science", "Bahasa Cina", "Bahasa Tamil",
        "Sejarah", "Geografi", "Asas Sains Komputer", "Reka Bentuk dan Teknologi",
        "Pendidikan Islam", "Bahasa Arab", "Bahasa Iban", "Bahasa Kadazandusun", "Bahasa Punjabi",
        "Maharat al-Quran (KBT)", "Usul al-Din (KBD)", "Al-Syariah (KBD)", "Al-Lughah Al-Arabiah Al-Muasirah (KBD)"];
// const SubjectIdPT3 = ["bm", "english", "math", "science", "bc", "bt",
//         "sej", "geo", "ask", "rbk",
//         "pt3Pi", "pt3Arab", "pt3Iban", "pt3Kadazandusun", "pt3Punjabi",
//         "pt3MaharatAlQuran", "pt3UsulAlDin", "pt3AlSyariah", "pt3AlLugAlArabAlMua"]; // 19 
const SubjectIdPT3 = ["pt3Bm", "pt3English", "pt3Math", "pt3Science", "pt3Bc", "pt3Bt",
        "pt3Sej", "pt3Geo", "pt3Ask", "pt3Rbk",
        "pt3Pi", "pt3Arab", "pt3Iban", "pt3Kadazandusun", "pt3Punjabi",
        "pt3MaharatAlQuran", "pt3UsulAlDin", "pt3AlSyariah", "pt3AlLugAlArabAlMua"]; // 19 

const SubjectRestrictedIdPT3 = ["pt3Bm", "pt3English", "pt3Math", "pt3Science", "pt3Bc", "pt3Bt",
        "pt3Sej", "pt3Geo"]; // 8
        
// IMPORTANT! The list below is created only for update information > preferred subject
// const SubjectIdPT3Special = ["pt3bm", "pt3english", "pt3math", "pt3science", "pt3bc", "pt3bt",
//         "pt3sej", "pt3geo", "pt3ask", "pt3rbk",
//         "pt3Pi", "pt3Arab", "pt3Iban", "pt3Kadazandusun", "pt3Punjabi",
//         "pt3MaharatAlQuran", "pt3UsulAlDin", "pt3AlSyariah", "pt3AlLugAlArabAlMua"]; // 19 

// Source: https://www.moe.gov.my/pekeliling/3054-spi-bil-6-tahun-2019-pelaksanaan-kssm-menengah-atas-dan-pakej-mata-pelajaran-tahun-2020/file
// Source2: https://www.moe.gov.my/muat-turun/laporan-dan-statistik/lp/3324-laporan-analisis-keputusan-spm-2019/file
const SubjectSPM = [
        // Core Subjects
        "Bahasa Melayu", "Bahasa Inggeris", "Matematik", "Sains", "Sejarah", "Pendidikan Islam", "Pendidikan Moral",
        // Science Stream
        "Additional Mathematics", "Chemistry", "Biology", "Physics",
        // Bahasa Stream
        "Bahasa Cina", "Bahasa Tamil", "Bahasa Iban",
        // Kemanusiaan dan Sastera Ikhtisas Stream
        "Ekonomi", "Perniagaan","Prinsip Perakaunan", "Geografi", "Kesusasteraan Melayu", "Kesusasteraan Cina",
        "Kesusasteraan Tamil", "Pendidikan Seni Visual",
        // Sains Gunaan Dan Teknologi Stream
        "Grafik Komunikasi Teknikal","Pertanian","Sains Rumah Tangga", "Reka Cipta", "Sains Komputer","Sains Sukan",
        "Asas Kelestarian", "Lukisan Kejuruteraan", "Sains Tambahan",
        // Pengajian Islam Stream
        "Pendidikan Syariah", "Pendidikan Al Quran dan Al Sunnah", "Tasawwur Islam", "Usul Al-Din", "Al-Syariah",
        "Al-Lughah Al-Arabiah Al-Muasirah", "Manahij Al-Ulum Al-Islamiah", "Al-Adab Wa Al-Balaghah"];

// const SubjectIdSPM = [
//         "bm", "english", "math", "spmSains", "sej", "spmPi","spmPm",
//         "addmath", "che", "bio", "phy",
//         "bc", "spmTamil", "spmIban",
//         "eko", "perniagaan","pp", "spmGeo", "spmKesusasteraanMelayu", "spmKesusasteraanCina",
//         "spmKesusasteraanTamil", "spmPsv",
//         "spmGrafikKomTek", "spmPertanian", "spmSainsRumahTangga","spmRekaCipta", "spmSainsKomputer", "spmSainsSukan",
//         "spmAsasKelestarian", "spmLukisanKejuruteraan", "spmSainsTambahan",
//         "spmSyariah", "spmAlQuranAlSunnah", "spmTasawwurIslam", "spmUsulAlDin", "spmAlSyariah",
//         "spmAlLugAlArabAlMua", "spmManahijAlUlumAlIslamiah", "spmAlAdabWaAlBalaghah",
//         ]; // 38 
const SubjectIdSPM = [
        "spmBm", "spmEnglish", "spmMath", "spmSains", "spmSej", "spmPi","spmPm",
        "spmAddmath", "spmChe", "spmBio", "spmPhy",
        "spmBc", "spmTamil", "spmIban",
        "spmEko", "spmPerniagaan","spmPp", "spmGeo", "spmKesusasteraanMelayu", "spmKesusasteraanCina",
        "spmKesusasteraanTamil", "spmPsv",
        "spmGrafikKomTek", "spmPertanian", "spmSainsRumahTangga","spmRekaCipta", "spmSainsKomputer", "spmSainsSukan",
        "spmAsasKelestarian", "spmLukisanKejuruteraan", "spmSainsTambahan",
        "spmSyariah", "spmAlQuranAlSunnah", "spmTasawwurIslam", "spmUsulAlDin", "spmAlSyariah",
        "spmAlLugAlArabAlMua", "spmManahijAlUlumAlIslamiah", "spmAlAdabWaAlBalaghah",
        ]; // 38 
const SubjectRestrictedIdSPM = [
        "spmBm", "spmEnglish", "spmMath", "spmSains", "spmSej",
        "spmAddmath", "spmChe", "spmBio", "spmPhy",
        "spmBc", "spmTamil",
        "spmEko", "spmPerniagaan","spmPp", "spmGeo"]; // 15

// const SubjectIdSPMSpecial = [
//     "spmbm", "spmenglish", "spmmath", "spmSains", "spmsej", "spmPi","spmPm",
//     "spmaddmath", "spmche", "spmbio", "spmphy",
//     "spmbc", "spmTamil", "spmIban",
//     "spmeko", "spmperniagaan", "spmpp", "spmGeo", "spmKesusasteraanMelayu", "spmKesusasteraanCina",
//     "spmKesusasteraanTamil", "spmPsv",
//     "spmGrafikKomTek", "spmPertanian", "spmSainsRumahTangga","spmRekaCipta", "spmSainsKomputer", "spmSainsSukan",
//     "spmAsasKelestarian", "spmLukisanKejuruteraan", "spmSainsTambahan",
//     "spmSyariah", "spmAlQuranAlSunnah", "spmTasawwurIslam", "spmUsulAlDin", "spmAlSyariah",
//     "spmAlLugAlArabAlMua", "spmManahijAlUlumAlIslamiah", "spmAlAdabWaAlBalaghah",
//     ]; // 38 

// Source: https://www.moe.gov.my/pendidikan/lepas-menengah/tingkatan-6/kurikulum
const SubjectPreU = ["Pengajian Am",
        "Mathematics(M)", "Mathematics(T)", "Physics", "Chemistry", "Biology",
        "Pengajian Perniagaan", "Ekonomi", "Perakaunan",
        "Sejarah","Geografi","Kesusasteraan Melayu",
        "Bahasa Melayu", "Bahasa Cina", "Bahasa Tamil",
        "Information and Communications Technology (ICT)", "Sains Sukan", "Seni Visual" ];
// const SubjectIdPreU = ["pa",
//         "math(M)", "math(T)","phy", "che", "bio",
//         "pp", "eko", "perakaunan",
//         "sej", "geo","kesusasteraanMelayu",
//         "bm", "bc", "bt",
//         "stpmIct", "stpmSainsSukan", "stpmSeniVisual"]; //18
const SubjectIdPreU = ["stpmPa",
        "stpmMathM", "stpmMathT","stpmPhy", "stpmChe", "stpmBio",
        "stpmPp", "stpmEko", "stpmPerakaunan",
        "stpmSej", "stpmGeo","stpmKesusasteraanMelayu",
        "stpmBm", "stpmBc", "stpmBt",
        "stpmIct", "stpmSainsSukan", "stpmSeniVisual"]; //18

const SubjectRestrictedIdPreU = ["stpmPa",
        "stpmMathM", "stpmMathT", "stpmPhy", "stpmChe", "stpmBio",
        "stpmPp", "stpmEko", "stpmPerakaunan"]; //9

// const SubjectIdPreUSpecial = ["stpmpa",
//         "stpmmath(M)", "stpmmath(T)","stpmphy", "stpmche", "stpmbio",
//         "stpmpp", "stpmeko", "stpmperakaunan",
//         "stpmsej", "stpmgeo","stpmkesusasteraanMelayu",
//         "stpmbm", "stpmbc", "stpmbt",
//         "stpmIct", "stpmSainsSukan", "stpmSeniVisual"]; //18

const SubjectCambridgeNursery = ["Phonics", "Mandarin", "Malay", "Mathematics"]; 
const SubjectIdCambridgeNursery = ["camNurPhonics", "camNurMan", "camNurBm", "camNurMath"]; // 4 
const SubjectRestrictedIdCambridgeNursery = ["camNurPhonics"]; // 1

const SubjectCambridgePrimary = ["English", "Mathematics", "Science", "Malay","Mandarin",
        "Art", "ICT", "Music", "Drama"];
const SubjectIdCambridgePrimary = ["camPriEng", "camPriMath", "camPriScience", "camPriMalay","camPriMandarin",
        "camPriArt", "camPriIct", "camPriMusic", "camPriDrama"]; // 9 
const SubjectRestrictedIdCambridgePrimary = ["camPriEng", "camPriMath", "camPriScience",
        "camPriMalay","camPriMandarin"]; //5

const SubjectCambridgeSecondary = ["English", "Mathematics", "Science", "Humanities", "Malay",
        "Mandarin", "Art", "ICT", "Music", "Drama"];
const SubjectIdCambridgeSecondary = ["camSecEng", "camSecMath", "camSecScience", "camSecHuman", "camSecMalay",
        "camSecMandarin", "camSecArt", "camSecIct", "camSecMusic", "camSecDrama"]; // 10
const SubjectRestrictedIdCambridgeSecondary = ["camSecEng", "camSecMath", "camSecScience",
        "camSecMalay", "camSecMandarin"]; // 5
const SubjectIGCSE = ["First Language English", "Second Language English", "Mathematics",
        "Chemistry", "Biology", "Physics", "Combined Science", "Bahasa Melayu", "Additional Mathematics",
        "Accounting", "Art", "Business Studies", "Computer Science", "Design and Technology", "Drama",
        "Economics", "English literature", "Geography", "History", "Global Perspectives",
        "ICT", "Music" ];
// const SubjectIdIGCSE = ["firstEnglish", "secondEnglish", "bm", "math","addmath",
//         "che", "bio", "phy", "combinedScience", "accounting","business","eco"];
const SubjectIdIGCSE = ["igcseFirstEnglish", "igcseSecondEnglish", "igcseMath",
        "igcseChe", "igcseBio", "igcsePhy", "igcseCombinedScience","igcseBm", "igcseAddmath",
        "igcseAccounting","igcseArt" ,"igcseBusiness", "igcseCS","igcseDesignTech", "igcseDrama",
        "igcseEco", "igcseEngLit","igcseGeo","igcseHis","igcseGloPer",
        "igcseICT", "igcseMusic" ];
const SubjectRestrictedIdIGCSE = ["igcseFirstEnglish", "igcseSecondEnglish", "igcseMath",
        "igcseChe", "igcseBio", "igcsePhy", "igcseCombinedScience","igcseBm", "igcseAddmath",
        "igcseAccounting" ,"igcseBusiness", "igcseCS","igcseDesignTech",
        "igcseEco", "igcseEngLit","igcseGeo","igcseHis","igcseGloPer",
        "igcseICT"]; //19
const SubjectALevel = ["Accounting", "Applied ICT", "Biology", "Business", "Chemistry",
        "Computer Science", "Economics", "English Literature", "Further Mathematics", "Law",
        "Mathematics", "Physics","Psychology", "Sociology"];
// const SubjectIdALevel = ["accountingAlevel", "appliedICT", "bioAlevel", "businessAlevel","cheAlevel",
//         "cs", "ecoAlevel", "englishLiterature", "furmath", "law",
//         "mathAlevel","phyAlevel", "psy", "socio"]; // 14
const SubjectIdALevel = ["aLevelAccounting", "aLevelAppliedICT", "aLevelBio", "aLevelBusiness","aLevelChe",
        "aLevelCs", "aLevelEco", "aLevelEngLit", "aLevelFurmath", "aLevelLaw",
        "aLevelMath","aLevelPhy", "aLevelPsy", "aLevelSocio"]; // 14
const SubjectRestrictedIdALevel = ["aLevelBio","aLevelChe" ,"aLevelMath", "aLevelPhy"]; //4

const SubjectIBEarlyYears = ["Phonics", "Mandarin", "Malay", "Mathematics"];
const SubjectIdIBEarlyYears = ["ibEyPhonics", "ibEyMan", "ibEyBm", "ibEyMath"]; //4
const SubjectRestrictedIdIBEarlyYears = ["ibEyPhonics", "ibEyMath"]; //2

const SubjectIBPrimary = ["Language", "Social Studies", "Mathematics", "Science", "Art"];
const SubjectIdIBPrimary = ["ibPriLan", "ibPriSocialStudies", "ibPriMath", "ibPriScience", "ibPriArt"]; //5
const SubjectRestrictedIdIBPrimary = ["ibPriMath", "ibPriScience"]; // 2

const SubjectIBMiddle = ["Mathematics", "Sciences", "Language Acquisition", "Language and Literature",
        "Individuals and Societies", "Art"];
const SubjectIdIBMiddle = ["ibMidMath", "ibMidScience", "ibMidLanAcq", "ibMidLanLit",
        "ibMidIndSoc", "ibMidArt"]; //6
const SubjectRestrictedIdIBMiddle = ["ibMidMath", "ibMidScience"]; //2

const SubjectIBDiploma = ["Biology HL / SL", "Business and Management HL / SL", "Chemistry HL / SL", "Chinese B HL / SL",
        "Chinese Language and Literature SL", "Computer Science HL / SL", "Design and Technology HL / SL", "Economics HL / SL",
        "English B HL / SL", "English Language and Literature HL / SL", "English Literature and Performance SL",
        "English Literature HL / SL","French Ab Initio SL", "French B HL / SL","Geography HL / SL",
        "Global Politics HL / SL", "History HL / SL", "Malay Ab Initio SL", "Malay B SL",
        "Malay Literature HL/SL", "Mathematics HL / SL", "Music HL / SL", "Physics HL / SL",
        "Psychology HL / SL", "Spanish Ab Initio SL", "Spanish B HL / SL", "Sports Health and Exercise Science HL / SL",
        "Theatre Arts HL / SL", "Visual Arts HL / SL", "World Religions SL"];
const SubjectIdIBDiploma = ["ibDipBio", "ibDipBusMan", "ibDipChe", "ibDipChiB",
        "ibDipChiLanLit", "ibDipCs", "ibDipDesignTech", "ibDipEco",
        "ibDipEngB", "ibDipEngLanLit", "ibDipEngLitPer",
        "ibDipEngLit", "ibDipFrenchAbInitio", "ibDipFrenchB", "ibDipGeo",
        "ibDipGloPolitics", "ibDipHist", "ibDipMalayAbInitio", "ibDipMalayB",
        "ibDipMalayLit", "ibDipMath", "ibDipMusic", "ibDipPhy",
        "ibDipPsy", "ibDipSpanishAbInitio", "ibDipSpanishB", "ibDipSportHealthExerScience",
        "ibDipTheatreArt", "ibDipVisualArt", "ibDipWorldReligions"]; //31
const SubjectRestrictedIdIBDiploma = ["ibDipBio", "ibDipChe", "ibDipMath", "ibDipPhy",
        "ibDipEngB", "ibDipEngLanLit", "ibDipEngLitPer", "ibDipEngLit"]; // 8

const SubjectUecJunior = ["Chinese Language", "English Language", "Malay Language", "Mathematics",
        "Science", "Geography", "History", "Art"];
const SubjectIdUecJunior = ["uecJunChi", "uecJunEng", "uecJunMalay", "uecJunMath",
        "uecJunScience", "uecJunGeo", "uecJunHist", "uecJunArt"]; //8
const SubjectRestrictedIdUecJunior = ["uecJunChi", "uecJunEng", "uecJunMalay", "uecJunMath",
        "uecJunScience"]; //5

const SubjectUecSenior = ["Accounting", "Advanced Mathematics", "Advanced Mathematics (I)", "Advanced Mathematics (II)",
        "Art", "Basic Circuit Theory", "Biology", "Book-keeping and Accounts",
        "Business Studies", "Chemistry", "Chinese Language", "Computing and Information Technology",
        "Digital Logic", "Economics", "English Language", "Fundamentals of Electrical Engineering",
        "Geography", "History", "Malay Language (National)", "Physics", "Principle Electronic"];
const SubjectIdUecSenior = ["uecSenAcc", "uecSenAdvMath", "uecSenAdvMathI", "uecSenAdvMathII",
        "uecSenArt", "uecSenBasicCirTheo", "uecSenBio", "uecSenBookKeepAcc",
        "uecSenBusStu", "uecSenChe", "uecSenChiLan", "uecSenIct",
        "uecSenDigLogic", "uecSenEco", "uecSenEngLan", "uecSenFunEnE",
        "uecSenGeo", "uecSenHist", "uecSenMalayLan", "uecSenPhy", "uecSenPrinE"]; //21
const SubjectRestrictedIdUecSenior = ["uecSenAdvMath", "uecSenAdvMathI", "uecSenAdvMathII",
        "uecSenBio", "uecSenChe", "uecSenChiLan", "uecSenEngLan", "uecSenMalayLan", "uecSenPhy"]; // 9

//    Source: https://home.scotch.wa.edu.au/courses/pathway/atar/
const SubjectAusmat = ["Accounting and Finance","Applied Information Technology","Biology","Business Management & Enterprise",
    "Chemistry","Chinese","Design (Dimensional/Graphics/Photography)","Drama","Economics","English",
    "English Additional Language or Dialect","Food Studies","French","Geography","Human Biology",
    "Indonesian","Literature","Marine and Maritime Studies","Materials Design Technology (Metal)",
    "Mathematics Applications","Mathematics Essential","Mathematics Methods","Mathematics Specialist",
    "Media Production & Analysis","Modern History","Music","Outdoor Education","Physical Education Studies",
    "Physics","Politics & Law","Psychology","Visual Arts"]; //32
const SubjectIdAusmat = ["ausAccFin","ausAppliedIT","ausBio","ausBusManNEnt",
    "ausChe","ausChinese","ausDesign","ausDrama","ausEco","ausEng",
    "ausEngAdd","ausFood Studies","ausFrench","ausGeography","ausHuman Biology",
    "ausIndo","ausLit","ausMarine","ausMatDesignTech",
    "ausMathApp","ausMathEss","ausMathMeth","ausMathSpe",
    "ausMediaProd","ausModHist","ausMusic","ausOutEdu","ausPhyEdu",
    "ausPhysics","ausPolitics","ausPsy","ausArt"]; //32
const SubjectRestrictedIdAusmat = ["ausAccFin","ausAppliedIT","ausBio","ausBusManNEnt",
    "ausChe","ausChinese","ausDesign","ausDrama","ausEco","ausEng",
    "ausEngAdd","ausFood Studies","ausFrench","ausGeography","ausHuman Biology",
    "ausIndo","ausLit","ausMarine","ausMatDesignTech",
    "ausMathApp","ausMathEss","ausMathMeth","ausMathSpe",
    "ausMediaProd","ausModHist","ausMusic","ausOutEdu","ausPhyEdu",
    "ausPhysics","ausPolitics","ausPsy","ausArt"]; //332

// Source: https://www.studymalaysia.com/what/course/TAYLOR_SUBANG/0009016
const SubjectSam = ["Accounting","Biology","Chemistry","Economics","English as an Additional Language",
    "Legal Studies","Mathematical Studies","Nutrition","Physics","Psychology",
    "Research Project B","Specialist Mathematics"]; //12
const SubjectIdSam = ["samAcc","samBio","samChe","samEco","samEngAdd",
    "samLegal","samMath","samNutri","samPhy","samPsy",
    "samResearchProjB","samSpecialistMath"]; //12
const SubjectRestrictedIdSam = ["samAcc","samBio","samChe","samEco","samEngAdd",
    "samLegal","samMath","samNutri","samPhy","samPsy",
    "samResearchProjB","samSpecialistMath"]; //12


const SubjectEnglishExam = ["MUET", "IELTS", "TOEFL", "TOEIC"];
const SubjectIdEnglishExam = ["muet", "ielts", "toefl", "toeic"]; //4
const SubjectRestrictedIdEnglishExam = ["muet", "ielts", "toefl", "toeic"]; //4

const SubjectAdultLanguage = ["English", "Mandarin", "Malay", "Tamil", "Arabic",
        "French", "German", "Indonesian", "Italian", "Japanese", "Korean", "Russian", "Spanish"];
const SubjectIdAdultLanguage = ["adultEng", "adultMandarin", "adultMalay", "adultTamil", "adultArabic",
        "adultFrench", "adultGerman", "adultIndo", "adultItaly", "adultJapan","adultKorean", "adultRussian", "adultSpanish"]; //13
const SubjectRestrictedIdAdultLanguage = ["adultEng", "adultMandarin", "adultMalay", "adultTamil", "adultArabic",
        "adultFrench", "adultGerman", "adultIndo", "adultItaly", "adultJapan","adultKorean", "adultRussian", "adultSpanish"]; //13

const SubjectMusic = ["Piano", "Violin", "Guitar", "Drums","Saxophone"];
const SubjectIdMusic = ["musicPiano", "musicViolin", "musicGuitar", "musicDrums", "musicSax"];  // 5
const SubjectRestrictedIdMusic = ["musicPiano", "musicViolin", "musicGuitar", "musicDrums", "musicSax"]; //5

const SubjectComputer = ["Illustrator/PhotoShop", "Video Editing", "Web Design (HTML, CSS, JavaScript)",
        "Mobile App Development", "Microsoft Office", "macOS App Development", "Window App Development", "ASP.NET",
        "C++", "C#", "Flutter", "Java", "PHP", "Python", "React Native", "SQL", "Visual Basic"];
const SubjectIdComputer = ["compIllu", "compVideoEdit", "compWebDesign",
        "compMobileApp", "compMSOffice", "compMacApp", "compWinApp", "compAspNet",
        "compCplus2", "compSharp", "compFlutter", "compJava","compPhp", "compPython", "compReact", "compSql", "compVb"];  //17
const SubjectRestrictedIdComputer = ["compIllu", "compVideoEdit", "compWebDesign",
        "compMobileApp","compMSOffice"]; //5

// [DEPRECIATED] Get Subject Info based on Category Value
function selectSubjectBasedOnLevel(selectedLevel){
    var subject;
    var subjectId;
    switch (selectedLevel){
        case "UPSR":
            subject = SubjectUPSR;
            subjectId = SubjectIdUPSR;
            return {subject, subjectId};
        case "PT3":
            subject = SubjectPT3;
            subjectId = SubjectIdPT3;
            return {subject, subjectId};
        case "SPM":
            subject = SubjectSPM;
            subjectId = SubjectIdSPM;
            return {subject, subjectId};
        case "PreU":
            subject = SubjectPreU;
            subjectId = SubjectIdPreU;
            return {subject, subjectId};
        case "IGCSE":
            subject = SubjectIGCSE;
            subjectId = SubjectIdIGCSE;
            return {subject, subjectId};
        case "A Level":
            subject = SubjectALevel;
            subjectId = SubjectIdALevel;
            return {subject, subjectId};
        default:
            subject = null;
            subjectId = null;
            return {subject, subjectId};
    }
}


// Get the subject and subjectId list based on leveld
function selectSubjectListBasedOnLevelId(selectedLevelId) {
    var subject;
    var subjectId;
    switch (selectedLevelId){
        case "kindergarten":
            subject = SubjectKindergarten;
            subjectId = SubjectIdKindergarten;
            return [subject, subjectId];
        case "upsr":
            subject = SubjectUPSR;
            subjectId = SubjectIdUPSR;
            return [subject, subjectId];
        case "pt3":
            subject = SubjectPT3;
            subjectId = SubjectIdPT3;
            return [subject, subjectId];
        case "spm":
            subject = SubjectSPM;
            subjectId = SubjectIdSPM;
            return [subject, subjectId];
        case "stpm":
            subject = SubjectPreU;
            subjectId = SubjectIdPreU;
            return [subject, subjectId];
        case "recep":
            subject = SubjectCambridgeNursery;
            subjectId = SubjectIdCambridgeNursery;
            return [subject, subjectId];
        case "camPri":
            subject = SubjectCambridgePrimary;
            subjectId = SubjectIdCambridgePrimary;
            return [subject, subjectId];
        case "camLowerSec":
            subject = SubjectCambridgeSecondary;
            subjectId = SubjectIdCambridgeSecondary;
            return [subject, subjectId];
        case "igcse":
            subject = SubjectIGCSE;
            subjectId = SubjectIdIGCSE;
            return [subject, subjectId];
        case "alevel":
            subject = SubjectALevel;
            subjectId = SubjectIdALevel;
            return [subject, subjectId];
        case "ibEyp":
            subject = SubjectIBEarlyYears;
            subjectId = SubjectIdIBEarlyYears;
            return [subject, subjectId];
        case "ibPyp":
            subject = SubjectIBPrimary;
            subjectId = SubjectIdIBPrimary;
            return [subject, subjectId];
        case "ibMyp":
            subject = SubjectIBMiddle;
            subjectId = SubjectIdIBMiddle;
            return [subject, subjectId];
        case "ibDiploma":
            subject = SubjectIBDiploma;
            subjectId = SubjectIdIBDiploma;
            return [subject, subjectId];
        case "uecJun":
            subject = SubjectUecJunior;
            subjectId = SubjectIdUecJunior;
            return [subject, subjectId];
        case "uecSen":
            subject = SubjectUecSenior;
            subjectId = SubjectIdUecSenior;
            return [subject, subjectId];
        case "ausmat":
            subject = SubjectAusmat;
            subjectId = SubjectIdAusmat;
            return [subject, subjectId];
        case "sam":
            subject = SubjectSam;
            subjectId = SubjectIdSam;
            return [subject, subjectId];
        case "engExam":
            subject = SubjectEnglishExam;
            subjectId = SubjectIdEnglishExam;
            return [subject, subjectId];
        case "adultLanguage":
            subject = SubjectAdultLanguage;
            subjectId = SubjectIdAdultLanguage;
            return [subject, subjectId];
        case "music":
            subject = SubjectMusic;
            subjectId = SubjectIdMusic;
            return [subject, subjectId];
        case "computer":
            subject = SubjectComputer;
            subjectId = SubjectIdComputer;
            return [subject, subjectId];
        default:
            subject = null;
            subjectId = null;
            return [subject, subjectId];
    }
}


// [DEPRECIATED] Return Subject Name based on subjectID and categoryId
function getSubjectInfo(subjectId, categoryId){
    // Category tempCategory = new Category();
    switch (subjectId){
        case "bm":
            switch (categoryId){
                case "upsr" : return "Bahasa Melayu";
                case "pt3"  : return "Bahasa Melayu";
                case "spm"  : return "Bahasa Melayu";
                case "preu" : return "Bahasa Melayu";
                case "igcse": return "Malay";
                default: return null;
            }
        case "english": return "Bahasa Inggeris";
        case "math": tempCategory.setId("math");
            switch (categoryId){
                case "upsr": return "Matematik";
                case "pt3": return "Mathematics";
                case "spm": return "Mathematics";
                case "igcse": return "Mathematics";
                default: return null;
            }
        case "science":
            switch (categoryId){
                case "upsr": return "Sains";
                case "pt3": return "Science";
                default: return null;
            }
        case "bc": return "Bahasa Cina";
        case "bt": return "Bahasa Tamil";
        case "sej": return "Sejarah";
        case "geo": return "Geografi";
        case "ask": return "Asas Sains Komputer";
        case "rbk": return "Reka Bentuk dan Teknologi";
        case "addmath": return "Additional Mathematics";
        case "che": return "Chemistry";
        case "bio": return "Biology";
        case "phy": return "Physics";
        case "eko": return "Ekonomi";
        case "perniagaan": return "Perniagaan";
        case "pp": return "Prinsip Perakaunan";
        case "ppniaga": return "Pengajian Perniagaan";
        case "pa": return "Pengajian Am";
        case "math(M)": return "Mathematics(M)";
        case "math(T)": return "Mathematics(T)";
        case "perakaunan": return "Perakaunan";
        case "kesusasteraanMelayu": return "Kesusasteraan Melayu";
        case "firstEnglish": return "First Language English";
        case "secondEnglish": return "Second Language English";
        case "combinedScience": return "Combined Science";
        case "accounting": return "Accounting";
        case "business": return "Business Studies";
        case "eco": return "Economics";
        //Alevel
        case "accountingAlevel": return "Accounting";
        case "appliedICT": return "Applied ICT";
        case "bioAlevel": return "Biology";
        case "businessAlevel": return "Business";
        case "cheAlevel": return "Chemistry";
        case "cs": return "Computer Science";
        case "ecoAlevel": return "Economics";
        case "englishLiterature": return "English Literature";
        case "furmath": return "Further Mathematics";
        case "law": return "Law";
        case "mathAlevel": return "Mathematics";
        case "phyAlevel": return "Physics";
        case "psy": return "Psychology";
        case "socio": return "Sociology";
        default:
            return null;
    }
}


// Return Subject Id based on Category and Subject
// Note: This is for tutor portal specific
function getIdBasedOnCategoryAndSubject(category, subject){

    // Step 1: Get category Id

    let categoryId = CategoryId[Category.indexOf(category)];

    // Step 2: Select the correct Subject Id List
    // Step 3: Select the Subject Id based on the index of Subject 
    switch (categoryId){
      case "kindergarten":
          return SubjectIdKindergarten[SubjectKindergarten.indexOf(subject)];
      case "upsr":
          return SubjectIdUPSR[SubjectUPSR.indexOf(subject)];
      case "pt3":
          return SubjectIdPT3[SubjectPT3.indexOf(subject)];
      case "spm":
          return SubjectIdSPM[SubjectSPM.indexOf(subject)];
      case "stpm":
          return SubjectIdPreU[SubjectPreU.indexOf(subject)];
      case "recep":
          return SubjectIdCambridgeNursery[SubjectCambridgeNursery.indexOf(subject)];
      case "camPri":
          return SubjectIdCambridgePrimary[SubjectCambridgePrimary.indexOf(subject)];
      case "camLowerSec":
          return SubjectIdCambridgeSecondary[SubjectCambridgeSecondary.indexOf(subject)];
      case "igcse":
          return SubjectIdIGCSE[SubjectIGCSE.indexOf(subject)];
      case "alevel":
          return SubjectIdALevel[SubjectALevel.indexOf(subject)];
      case "ibEyp":
          return SubjectIdIBEarlyYears[SubjectIBEarlyYears.indexOf(subject)];
      case "ibPyp":
          return SubjectIdIBPrimary[SubjectIBPrimary.indexOf(subject)];
      case "ibMyp":
          return SubjectIdIBMiddle[SubjectIBMiddle.indexOf(subject)];
      case "ibDiploma":
          return SubjectIdIBDiploma[SubjectIBDiploma.indexOf(subject)];
      case "uecJun":
          return SubjectIdUecJunior[SubjectUecJunior.indexOf(subject)];
      case "uecSen":
          return SubjectIdUecSenior[SubjectUecSenior.indexOf(subject)];
      case "ausmat":
        return SubjectIdAusmat[SubjectAusmat.indexOf(subject)];
      case "sam":
        return SubjectIdSam[SubjectSam.indexOf(subject)];
      case "engExam":
          return SubjectIdEnglishExam[SubjectEnglishExam.indexOf(subject)];
      case "adultLanguage":
          return SubjectIdAdultLanguage[SubjectAdultLanguage.indexOf(subject)];
      case "music":
          return SubjectIdMusic[SubjectMusic.indexOf(subject)];
      case "computer":
          return SubjectIdComputer[SubjectComputer.indexOf(subject)];
      default:
          return null;
    }

}

// Return Subject based on categoryId and subjectId
// Note: This is for tutor portal specific
function getSubjectBasedOnCategoryIdAndSubjectId(categoryId, subjectId){

    // Step 1: Get category Id

    // let categoryId = CategoryId[Category.indexOf(category)];

    // Step 2: Select the correct Subject Id List
    // Step 3: Select the Subject Id based on the index of Subject 
    switch (categoryId){
      case "kindergarten":
          return SubjectKindergarten[SubjectIdKindergarten.indexOf(subjectId)];
      case "upsr":
          return SubjectUPSR[SubjectIdUPSR.indexOf(subjectId)];
      case "pt3":
          return SubjectPT3[SubjectIdPT3.indexOf(subjectId)];
      case "spm":
          return SubjectSPM[SubjectIdSPM.indexOf(subjectId)];
      case "stpm":
          return SubjectPreU[SubjectIdPrel.indexOf(subjectId)];
      case "recep":
          return SubjectCambridgeNursery[SubjectIdCambridgeNursery.indexOf(subjectId)];
      case "camPri":
          return SubjectCambridgePrimary[SubjectIdCambridgePrimary.indexOf(subjectId)];
      case "camLowerSec":
          return SubjectCambridgeSecondary[SubjectIdCambridgeSecondary.indexOf(subjectId)];
      case "igcse":
          return SubjectIGCSE[SubjectIdIGCSE.indexOf(subjectId)];
      case "alevel":
          return SubjectALevel[SubjectIdALevel.indexOf(subjectId)];
      case "ibEyp":
          return SubjectIBEarlyYears[SubjectIdIBEarlyYears.indexOf(subjectId)];
      case "ibPyp":
          return SubjectIBPrimary[SubjectIdIBPrimary.indexOf(subjectId)];
      case "ibMyp":
          return SubjectIBMiddle[SubjectIdIBMiddle.indexOf(subjectId)];
      case "ibDiploma":
          return SubjectIBDiploma[SubjectIdIBDiploma.indexOf(subjectId)];
      case "uecJun":
          return SubjectUecJunior[SubjectIdUecJunior.indexOf(subjectId)];
      case "uecSen":
          return SubjectUecSenior[SubjectIdUecSenior.indexOf(subjectId)];
      case "ausmat":
          return SubjectAusmat[SubjectIdAusmat.indexOf(subjectId)];
      case "sam":
          return SubjectSam[SubjectIdSam.indexOf(subjectId)];
      case "engExam":
          return SubjectEnglishExam[SubjectIdEnglishExam.indexOf(subjectId)];
      case "adultLanguage":
          return SubjectAdultLanguage[SubjectIdAdultLanguage.indexOf(subjectId)];
      case "music":
          return SubjectMusic[SubjectIdMusic.indexOf(subjectId)];
      case "computer":
          return SubjectComputer[SubjectIdComputer.indexOf(subjectId)];
      default:
          return null;
    }

}

// Return Bool to Check if a Subject is restricted based on Category Id and Subject Id
function getRestrictedSubjectForEachCategoryBasedOnId( categoryId, subjectId){
    let found =false;
    switch (categoryId) {
        case "kindergarten":                
            SubjectRestrictedIdKindergarten.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
            
        case "upsr":
            SubjectRestrictedIdUPSR.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "pt3":
            SubjectRestrictedIdPT3.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "spm":
            SubjectRestrictedIdSPM.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "stpm":
            SubjectRestrictedIdPreU.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "recep":
            SubjectRestrictedIdCambridgeNursery.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
        case "camPri":
            SubjectRestrictedIdCambridgePrimary.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "camLowerSec":
            SubjectRestrictedIdCambridgeSecondary.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "igcse":
            SubjectRestrictedIdIGCSE.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "alevel":
            SubjectRestrictedIdALevel.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "ibEyp":
            SubjectRestrictedIdIBEarlyYears.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "ibPyp":
            SubjectRestrictedIdIBPrimary.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "ibMyp":
            SubjectRestrictedIdIBMiddle.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "ibDiploma":
            SubjectRestrictedIdIBDiploma.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "uecJun":
            SubjectRestrictedIdUecJunior.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "uecSen":
            SubjectRestrictedIdUecSenior.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "ausmat":
            SubjectRestrictedIdAusmat.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "sam":
            SubjectRestrictedIdSam.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "engExam":
            SubjectRestrictedIdEnglishExam.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "adultLanguage":
            SubjectRestrictedIdSPM.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "music":
            SubjectRestrictedIdMusic.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        case "computer":
            SubjectRestrictedIdComputer.some(function(item) {
                if(item == subjectId){
                    found = true;
                }
            });
            return found;
        default:
            return false;
    }
}









