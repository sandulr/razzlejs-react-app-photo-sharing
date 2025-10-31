import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useLocation, Link } from 'react-router-dom';

const Header = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  background-color: var(--container-color);
  box-shadow: 0 1px 0 rgba(22,8,43,.1);
  padding: 0 1rem;
  z-index: var(--z-fixed);
  @media screen and (max-width: 441px){
    position: fixed;
  }
  @media screen and (min-width: 442px){
    position: relative !important;
  }
  @media screen and (min-width: 768px){
    padding-top: 0 3rem 0 6rem;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  height: var(--header-height);
  justify-content: space-between;
  @media screen and (min-width: 768px){
    height: calc(var(--header-height) + .5rem);
  }
`;

const Option = styled.option`
  font-weight: 600;
`;

const ATag = styled.a`
  color: var(--title-color);
  font-weight: var(--font-medium);
  display: none;
  @media screen and (min-width: 768px){
    display: block;
  }
`;

const FH2 = styled.h2`
  color: #f50056 !important;
  cursor:pointer;
`;

const HeaderToggle = styled.div`
  font-size: 1.2rem;
  color: var(--title-color);
  cursor: pointer;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

const NavSubTitle = styled.h3`
  font-size: var(--normal-font-size);
  text-transform: uppercase;
  letter-spacing: .1rem;
  color: var(--text-color-light);
  @media screen and (min-width: 768px){
    opacity: 0;
    transition: .3s;
  }
`;

const NavName = styled.span`
  font-size: 18px;
  font-weight: var(--font-medium);
  white-space: nowrap;
  @media screen and (min-width: 768px){
    opacity: 0;
    transition: .3s;
  }
`;

const Nav = styled.div`
  position: fixed;
  top: 0;
  left: -1000%;
  height: 100vh;
  padding: 1rem 1rem 3rem;
  background-color: var(--container-color);
  box-shadow: 1px 0 0 rgba(22,8,43,.1);
  z-index: var(--z-fixed);
  transition: .4s;
  @media screen and (min-width: 768px){
    left: 0;
    padding-top: 1.2rem 1.5rem 3rem;
    width: 68px;
    &:hover ${NavSubTitle} {
      opacity: 1;
    }
    &:hover ${NavName} {
      opacity: 1;
    }
    &:hover {
      width: var(--nav-width);
    }
  }
`;

const NavContainer = styled.nav`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
  scrollbar-width:none;
  ::-webkit-scrollbar{
    display: none;
  }
`;

const NavLogoA = styled.a`
  font-weight: var(--font-semi-bold);
  margin-bottom: 2.5rem;
  display: flex;
  align-items: center;
  color: var(--text-color);
  &:hover {
    color: var(--first-color);
  }
`;

const StyledI = styled.i`
  font-size:30px;
  float:right;
  @media screen and (min-width: 768px){
    display: none;
  }
`;

const SvgThirt = styled.svg`
  height: 30px;
`;

const NavList = styled.div`
  display: grid;
  row-gap:2.5rem;
`;

const NavItems = styled.div`
  display: grid;
  row-gap:1.5rem;
  @media screen and (min-width: 768px){
    row-gap:1.7rem;
  }
`;

const NavIconSvg = styled.svg`
  color: #f5005a !important;
  height: 28px;
  font-size: 1.5rem;
  margin-right: .5rem;
  fill:#f50056;
  @media screen and (min-width: 768px){
    font-size: 1.5rem;
  }
`;

const NavDrop = styled.div`
  padding-bottom: 40px;
  overflow: hidden;
  max-height: 21px;
  transition: .4s ease-in-out;
  &:hover{
    max-height: 100rem;
  }
`;

const NavDropCollapse = styled.div`
  background-color: var(--first-color-light);
  border-radius: .25rem;
  margin-top: 1rem;
`;

const NavDropContent = styled.div`
  display: grid;
  row-gap:.5rem;
  padding: .75rem 2.5rem .75rem 1.8rem;
`;

function useQuery(){
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

const HomeNav = () => {

  let query = useQuery();

    var queryparams = {};

    const changeLangOnClick = (e) => {

    };

    const otherlangs = ['af','sq','am','hy','az','eu','be', 'bn', 'bs', 'bg', 'ca', 'ceb', 'ny', 'zh-CN', 'zh-TW', 'co', 'hr', 'cs', 'da', 'nl', 'eo', 'et', 'tl', 'fi', 'fr', 'fy', 'gl', 'ka', 'de', 'el', 'en', 'en-US', 'en-LK', 'gu', 'ht', 'ha', 'haw', 'iw', 'hi', 'hmn', 'hu', 'is', 'ig', 'id', 'ga', 'it', 'ja', 'jw', 'kn', 'kk', 'km', 'rw', 'ko', 'ku', 'ky', 'lo', 'la', 'lv', 'lt', 'lb', 'mk', 'mg', 'ms', 'ml', 'mt', 'mi', 'mr', 'mn', 'my', 'ne', 'no', 'or', 'ps', 'fa', 'pl', 'pt', 'pa', 'ro', 'ru', 'sm', 'gd', 'sr', 'st', 'sn', 'sd', 'si', 'sk', 'sl', 'so', 'es', 'su', 'sw', 'sv', 'tg', 'ta', 'tt', 'te', 'th', 'tr', 'tk', 'uk', 'ur', 'ug', 'uz', 'vi', 'cy', 'xh', 'yi', 'yo', 'zu'];

    const [isModal, setIsModal] = useState(false);
    const contentClassname = isModal ? { left: "0" } : null;

    queryparams = { hl: query.get('hl') }

  return (
    <>
      <Header dir="auto">
        <HeaderContainer>
          <sub>
						<select id='htmllang' defaultValue={queryparams.hl ? (otherlangs.includes(queryparams.hl) ? queryparams.hl.toUpperCase() : 'EN' ) : 'EN' } onChange={(e) => changeLangOnClick(e.target.value)}>
							{otherlangs.map((lang, index) => (
								<Option key={index}>{lang.toUpperCase()}</Option>
							))}
						</select>
					</sub>
          <ATag href="#"></ATag>
          <Link to={queryparams.hl ? `/?hl=${queryparams.hl}` : '/'}>
						<FH2>Fagacy</FH2>
					</Link>
          <HeaderToggle>
						<SvgThirt onClick={() => setIsModal(!isModal)} id="header-toggle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"/></SvgThirt>
					</HeaderToggle>
        </HeaderContainer>
      </Header>
      <Nav id="navbar" style={contentClassname}>
        <NavContainer>
          <div>
            <NavLogoA role="button">
              <StyledI onClick={() => setIsModal(!isModal)}>&times;</StyledI>
            </NavLogoA>
            <NavList>
                <NavItems>
                  <NavSubTitle>
                  {queryparams.hl ? {'af': 'Profiel','sq': 'Profil','am': 'መገለጫ','hy': 'Պրոֆիլ','az': 'Profil','eu': 'Profila','be': 'Профіль','bn': 'প্রোফাইল','bs': 'Profil','bg': 'Профил','ca': 'Perfil','ceb': 'Profile','ny': 'Mbiri','zh-CN': '轮廓','zh-TW': '輪廓','co': 'Prufilu','hr': 'Profil','cs': 'Profil','da': 'Profil','nl': 'Profiel','eo': 'Profilo','et': 'Profiil','tl': 'Profile','fi': 'Profiili','fr': 'Profil','gl': 'Perfil','ka': 'პროფილი','de': 'Profil','el': 'Προφίλ','gu': 'રૂપરેખા','ht': 'Profile','ha': 'Bayanan martaba','haw': "Hōʻike",'iw': 'פּרוֹפִיל','hi': 'प्रोफ़ाइल','hmn': 'Profile','hu': 'Profil','is': 'Prófíll','ig': 'Profaịlụ','id': 'Profil','ga': 'Próifíl','it': 'Profilo','ja': 'プロフィール','jw': 'Profil','kn': 'ವಿವರ','kk': 'Профиль','km': 'ប្រវត្តិរូប','rw': 'Umwirondoro','ko': '프로필','ku': 'Tengal','ky': 'Профиль','lo': 'ໂປຣໄຟລ','la': 'Profile','lv': 'Profils','lt': 'Profilis','lb': 'Profil','mk': 'Профил','mg': 'TANTARANY','ms': 'Profil','ml': 'പ്രൊഫൈൽ','mt': 'Profil','mr': 'व्यक्तिचित्र','mn': 'Профайл','my': 'ကိုယ်ရေးအကျဉ်း','ne': 'प्रोफाइल','no': 'Profil','or': 'ପ୍ରୋଫାଇଲ୍','ps': 'پروفایل','fa': 'مشخصات','pl': 'Profil','pt': 'Perfil','pa': 'ਪ੍ਰੋਫ਼ਾਈਲ','ro': 'Profil','ru': 'Профиль','sm': 'Talaaga otooto','gd': 'Pròifil','sr': 'Профил','st': 'Pale ea Boemo','sn': 'Nhoroondo','sd': 'پروفائيل','si': 'පැතිකඩ','sk': 'Profil','sl': 'Profil','so': 'Astaanta','es': 'Perfil','su': 'Propil','sw': 'Profaili','sv': 'Profil','tg': 'Профил','ta': 'சுயவிவரம்','tt': 'Профиль','te': 'ప్రొఫైల్','th': 'ประวัติโดยย่อ','tr': 'Profil','tk': 'Profil','uk': 'Профіль','ur': 'پروفائل','ug': 'ئارخىپ','uz': 'Profil','vi': 'Hồ sơ','cy': 'Proffil','xh': 'Proffil','yi': 'פּראָפיל','yo': 'Profaili','zu': 'Iphrofayela'}[queryparams.hl] || 'Profile' : 'Profile'}
                  </NavSubTitle>
                  <Link to={queryparams.hl ? `/?hl=${queryparams.hl}` : '/'} className={`nav_link hoverstyle1`}>
                    <div>
                      <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"/></NavIconSvg>
                      <NavName>{queryparams.hl ? {'af': "Tuis",'sq': "Në shtëpi",'am': "ቤት",'hy': "տուն",'az': "Ev",'eu': "Etxea",'be': "Дадому",'bn': "বাড়ি",'bs': "Dom",'bg': "У дома",'ca': "Inici",'ceb': "Balay sa balay",'ny': "Kunyumba",'zh-CN': "家",'zh-TW': "家",'co': "Home",'hr': "Dom",'cs': "Domov",'da': "Hjem",'nl': "Huis",'eo': "Hejmo",'et': "Kodu",'tl': "Bahay",'fi': "Koti",'fr': "Accueil",'gl': "Casa",'ka': "მთავარი",'de': "Heim",'el': "Σπίτι",'gu': "ઘર",'ht': "Kay",'ha': "Gida",'haw': "Ka home",'iw': "בית",'hi': "घर",'hmn': "Tsev",'hu': "itthon",'is': "Heim",'ig': "Ụlọ",'id': "Rumah",'ga': "Baile",'it': "Casa",'ja': "家",'jw': "Ngarep",'kn': "ಮನೆ",'kk': "Үй",'km': "ផ្ទះ",'rw': "Murugo",'ko': "집",'ku': "Xane",'ky': "Үй",'lo': "ບ້ານ",'la': "Home",'lv': "Mājas",'lt': "Namai",'lb': "Doheem",'mk': "Дома",'mg': "an-trano",'ms': "Rumah",'ml': "വീട്",'mt': "Id-dar",'mr': "मुख्यपृष्ठ",'mn': "Гэр",'my': "အိမ်ပြန်",'ne': "घर",'no': "Hjem",'or': "ଘର",'ps': "کور",'fa': "صفحه اصلی",'pl': "Dom",'pt': "Casa",'pa': "ਕੋਰ",'ro': "Acasă",'ru': "Дом",'sm': "Fale",'gd': "Dachaigh",'sr': "Кућа",'st': "Lapeng",'sn': "Kumba",'sd': "گهر",'si': "ගෙදර",'sk': "Domov",'sl': "Domov",'so': "Hoyga",'es': "Hogar",'su': "Bumi",'sw': "Nyumbani",'sv': "Hem",'tg': "Хона",'ta': "வீடு",'tt': "Өй",'te': "హోమ్",'th': "บ้าน",'tr': "Ev",'tk': "Öý",'uk': "Додому",'ur': "گھر",'ug': "ئۆي",'uz': "Uy",'vi': "Nhà",'cy': "Hafan",'xh': "Ekhaya",'yi': "היים",'yo': "Ile",'zu': "Ikhaya"}[queryparams.hl] || 'Home' : 'Home'}</NavName>
                    </div>
                  </Link>
                  <Link to={queryparams.hl ? `/galleries/?hl=${queryparams.hl}` : '/galleries/'} className={`nav_link hoverstyle1`}>
                    <div>
                      <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 32C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48H48zm0 32h106c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H38c-3.3 0-6-2.7-6-6V80c0-8.8 7.2-16 16-16zm426 96H38c-3.3 0-6-2.7-6-6v-36c0-3.3 2.7-6 6-6h138l30.2-45.3c1.1-1.7 3-2.7 5-2.7H464c8.8 0 16 7.2 16 16v74c0 3.3-2.7 6-6 6zM256 424c-66.2 0-120-53.8-120-120s53.8-120 120-120 120 53.8 120 120-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88zm-48 104c-8.8 0-16-7.2-16-16 0-35.3 28.7-64 64-64 8.8 0 16 7.2 16 16s-7.2 16-16 16c-17.6 0-32 14.4-32 32 0 8.8-7.2 16-16 16z"/></NavIconSvg>
                      <NavName>{queryparams.hl ? {'af': 'Galerye','sq': 'Galeritë','am': 'ጋለሪዎች','hy': 'Պատկերասրահներ','az': 'Qalereyalar','eu': 'Galeriak','be': 'Галерэі','bn': 'গ্যালারী','bs': 'Galerije','bg': 'Галерии','ca': 'Galeries','ceb': 'Mga galeriya','ny': 'Galleries','zh-CN': '画廊','zh-TW': '畫廊','co': 'Gallerie','hr': 'Galerije','cs': 'Galerie','da': 'Gallerier','nl': 'Galerijen','eo': 'Galerioj','et': 'Galeriid','tl': 'Mga gallery','fi': 'Galleriat','fr': 'Galeries','gl': 'Galerías','ka': 'გალერეები','de': 'Galerien','el': 'Γκαλερί','gu': 'ગેલેરીઓ','ht': 'Galeri','ha': 'Galleries','haw': "Nā hale hōʻikeʻike",'iw': 'גלריות','hi': 'दीर्घाओं','hmn': 'Cov duab','hu': 'Galériák','is': 'Gallerí','ig': 'Osisi','id': 'galeri','ga': 'Dánlanna','it': 'Gallerie','ja': 'ギャラリー','jw': 'Galeri','kn': 'ಗ್ಯಾಲರಿಗಳು','kk': 'Галереялар','km': 'វិចិត្រសាល','rw': 'Ububiko','ko': '갤러리','ku': 'Galleries','ky': 'Галереялар','lo': 'ແກເລີຣີ','la': 'Porticibus','lv': 'Galerijas','lt': 'Galerijos','lb': 'Galerien','mk': 'Галерии','mg': 'lalan-','ms': 'Galeri','ml': 'ഗാലറികൾ','mt': 'Galleriji','mr': 'गॅलरी','mn': 'Галерей','my': 'ပြခန်းများ','ne': 'ग्यालरीहरु','no': 'Gallerier','or': 'ଗ୍ୟାଲେରୀ','ps': 'ګالري','fa': 'گالری ها','pl': 'Galerie','pt': 'Galerias','pa': 'ਗਾਲਰੀ','ro': 'Galerii','ru': 'Галереи','sm': 'Faletusi','gd': 'Gailearaidhean','sr': 'Галерије','st': 'Mehala','sn': 'Galleries','sd': 'گيلريون','si': 'ගැලරි','sk': 'Galérie','sl': 'Galerije','so': 'Galleries','es': 'Galerias','su': 'Galéri','sw': 'Nyumba za sanaa','sv': 'Gallerier','tg': 'Галереяҳо','ta': 'காட்சியகங்கள்','tt': 'Галереялар','te': 'గ్యాలరీలు','th': 'แกลเลอรี่','tr': 'Galeriler','tk': 'Galereýa','uk': 'Галереї','ur': 'گیلریاں۔','ug': 'Galleries','uz': 'Galereyalar','vi': 'Phòng trưng bày','cy': 'Orielau','xh': 'Iigalari','yi': 'גאַלעריז','yo': 'Awọn àwòrán ti','zu': 'Amagalari'}[queryparams.hl] || 'Galleries' : 'Galleries'}</NavName>
                    </div>
                  </Link>
                  <Link to={queryparams.hl ? `/globe/?hl=${queryparams.hl}` : '/globe/'} className={`nav_link hoverstyle1`}>
                    <div>
                      <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"/></NavIconSvg>
                      <NavName>{queryparams.hl ? {'af': 'Wêreld','sq': 'Globi','am': 'ግሎብ','hy': 'Գլոբուս','az': 'Qlobus','eu': 'Globoa','be': 'Глобус','bn': 'গ্লোব','bs': 'Globe','bg': 'Глобус','ca': 'Globus','ceb': 'Kalibutan','ny': 'Globe','zh-CN': '地球','zh-TW': '地球','co': 'Globe','hr': 'Globus','cs': 'Zeměkoule','da': 'Globus','nl': 'Wereldbol','eo': 'Globo','et': 'Maakera','tl': 'Globe','fi': 'Maapallo','fr': 'Globe','gl': 'Globo','ka': 'გლობუსი','de': 'Globus','el': 'Σφαίρα','gu': 'ગ્લોબ','ht': 'Globe','ha': 'Duniya','haw': 'Poepoe honua','iw': 'גלוֹבּוּס','hi': 'ग्लोब','hmn': 'Ntiaj teb','hu': 'Földgolyó','is': 'Globe','ig': 'Ụwa','id': 'bola dunia','ga': 'Cruinneog','it': 'Globo','ja': 'グローブ','jw': 'Globe','kn': 'ಗ್ಲೋಬ್','kk': 'Глобус','km': 'សកលលោក','rw': 'Isi','ko': '지구','ku': 'Dinyagog','ky': 'Глобус','lo': 'ໂລກ','la': 'Globe','lv': 'Globuss','lt': 'Gaublys','lb': 'Globe','mk': 'Глобус','mg': 'izao tontolo izao','ms': 'Dunia','ml': 'ഗ്ലോബ്','mt': 'Globe','mr': 'ग्लोब','mn': 'Бөмбөрцөг','my': 'ကမ္ဘာလုံး','ne': 'ग्लोब','no': 'Kloden','or': 'ଗ୍ଲୋବ','ps': 'ګولۍ','fa': 'گلوب','pl': 'Glob','pt': 'Globo','pa': 'ਗੌਲਈ','ro': 'Glob','ru': 'Глобус','sm': 'Lalolagi','gd': 'Globe','sr': 'Глобе','st': 'Globe','sn': 'Globe','sd': 'گوڙ','si': 'ග්ලෝබ්','sk': 'Zemegule','sl': 'Globus','so': 'Globe','es': 'Globo','su': 'Dunya','sw': 'Globu','sv': 'Klot','tg': 'Глобус','ta': 'குளோப்','tt': 'Глобус','te': 'భూగోళం','th': 'โลก','tr': 'Küre','tk': 'Obeer şary','uk': 'Глобус','ur': 'گلوب','ug': 'Globe','uz': 'Globus','vi': 'Quả địa cầu','cy': 'Glôb','xh': 'Iglobhu','yi': 'גלאָבוס','yo': 'Globe','zu': 'I-Globe'}[queryparams.hl] || 'Globe' : 'Globe'}</NavName>
                    </div>
                  </Link>
                  <Link to={queryparams.hl ? `/blogs/?hl=${queryparams.hl}` : '/blogs/'} className={`nav_link hoverstyle1`}>
                    <div>
                      <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M172.2 226.8c-14.6-2.9-28.2 8.9-28.2 23.8V301c0 10.2 7.1 18.4 16.7 22 18.2 6.8 31.3 24.4 31.3 45 0 26.5-21.5 48-48 48s-48-21.5-48-48V120c0-13.3-10.7-24-24-24H24c-13.3 0-24 10.7-24 24v248c0 89.5 82.1 160.2 175 140.7 54.4-11.4 98.3-55.4 109.7-109.7 17.4-82.9-37-157.2-112.5-172.2zM209 0c-9.2-.5-17 6.8-17 16v31.6c0 8.5 6.6 15.5 15 15.9 129.4 7 233.4 112 240.9 241.5.5 8.4 7.5 15 15.9 15h32.1c9.2 0 16.5-7.8 16-17C503.4 139.8 372.2 8.6 209 0zm.3 96c-9.3-.7-17.3 6.7-17.3 16.1v32.1c0 8.4 6.5 15.3 14.8 15.9 76.8 6.3 138 68.2 144.9 145.2.8 8.3 7.6 14.7 15.9 14.7h32.2c9.3 0 16.8-8 16.1-17.3-8.4-110.1-96.5-198.2-206.6-206.7z"/></NavIconSvg>
                      <NavName>{queryparams.hl ? {'af': 'Blogs','sq': 'Bloget','am': 'ብሎጎች','hy': 'Բլոգեր','az': 'Bloglar','eu': 'Blogak','be': 'Блогі','bn': 'ব্লগ','bs': 'Blogovi','bg': 'Блогове','ca': 'Blocs','ceb': 'Mga Blog','ny': 'Mabulogu','zh-CN': '博客','zh-TW': '博客','co': 'Blogs','hr': 'Blogovi','cs': 'Blogy','da': 'Blogs','nl': 'Blogs','eo': 'Blogoj','et': 'Blogid','tl': 'Mga Blog','fi': 'Blogit','fr': 'Blogues','gl': 'Blogs','ka': 'ბლოგები','de': 'Blogs','el': 'Ιστολόγια','gu': 'બ્લોગ્સ','ht': 'Blogs','ha': 'Blogs','haw': 'Nā moʻomanaʻo pūnaewele','iw': 'בלוגים','hi': 'ब्लॉग','hmn': 'Blogs','hu': 'Blogok','is': 'Blogg','ig': 'Blọọgụ','id': 'Blog','ga': 'Blaganna','it': 'Blog','ja': 'ブログ','jw': 'Blogs','kn': 'ಬ್ಲಾಗ್‌ಗಳು','kk': 'Блогтар','km': 'ប្លុក','rw': 'Blog','ko': '블로그','ku': 'Blogs','ky': 'Блогдор','lo': 'ບລັອກ','la': 'Blogs','lv': 'Blogi','lt': 'Tinklaraščiai','lb': 'Blogs','mk': 'Блогови','mg': 'Blogs','ms': 'Blog','ml': 'ബ്ലോഗുകൾ','mt': 'Blogs','mr': 'ब्लॉग्ज','mn': 'Блогууд','my': 'ဘလော့ဂ်များ','ne': 'ब्लगहरु','no': 'Blogger','or': 'ବ୍ଲଗ୍','ps': 'بلاګونه','fa': 'وبلاگ ها','pl': 'Blogi','pt': 'Blogs','pa': 'ਬਲੈਗਸ','ro': 'Bloguri','ru': 'Блоги','sm': 'Tesi','gd': 'Blogaichean','sr': 'Блогови','st': 'Li-Blogs','sn': 'Blogs','sd': 'بلاگز','si': 'බ්ලොග්','sk': 'Blogy','sl': 'Spletni dnevniki','so': 'Blogyada','es': 'Blogs','su': 'Blog','sw': 'Blogi','sv': 'Bloggar','tg': 'Блогҳо','ta': 'வலைப்பதிவுகள்','tt': 'Блоглар','te': 'బ్లాగులు','th': 'บล็อก','tr': 'Bloglar','tk': 'Bloglar','uk': 'Блоги','ur': 'بلاگز','ug': 'بىلوگ','uz': 'Bloglar','vi': 'Blog','cy': 'Blogiau','xh': 'Iibhloko','yi': 'בלאָגס','yo': 'Awọn bulọọgi','zu': 'Amabhulogi'}[queryparams.hl] || 'Blogs' : 'Blogs'}</NavName>
                    </div>
                  </Link>
                  <NavDrop>
                    <Link to={queryparams.hl ? `/context/?hl=${queryparams.hl}` : '/context/'} className={`nav_link hoverstyle1 active`}>
                      <div>
                        <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M610.5 373.3c2.6-14.1 2.6-28.5 0-42.6l25.8-14.9c3-1.7 4.3-5.2 3.3-8.5-6.7-21.6-18.2-41.2-33.2-57.4-2.3-2.5-6-3.1-9-1.4l-25.8 14.9c-10.9-9.3-23.4-16.5-36.9-21.3v-29.8c0-3.4-2.4-6.4-5.7-7.1-22.3-5-45-4.8-66.2 0-3.3.7-5.7 3.7-5.7 7.1v29.8c-13.5 4.8-26 12-36.9 21.3l-25.8-14.9c-2.9-1.7-6.7-1.1-9 1.4-15 16.2-26.5 35.8-33.2 57.4-1 3.3.4 6.8 3.3 8.5l25.8 14.9c-2.6 14.1-2.6 28.5 0 42.6l-25.8 14.9c-3 1.7-4.3 5.2-3.3 8.5 6.7 21.6 18.2 41.1 33.2 57.4 2.3 2.5 6 3.1 9 1.4l25.8-14.9c10.9 9.3 23.4 16.5 36.9 21.3v29.8c0 3.4 2.4 6.4 5.7 7.1 22.3 5 45 4.8 66.2 0 3.3-.7 5.7-3.7 5.7-7.1v-29.8c13.5-4.8 26-12 36.9-21.3l25.8 14.9c2.9 1.7 6.7 1.1 9-1.4 15-16.2 26.5-35.8 33.2-57.4 1-3.3-.4-6.8-3.3-8.5l-25.8-14.9zM496 400.5c-26.8 0-48.5-21.8-48.5-48.5s21.8-48.5 48.5-48.5 48.5 21.8 48.5 48.5-21.7 48.5-48.5 48.5zM224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm201.2 226.5c-2.3-1.2-4.6-2.6-6.8-3.9l-7.9 4.6c-6 3.4-12.8 5.3-19.6 5.3-10.9 0-21.4-4.6-28.9-12.6-18.3-19.8-32.3-43.9-40.2-69.6-5.5-17.7 1.9-36.4 17.9-45.7l7.9-4.6c-.1-2.6-.1-5.2 0-7.8l-7.9-4.6c-16-9.2-23.4-28-17.9-45.7.9-2.9 2.2-5.8 3.2-8.7-3.8-.3-7.5-1.2-11.4-1.2h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c10.1 0 19.5-3.2 27.2-8.5-1.2-3.8-2-7.7-2-11.8v-9.2z"/></NavIconSvg>
                        <NavName>{queryparams.hl ? {'af': 'My konteks','sq': 'Konteksti im','am': 'የእኔ አውድ','hy': 'Իմ ենթատեքստը','az': 'Mənim Kontekstim','eu': 'Nire testuingurua','be': 'Мой кантэкст','bn': 'আমার প্রসঙ্গ','bs': 'Moj kontekst','bg': 'Моят контекст','ca': 'El meu context','ceb': 'Akong Konteksto','ny': 'Zolemba Zanga','zh-CN': '我的背景','zh-TW': '我的背景','co': 'U mo Cuntestu','hr': 'Moj kontekst','cs': 'Můj kontext','da': 'Min kontekst','nl': 'Mijn context','eo': 'Mia Kunteksto','et': 'Minu kontekst','tl': 'Ang Aking Konteksto','fi': 'Oma kontekstini','fr': 'Mon contexte','gl': 'O meu contexto','ka': 'ჩემი კონტექსტი','de': 'Mein Kontext','el': 'Το πλαίσιο μου','gu': 'મારો સંદર્ભ','ht': 'Kontèks mwen','ha': 'Mahallin Tawa','haw': 'ʻO kaʻu pōʻaiapili','iw': 'ההקשר שלי','hi': 'मेरा प्रसंग','hmn': 'Kuv ntsiab lus','hu': 'A kontextusom','is': 'Samhengið mitt','ig': 'Ọnọdụ m','id': 'Konteks Saya','ga': 'Mo Chomhthéacs','it': 'Il mio contesto','ja': '私のコンテキスト','jw': 'Konteks Kula','kn': 'ನನ್ನ ಸನ್ನಿವೇಶ','kk': 'Менің контекстім','km': 'បរិបទរបស់ខ្ញុំ','rw': 'Imirongo yanjye','ko': '내 컨텍스트','ku': 'My Context','ky': 'Менин контекстим','lo': 'ບໍລິບົດຂອງຂ້ອຍ','la': 'My Context','lv': 'Mans konteksts','lt': 'Mano kontekstas','lb': 'Mäi Kontext','mk': 'Мојот контекст','mg': 'My Context','ms': 'Konteks Saya','ml': 'എന്റെ സന്ദർഭം','mt': 'Il-Kuntest Tiegħi','mr': 'माझा संदर्भ','mn': 'Миний контекст','my': 'ကျွန်ုပ်၏ဆက်စပ်မှု','ne': 'मेरो सन्दर्भ','no': 'Min kontekst','or': 'ମୋର ପ୍ରସଙ୍ଗ','ps': 'زما سیاق','fa': 'زمینه من','pl': 'Mój kontekst','pt': 'Meu Contexto','pa': 'ਮੇਰੀ سیاਕ','ro': 'Contextul meu','ru': 'Мой контекст','sm': 'Laʻu tala','gd': 'Mo Cho-theacsa','sr': 'Мој контекст','st': 'Moelelo oa ka','sn': 'Yangu Context','sd': 'منهنجو حوالو','si': 'මගේ සන්දර්භය','sk': 'Môj kontext','sl': 'Moj kontekst','so': 'Dulucdayda','es': 'Mi contexto','su': 'Kontéks Kuring','sw': 'Muktadha wangu','sv': 'Mitt sammanhang','tg': 'Мундариҷаи ман','ta': 'என் சூழல்','tt': 'Минем контекст','te': 'నా సందర్భం','th': 'บริบทของฉัน','tr': 'benim bağlam','tk': 'Kontekstim','uk': 'Мій контекст','ur': 'میرا سیاق و سباق','ug': 'مېنىڭ مەزمۇنىم','uz': 'Mening kontekstim','vi': 'Bối cảnh của tôi','cy': 'Fy Nghyd-destun','xh': 'Umxholo wam','yi': 'מייַן קאָנטעקסט','yo': 'Oro Mi','zu': 'Umongo wami'}[queryparams.hl] || 'My Context': 'My Context'}</NavName>
                      </div>
                    </Link>
                    <NavDropCollapse>
                      <NavDropContent>
                        <Link to={queryparams.hl ? `/context/?hl=${queryparams.hl}` : '/context/'} className={`nav_dropdown-item hoverstyle1`}>
                        {queryparams.hl ? {'af': 'My galerye','sq': 'Galeritë e Mia','am': 'የእኔ ጋለሪዎች','hy': 'Իմ պատկերասրահները','az': 'Qalereyalarım','eu': 'Nire galeriak','be': 'Мае галерэі','bn': 'আমার গ্যালারী','bs': 'Moje galerije','bg': 'Моите галерии','ca': 'Les meves galeries','ceb': 'Akong Mga Galeriya','ny': 'My Galleries','zh-CN': '我的画廊','zh-TW': '我的畫廊','co': 'E mo Gallerie','hr': 'Moje galerije','cs': 'Moje galerie','da': 'Mine gallerier','nl': 'Mijn galerijen','eo': 'Miaj Galerioj','et': 'Minu galeriid','tl': 'Aking Mga Gallery','fi': 'Omat galleriat','fr': 'Mes galeries','gl': 'As miñas galerías','ka': 'ჩემი გალერეები','de': 'Meine Galerien','el': 'Οι στοές μου','gu': 'મારી ગેલેરીઓ','ht': 'Galeri mwen yo','ha': 'Galleries na','haw': 'ʻO kaʻu mau keʻena kiʻi','iw': 'הגלריות שלי','hi': 'मेरी गैलरी','hmn': 'Kuv Galleries','hu': 'Galériáim','is': 'Galleríin mín','ig': 'Ogwe osisi m','id': 'Galeri saya','ga': 'Mo Ghailearaithe','it': 'Le mie gallerie','ja': '私のギャラリー','jw': 'Galeriku','kn': 'ನನ್ನ ಗ್ಯಾಲರಿಗಳು','kk': 'Менің галереяларым','km': 'វិចិត្រសាលខ្ញុំ','rw': 'Ububiko bwanjye','ko': '내 갤러리','ku': 'My Galleries','ky': 'Менин галереяларым','lo': 'ຫ້ອງສະແດງຂອງຂ້ອຍ','la': 'Mea Galleries','lv': 'Manas galerijas','lt': 'Mano galerijos','lb': 'Meng Galerien','mk': 'Мои галерии','mg': 'My Galleries','ms': 'Galeri Saya','ml': 'എന്റെ ഗാലറികൾ','mt': 'Il-Galleriji Tiegħi','mr': 'माझ्या गॅलरी','mn': 'Миний галерей','my': 'ကျွန်ုပ်၏ပြခန်းများ','ne': 'मेरो ग्यालरीहरु','no': 'Mine gallerier','or': 'ମୋର ଗ୍ୟାଲେରୀ','ps': 'زما ګالری','fa': 'گالری های من','pl': 'Moje galerie','pt': 'Minhas galerias','pa': 'ਮੇਰੀ ਗਾਲਰੀ','ro': 'Galeriile mele','ru': 'Мои галереи','sm': 'Loʻu Faletusi','gd': 'Na Gailearaidhean agam','sr': 'Моје галерије','st': 'Mehala ea ka','sn': 'My Galleries','sd': 'منهنجون گيلريون','si': 'මගේ ගැලරි','sk': 'Moje galérie','sl': 'Moje galerije','so': 'Galleries -kayga','es': 'Mis Galerías','su': 'Galéri Abdi','sw': 'Maonesho yangu','sv': 'Mina gallerier','tg': 'Галереяҳои ман','ta': 'என் காட்சியகங்கள்','tt': 'Минем галереялар','te': 'నా గ్యాలరీలు','th': 'แกลเลอรี่ของฉัน','tr': 'Galerilerim','tk': 'Galereýalarym','uk': 'Мої галереї','ur': 'میری گیلریاں۔','ug': 'مېنىڭ رەسىمخانىلىرىم','uz': 'Mening galereyalarim','vi': 'Phòng trưng bày của tôi','cy': 'Fy Orielau','xh': 'Iigalari zam','yi': 'מייַן גאַלעריז','yo': 'Awọn Galleries mi','zu': 'Ama-Galleries ami'}[queryparams.hl] || 'My Galleries' : 'My Galleries'}
                        </Link>
                        <Link to={queryparams.hl ? `/context/?p=photos&hl=${queryparams.hl}` : '/context/?p=photos'} className={`nav_dropdown-item hoverstyle1`}>
                          {queryparams.hl ? {'af': "My foto's",'sq': 'Fotot e mia','am': 'የእኔ ፎቶዎች','hy': 'Իմ լուսանկարները','az': 'Mənim şəkillərim','eu': 'Nire argazkiak','be': 'Мае фатаграфіі','bn': 'আমার ছবি','bs': 'Moje fotografije','bg': 'Моите снимки','ca': 'Les meves fotos','ceb': 'Akong Mga Litrato','ny': 'My Photos','zh-CN': '我的照片','zh-TW': '我的照片','co': 'E mo Foto','hr': 'Moje slike','cs': 'Mé fotky','da': 'Mine billeder','nl': "Mijn foto's",'eo': 'Miaj Fotoj','et': 'Minu fotod','tl': 'Aking Mga Larawan','fi': 'Valokuvani','fr': 'Mes photos','gl': 'As miñas fotos','ka': 'Ჩემი ფოტოები','de': 'Meine Fotos','el': 'Οι φωτογραφίες μου','gu': 'મારા ફોટા','ht': 'Ekran mwen yo','ha': 'Hotuna Na','haw': 'ʻO kaʻu mau kiʻi','iw': 'התמונות שלי','hi': 'मेरी तस्वीरें','hmn': 'Kuv Duab','hu': 'Fotóim','is': 'Myndirnar mínar','ig': 'Foto m','id': 'Foto saya','ga': 'Mo Ghrianghraif','it': 'Le mie foto','ja': '私の写真','jw': 'Foto Kula','kn': 'ನನ್ನ ಫೋಟೋಗಳು','kk': 'Менің фотоларым','km': 'រូបថត​របស់ខ្ញុំ','rw': 'Amafoto Yanjye','ko': '내 사진','ku': 'Wêneyên Min','ky': 'Менин сүрөттөрүм','lo': 'ຮູບຂອງຂ້ອຍ','la': 'My Photos','lv': 'Manas bildes','lt': 'Mano nuotraukos','lb': 'Meng Fotoen','mk': 'Моите слики','mg': 'Ny sariko','ms': 'Gambar saya','ml': 'എന്റെ ചിത്രങ്ങള്','mt': 'Ir-Ritratti Tiegħi','mr': 'माझी छायाचित्रे','mn': 'Миний зургууд','my': 'ကျွန်ုပ်၏ဓာတ်ပုံများ','ne': 'मेरो तस्बिरहरु','no': 'Bildene mine','or': 'ମୋର ଫଟୋ','ps': 'زما انځورونه','fa': 'عکس های من','pl': 'Moje fotografie','pt': 'Minhas fotos','pa': 'ਮੇਰੇ ਚਿੱਤਰ','ro': 'Fotografiile mele','ru': 'Мои фотографии','sm': 'O aʻu Ata','gd': 'Na dealbhan agam','sr': 'Моје фотографије','st': 'Lifoto tsa ka','sn': 'My Photos','sd': 'منهنجون تصويرون','si': 'මගේ ඡායාරූප','sk': 'Moje fotky','sl': 'Moje slike','so': 'Sawiradayda','es': 'Mis fotos','su': 'Poto Kuring','sw': 'Picha Zangu','sv': 'Mina foton','tg': 'Аксҳои ман','ta': 'என் புகைப்படங்கள்','tt': 'Минем фотолар','te': 'నా ఫోటోలు','th': 'รูปของฉัน','tr': 'Benim fotoğraflar','tk': 'Suratlarym','uk': 'Мої фотографії','ur': 'میری تصاویر','ug': 'مېنىڭ سۈرەتلىرىم','uz': 'Mening rasmlarim','vi': 'Ảnh của tôi','cy': 'Fy Lluniau','xh': 'Iifoto Zam','yi': 'מייַן פאָטאָס','yo': 'Awọn fọto mi','zu': 'Izithombe zami'}[queryparams.hl] || 'My Photos' : 'My Photos'}
                        </Link>
                        <Link to={queryparams.hl ? `/context/?p=videos&hl=${queryparams.hl}` : '/context/?p=videos'} className={`nav_dropdown-item hoverstyle1`}>
                          {queryparams.hl ? {"af" : "My video's","sq" : "Videot e mia","am" : "የእኔ ቪዲዮዎች","hy" : "Իմ Տեսանյութերը","az" : "Videolarım","eu" : "Nire bideoak","be" : "Мае відэа","bn" : "আমার ভিডিওগুলো","bs" : "Moji video zapisi","bg" : "Моите видеоклипове","ca" : "Els meus vídeos","ceb" : "Akong Mga Video","ny" : "Makanema Anga","zh-CN" : "我的视频","zh-TW" : "我的視頻","co" : "I mo Video","hr" : "Moji video zapisi","cs" : "Moje videa","da" : "Mine videoe","nl" : "Mijn video's","eo" : "Miaj Videoj","et" : "Minu videod","tl" : "Mga Video Ko","fi" : "Omat videot","fr" : "Mes vidéos","gl" : "Os meus vídeos","ka" : "ჩემი ვიდეოები","de" : "Meine Videos","el" : "Τα Βίντεό μου","gu" : "મારા વીડિયો","ht" : "Videyo mwen yo","ha" : "Bidiyoyina","haw" : "ʻO kaʻu mau wikiō","iw" : "הסרטונים שלי","hi" : "मेरे वीडियो","hmn" : "Kuv Cov Yeeb Yaj Kiab","hu" : "Saját videóim","is" : "Myndböndin mín","ig" : "Vidio m","id" : "Video Saya","ga" : "Mo Físeáin","it" : "I miei video","ja" : "私のビデオ","jw" : "Video Kula","kn" : "ನನ್ನ ವೀಡಿಯೊಗಳು","kk" : "Менің бейнелерім","km" : "វីដេអូរបស់ខ្ញុំ","rw" : "Amashusho yanjye","ko" : "내 비디오","ku" : "My Videos","ky" : "Менин Видеолорум","lo" : "ວິດີໂອຂອງຂ້ອຍ","la" : "My Videos","lv" : "Mani video","lt" : "Mano vaizdo įrašai","lb" : "Meng Videoen","mk" : "Мои видеа","mg" : "Ny horonan-tsary","ms" : "Video Saya","ml" : "എന്റെ വീഡിയോകൾ","mt" : "Il-Vidjows Tiegħi","mr" : "माझे व्हिडिओ","mn" : "Миний видеонууд","my" : "ကျွန်ုပ်၏ဗွီဒီယိုများ","ne" : "मेरा भिडियोहरु","no" : "Mine videoer","or" : "ମୋର ଭିଡିଓଗୁଡିକ","ps" : "زما ویډیوګانې","fa" : "نماهنگ های من","pl" : "Moje filmy","pt" : "Meus vídeos","pa" : "ਮੇਰੀ ਵਿਡੀਓਜਨਸ","ro" : "Videoclipurile mele","ru" : "Мои видео","sm" : "O aʻu Vitio","gd" : "Na bhideothan agam","sr" : "Моји видео записи","st" : "Livideo tsa ka","sn" : "My Videos","sd" : "منهنجا وڊيوز","si" : "මගේ වීඩියෝ","sk" : "Moje videá","sl" : "Moji videoposnetki","so" : "Fiidiyowyadayda","es" : "Mis videos","su" : "Pidéo Abdi","sw" : "Video Zangu","sv" : "Mina videor","tg" : "Видеоҳои ман","ta" : "எனது வீடியோக்கள்","tt" : "Минем видеолар","te" : "నా వీడియోలు","th" : "วิดีโอของฉัน","tr" : "Videolarım","tk" : "Wideolarym","uk" : "Мої відео","ur" : "میرے ویڈیوز۔","ug" : "مېنىڭ سىنلىرىم","uz" : "Mening videolarim","vi" : "Phim của tôi","cy" : "Fy Fideos","xh" : "IiVidiyo zam","yi" : "מייַן ווידיאס","yo" : "Awọn fidio mi","zu" : "Amavidiyo wami"}[queryparams.hl] || 'My Videos' : 'My Videos'}
                        </Link>
                        <Link to={queryparams.hl ? `/context/?p=blogs&hl=${queryparams.hl}` : '/context/?p=blogs'} className={`nav_dropdown-item hoverstyle1`}>
                          {queryparams.hl ? {"af" : "My blogs","sq" : "Bloget e mia","am" : "የእኔ ብሎጎች","hy" : "Իմ բլոգերը","az" : "Bloglarım","eu" : "Nire blogak","be" : "Мае блогі","bn" : "আমার ব্লগ","bs" : "Moji blogovi","bg" : "Моите блогове","ca" : "Els meus blocs","ceb" : "Akong Blog","ny" : "Mabulogu Anga","zh-CN" : "我的博客","zh-TW" : "我的博客","co" : "I mo Blog","hr" : "Moji blogovi","cs" : "Moje blogy","da" : "Mine blogs","nl" : "Mijn blogs","eo" : "Miaj Blogoj","et" : "Minu blogid","tl" : "Aking Mga Blog","fi" : "Omat blogit","fr" : "Mes blogs","gl" : "Os meus blogs","ka" : "ჩემი ბლოგები","de" : "Meine Blogs","el" : "Τα ιστολόγια μου","gu" : "મારા બ્લોગ્સ","ht" : "Blog mwen yo","ha" : "Blogs na","haw" : "ʻO kaʻu mau blog","iw" : "הבלוגים שלי","hi" : "मेरे ब्लॉग","hmn" : "Kuv Blogs","hu" : "Saját blogok","is" : "Bloggin mín","ig" : "Blọọgụ m","id" : "Blog Saya","ga" : "Mo Bhlaganna","it" : "I miei blog","ja" : "私のブログ","jw" : "Blogku","kn" : "ನನ್ನ ಬ್ಲಾಗ್‌ಗಳು","kk" : "Менің блогтарым","km" : "ប្លុករបស់ខ្ញុំ","rw" : "Blog zanjye","ko" : "내 블로그","ku" : "My Blogs","ky" : "Менин блогдорум","lo" : "ບລັອກຂອງຂ້ອຍ","la" : "My Blogs","lv" : "Mani emuāri","lt" : "Mano tinklaraščiai","lb" : "Meng Blogs","mk" : "Мои блогови","mg" : "Ny bilaogiko","ms" : "Blog Saya","ml" : "എന്റെ ബ്ലോഗുകൾ","mt" : "Il-Blogs Tiegħi","mr" : "माझे ब्लॉग्ज","mn" : "Миний блогууд","my" : "ကျွန်ုပ်၏ဘလော့များ","ne" : "मेरा ब्लगहरु","no" : "Bloggene mine","or" : "ମୋର ବ୍ଲଗ୍","ps" : "زما بلاګونه","fa" : "وبلاگ های من","pl" : "Moje blogi","pt" : "Meus Blogs","pa" : "ਮੇਰੇ ਬਲੈਗਸ","ro" : "Blogurile mele","ru" : "Мои блоги","sm" : "Laʻu Blog","gd" : "Mo bhlogaichean","sr" : "Моји блогови","st" : "Li-Blogs tsa ka","sn" : "My Blogs","sd" : "منهنجا بلاگ","si" : "මගේ බ්ලොග්","sk" : "Moje blogy","sl" : "Moji blogi","so" : "Baaladayda","es" : "Mis blogs","su" : "Blog abdi","sw" : "Blogi Zangu","sv" : "Mina bloggar","tg" : "Блогҳои ман","ta" : "என் வலைப்பதிவுகள்","tt" : "Минем блоглар","te" : "నా బ్లాగులు","th" : "บล็อกของฉัน","tr" : "Bloglarım","tk" : "Bloglarym","uk" : "Мої блоги","ur" : "میرے بلاگز","ug" : "بىلوگىم","uz" : "Mening bloglarim","vi" : "Blog của tôi","cy" : "Fy Blogiau","xh" : "Iibhloko zam","yi" : "מייַן בלאָגס","yo" : "Awọn bulọọgi mi","zu" : "Amabhulogi Wami"}[queryparams.hl] || 'My Blogs' : 'My Blogs'}
                        </Link>
                      </NavDropContent>
                    </NavDropCollapse>
                  </NavDrop>
                  <div>
                    <Link to={queryparams.hl ? `/notifications/?hl=${queryparams.hl}` : '/notifications/'} className="hoverstyle1">
                      <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 512c35.32 0 63.97-28.65 63.97-64H160.03c0 35.35 28.65 64 63.97 64zm215.39-149.71c-19.32-20.76-55.47-51.99-55.47-154.29 0-77.7-54.48-139.9-127.94-155.16V32c0-17.67-14.32-32-31.98-32s-31.98 14.33-31.98 32v20.84C118.56 68.1 64.08 130.3 64.08 208c0 102.3-36.15 133.53-55.47 154.29-6 6.45-8.66 14.16-8.61 21.71.11 16.4 12.98 32 32.1 32h383.8c19.12 0 32-15.6 32.1-32 .05-7.55-2.61-15.27-8.61-21.71z"/></NavIconSvg>
                      <NavName>{queryparams.hl ? {'af' : 'Kennisgewings','sq' : 'Njoftimet','am' : 'ማሳወቂያዎች','hy' : 'Անուցումներ','az' : 'Bildirişlər','eu' : 'Jakinarazpenak','be' : 'Апавяшчэнні','bn' : 'বিজ্ঞপ্তি','bs' : 'Obavještenja','bg' : 'Известия','ca' : 'Notificacions','ceb' : 'Mga Pahibalo','ny' : 'Zidziwitso','zh-CN' : '通知','zh-TW' : '通知','co' : 'Notificazioni','hr' : 'Obavijesti','cs' : 'Oznámení','da' : 'Meddelelser','nl' : 'Meldingen','eo' : 'Sciigoj','et' : 'Märguanded','tl' : 'Mga Abiso','fi' : 'Ilmoitukset','fr' : 'Notifications','gl' : 'Notificacións','ka' : 'შეტყობინებები','de' : 'Benachrichtigungen','el' : 'Ειδοποιήσεις','gu' : 'સૂચનાઓ','ht' : 'Notifikasyon','ha' : 'Fadakarwa','haw' : 'Hoolaha','iw' : 'התראות','hi' : 'सूचनाएं','hmn' : 'Kev ceeb toom','hu' : 'Értesítések','is' : 'Tilkynningar','ig' : 'Ịma Ọkwa','id' : 'Pemberitahuan','ga' : 'Fógraí','it' : 'Notifiche','ja' : '通知','jw' : 'Kabar','kn' : 'ಅಧಿಸೂಚನೆಗಳು','kk' : 'Хабарландырулар','km' : 'ការជូនដំណឹង','rw' : 'Kumenyesha','ko' : '알림','ku' : 'Notifications','ky' : 'Билдирмелер','lo' : 'ການແຈ້ງເຕືອນ','la' : 'Acta Vicimediorum','lv' : 'Paziņojumi','lt' : 'Pranešimai','lb' : 'Notifikatiounen','mk' : 'Известувања','mg' : 'fampahatsiahivana','ms' : 'Pemberitahuan','ml' : 'അറിയിപ്പുകൾ','mt' : 'Notifiki','mr' : 'अधिसूचना','mn' : 'Мэдэгдэл','my' : 'အသိပေးချက်များ','ne' : 'सूचनाहरु','no' : 'Varsler','or' : 'ବିଜ୍ଞପ୍ତିଗୁଡିକ','ps' : 'خبرتیاوې','fa' : 'اطلاعیه','pl' : 'Powiadomienia','pt' : 'Notificações','pa' : 'ਖਬਰਦਾਰੀ','ro' : 'Notificări','ru' : 'Уведомления','sm' : 'Faasilasilaga','gd' : 'Brathan','sr' : 'Обавештења','st' : 'Litsebiso','sn' : 'Notifications','sd' : 'نوٽيفڪيشن','si' : 'දැනුම්දීම්','sk' : 'Oznámenia','sl' : 'Obvestila','so' : 'Ogeysiisyada','es' : 'Notificaciones','su' : 'Bewara','sw' : 'Arifa','sv' : 'Meddelanden','tg' : 'Огоҳинома','ta' : 'அறிவிப்புகள்','tt' : 'Хәбәрләр','te' : 'నోటిఫికేషన్‌లు','th' : 'การแจ้งเตือน','tr' : 'Bildirimler','tk' : 'Duýduryşlar','uk' : 'Повідомлення','ur' : 'اطلاعات۔','ug' : 'ئۇقتۇرۇش','uz' : 'Bildirishnomalar','vi' : 'Thông báo','cy' : 'Hysbysiadau','xh' : 'Izaziso','yi' : 'נאָטיפיקאַטיאָנס','yo' : 'Awọn iwifunni','zu' : 'Izaziso'}[queryparams.hl] || 'Alerts' : 'Alerts'}</NavName>
                    </Link>
                  </div>
                  <Link to={queryparams.hl ? `/direct/inbox/?hl=${queryparams.hl}` : '/direct/inbox/'} className={`nav_link hoverstyle1`}>
                    <div>
                    <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z"/></NavIconSvg>
                    <NavName>{queryparams.hl ? {'af' : 'Boodskappe','sq' : 'Mesazhe','am' : 'መልእክቶች','hy' : 'Հաղորդագրություններ','az' : 'Mesajlar','eu' : 'Mezuak','be' : 'Паведамленні','bn' : 'বার্তা','bs' : 'Poruke','bg' : 'Съобщения','ca' : 'Missatges','ceb' : 'Mga mensahe','ny' : 'Mauthenga','zh-CN' : '留言','zh-TW' : '留言','co' : 'Missaghji','hr' : 'Poruke','cs' : 'Zprávy','da' : 'Beskeder','nl' : 'Berichten','eo' : 'Mesaĝoj','et' : 'Sõnumid','tl' : 'Mga mensahe','fi' : 'Viestit','fr' : 'messages','gl' : 'Mensaxes','ka' : 'შეტყობინებები','de' : 'Mitteilungen','el' : 'Μηνύματα','gu' : 'સંદેશાઓ','ht' : 'Mesaj','ha' : 'Saƙonni','haw' : 'Nā leka','iw' : 'הודעות','hi' : 'संदेशों','hmn' : 'Lus','hu' : 'üzenetek','is' : 'Skilaboð','ig' : 'Ozi','id' : 'Pesan','ga' : 'Teachtaireachtaí','it' : 'Messaggi','ja' : 'メッセージ','jw' : 'Pesen','kn' : 'ಸಂದೇಶಗಳು','kk' : 'Хабарламалар','km' : 'សារ','rw' : 'Ubutumwa','ko' : '메시지','ku' : 'Messages','ky' : 'Билдирүүлөр','lo' : 'ຂໍ້ຄວາມ','la' : 'Mandata','lv' : 'Ziņas','lt' : 'Pranešimai','lb' : 'Messagen','mk' : 'Пораки','mg' : 'Hafatra','ms' : 'Mesej','ml' : 'സന്ദേശങ്ങൾ','mt' : 'Messaġġi','mr' : 'संदेश','mn' : 'Мессежүүд','my' : 'စာများ','ne' : 'सन्देशहरु','no' : 'Meldinger','or' : 'ବାର୍ତ୍ତାଗୁଡିକ','ps' : 'پیغامونه','fa' : 'پیام ها','pl' : 'Wiadomości','pt' : 'Mensagens','pa' : 'ਸੁਨੇਹੇ','ro' : 'Mesaje','ru' : 'Сообщения','sm' : 'Savali','gd' : 'Brathan','sr' : 'Поруке','st' : 'Melaetsa','sn' : 'Messages','sd' : 'نياپا','si' : 'පණිවිඩ','sk' : 'Správy','sl' : 'Sporočila','so' : 'Farriimaha','es' : 'Mensajes','su' : 'Pesen','sw' : 'Ujumbe','sv' : 'Meddelanden','tg' : 'Паёмҳо','ta' : 'செய்திகள்','tt' : 'Хәбәрләр','te' : 'సందేశాలు','th' : 'ข้อความ','tr' : 'Mesajlar','tk' : 'Habarlar','uk' : 'Повідомлення','ur' : 'پیغامات','ug' : 'ئۇچۇرلار','uz' : 'Xabarlar','vi' : 'Tin nhắn','cy' : 'Negeseuon','xh' : 'Imiyalezo','yi' : 'אַרטיקלען','yo' : 'Awọn ifiranṣẹ','zu' : 'Imilayezo'}[queryparams.hl] || 'Messages' : 'Messages'}</NavName>
                    </div>
                  </Link>
                </NavItems>
                <NavItems>
                  <NavSubTitle>{queryparams.hl ? {'af': 'Galerye','sq': 'Galeritë','am': 'ጋለሪዎች','hy': 'Պատկերասրահներ','az': 'Qalereyalar','eu': 'Galeriak','be': 'Галерэі','bn': 'গ্যালারী','bs': 'Galerije','bg': 'Галерии','ca': 'Galeries','ceb': 'Mga galeriya','ny': 'Galleries','zh-CN': '画廊','zh-TW': '畫廊','co': 'Gallerie','hr': 'Galerije','cs': 'Galerie','da': 'Gallerier','nl': 'Galerijen','eo': 'Galerioj','et': 'Galeriid','tl': 'Mga gallery','fi': 'Galleriat','fr': 'Galeries','gl': 'Galerías','ka': 'გალერეები','de': 'Galerien','el': 'Γκαλερί','gu': 'ગેલેરીઓ','ht': 'Galeri','ha': 'Galleries','haw': "Nā hale hōʻikeʻike",'iw': 'גלריות','hi': 'दीर्घाओं','hmn': 'Cov duab','hu': 'Galériák','is': 'Gallerí','ig': 'Osisi','id': 'galeri','ga': 'Dánlanna','it': 'Gallerie','ja': 'ギャラリー','jw': 'Galeri','kn': 'ಗ್ಯಾಲರಿಗಳು','kk': 'Галереялар','km': 'វិចិត្រសាល','rw': 'Ububiko','ko': '갤러리','ku': 'Galleries','ky': 'Галереялар','lo': 'ແກເລີຣີ','la': 'Porticibus','lv': 'Galerijas','lt': 'Galerijos','lb': 'Galerien','mk': 'Галерии','mg': 'lalan-','ms': 'Galeri','ml': 'ഗാലറികൾ','mt': 'Galleriji','mr': 'गॅलरी','mn': 'Галерей','my': 'ပြခန်းများ','ne': 'ग्यालरीहरु','no': 'Gallerier','or': 'ଗ୍ୟାଲେରୀ','ps': 'ګالري','fa': 'گالری ها','pl': 'Galerie','pt': 'Galerias','pa': 'ਗਾਲਰੀ','ro': 'Galerii','ru': 'Галереи','sm': 'Faletusi','gd': 'Gailearaidhean','sr': 'Галерије','st': 'Mehala','sn': 'Galleries','sd': 'گيلريون','si': 'ගැලරි','sk': 'Galérie','sl': 'Galerije','so': 'Galleries','es': 'Galerias','su': 'Galéri','sw': 'Nyumba za sanaa','sv': 'Gallerier','tg': 'Галереяҳо','ta': 'காட்சியகங்கள்','tt': 'Галереялар','te': 'గ్యాలరీలు','th': 'แกลเลอรี่','tr': 'Galeriler','tk': 'Galereýa','uk': 'Галереї','ur': 'گیلریاں۔','ug': 'Galleries','uz': 'Galereyalar','vi': 'Phòng trưng bày','cy': 'Orielau','xh': 'Iigalari','yi': 'גאַלעריז','yo': 'Awọn àwòrán ti','zu': 'Amagalari'}[queryparams.hl] || 'Galleries' : 'Galleries'}</NavSubTitle>
                  <Link to={queryparams.hl ? `/snaps/?hl=${queryparams.hl}` : '/snaps/'} className={`nav_link hoverstyle1`}>
                    <div>
                      <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M336 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM192 128c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H102.4C90 384 80 375.4 80 364.8v-19.2c0-31.8 30.1-57.6 67.2-57.6h5c12.3 5.1 25.7 8 39.8 8s27.6-2.9 39.8-8h5c37.1 0 67.2 25.8 67.2 57.6v19.2z"/></NavIconSvg>
                      <NavName>{queryparams.hl ? {'af' : 'Snaps','sq' : 'Snaps','am' : 'Snaps','hy' : 'Snaps','az' : 'Snaps','eu' : 'Snaps','be' : 'Snaps','bn' : 'Snaps','bs' : 'Snaps','bg' : 'Snaps','ca' : 'Snaps','ceb' : 'Snaps','ny' : 'Snaps','zh-CN' : '按扣','zh-TW' : '按扣','co' : 'Snaps','hr' : 'Snaps','cs' : 'Snaps','da' : 'Snaps','nl' : 'Snaps','eo' : 'Snaps','et' : 'Snaps','tl' : 'Snaps','fi' : 'Snaps','fr' : 'Snaps','gl' : 'Instantáneas','ka' : 'Snaps','de' : 'Schnappschüsse','el' : 'Snaps','gu' : 'Snaps','ht' : 'Snaps','ha' : 'Snaps','haw' : 'Snaps','iw' : 'Snaps','hi' : 'स्नैपशॉट्स','hmn' : 'Snaps','hu' : 'Snaps','is' : 'Snaps','ig' : 'Snaps','id' : 'Snapshot','ga' : 'Snaps','it' : 'Snapshots','ja' : 'スナップショット','jw' : 'Snaps','kn' : 'ಸ್ನ್ಯಾಪ್ಸ್','kk' : 'Snaps','km' : 'ខ្ទាស់','rw' : 'Ifoto','ko' : '스냅','ku' : 'Snaps','ky' : 'Snaps','lo' : 'Snaps','la' : 'Chiffl','lv' : 'Snaps','lt' : 'Snaps','lb' : 'Schnappschëss','mk' : 'Snaps','mg' : 'Snaps','ms' : 'Bentak','ml' : 'സ്നാപ്പുകൾ','mt' : 'Snaps','mr' : 'स्नॅप्स','mn' : 'Snaps','my' : 'ဓာတ်ပုံများ','ne' : 'स्न्यापशट','no' : 'Snaps','or' : 'ସ୍ନାପ୍ସ |','ps' : 'سنیپونه','fa' : 'عکس های فوری','pl' : 'Snaps','pt' : 'Snaps','pa' : 'سنیپونه','ro' : 'Snaps','ru' : 'Snaps','sm' : 'Snaps','gd' : 'Snaps','sr' : 'Снапс','st' : 'Snaps','sn' : 'Snapshots','sd' : 'Snapshots','si' : 'Snaps','sk' : 'Snapshots','sl' : 'Snapshots','so' : 'Snapshots','es' : 'Snapshots','su' : 'Snapshots','sw' : 'Snapshots','sv' : 'Snapshots','tg' : 'Snapshots','ta' : 'Snapshots','tt' : 'Snapshots','te' : 'Snapshots','th' : 'Snapshots','tr' : 'Snapshots','tk' : 'Snapshots','uk' : 'Snapshots','ur' : 'Snapshots','ug' : 'Snapshots','uz' : 'Snapshots','vi' : 'Snapshots','cy' : 'Snapshots','xh' : 'Snapshots','yi' : 'Snapshots','yo' : 'Snapshots','zu' : 'Snapshots'}[queryparams.hl] || 'Snaps' : 'Snaps'}</NavName>
                    </div>
                  </Link>
                  <Link to={queryparams.hl ? `/collections/?hl=${queryparams.hl}` : '/collections/'} className={`nav_link hoverstyle1`}>
                    <div>
                      <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M384 121.941V128H256V0h6.059a24 24 0 0 1 16.97 7.029l97.941 97.941a24.002 24.002 0 0 1 7.03 16.971zM248 160c-13.2 0-24-10.8-24-24V0H24C10.745 0 0 10.745 0 24v464c0 13.255 10.745 24 24 24h336c13.255 0 24-10.745 24-24V160H248zm-135.455 16c26.51 0 48 21.49 48 48s-21.49 48-48 48-48-21.49-48-48 21.491-48 48-48zm208 240h-256l.485-48.485L104.545 328c4.686-4.686 11.799-4.201 16.485.485L160.545 368 264.06 264.485c4.686-4.686 12.284-4.686 16.971 0L320.545 304v112z"/></NavIconSvg>
                      <NavName>{queryparams.hl ? {'af' : 'Versamelings','sq' : 'Koleksione','am' : 'ስብስቦች','hy' : 'Հավաքածուներ','az' : 'Kolleksiyalar','eu' : 'Bildumak','be' : 'Калекцыі','bn' : 'সংগ্রহ','bs' : 'Zbirke','bg' : 'Колекции','ca' : 'Col·leccions','ceb' : 'Mga koleksyon','ny' : 'Zosonkhanitsa','zh-CN' : '收藏','zh-TW' : '收藏','co' : 'Cullizzioni','hr' : 'Zbirke','cs' : 'Sbírky','da' : 'Samlinger','nl' : 'Collecties','eo' : 'Kolektoj','et' : 'Kollektsioonid','tl' : 'Mga Koleksyon','fi' : 'Kokoelmat','fr' : 'Collections','gl' : 'Coleccións','ka' : 'კოლექციები','de' : 'Kollektionen','el' : 'Συλλογές','gu' : 'સંગ્રહો','ht' : 'Koleksyon','ha' : 'Tarin','haw' : 'Nā hōʻiliʻili','iw' : 'אוספים','hi' : 'संग्रह','hmn' : 'Sau','hu' : 'Gyűjtemények','is' : 'Söfn','ig' : 'Nchịkọta','id' : 'Koleksi','ga' : 'Bailiúcháin','it' : 'Collezioni','ja' : 'コレクション','jw' : 'Koleksi','kn' : 'ಸಂಗ್ರಹಗಳು','kk' : 'Жинақтар','km' : 'ការប្រមូល','rw' : 'Ibyegeranyo','ko' : '컬렉션','ku' : 'Koleksiyon','ky' : 'Коллекциялар','lo' : 'ຄໍເລັກຊັນ','la' : 'Collectiones','lv' : 'Kolekcijas','lt' : 'Kolekcijos','lb' : 'Kollektiounen','mk' : 'Колекции','mg' : 'Fanangonana','ms' : 'Koleksi','ml' : 'ശേഖരങ്ങൾ','mt' : 'Kollezzjonijiet','mr' : 'संग्रह','mn' : 'Цуглуулгууд','my' : 'စုဆောင်းမှုများ','ne' : 'स्ग्रहहरु','no' : 'Samlinger','or' : 'ସଂଗ୍ରହ','ps' : 'ټولګه','fa' : 'مجموعه ها','pl' : 'Kolekcje','pt' : 'Coleções','pa' : 'ਸਾਰੀ ਸਭਾ','ro' : 'Colecții','ru' : 'Коллекции','sm' : 'Aoina','gd' : 'Cruinneachaidhean','sr' : 'Збирке','st' : 'Likoleke','sn' : 'Collections','sd' : 'جمعُ','si' : 'එකතු කිරීම්','sk' : 'Zbierky','sl' : 'Zbirke','so' : 'Uruurinta','es' : 'Colecciones','su' : 'Kumpulan','sw' : 'Makusanyo','sv' : 'Samlingar','tg' : 'Коллексияҳо','ta' : 'தொகுப்புகள்','tt' : 'Коллекцияләр','te' : 'సేకరణలు','th' : 'ของสะสม','tr' : 'Koleksiyonlar','tk' : 'Kolleksiýalar','uk' : 'Колекції','ur' : 'مجموعے','ug' : 'توپلام','uz' : "To'plamlar",'vi' : 'Bộ sưu tập','cy' : 'Casgliadau','xh' : 'Ukuqokelelwa','yi' : 'זאמלונגען','yo' : 'Awọn ikojọpọ','zu' : 'Amaqoqo'}[queryparams.hl] || 'Collections' : 'Collections'}</NavName>
                    </div>
                  </Link>
                  <Link to={queryparams.hl ? `/saved/?type=galleries&hl=${queryparams.hl}` : '/saved/?type=galleries'} className={`nav_link hoverstyle1`}>
                    <div>
                      <NavIconSvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M0 512V48C0 21.49 21.49 0 48 0h288c26.51 0 48 21.49 48 48v464L192 400 0 512z"/></NavIconSvg>
                      <NavName>
                        {queryparams.hl ? {'af' : 'Gestoorde galerye','sq' : 'Galeritë e ruajtura','am' : 'የተቀመጡ ማዕከለ -ስዕላት','hy' : 'Պահված պատկերասրահներ','az' : 'Saxlanılan qalereyalar','eu' : 'Gordetako galeriak','be' : 'Захаваныя галерэі','bn' : 'সংরক্ষিত গ্যালারী','bs' : 'Sačuvane galerije','bg' : 'Запазени галерии','ca' : 'Galeries desades','ceb' : 'Naka-save nga mga gallery','ny' : 'Galleries zosungidwa','zh-CN' : '保存的画廊','zh-TW' : '保存的畫廊','co' : 'Gallerie salvate','hr' : 'Spremljene galerije','cs' : 'Uložené galerie','da' : 'Gemte gallerier','nl' : 'Opgeslagen galerijen','eo' : 'Konservitaj galerioj','et' : 'Salvestatud galeriid','tl' : 'Nai-save na mga gallery','fi' : 'Tallennetut galleriat','fr' : 'Galeries enregistrées','gl' : 'Galerías gardadas','ka' : 'შენახული გალერეები','de' : 'Gespeicherte Galerien','el' : 'Αποθηκευμένες γκαλερί','gu' : 'સાચવેલી ગેલેરીઓ','ht' : 'Sove Galeri','ha' : 'An adana Galleries','haw' : 'Nā keʻena i mālama ʻia','iw' : 'גלריות שמורות','hi' : 'सहेजी गई गैलरी','hmn' : 'Txuag Galleries','hu' : 'Mentett galériák','is' : 'Vistuð gallerí','ig' : 'Osisi echekwara','id' : 'Galeri Tersimpan','ga' : 'Dánlanna Sábháilte','it' : 'Gallerie salvate','ja' : '保存されたギャラリー','jw' : 'Galeri sing Disimpen','kn' : 'ಉಳಿಸಿದ ಗ್ಯಾಲರಿಗಳು','kk' : 'Сақталған галереялар','km' : 'វិចិត្រសាលដែលបានរក្សាទុក','rw' : 'Ububiko Bwakijijwe','ko' : '저장된 갤러리','ku' : 'Galeriyên Tomarkirî','ky' : 'Сакталган галереялар','lo' : 'ແກເລີຣີທີ່ບັນທຶກໄວ້','la' : 'Salvus Galleries','lv' : 'Saglabātās galerijas','lt' : 'Išsaugotos galerijos','lb' : 'Gespäichert Galerien','mk' : 'Зачувани галерии','mg' : 'Galeria voatahiry','ms' : 'Galeri yang Disimpan','ml' : 'സംരക്ഷിച്ച ഗാലറികൾ','mt' : 'Galleriji Ssejvjati','mr' : 'जतन केलेली गॅलरी','mn' : 'Хадгалсан галерей','my' : 'သိမ်းထားသောပြခန်းများ','ne' : 'सुरक्षित ग्यालरीहरु','no' : 'Lagrede gallerier','or' : 'ସଞ୍ଚିତ ଗ୍ୟାଲେରୀଗୁଡିକ |','ps' : 'خوندي شوي ګالري','fa' : 'گالری های ذخیره شده','pl' : 'Zapisane galerie','pt' : 'Galerias salvas','pa' : 'ਖੁਸ਼ੀ ਹੋਈ ਗਾਲਰੀ','ro' : 'Galeriile salvate','ru' : 'Сохраненные галереи','sm' : 'Faletusi ua sefe','gd' : 'Gailearaidhean glèidhte','sr' : 'Сачуване галерије','st' : 'Li-Galleries tse bolokiloeng','sn' : 'Kuponeswa Galleries','sd' : 'محفوظ ڪيل گيلريون','si' : 'සුරකින ලද ගැලරි','sk' : 'Uložené galérie','sl' : 'Shranjene galerije','so' : 'Galleries Badbaadiyey','es' : 'Galerías guardadas','su' : 'Galeri disimpen','sw' : 'Picha zilizohifadhiwa','sv' : 'Sparade gallerier','tg' : 'Галереяҳои захирашуда','ta' : 'சேமிக்கப்பட்ட கேலரிகள்','tt' : 'Сакланган галереялар','te' : 'సేవ్ చేయబడిన గ్యాలరీలు','th' : 'แกลเลอรี่ที่บันทึกไว้','tr' : 'Kayıtlı Galeriler','tk' : 'Saklanan galereýalar','uk' : 'Збережені галереї','ur' : 'محفوظ کردہ گیلریاں۔','ug' : 'ساقلانغان رەسىملەر','uz' : 'Saqlangan galereyalar','vi' : 'Thư viện đã lưu','cy' : "Orielau wedi'u Cadw",'xh' : 'Iigalari ezigciniweyo','yi' : 'סאַוועד גאַלעריז','yo' : 'Ti o ti fipamọ Galleries','zu' : 'Ama-Galleries Alondoloziwe'}[queryparams.hl] || 'Saved galleries' : 'Saved galleries'}
                      </NavName>
                    </div>
                  </Link>
                </NavItems>
            </NavList>
          </div>
        </NavContainer>
      </Nav>
      <div id="show-list"></div>
    </>
  )
}

export default HomeNav;
