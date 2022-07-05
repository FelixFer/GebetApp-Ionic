import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonMenuButton, IonPage, IonRow, IonText, IonTitle, IonToolbar } from '@ionic/react';
import './Profile.css';

import { logoGithub, logoInstagram, logoLinkedin, personCircleOutline } from 'ionicons/icons';

const Profile: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonMenuButton/>
          </IonButtons>
          <IonTitle>Profile</IonTitle>
          <IonButton color="dark" slot="end" fill="clear" routerLink="/profile">
            <IonIcon size='large' icon={personCircleOutline}></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent class="backG">
        <IonCard className="card-container">
          <IonCardHeader>
            <img className="round" src="./assets/images/pp.jpg" alt="user" />
            <h3 className="name3">Felix Ferdinand</h3>
            <h5 color="medium">00000035927</h5>
          </IonCardHeader>
          <IonCardContent class="content ion-justify-content-center ion-margin">
            <IonGrid className="btns">
              <IonRow>
                <IonCol size="4">
                  <IonButton fill="clear" className="btn1">
                    <IonIcon icon={logoGithub}></IonIcon>
                  </IonButton>
                </IonCol>
                <IonCol size="4">
                  <IonButton fill="clear" className="btn2">
                    <IonIcon icon={logoInstagram}></IonIcon>
                  </IonButton>
                </IonCol>
                <IonCol size="4">
                  <IonButton fill="clear" className="btn3">
                    <IonIcon icon={logoLinkedin}></IonIcon>
                  </IonButton>
                </IonCol>
              </IonRow>
            </IonGrid>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default Profile;
