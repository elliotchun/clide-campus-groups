import './ClubThumbnail.css';
import { Club } from '../services/ClubService';
import { useState } from 'react';

const ClubThumbnail: React.FC<{ club: Club }> = ({ club }) => {
    const [selectedClub, setSelectedClub] = useState<Club | null>(null);

    const openClub = () => {
        setSelectedClub(club);
    };

    const closeClub = () => {
        setSelectedClub(null);
    };

    return (
        <div className="snap-start flex flex-col items-center w-36">
            <div className="" onClick={openClub}>
                <img className="rounded-xl size-36 shadow-md" src="Drippy.png" alt={club.name} />
                <p className="text-black text-wrap text-center mt-2 text-sm font-semibold">{club.name}</p>
            </div>
                {selectedClub && (
                <div className="text-black">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1>Club Details</h1>
                            <button className="close-button" onClick={closeClub}>×</button>
                        </div>
                        <div className="modal-body">
                            <h2>{selectedClub.name}</h2>
                            <p>{selectedClub.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ClubThumbnail;

