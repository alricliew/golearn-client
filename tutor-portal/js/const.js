// This file declare global constants
const MYAllState = ["Kuala Lumpur","Selangor","Penang","Johor","Melaka",
        "Negeri Sembilan", "Pahang","Perak", "Terengganu","Kelantan","Kedah","Sabah","Sarawak",
        "Perlis", "Putrajaya"];
const MYAllStateId = ["kuala lumpur","selangor","penang","johor","melaka",
        "negeri sembilan", "pahang","perak", "terengganu","kelantan","kedah","sabah","sarawak",
        "perlis", "putrajaya"];

const cityJohor = ["Gelang Patah","Kluang","Kota Tinggi","Kulai","Mersing","Muar","Nusajaya","Pasir Gudang","Permas Jaya","Pontian","Segamat","Senai","Skudai","Tampoi","Ulu Tiram"];
const cityKL = ["Bandar Tun Razak","Bangsar","Bukit Bintang","Kepong","Lembah Pantai","Nilai","Serdang","Seputeh","Wangsa Maju"];
const cityPenang = ["Air Itam","Bayan Lepas","Balik Pulau","Batu Ferringhi","Bukit Mertajam","Butterworth","Georgetown","Jelutong","Kulim","Nibong Tebal","Perai","Tasek Gelugor"];
const citySelangor = ["Ampang","Cheras","Damansara","Kajang","Kuala Selangor","Petaling Jaya","Puchong", "Putrajaya","Sabak Bernam","Shah Alam","Subang Jaya","Setapak"];
const cityKedah = ["Baling","Bandar Baharu","Kota Setar","Kuala Muda",
        "Kubang Pasu", "Kulim","Langkawi", "Padang Terap","Pendang","Pokok Sena","Sik","Yan"];

const cityKelantan = ["Bachok","Gua Musang","Jeli","Kota Bharu",
        "Kuala Krai", "Machang","Pasir Mas", "Pasir Puteh","Tanah Merah","Tumpat"];

const cityMelaka = ["Alor Gajah","Kota Melaka","Jasin"];

const cityNegeriSembilan = ["Jelebu","Jempol","Kuala Pilah","Port Dickson",
        "Rembau", "Seremban", "Tampin"];

const cityPahang = ["Pekan","Kuantan","Bera","Cameron Highlands",
        "Jerantut", "Bentong","Lipis", "Maran","Raub","Rompin","Temerloh"];

const cityPerak = ["Batang Padang","Hilir Perak","Hulu Perak","Kerian",
        "Kinta", "Kuala Kangsar","Larut, Matang", "Selama","Manjung","Perak Tengah","Kampar"];

const cityTerengganu = ["Kuala Terengganu","Besut","Dungun","Hulu Terengganu",
        "Kemaman", "Marang","Setiu", "Kuala Nerus"];

const cityPutraJaya = ["Putrajaya"];
const cityPerlis = ["Perlis"];

const citySabah = ["Kota Kinabalu","Sandakan","Tawau","Kota Marudu",
        "Kudat", "Pitas","Beluran", "Kinabatangan","Tongod","Kunak","Lahad Datu", "Semporna",
        "Kota Belud", "Papar","Penampang", "Putatan","Ranau","Tuaran","Beaufort", "Keningau",
        "Kuala Penyu", "Nabawan","Sipitang", "Tambunan","Tenom"];

const citySarawak = ["Kuching","Bintulu","Sibu","Sri Aman", "Bau", "Lundu",
        "Miri", "Marudi","Samarahan", "Simunjan","Asajaya","Sarikei","Siburan", "Tebedu", "Pakan",
        "Kanowit", "Selangau","Sri Aman", "Lubok Antu","Limbang","Lawas","Kapit", "Song", "Belaga",
        "Betong", "Saratok","Tatau"];

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


const Category = ["Kindergarten", "Primary (Previously UPSR)", "PT3", "SPM", "STPM", "Reception/Nursery", "Cambridge Primary", 
        "Cambridge Lower Secondary", "IGCSE", "A Level",
        "IB Early Years","IB Primary (PYP)","IB Middle (MYP)", "IB Diploma", "UEC Junior", 
        "UEC Senior", "English Exam", "Adult Language", "Music", "Computer Programming"];

const CategoryId = ["kindergarten", "upsr", "pt3", "spm", "stpm", "recep", "camPri", "camLowerSec", "igcse", "alevel",
"ibEyp", "ibPyp", "ibMyp", "ibDiploma", "uecJun", "uecSen","engExam", "adultLanguage", "music", "computer"];

