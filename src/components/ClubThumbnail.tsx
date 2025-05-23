import './ClubThumbnail.css';

interface ClubThumbnailProps {
    name: string
}

const ClubThumbnail: React.FC<ClubThumbnailProps> = ({ name }) => {
    return (
        <div className="club-thumbnail">
            <img src="Drippy.png" />
            <p>{name}</p>
        </div>
    );
};

export default ClubThumbnail;
