import { IonActionSheet, IonButton, IonButtons, IonCard, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import { closeOutline, femaleOutline, maleOutline, personCircleOutline, trashSharp, caretUpCircleSharp } from 'ionicons/icons';
import { useContext, useState, useRef } from 'react';
import FriendsContext from './FriendsContext';
import { PERSON_DATA } from './DaftarPasangan';
import './TargetPasangan.css';

const TargetPasangan: React.FC = () => {
  const friendCtx = useContext(FriendsContext);
    const [actionSheet, setShowActionSheet] = useState(false);
    const [ids, setId] = useState<string>();

    const slidingOptionsRef = useRef<HTMLIonItemSlidingElement>(null)
    console.log(friendCtx.friends)

    const deleteFriend = (id: string) => {
        slidingOptionsRef.current?.closeOpened();
        friendCtx.friends.forEach(element => {
          if(element.id === id) {
            PERSON_DATA.push({
              id: element.id,
              name: element.name,
              desc: element.desc,
              gender: element.gender,
              photo: element.photo,
            });
          }
        });
        friendCtx.deleteFriend(id);
    }
    
    const actionSheetHandler = (id: string) => {
        setShowActionSheet(true);
        setId(id)
    }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Target Gebetan</IonTitle>
          <IonButton color="dark" slot="end" fill="clear" routerLink="/profile">
            <IonIcon size='large' icon={personCircleOutline}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent class='background'>
        {ids && <IonActionSheet isOpen={actionSheet} onDidDismiss={() => setShowActionSheet(false)}
          header="Yakin gak gebet dia lagi ?"
          buttons={[{
            icon: trashSharp,
            text: "Yakin, hapus dari daftar",
            handler: () => deleteFriend(ids)
          }, 
          {
            icon: caretUpCircleSharp, 
            text: "Gak yakin, kembali" 
          }]}/>
        }
        {friendCtx.friends.length !== 0 ? friendCtx.friends.map(target => (
          <IonCard className="card">
            <IonItemSliding key={target.id} ref={slidingOptionsRef}>
              <IonItemOptions side="end">
                <IonItemOption onClick={() => actionSheetHandler(target.id)} color="danger">
                  <IonIcon className="heartIcon" icon={closeOutline} slot="icon-only" />
                </IonItemOption>
              </IonItemOptions>
              <IonItem class="itemlist2">
                <IonCol size="4">
                  <IonImg className="photo2" src={target.photo}></IonImg>
                </IonCol>
                <IonCol size="8">
                  <IonRow className="name2">
                    {target.name}
                  </IonRow>
                  <IonRow className="desc2">
                    {target.desc}
                  </IonRow>
                  <IonRow className="gender2">
                      {target.gender === 'Female' ? <IonIcon icon={femaleOutline} /> : <IonIcon icon={maleOutline} />}
                      {target.gender}
                  </IonRow>
                </IonCol>
              </IonItem>
            </IonItemSliding>
          </IonCard>
        )):
          <IonGrid>
            <IonRow>
              <IonCol size-sm="8" offset-sm="2" size-md="6" offset-md="3">
                <IonGrid>
                  <h2 className='title ion-text-center ion-margin'>Anda masih jones ??</h2>
                  <IonButton color="danger" class='btnCari' expand="block" routerLink="/daftarpasangan">
                    <i className='btnText'>Cari Gebetan</i>
                  </IonButton>
                </IonGrid>
              </IonCol>
            </IonRow>
          </IonGrid>
        }
      </IonContent>
    </IonPage>
  );
};

export default TargetPasangan;