// NOTE: TOTAL 111 Restricted subjects
const SubjectKindergarten = ["Bahasa Melayu", "Bahasa Inggeris", "Bahasa Cina", "Bahasa Tamil", "Matematik", "Sains",
        "Phonics", "Suku Kata", "Pendidikan Islam", "Pendidikan Moral"];
const SubjectIdKindergarten = ["kinBm", "kinEnglish", "kinBc", "kinBt", "kinMath", "kinSains",
        "kinPhonics", "kinSukuKata", "kinPi", "kinPm"];
const SubjectRestrictedIdKindergarten = ["kinBm", "kinEnglish", "kinMath", "kinSains"]; // 4

// NOTE: Added second row subjects
// Source: https://www.ipendidikan.my/senarai-mata-pelajaran-sekolah-rendah-kssr.html
const SubjectUPSR = ["Bahasa Melayu", "Bahasa Inggeris", "Matematik", "Sains", "Bahasa Cina",
        "Bahasa Tamil", "Sejarah", "Reka Bentuk dan Teknologi", "Pendidikan Islam / Moral", "Bahasa Iban",
        "Bahasa Arab", "Bahasa Kadazandusun"];
// const SubjectIdUPSR = ["bm", "english", "math", "science", "bc",
//         "bt", "sej", "rbk", "pim", "priIban",
//         "priArab", "priKadazandusun"];
const SubjectIdUPSR = ["priBm", "priEnglish", "priMath", "priScience", "priBc",
        "priBt", "priSej", "priRbk", "priPim", "priIban",
        "priArab", "priKadazandusun"];
const SubjectRestrictedIdUPSR =["priBm", "priEnglish", "priMath", "priScience", "priBc",
        "priBt"]; // 6

// Source: https://www.moe.gov.my/images/KPM/UKK/2019/03_Mac/Brochure_PT3-UPDATED-19March1.jpg
const SubjectPT3 = ["Bahasa Melayu", "Bahasa Inggeris", "Mathematics", "Science", "Bahasa Cina", "Bahasa Tamil",
        "Sejarah", "Geografi", "Asas Sains Komputer", "Reka Bentuk dan Teknologi",
        "Pendidikan Islam", "Bahasa Arab", "Bahasa Iban", "Bahasa Kadazandusun", "Bahasa Punjabi",
        "Maharat al-Quran (KBT)", "Usul al-Din (KBD)", "Al-Syariah (KBD)", "Al-Lughah Al-Arabiah Al-Muasirah (KBD)"];
// const SubjectIdPT3 = ["bm", "english", "math", "science", "bc", "bt",
//         "sej", "geo", "ask", "rbk",
//         "pt3Pi", "pt3Arab", "pt3Iban", "pt3Kadazandusun", "pt3Punjabi",
//         "pt3MaharatAlQuran", "pt3UsulAlDin", "pt3AlSyariah", "pt3AlLugAlArabAlMua"];
const SubjectIdPT3 = ["pt3Bm", "pt3English", "pt3Math", "pt3Science", "pt3Bc", "pt3Bt",
        "pt3Sej", "pt3Geo", "pt3Ask", "pt3Rbk",
        "pt3Pi", "pt3Arab", "pt3Iban", "pt3Kadazandusun", "pt3Punjabi",
        "pt3MaharatAlQuran", "pt3UsulAlDin", "pt3AlSyariah", "pt3AlLugAlArabAlMua"];
const SubjectRestrictedIdPT3 = ["pt3Bm", "pt3English", "pt3Math", "pt3Science", "pt3Bc", "pt3Bt",
        "pt3Sej", "pt3Geo"]; // 8

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
//         ];

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
            ];

const SubjectRestrictedIdSPM = [
            "spmBm", "spmEnglish", "spmMath", "spmSains", "spmSej",
            "spmAddmath", "spmChe", "spmBio", "spmPhy",
            "spmBc", "spmTamil",
            "spmEko", "spmPerniagaan","spmPp", "spmGeo"]; // 15

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
//         "stpmIct", "stpmSainsSukan", "stpmSeniVisual"];
const SubjectIdPreU = ["stpmPa",
        "stpmMathM", "stpmMathT","stpmPhy", "stpmChe", "stpmBio",
        "stpmPp", "stpmEko", "stpmPerakaunan",
        "stpmSej", "stpmGeo","stpmKesusasteraanMelayu",
        "stpmBm", "stpmBc", "stpmBt",
        "stpmIct", "stpmSainsSukan", "stpmSeniVisual"];
const SubjectRestrictedIdPreU = ["stpmPa",
        "stpmMathM", "stpmMathT", "stpmPhy", "stpmChe", "stpmBio",
        "stpmPp", "stpmEko", "stpmPerakaunan"]; //9


