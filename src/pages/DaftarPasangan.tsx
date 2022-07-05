import { IonButton, IonButtons, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLoading, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { femaleOutline, heart, maleOutline, personCircleOutline } from 'ionicons/icons';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useContext, useState, useRef } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import './DaftarPasangan.css';

import FriendsContext from './FriendsContext';

const shuffle = (DATA: { id: string; name: string; desc: string; gender: string; photo: string; }[]) => [...DATA].sort(() => Math.random() - 0.5);

export const PERSON_DATA = [
  { id: '1', name: "Willie", gender: "Female", desc: "Good girl", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairCurvy&accessoriesType=Sunglasses&hatColor=PastelBlue&hairColor=PastelPink&facialHairType=Blank&facialHairColor=Auburn&clotheType=ShirtCrewNeck&clotheColor=PastelBlue&eyeType=Side&eyebrowType=RaisedExcited&mouthType=Eating&skinColor=Tanned" },
  { id: '2', name: "Nettie", gender: "Female", desc: "Yeah", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairShavedSides&accessoriesType=Wayfarers&hairColor=PastelPink&facialHairType=Blank&clotheType=ShirtScoopNeck&clotheColor=Red&eyeType=Hearts&eyebrowType=RaisedExcitedNatural&mouthType=Eating&skinColor=DarkBrown" },
  { id: '3', name: "Kara", gender: "Female", desc: "Happy person", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Kurt&hairColor=Black&facialHairType=Blank&clotheType=BlazerSweater&eyeType=Default&eyebrowType=Default&mouthType=Smile&skinColor=Light" },
  { id: '4', name: "Lara", gender: "Female", desc: "Brave", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight2&accessoriesType=Blank&hairColor=PastelPink&facialHairType=Blank&facialHairColor=Brown&clotheType=BlazerSweater&eyeType=Happy&eyebrowType=FlatNatural&mouthType=Twinkle&skinColor=Tanned" },
  { id: '5', name: "Marcella", gender: "Female", desc: "Intellect", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Black&facialHairType=Blank&clotheType=Hoodie&clotheColor=PastelRed&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" },
  { id: '6', name: "Halima", gender: "Female", desc: "Overactive", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairNotTooLong&accessoriesType=Sunglasses&hatColor=Pink&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerSweater&clotheColor=PastelGreen&eyeType=EyeRoll&eyebrowType=UpDownNatural&mouthType=Tongue&skinColor=Light" },
  { id: '7', name: "Laila", gender: "Female", desc: "Shy", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairBigHair&accessoriesType=Kurt&hatColor=PastelYellow&hairColor=Brown&facialHairType=Blank&facialHairColor=Brown&clotheType=ShirtScoopNeck&clotheColor=Blue02&eyeType=Squint&eyebrowType=SadConcerned&mouthType=Grimace&skinColor=Yellow" },
  { id: '8', name: "Alicia", gender: "Female", desc: "Timid", photo: "https://avataaars.io/?avatarStyle=Circle&topType=Hijab&accessoriesType=Round&hatColor=PastelYellow&hairColor=Platinum&facialHairType=MoustacheMagnum&facialHairColor=BlondeGolden&clotheType=Hoodie&clotheColor=Red&eyeType=Close&eyebrowType=RaisedExcited&mouthType=Sad&skinColor=DarkBrown" },
  { id: '9', name: "Lucia", gender: "Female", desc: "Modest", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light" },
  { id: '10', name: "Niki", gender: "Female", desc: "Adamant", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraightStrand&accessoriesType=Round&hairColor=Blonde&facialHairType=Blank&facialHairColor=Platinum&clotheType=ShirtVNeck&clotheColor=Blue03&eyeType=Side&eyebrowType=DefaultNatural&mouthType=Sad&skinColor=Light" },
  { id: '11', name: "Tina", gender: "Female", desc: "Lazy", photo: "https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=Red&facialHairType=Blank&clotheType=CollarSweater&clotheColor=PastelRed&eyeType=Wink&eyebrowType=Default&mouthType=Default&skinColor=Light" },
];

const randomPerson = shuffle(PERSON_DATA);

const DaftarPasangan: React.FC = () => {
  let exist: any[] = [];
  const friendCtx = useContext(FriendsContext);
  const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null);
  const [showLoading, setShowLoading] = useState(false)
  friendCtx.friends.map(target => exist.push(target.id))
  
  const addFriend = (id: string, name: string, desc: string, gender: string, photo: string) => {
    slidingOptionsRef.current?.closeOpened();
    friendCtx.addFriend(id, name, desc, gender, photo)
    PERSON_DATA.forEach((data, index) => {
      if(data.id === id) {
        PERSON_DATA.splice(index, 1);
      }
    });
    console.log(friendCtx.friends)
    setShowLoading(true)
  }

  setTimeout(() => {
    setShowLoading(false);
  }, 1500)

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton />
          </IonButtons>
          <IonTitle>Bosen Jomblo</IonTitle>
          <IonButton color="dark" slot="end" fill="clear" routerLink="/profile">
            <IonIcon size='large' icon={personCircleOutline}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent className="background">
        <IonGrid class="grid">
          <IonRow>
            <IonCol class="sCol">
              <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={15}
                slidesPerView={3}
                pagination={{ clickable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
              >
                {randomPerson.slice(0,10).map((rand) => (
                  <SwiperSlide key={rand.id}>
                    <IonCard className='cardSize'>
                      <IonImg src={rand.photo} className='avatarBan'></IonImg>
                      <p className='line'></p>
                      <IonCardContent className='ion-text-center'>
                        {rand.name}
                      </IonCardContent>
                    </IonCard>
                  </SwiperSlide>
                ))}
              </Swiper>
            </IonCol>
          </IonRow>
        </IonGrid>

        <IonGrid>
          {PERSON_DATA.map(target => (
            <IonCard className="card">
              <IonItemSliding key={target.id} ref={slidingOptionsRef}>
                <IonItemOptions side="end">
                  <IonItemOption color="secondary" disabled={exist.indexOf(target.id) > -1} routerLink="/targetgebet" onClick={() => addFriend(target.id, target.name, target.desc, target.gender, target.photo)}>
                    <IonIcon className="heartIcon" color="dark" icon={heart} slot="icon-only" />
                  </IonItemOption>
                  <IonLoading
                    cssClass='my-custom-class'
                    isOpen={showLoading}
                    onDidDismiss={() => setShowLoading(false)}
                    message={'Loading'}
                    duration={1500}
                  />
                </IonItemOptions>

                <IonItem className="itemlist">
                  <IonCol size="4">
                    <IonImg className="photo" src={target.photo}></IonImg>
                  </IonCol>

                  <IonCol size="8">
                    <IonRow className="name">
                      {target.name}
                    </IonRow>
                    <IonRow className="desc">
                      {target.desc}
                    </IonRow>
                    <IonRow className="gender">
                      {target.gender === 'Female' ? <IonIcon icon={femaleOutline} /> : <IonIcon icon={maleOutline} />}
                      {target.gender}
                    </IonRow>
                  </IonCol>
                </IonItem>
              </IonItemSliding>
            </IonCard>
          ))}
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default DaftarPasangan;
