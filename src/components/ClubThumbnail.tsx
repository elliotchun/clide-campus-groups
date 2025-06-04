import { IonCard, IonImg } from '@ionic/react';
import './ClubThumbnail.css';

interface ClubThumbnailProps {
    name: string
}

const ClubThumbnail: React.FC<ClubThumbnailProps> = ({ name }) => (
    <IonCard className="club-thumbnail">
        <IonImg className="club-thumbnail-img" src="Drippy.png" alt={name} />
        <p className="club-thumbnail-name">{name}</p>
    </IonCard>
);

export default ClubThumbnail;