const SubjectCambridgeNursery = ["Phonics", "Mandarin", "Malay", "Mathematics"];
const SubjectIdCambridgeNursery = ["camNurPhonics", "camNurMan", "camNurBm", "camNurMath"];
const SubjectRestrictedIdCambridgeNursery = ["camNurPhonics"]; // 1

const SubjectCambridgePrimary = ["English", "Mathematics", "Science", "Malay","Mandarin",
        "Art", "ICT", "Music", "Drama"];
const SubjectIdCambridgePrimary = ["camPriEng", "camPriMath", "camPriScience", "camPriMalay","camPriMandarin",
        "camPriArt", "camPriIct", "camPriMusic", "camPriDrama"];
const SubjectRestrictedIdCambridgePrimary = ["camPriEng", "camPriMath", "camPriScience",
        "camPriMalay","camPriMandarin"]; //5

const SubjectCambridgeSecondary = ["English", "Mathematics", "Science", "Humanities", "Malay",
        "Mandarin", "Art", "ICT", "Music", "Drama"];
const SubjectIdCambridgeSecondary = ["camSecEng", "camSecMath", "camSecScience", "camSecHuman", "camSecMalay",
        "camSecMandarin", "camSecArt", "camSecIct", "camSecMusic", "camSecDrama"];
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

const SubjectALevel = ["Accounting", "Applied ICT", "Biology", "Business","Chemistry",
        "Computer Science", "Economics", "English Literature", "Further Mathematics", "Law",
        "Mathematics", "Physics","Psychology", "Sociology"];
// const SubjectIdALevel = ["accountingAlevel", "appliedICT", "bioAlevel", "businessAlevel","cheAlevel",
//         "cs", "ecoAlevel", "englishLiterature", "furmath", "law",
//         "mathAlevel","phyAlevel", "psy", "socio"];
const SubjectIdALevel = ["aLevelAccounting", "aLevelAppliedICT", "aLevelBio", "aLevelBusiness","aLevelChe",
        "aLevelCs", "aLevelEco", "aLevelEngLit", "aLevelFurmath", "aLevelLaw",
        "aLevelMath","aLevelPhy", "aLevelPsy", "aLevelSocio"];
const SubjectRestrictedIdALevel = ["aLevelBio","aLevelChe" ,"aLevelMath","aLevelPhy"]; //4

const SubjectIBEarlyYears = ["Phonics", "Mandarin", "Malay", "Mathematics"];
const SubjectIdIBEarlyYears = ["ibEyPhonics", "ibEyMan", "ibEyBm", "ibEyMath"];
const SubjectRestrictedIdIBEarlyYears = ["ibEyPhonics", "ibEyMath"]; //2

const SubjectIBPrimary = ["Language", "Social Studies", "Mathematics", "Science", "Art"];
const SubjectIdIBPrimary = ["ibPriLan", "ibPriSocialStudies", "ibPriMath", "ibPriScience", "ibPriArt"];
const SubjectRestrictedIdIBPrimary = ["ibPriMath", "ibPriScience"]; // 2

const SubjectIBMiddle = ["Mathematics", "Sciences", "Language Acquisition", "Language and Literature",
        "Individuals and Societies", "Art"];
const SubjectIdIBMiddle = ["ibMidMath", "ibMidScience", "ibMidLanAcq", "ibMidLanLit",
        "ibMidIndSoc", "ibMidArt"];
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
        "ibDipTheatreArt", "ibDipVisualArt", "ibDipWorldReligions"];
const SubjectRestrictedIdIBDiploma = ["ibDipBio", "ibDipChe", "ibDipMath", "ibDipPhy",
        "ibDipEngB", "ibDipEngLanLit", "ibDipEngLitPer", "ibDipEngLit"]; // 8

const SubjectUecJunior = ["Chinese Language", "English Language", "Malay Language", "Mathematics",
        "Science", "Geography", "History", "Art"];
const SubjectIdUecJunior = ["uecJunChi", "uecJunEng", "uecJunMalay", "uecJunMath",
        "uecJunScience", "uecJunGeo", "uecJunHist", "uecJunArt"];
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
        "uecSenGeo", "uecSenHist", "uecSenMalayLan", "uecSenPhy", "uecSenPrinE"];
const SubjectRestrictedIdUecSenior = ["uecSenAdvMath", "uecSenAdvMathI", "uecSenAdvMathII",
        "uecSenBio", "uecSenChe", "uecSenChiLan", "uecSenEngLan", "uecSenMalayLan", "uecSenPhy"]; // 9


const SubjectEnglishExam = ["MUET", "IELTS", "TOEFL", "TOEIC"];
const SubjectIdEnglishExam = ["muet", "ielts", "toefl", "toeic"];
const SubjectRestrictedIdEnglishExam = ["muet", "ielts", "toefl", "toeic"]; //4

const SubjectAdultLanguage = ["English", "Mandarin", "Malay", "Tamil", "Arabic",
        "French", "German", "Indonesian", "Italian", "Japanese", "Korean", "Russian", "Spanish"];
const SubjectIdAdultLanguage = ["adultEng", "adultMandarin", "adultMalay", "adultTamil", "adultArabic",
        "adultFrench", "adultGerman", "adultIndo", "adultItaly", "adultJapan","adultKorean", "adultRussian", "adultSpanish"];
const SubjectRestrictedIdAdultLanguage = ["adultEng", "adultMandarin", "adultMalay", "adultTamil", "adultArabic",
        "adultFrench", "adultGerman", "adultIndo", "adultItaly", "adultJapan","adultKorean", "adultRussian", "adultSpanish"]; //13

const SubjectMusic = ["Piano", "Violin", "Guitar", "Drums","Saxophone"];
const SubjectIdMusic = ["musicPiano", "musicViolin", "musicGuitar", "musicDrums", "musicSax"];
const SubjectRestrictedIdMusic = ["musicPiano", "musicViolin", "musicGuitar", "musicDrums", "musicSax"]; //5

const SubjectComputer = ["Illustrator/PhotoShop", "Video Editing", "Web Design (HTML, CSS, JavaScript)",
        "Mobile App Development", "Microsoft Office", "macOS App Development", "Window App Development", "ASP.NET",
        "C++", "C#", "Flutter", "Java", "PHP", "Python", "React Native", "SQL", "Visual Basic"];
const SubjectIdComputer = ["compIllu", "compVideoEdit", "compWebDesign",
        "compMobileApp", "compMSOffice", "compMacApp", "compWinApp", "compAspNet",
        "compCplus2", "compSharp", "compFlutter", "compJava","compPhp", "compPython", "compReact", "compSql", "compVb"];
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
// function getSubjectInfo(subjectId, categoryId){
//     // Category tempCategory = new Category();
//     switch (subjectId){
//         case "bm":
//             switch (categoryId){
//                 case "upsr" : return "Bahasa Melayu";
//                 case "pt3"  : return "Bahasa Melayu";
//                 case "spm"  : return "Bahasa Melayu";
//                 case "preu" : return "Bahasa Melayu";
//                 case "igcse": return "Malay";
//                 default: return null;
//             }
//         case "english": return "Bahasa Inggeris";
//         case "math": tempCategory.setId("math");
//             switch (categoryId){
//                 case "upsr": return "Matematik";
//                 case "pt3": return "Mathematics";
//                 case "spm": return "Mathematics";
//                 case "igcse": return "Mathematics";
//                 default: return null;
//             }
//         case "science":
//             switch (categoryId){
//                 case "upsr": return "Sains";
//                 case "pt3": return "Science";
//                 default: return null;
//             }
//         case "bc": return "Bahasa Cina";
//         case "bt": return "Bahasa Tamil";
//         case "sej": return "Sejarah";
//         case "geo": return "Geografi";
//         case "ask": return "Asas Sains Komputer";
//         case "rbk": return "Reka Bentuk dan Teknologi";
//         case "addmath": return "Additional Mathematics";
//         case "che": return "Chemistry";
//         case "bio": return "Biology";
//         case "phy": return "Physics";
//         case "eko": return "Ekonomi";
//         case "perniagaan": return "Perniagaan";
//         case "pp": return "Prinsip Perakaunan";
//         case "ppniaga": return "Pengajian Perniagaan";
//         case "pa": return "Pengajian Am";
//         case "math(M)": return "Mathematics(M)";
//         case "math(T)": return "Mathematics(T)";
//         case "perakaunan": return "Perakaunan";
//         case "kesusasteraanMelayu": return "Kesusasteraan Melayu";
//         case "firstEnglish": return "First Language English";
//         case "secondEnglish": return "Second Language English";
//         case "combinedScience": return "Combined Science";
//         case "accounting": return "Accounting";
//         case "business": return "Business Studies";
//         case "eco": return "Economics";
//         //Alevel
//         case "accountingAlevel": return "Accounting";
//         case "appliedICT": return "Applied ICT";
//         case "bioAlevel": return "Biology";
//         case "businessAlevel": return "Business";
//         case "cheAlevel": return "Chemistry";
//         case "cs": return "Computer Science";
//         case "ecoAlevel": return "Economics";
//         case "englishLiterature": return "English Literature";
//         case "furmath": return "Further Mathematics";
//         case "law": return "Law";
//         case "mathAlevel": return "Mathematics";
//         case "phyAlevel": return "Physics";
//         case "psy": return "Psychology";
//         case "socio": return "Sociology";
//         default:
//             return null;
//     }
// }






